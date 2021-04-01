import CategoriesRepository from '../../repositories/implementations/CategoriesRepository';
import ImportCategoryController from './ImportCategoryController';
import ImportCategoryUseCase from './ImportCategoryUseCase';

const categoriesRepository = CategoriesRepository.getInstance();

const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);

const importCategoryController = new ImportCategoryController(
  importCategoryUseCase,
);

export default importCategoryController;
// nosso index dos usecases seguem o mesmo padrão ate então do controller para o usecase do usecase para o repositorio
