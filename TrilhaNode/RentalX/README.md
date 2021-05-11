# Cadastro de carro

**RF**
Deve ser possível cadastrar um novo carro.

**RN**
Não deve ser possivel cadastrar um carro com uma mesma placa.
O carro deve ser cadastrado com disponibilidade por padrão
O usuario responsavel pelo cadastro deve ser um usuario administrador

# Listagem de carros

**RF**
Deve ser possivel listar todos os carros disponiveis
Deve ser possivel listar os carros disponiveis pelo nome da marca
Deve ser possivel listar os carros disponiveis pelo nome da categoria
Deve ser possivel listar os carros disponiveis pelo nome do carro

**RN**
O usuário não precisa estar logado no sistema

# Cadastro de Especificação no carro

**RF**
Deve ser possivel cadastrar uma especificação para um carro


**RN**
Não deve ser possivel cadastrar uma especificação para um carro não cadastrado
Não deve ser possivel cadastrar uma especificação já existente para o mesmo carro
O usuario responsavel pelo cadastro deve ser um usuario administrador

# Cadastro imagens do carro

**RF**
Deve ser possivel cadastrar as imagens do carro

**RNF**
Utilizar o multer para upload dos arquivos

**RN**
O usuário deve poder cadastrar mais de uma imagem para o carro
O usuario responsavel pelo cadastro deve ser um usuario administrador

# Aluguel de carro

**RF**
Deve ser possivel cadastrar um aluguel

**RN**
o aluguel deve ter duração minima de 1 hora
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo usuario
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo carro
O usuario deve estar logado na aplicação
ao realizar um aluguel o status do carro deverá ser alterado para indisponivel

# Devolução de carro

**RF**
Deve ser possivel realizar a devolução de um carro

**RN**
Se o carro for devolvido com menos de 24 horas, deverá ser cobrado a diária completa.
Ao realizar a devolução O carro deverá ser liberado para outro aluguel.
Ao realizar a devolução o usuário deve ser liberado para outro aluguel.
Ao realizar a devolução, deverá ser calculado o total do aluguel.
Caso o horário de devolução seja superior ao horário previsto de entrega deverá ser cobrado multa proporcional aos dias de atraso.
O usuario deve estar logado na aplicação
Caso haja Multa, deverá ser somado ao total do aluguel

#Listagem de Algueis para usuário

**RF**
Deve ser Possive lrealizar a busca de todos os alugueis para o usuario

**RN**
O usuário deve estar logado na aplicação
