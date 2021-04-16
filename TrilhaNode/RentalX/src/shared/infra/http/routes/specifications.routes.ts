import { Router } from 'express'; // importamos o router do express para gerenciar as rotas

import CreateSpecificationsController from '@modules/cars/useCases/createSpecification/CreateSpecificationController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const specificationsRoutes = Router(); // atribuimos as funções do router

const createSpecificationsController = new CreateSpecificationsController();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post('/', createSpecificationsController.handle);

export default specificationsRoutes; // exportamos nossa rota
