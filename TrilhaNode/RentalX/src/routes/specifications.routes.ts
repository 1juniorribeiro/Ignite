import { Router } from 'express'; // importamos o router do express para gerenciar as rotas
import createSpecificationsController from '../modules/cars/useCases/createSpecification'; // importamos o controler do metodo que vamos utilizar

const specificationsRoutes = Router(); // atribuimos as funções do router

specificationsRoutes.post('/', (request, response) => {
  return createSpecificationsController.handle(request, response); // passamos a requisição para o nosso controller, que devolve nossa resposta depois do serviço executado
});

export default specificationsRoutes; // exportamos nossa rota
