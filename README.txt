API de pais e filhos com relacionamento de muitos-para-muitos

NOTAS: (Rotas)

1 - http://localhost:3000/api/filhos - POST

- rota para criar um filho e associa-lo aos pais já existentes na base de dados, com uma verificação simples em que o nome do filho não pode ser nulo, OBS: caso os ids dos pais fornecidos não constem na base de dados ele cria o filho sem pais - pode se associar aos pais futuramente

EX: corpo da Req. (em Json)
{
  "nome": "Roberta",
  "pais": [27, 30]
}

2 - http://localhost:3000/api/pais/1/filhos - POST

- rota para adicionar vários filhos á um pai já existente na DB, com uma verificação simples em que o nome dos filhos não pode ser nulo

EX: corpo da Req. (em Json)
{
  "filhos": [
    { "nome": "Salvador" },
    { "nome": "Elsa" }
  ]
}

3 - http://localhost:3000/api/pais - POST

- rota para criar um pai já com os dados dos seus filhos, neste caso o nome do pai é obrigatório

EX: corpo da Req. (em Json)
{
  "nomePai": "Suares",
  "filhos": [
    { "nome": "Lia" },
    { "nome": "Jota" }
  ]
}

4 - http://localhost:3000/api/pais/novo - POST

- rota para criar um novo pai sem filhos, que poderão ser associados futuramente, nesta rota o nome do pai não pode ser nulo

EX: corpo da Req. (em Json)
 { "nomePai": "Ludivino" }

5 - http://localhost:3000/api/pais/2/filhos/12 - POST 

- rota para associar um filho já existente na DB a também um pai já existente

EX: corpo da Req. (esta rota não recebe nada no corpo da Req. apenas utiliza os parâmetros indicados na url)

6 -  http://localhost:3000/api/pais/4?api_key=enoquedacruzsilva - GET

- rota para visualizar um pai especifico e os seus respectivos filhos
- rota protegida por chave de api

7 - http://localhost:3000/api/filhos/12?api_key=enoquedacruzsilva - GET

- rota para visualizar um filho especifico e seus pais
- rota protegida por chave de api

8 -  http://localhost:3000/api/filhos?api_key=enoquedacruzsilva - GET

- rota para visualizar todos os filhos e seus respectivos pais que existem na base de dados
- rota protegida por chave de api

9 - http://localhost:3000/api/pais?api_key=enoquedacruzsilva - GET

- rota para visualizar todos os pais existentes na base de dados e seus respectivos filhos
- rota protegida por chave de api

