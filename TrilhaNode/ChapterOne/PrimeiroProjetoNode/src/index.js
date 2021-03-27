const { response } = require("express");
const express = require("express"); // recebemos o express na variavel pra ser usada
const { v4: uuidv4 } = require("uuid")  // importamos a v4 do uuid apra a geração de ids, essa v4 gera com numeros randomicos

const app = express(); // colocamos as funções do express na constante app

app.use(express.json());

// middleware


const customers = []; // um banco de dados fake que é  um array


function verifyIfExistsAccountCPF(request, response, next) { //esse middleware recebe a request e da a response baseada no next, que decid o proximo passo, parar a aplicação com um erro ou continuar
  const { cpf } = request.headers // recebemos pelos headers para ver a base para usar tokens e middlewares

  const customer = customers.find(customer => customer.cpf === cpf);  // com o find procuramos os dados e passamos os dados para a constante costumer do cpf existente

  if (!customer) {
    return response.status(400).json({ error: "Customer not found" })
  }

  request.customer = customer; // aqui o request customer recebe o array de customer para que as rotas tenham acesso a ela

  return next(); // se passou pela validação continuamos para a requisição 
}

function getBalance(statement) { // criamos uma função para fazer o balanço da conta com o array de extrato dela como parametro
  const balance = statement.reduce((acc, operation) => { //criamos uma variavel balanço para receber o balanço  que vamos fazer com o reduce para transformar todas as operação em um valor só
    if (operation.type === 'credit') {// usamos o tipo de operação como condição para adicionar ao extrato da conta com o acumulador
      return acc + operation.amount;
    } else {
      return acc - operation.amount; // ou para remover do extrado ou saldo total
    }
  }, 0) // colocamos aqui o valor inicial do acumulador que acumula os valores do reduces

  return balance;
}


app.post("/account", (request, response) => { // criação de conta
  /**
   * cpf - string
   * name - string
   * id - uuid 
   * statement[]   esse é o extato
   */
  const { cpf, name } = request.body; // recemos o name e cpf do body 

  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  ); // aqui usamos a função some para retornar um true ou false se a condição depois de percorrer o array corresponder, verificando se existe algum cpf igual no array

  if (customerAlreadyExists) { // se exister respodendemos um erro
    return response.status(400).json({ error: "Customer already exists" })
  } // senão o codigo continua e o codigo é feito

  customers.push({ // adicionamos esses dados em um array
    cpf,
    name,
    id: uuidv4(),// criamos o id randomicamente
    statement: [] //criamos aqui o extrato como um array vazio
  })

  return response.status(201).send(); // enviamos um status de created
});

// app.use(verifyIfExistsAccountCPF) // se colocarmos aqui todo o restante da aplicação vai fazer a verificação para continuar

app.get("/statement", verifyIfExistsAccountCPF, (request, response) => { // colocamos o middle entre a rota e o request response
  const { customer } = request; // como foi colocado o array dentro do customer acessamos ele de dentro do proprio request

  return response.json(customer.statement); // retornamos o statement
})

app.post("/deposit", verifyIfExistsAccountCPF, (request, response) => { // o middleware verifica se a conta existe
  const { description, amount } = request.body; // recebemo a descrição e o valor do deposito do body

  const { customer } = request; // recebemos o array da request

  const statementOperarion = { // aqui criamos o objeto para ser armazenado no array
    description, // recebe a descrição
    amount, // o valor
    created_at: new Date(), //a data da criação do deposito
    type: "credit" // colocamos o tipo crédito para sinalizar que é dinheiro a mais na conta
  }

  customer.statement.push(statementOperarion); // salvamos no array

  return response.status(201).send(); // damos resposta que foi criado
})

app.post("/withdraw", verifyIfExistsAccountCPF, (request, response) => {
  const { amount } = request.body;

  const { customer } = request;

  const balance = getBalance(customer.statement);

  if (balance < amount) {
    return response.status(400).json({ error: "Insufficiente funds" })
  }

  const statementOperarion = { // aqui criamos o objeto para ser armazenado no array
    amount, // o valor
    created_at: new Date(), //a data da criação do saque
    type: "debit" // colocamos o tipo debito para sinalizar que é dinheiro foi debitado da conta
  }

  customer.statement.push(statementOperarion);

  return response.status(201).send();
})

app.get("/statement/date", verifyIfExistsAccountCPF, (request, response) => { // aqui colocamos no final do link o date como parametro
  const { customer } = request; // como foi colocado o array dentro do customer acessamos ele de dentro do proprio request
  const { date } = request.query

  const dateFormat = new Date(date + " 00:00"); // com esse + 0 hora recebemos a data do dia todo

  const statement = customer.statement.filter( // vamos usar o filter apra filtrar as transações do dia especificado, e receber na nova constante apenas os dados daquela data
    (statement) => statement.created_at.toDateString() === new Date(dateFormat).toDateString() // vamos receber o estrato da data com o created_at  converter ele em uma string no formato normal 27/03/10
  ); // e comparrar se é igual a data recebida também convertida em dateString

  return response.json(statement); // retornamos o statement filtrado pela data
})

app.put("/account", verifyIfExistsAccountCPF, (request, response) => { // recebemos o metodo put e usamos o endereço account, verificamos o cpf e colocamos a request e response
  const { name } = request.body // recebemos o novo nome pelo body, o cpf não pode ser alterado
  const { customer } = request; // pegamos o cliente através do body novamente

  customer.name = name; // atribuimos o novo nome ao atributo name e substituimos

  return response.status(201).send(); // retornamos uma resposta de sucesso
})

app.get("/account",verifyIfExistsAccountCPF, (request, response) => { // pra retornar os dados de um usuario é só verificar se ele existe
  const { customer } = request; // pegar os dados dele do request

  return response.json(customer) // e retornar
})

app.delete("/account",verifyIfExistsAccountCPF, (request, response) => { // pra apagar usamos o metodo delete, verificamos ele ele existe
  const { customer } = request;  // recebemos ele do request que fica no middleware

  customers.splice(customer, 1); // usamos o splice que retira elementos do array, primeiro parametro é a partir de onde retiramos, que no caso é do proprio customer e depois n osegundo quantos elementos retiramos , n o caso um so ele

  return response.status(200).json(customers)
})

app.get("/balance", verifyIfExistsAccountCPF, (request, response) => { // usamos o metodo get para o balance verificamos se ela existe
  const { customer } = request; // recebemos o cliente pelo request que vem pelo middleware

  const balance = getBalance(customer.statement); // executamos o balance atraves da função getbalance

  return response.json(balance);  // retornamos o balance
})

app.listen(3333); // colocamos o app pra ser ouvido na porta 3333 do local host