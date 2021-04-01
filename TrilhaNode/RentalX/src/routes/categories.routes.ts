import { Router } from 'express'; // importamos o router do express para usarmos ele para gerenciar nossas rotas

import multer from 'multer'; // importamos o multer para gerenciar nosso upload de arquivos

import createCategoryController from '../modules/cars/useCases/createCategory'; // importamos os dois controllers dos dois metodos utilizados em categorias
import listCategoriesController from '../modules/cars/useCases/listCategories';
import importCategoryController from '../modules/cars/useCases/importCategory';

const categoriesRoutes = Router(); // atribuimos as funções do router para nnosso categoriesroutes

const upload = multer({
  // atribuimos a constante upload o multer com o destino dos arquivos recebidos para a pasta tmep
  dest: './tmp',
});

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response); // agora passamos nosso request e response para a função handle do suporte que fará a tratativa dos dados
});

categoriesRoutes.get('/', (request, response) => {
  // criamos a rota de listagem das categorias existentes
  return listCategoriesController.handle(request, response); // a função handle do controler que vai ler a requisição e dar a resposta agora
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  // criamos uma nova rota para fazer a importação de arquivos que recebe o upload como um middleware que tem q ser passado com o nome de file por um multipart form
  return importCategoryController.handle(request, response); // passamos nossa request e response para o controller
});

export default categoriesRoutes; // exportamos a rota, que importamos no server
