// oque é o node?

// uma plataforma open-source que permite execução da linguagem javascript do lado do servidor

// é composto da v8 + libuv + conjunto de modulos

// o que o Node veio resolver?

//Ryan Dahl 
//tava trabalhando na barra de progresso do flickr e tinhamuitas requisições para verificar no backend o status
// ele viu q as tecnologias da epoca não davam um bom suporte ao processo de I/O(input/output) assincrono

// Caracteristicas do Node.js

// Arquitetura Event Loop
   // tem uma call stack, uma pilha de funções que vão ser chamadas

// single - thread 
//non-blocking I/O, quando a gente chama uma função A e B, quando chamamos uma função A não precisamos que a B ja tenha sido executada
// modulos proprios
  /* 
  http
  dns
  fs(file system)
  buffer
  entre outros
  */

// Event Loop 
/* 
o event Loop tem uma pilha de funções, 

esse event loop é single tread, mas ele escuta uma função por vez e manda pra uma tread do processador
podendo acessar por padrao até 4 treads de um processador 

assim a cada evento ocorrido uma função é mandada para processamento e como é em formado de pilha, a ultima função carregada é a primeira a ter resposta


----------- o que são gerenciadores de pacotes?
NPM e Yarn para instalar bibliotecas de terceiros

Podemos disponibilizar bibliotecas também

vamos utilizar o Yarn pq é mais rapido

------------------frameworks
--express que vamos usar
--Egg.js 
--nest.js
--adonis.js
*/  