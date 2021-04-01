import CategoriesRepository from '../../repositories/implementations/CategoriesRepository'; // importamos nosso repositorio de categorias
import ListCategoriesController from './ListCategoriesController'; // importamos nosso controller de listagem criado nessa mesma pasta
import ListCategoriesUseCase from './ListCategoriesUseCase'; // importamos nosso metodo de listagem, nosso serviço , nosso caso de uso de listagem das categorias

const categoriesRepository = CategoriesRepository.getInstance(); // recebemos uma nova instancia do repositorio verificado pela função get instance que faz com que não sejam criadas duas instancias da mesma classe, para termos acesso ao mesmo array na função create e list

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository); // criamos uma nova instancia do nosso caso de uso para a manipulação dos dados recebendo o repositorio que vai fazer essa manipulação dos dados
// vale lembrar que colocamos aqui no nosso caso de uso como parametro para a execução a nossa implementação do nosso repositorio
// mas ele só vai ser executado se for do tipo da nossa interface de repositorio
const listCategoriesController = new ListCategoriesController( // instanciamos um novo controller com o nosso caso de uso que vai ser enviado para as rotas
  listCategoriesUseCase,
);

export default listCategoriesController; // exportamos nosso controller

// aqui temos uma boa bisualização da aplicação, nosso controler usa o caso de uso para validar as informações e dados recebidos e lidos pelo nosso repositorio
