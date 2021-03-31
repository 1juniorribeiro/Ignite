import { Router } from 'express'; // importamos o router do express para usarmos ele para gerenciar nossas rotas
import CategoriesRepository from '../repositories/CategoriesRepository'; // importamos nosso repositorio para a manipulação dos dados
import CreateCategoryService from '../services/CreateCategoryService'; // importamos o service de criação de categoria

const categoriesRoutes = Router(); // atribuimos as funções do router para nnosso categoriesroutes

const categoriesRepository = new CategoriesRepository(); // instanciamos o nosso repositorio numa variavel interna do arquivo, para termos acesso a todas as suas funções neste modulo(só pra lembrar que cada arquivo no node é um modulo)

categoriesRoutes.post('/', (request, response) => {
  // criamos a rota post com o / pois quem está gerenciando o link que vem depois da / é o server que manda para esse arquivo, e se for um post /categories vem para esse arquivo e depois para essa função
  const { name, description } = request.body; // recebemos o name e a descrição pelo corpo da requisição

  const createCategoryService = new CreateCategoryService(categoriesRepository); // instanciamos o service com o repositori oque vai ser utilizado

  createCategoryService.execute({ name, description }); // usamos o metodo execute para executar a tarefa, que no caso é a criação de categorias

  return response.status(201).send(); // depois de criado retornamos um status de sucesso
});

categoriesRoutes.get('/', (request, response) => {
  // criamos a rota de listagem das categorias existentes
  const all = categoriesRepository.list(); // armazenamos numa constante todas as categorias no array com o metodo list criado no repositorio

  return response.status(200).json(all); // mostramos em tela as categorias recebidas na constante all
});

export default categoriesRoutes; // exportamos a rota, que importamos no server
