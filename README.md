# API de Pais e Filhos
Esta é uma API simples para entender como funcionam os relacionamentos em bases de dados SQl, com o foco em relacionamento muitos-para-muitos(m-n)

## endpoints
### GET http://localhost:3000/api/pais
rota para visualizar todos os pais existentes na base de dados e seus respectivos filhos - (rota protegida por chave de api)
#### Parametros
Chave da API = ?api_key=enoquedacruzsilva
#### Respostas
##### 200! OK
Recebe a listagem com todos os pais e os seus respectivos filhos.

Exemplo de Resposta:
```
[
    {
        "id": 3,
        "nome": "Enoch",
        "createdAt": "2024-10-29T15:16:09.664Z",
        "updatedAt": "2024-10-29T15:16:09.664Z",
        "Filhos": [
            {
                "id": 6,
                "nome": "Wilbert",
                "createdAt": "2024-10-29T15:18:41.962Z",
                "updatedAt": "2024-10-29T15:18:41.962Z",
                "PaiFilho": {
                    "createdAt": "2024-10-29T15:18:41.982Z",
                    "updatedAt": "2024-10-29T15:18:41.982Z",
                    "paiId": 3,
                    "filhoId": 6
                }
            },
            {
                "id": 7,
                "nome": "Willow",
                "createdAt": "2024-10-29T15:23:15.786Z",
                "updatedAt": "2024-10-29T15:23:15.786Z",
                "PaiFilho": {
                    "createdAt": "2024-10-29T15:23:15.806Z",
                    "updatedAt": "2024-10-29T15:23:15.806Z",
                    "paiId": 3,
                    "filhoId": 7
                }
            }
        ]
    },
    {
        "id": 4,
        "nome": "Dionisia",
        "createdAt": "2024-10-29T15:17:47.157Z",
        "updatedAt": "2024-10-29T15:17:47.157Z",
        "Filhos": [
            {
                "id": 6,
                "nome": "Wilbert",
                "createdAt": "2024-10-29T15:18:41.962Z",
                "updatedAt": "2024-10-29T15:18:41.962Z",
                "PaiFilho": {
                    "createdAt": "2024-10-29T15:18:41.982Z",
                    "updatedAt": "2024-10-29T15:18:41.982Z",
                    "paiId": 4,
                    "filhoId": 6
                }
            },
            {
                "id": 7,
                "nome": "Willow",
                "createdAt": "2024-10-29T15:23:15.786Z",
                "updatedAt": "2024-10-29T15:23:15.786Z",
                "PaiFilho": {
                    "createdAt": "2024-10-29T15:23:15.806Z",
                    "updatedAt": "2024-10-29T15:23:15.806Z",
                    "paiId": 4,
                    "filhoId": 7
                }
            }
        ]
    }
]

```
##### 401! Falha na autenticação
Caso esta resposta aconteça, significa que ocorreu alguma falha durante o processo de autenticação da requisição. Motivo: Credenciais Invalida!

Exemplo de Resposta:
```
{
    "error": "Chave de API inválida"
}
```
