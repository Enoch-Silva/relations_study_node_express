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
### GET http://localhost:3000/api/filhos
rota para visualizar todos os pais Filhos na base de dados e seus respectivos pais - (rota protegida por chave de api)
#### Parametros
Chave da API = ?api_key=enoquedacruzsilva
#### Respostas
##### 200! OK
Recebe a listagem com todos os Filhos e os seus respectivos Pais.

Exemplo de Resposta:
```
    {
        "id": 6,
        "nome": "Wilbert",
        "createdAt": "2024-10-29T15:18:41.962Z",
        "updatedAt": "2024-10-29T15:18:41.962Z",
        "Pais": [
            {
                "id": 3,
                "nome": "Enoch",
                "createdAt": "2024-10-29T15:16:09.664Z",
                "updatedAt": "2024-10-29T15:16:09.664Z",
                "PaiFilho": {
                    "createdAt": "2024-10-29T15:18:41.982Z",
                    "updatedAt": "2024-10-29T15:18:41.982Z",
                    "paiId": 3,
                    "filhoId": 6
                }
            },
            {
                "id": 4,
                "nome": "Dionisia",
                "createdAt": "2024-10-29T15:17:47.157Z",
                "updatedAt": "2024-10-29T15:17:47.157Z",
                "PaiFilho": {
                    "createdAt": "2024-10-29T15:18:41.982Z",
                    "updatedAt": "2024-10-29T15:18:41.982Z",
                    "paiId": 4,
                    "filhoId": 6
                }
            }
        ]
    },
    {
        "id": 7,
        "nome": "Willow",
        "createdAt": "2024-10-29T15:23:15.786Z",
        "updatedAt": "2024-10-29T15:23:15.786Z",
        "Pais": [
            {
                "id": 3,
                "nome": "Enoch",
                "createdAt": "2024-10-29T15:16:09.664Z",
                "updatedAt": "2024-10-29T15:16:09.664Z",
                "PaiFilho": {
                    "createdAt": "2024-10-29T15:23:15.806Z",
                    "updatedAt": "2024-10-29T15:23:15.806Z",
                    "paiId": 3,
                    "filhoId": 7
                }
            },
            {
                "id": 4,
                "nome": "Dionisia",
                "createdAt": "2024-10-29T15:17:47.157Z",
                "updatedAt": "2024-10-29T15:17:47.157Z",
                "PaiFilho": {
                    "createdAt": "2024-10-29T15:23:15.806Z",
                    "updatedAt": "2024-10-29T15:23:15.806Z",
                    "paiId": 4,
                    "filhoId": 7
                }
            }

```
##### 401! Falha na autenticação
Caso esta resposta aconteça, significa que ocorreu alguma falha durante o processo de autenticação da requisição. Motivo: Credenciais Invalida!

Exemplo de Resposta:
```
{
    "error": "Chave de API inválida"
}
```

### GET http://localhost:3000/api/pais/4
rota para visualizar um pai especifico e os seus respectivos filhos - (rota protegida por chave de api)
#### Parametros
Chave da API = ?api_key=enoquedacruzsilva
#### Respostas
##### 200! OK
Recebe a listagem de um pai especifico e os seus respectivos filhos e links com rotas para efectuar outras alterações no respectivo Pai.

Exemplo de Resposta:
```
{
    "pai": {
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
    },
    "_links": [
        {
            "href": "http://localhost:3000/api/pais/4/filhos/0000",
            "method": "POST",
            "desc": "Associar um filho a este pai"
        }
    ]
}
```
##### 401! Falha na autenticação
Caso esta resposta aconteça, significa que ocorreu alguma falha durante o processo de autenticação da requisição. Motivo: Credenciais Invalida!

Exemplo de Resposta:
```
{
    "error": "Chave de API inválida"
}
```

### GET http://localhost:3000/api/filhos/12
rota para visualizar um Filho especifico e os seus respectivos Pais - (rota protegida por chave de api)
#### Parametros
Chave da API = ?api_key=enoquedacruzsilva
#### Respostas
##### 200! OK
Recebe a listagem de um filho especifico e os seus respectivos pais.

Exemplo de Resposta:
```
{
    "id": 12,
    "nome": "Roberta",
    "createdAt": "2024-10-29T15:54:25.602Z",
    "updatedAt": "2024-10-29T15:54:25.602Z",
    "Pais": [
        {
            "id": 2,
            "nome": "Anderson",
            "createdAt": "2024-10-29T14:57:32.666Z",
            "updatedAt": "2024-10-29T14:57:32.666Z",
            "PaiFilho": {
                "createdAt": "2024-10-29T16:00:29.371Z",
                "updatedAt": "2024-10-29T16:00:29.371Z",
                "paiId": 2,
                "filhoId": 12
            }
        }
    ]
}
```
##### 401! Falha na autenticação
Caso esta resposta aconteça, significa que ocorreu alguma falha durante o processo de autenticação da requisição. Motivo: Credenciais Invalida!

Exemplo de Resposta:
```
{
    "error": "Chave de API inválida"
}
```
