/*
o que é uma API
--Application Programming Interface(Interface de prgramação de aplicativos)
-- conjunto de especificações de possiveis interações entre aplicações
-- precisamos de uma documentação para o desenvolvedor


o que é REST?
--REpresentation State Transfer (Transferencia representacional de Estado)

Modelo de arquitetura


6 regras -
1 - client-server 
separar as responsabilidades, o cliente não se preocupa com o que está sendo implementado no server e vice-versa

2 - stateless - ele não armazena os dados de requisições anteriores, toda requisição é nova e não tem dados de uma requisição anterior

3 - cache - o cache precisa ser feito

4 - interface uniforme/ é como se fosse um contrato, em que definimos um padrao para seguir para que clientes possam consumir a api
  com identificação de recursos
  representação de recursos também, 
  mensagens auto-descritivas para explicar bem oq está acontecendo
  HATEOAS(Hypertext As The Engine Of Application State) -- temos que poder entregar links na requisição

5 precisa ser criada em camadas

6 codigo sob demanda
permite que as funcionalidades dos clientes possam ser extendidas na forma de scripts e miniaplicativos

*/