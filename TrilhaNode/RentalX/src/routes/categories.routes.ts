import { Router } from 'express'; // importamos o router do express para usarmos ele para gerenciar nossas rotas
import createCategoryController from '../modules/cars/useCases/createCategory'; // importamos os dois controllers dos dois metodos utilizados em categorias
import listCategoriesController from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router(); // atribuimos as funções do router para nnosso categoriesroutes

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response); // agora passamos nosso request e response para a função handle do suporte que fará a tratativa dos dados
});

categoriesRoutes.get('/', (request, response) => {
  // criamos a rota de listagem das categorias existentes
  return listCategoriesController.handle(request, response); // a função handle do controler que vai ler a requisição e dar a resposta agora
});

export default categoriesRoutes; // exportamos a rota, que importamos no server
