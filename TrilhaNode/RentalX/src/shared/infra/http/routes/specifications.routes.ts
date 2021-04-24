import { Router } from 'express'; // importamos o router do express para gerenciar as rotas

import CreateSpecificationsController from '@modules/cars/useCases/createSpecification/CreateSpecificationController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

import { ensureAdmin } from '../middlewares/ensureAdmin';

const specificationsRoutes = Router(); // atribuimos as funções do router

const createSpecificationsController = new CreateSpecificationsController();

specificationsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createSpecificationsController.handle,
);

export default specificationsRoutes; // exportamos nossa rota
