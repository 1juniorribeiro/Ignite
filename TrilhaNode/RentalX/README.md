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
