// criamos a pasta src e esse arquivo index para ser o principal

const { response } = require('express')
const express = require('express') // importamos o express e suas funcionalidades na variavel express

const app = express() //damos acesso as funções do express para a variavel app

app.use(express.json()) // usamos para o express receber informações em JSON

/**
 * Tipos de parametros 
 * 
 * Route Params => parametros de rotas, servem para indentificar, editar ou deletar e buscar um recurso
 * query params => Paginação / filtro de busca
 * Body params => são os objetos que vamos passar para inserção ou alteração (JSON)
 */


app.get("/courses", (request, response) => { // no get temos o caminho da aplicação entre aspas, se tiver um nome é só colocar, a request que é o que estão pedindo para a api e responde q é o que vamos responder
    return response.json(["Curso 1", "Curso 2", "Curso 3"])
})

app.post("/courses", (request, response) => {
    return response.json(["curso 1", "Curso 2", "curso 3", "Curso 4"])
})

app.put("/courses/:id", (request, response) => {
    return response.json(["curso 6", "Curso 2", "Curso 3", "Curso 4"])
})

app.patch("/courses/:id", (request, response) => {
    return response.json(["curso 6", "Curso 7", "Curso 3", "Curso 4"])
})

app.delete("/courses/:id", (request, response) => {
    return response.json(["curso 6", "Curso 7", "Curso 4"])
})

app.listen(3333) // colocamos a api para ser escutada na porta 3333 do localhost para q possamos testar
