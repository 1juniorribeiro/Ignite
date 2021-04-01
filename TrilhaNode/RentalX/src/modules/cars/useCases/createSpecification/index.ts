import SpecificationRepository from '../../repositories/implementations/SpecificationRepository';
import CreateSpecificationUseCase from './CreateSpecificationUseCase';
import CreateSpecificationController from './CreateSpecificationController';
// mesma logica do list categories
const specificationsRepository = new SpecificationRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository,
);

const createSpecificationsController = new CreateSpecificationController(
  createSpecificationUseCase,
);

export default createSpecificationsController;

// aqui temos uma boa bisualização da aplicação, nosso controler usa o caso de uso para validar as informações e dados recebidos e lidos pelo nosso repositorio
