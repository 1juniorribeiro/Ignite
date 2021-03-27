/* são os HTTP verbs
 * 
 * - GET - leitura de dados
 * - POST - criação de informações
 * - PUT - atualização
 * - DELETE - apagar dados
 * - PATCH - atualização parcial
 * 
 * 
 * HTTP CODES ----------------------------------
 * 1xx informativo - a solicitação foi aceita ou o processo continua em andamento
 * 2xx - confirmação
 *  --200 requisição bem sucedida
 * -- 201 created - geralmente usado para POST  após um inserção
 * 3xx -- redirecionamento
 * -- 301 - moved Permanently
 * -- 302 - moved
 * 4xx erro do cliente
 * --400 bad request
 * --401 não autorizado
 * --403 proibido
 * --404 not found
 * --422 entidade improcessavel
 * 5xx erro no servidor - o servidor falhou
 * --500 internal server error
 * --502 bad gateway
 *
 *--------parametros das requisições 
 * -----Header params
 * parametros que vão no cabeçalho da requisição
 * -----query params 
 * são os parametros que vão no final da requisição/ link 
 * com chave, valor e separação 
 * link/users?page=2&limit=50 essaparte final são os query params
 * 
 * -----route params que vão no meio das rotas
 * users/{id}
 * body params é quando enviamos no corpo das requisições
 * 
 * 
 * Boas praticas API Rest
 * utilização correta dos metodos HTTP
 * A utilização dos status no retorno das respostas
 * padrao de nomenclatura 
 * 
 */