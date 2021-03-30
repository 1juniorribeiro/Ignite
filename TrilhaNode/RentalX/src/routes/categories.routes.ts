import { Router } from 'express'; // importamos o router do express para usarmos ele para gerenciar nossas rotas
import CategoriesRepository from '../repositories/CategoriesRepository'; // importamos nosso repositorio para a manipulação dos dados

const categoriesRoutes = Router(); // atribuimos as funções do router para nnosso categoriesroutes

const categoriesRepository = new CategoriesRepository(); // instanciamos o nosso repositorio numa variavel interna do arquivo, para termos acesso a todas as suas funções neste modulo(só pra lembrar que cada arquivo no node é um modulo)

categoriesRoutes.post('/', (request, response) => {
  // criamos a rota post com o / pois quem está gerenciando o link que vem depois da / é o server que manda para esse arquivo, e se for um post /categories vem para esse arquivo e depois para essa função
  const { name, description } = request.body; // recebemos o name e a descrição pelo corpo da requisição

  const categoryAlreadyExists = categoriesRepository.findByName(name); // usamos o metodo do repositorio para procurar o nome informado no corpo da requisição e atribuimos ele a uma constante

  if (categoryAlreadyExists) {
    // se encontrarmos o nome informado a categoria não vai poder ser criada e vamos retornar um erro
    return response.status(400).json({ error: 'Category already exists!' });
  }

  categoriesRepository.create({ name, description }); // se não encontrar vamos passar o nome e a descrição para o nosso repositorio e usar o metodo create para armazenar os dados no array

  return response.status(201).send(); // depois de criado retornamos um status de sucesso
});

categoriesRoutes.get('/', (request, response) => {
  // criamos a rota de listagem das categorias existentes
  const all = categoriesRepository.list(); // armazenamos numa constante todas as categorias no array com o metodo list criado no repositorio

  return response.status(200).json(all); // mostramos em tela as categorias recebidas na constante all
});

export default categoriesRoutes; // exportamos a rota, que importamos no server
