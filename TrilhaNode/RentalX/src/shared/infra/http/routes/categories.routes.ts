import { Router } from 'express'; // importamos o router do express para usarmos ele para gerenciar nossas rotas
import multer from 'multer'; // importamos o multer para gerenciar nosso upload de arquivos

import CreateCategoryController from '@modules/cars/useCases/createCategory/CreateCategoryController';
import ImportCategoryController from '@modules/cars/useCases/importCategory/ImportCategoryController';
import ListCategoriesController from '@modules/cars/useCases/listCategories/ListCategoriesController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const categoriesRoutes = Router(); // atribuimos as funções do router para nnosso categoriesroutes

const upload = multer({
  // atribuimos a constante upload o multer com o destino dos arquivos recebidos para a pasta tmep
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.use(ensureAuthenticated);
categoriesRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCategoryController.handle,
);

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  ensureAuthenticated,
  ensureAdmin,
  importCategoryController.handle,
);

export default categoriesRoutes;
