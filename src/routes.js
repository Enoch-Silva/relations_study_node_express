const express = require("express");
const { Pai, Filho } = require("./models/associations");
const apiKeyMiddleware = require("./middleware/apiKeyMiddleware");
const router = express.Router();

// Criar um novo pai e seus filhos
router.post("/pais", async (req, res) => {
  const { nomePai, filhos } = req.body;
  if (!nomePai) {
    res.status(400).json({ message: "O Nome do pai é obrigatorio" });
    return;
  }
  const novoPai = await Pai.create(
    {
      nome: nomePai,
      filhos: filhos.map((filho) => ({ nome: filho.nome })),
    },
    {
      include: [Filho],
    }
  );
  res.status(201).json(novoPai);
});

// Criar um novo pai sem filhos
router.post("/pais/novo", async (req, res) => {
  const { nomePai } = req.body;
  if (!nomePai) {
    res.status(400).json({ message: "O Nome é obrigatorio" });
    return;
  }
  const novoPai = await Pai.create({
    nome: nomePai,
  });
  res.status(201).json(novoPai);
});

// Adicionar vários filhos a um pai
router.post("/pais/:id/filhos", async (req, res) => {
  const { id } = req.params;
  const { filhos } = req.body;

  // Encontre o pai pelo ID
  const pai = await Pai.findByPk(id);

  if (!pai) {
    return res.status(404).json({ error: "Pai não encontrado" });
  }

  // Crie novos filhos e associe-os ao pai
  const novosFilhos = await Promise.all(
    filhos.map(async (filho) => {
      const novoFilho = await Filho.create({ nome: filho.nome });
      if (!novoFilho.nome) {
        res.status(400).json({ message: "O Nome dos filhos é obrigatorio" });
        return;
      }
      await pai.addFilho(novoFilho);
      return novoFilho;
    })
  );

  res.status(201).json(novosFilhos);
});

// Criar um novo filho
router.post("/filhos", async (req, res) => {
  const { nome, pais } = req.body;
  const novoFilho = await Filho.create({ nome });

  if (!nome) {
    res.json({ message: "O Nome do filho é obrigatorio" });
    return;
  }
  // Adicionar associações com os pais
  if (pais && pais.length > 0) {
    const paiInstances = await Pai.findAll({
      where: {
        id: pais,
      },
    });
    await novoFilho.addPais(paiInstances);
  }
  res.status(201).json(novoFilho);
});

// Associar um filho existente a um pai
router.post("/pais/:paiId/filhos/:filhoId", async (req, res) => {
  const { paiId, filhoId } = req.params;

  // Encontre o pai e o filho pelos IDs
  const pai = await Pai.findByPk(paiId);
  const filho = await Filho.findByPk(filhoId);

  if (!pai || !filho) {
    return res.status(404).json({ error: "Pai ou filho não encontrado" });
  }

  // Adicionar o filho ao pai
  await pai.addFilho(filho);
  res.status(201).json({ message: "Filho associado ao pai com sucesso" });
});

// Pegar um pai e seus filhos
router.get("/pais/:id", apiKeyMiddleware, async (req, res) => {
  const { id } = req.params;
  const pai = await Pai.findByPk(id, { include: [Filho] });

  const HATEOAS = [
    {
      href: `http://localhost:3000/api/pais/${id}/filhos/0000`,
      method: "POST",
      desc: "Associar um filho a este pai",
    },
  ];

  res.status(200).json({ pai, _links: HATEOAS });
});

// Pegar um filho e seus pais
router.get("/filhos/:id", apiKeyMiddleware, async (req, res) => {
  const { id } = req.params;
  const filho = await Filho.findByPk(id, { include: [Pai] });
  res.status(200).json(filho);
});

// Pegar todos os filhos e seus pais
router.get("/filhos", apiKeyMiddleware, async (req, res) => {
  const filhos = await Filho.findAll({ include: [Pai] });
  res.status(200).json(filhos);
});

// Pegar todos os pais e seus filhos
router.get("/pais", apiKeyMiddleware, async (req, res) => {
  const pais = await Pai.findAll({ include: [Filho] });
  res.status(200).json(pais);
});

module.exports = router;
