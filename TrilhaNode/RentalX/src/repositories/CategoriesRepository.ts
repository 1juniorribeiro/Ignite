import Category from '../model/Category'; // importamos o model de categoria, a classe que representa o modelo e a tipagem dos dados
import {
  // importamos a interface de transferencia de dados via objeto e a interface padrao do repositorio
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

export default class CategoriesRepository implements ICategoriesRepository {
  // criamos a classe do repositorio implementando o tipo de operações que ele vai utilizar, que vai executar todas as manipulações de dados
  private categories: Category[]; // criamos uma variavel privada com a tipagem do nosso model das categorias

  constructor() {
    // criamos uma função construtora para que toda vez que a classe seja instanciada para a utilização ele atribua um array vazio para a variavel
    this.categories = []; // a atribuição é feita através do this
  }

  create({ name, description }: ICreateCategoryDTO): void {
    // aqui criamos o metodo create para armazenar os dados no array, colocamos um void pois a função não retorna nada, só faz um push no array
    const category = new Category(); // aqui criamos uma variavel da categoria que recebe a instancia de uma nova categoria com o molde do model

    Object.assign(category, { name, description, created_at: new Date() }); // aqui usamos o assign para atribuir a constante de categoria um objeto com as informações necessarias

    this.categories.push(category); // aqui fazmos o push desse objeto category no array de categorias
  }

  list(): Category[] {
    // aqui criamos o metodo list para listar as tegorias que seguem o padrão do model
    return this.categories; // através do this temos acesso ao array de categories e retornamos esse array
  }

  findByName(name: string): Category {
    // criamos o metodo para encontrar uma categoria com o nome informado
    const category = this.categories.find(
      // criamos uma constante que recebe um objeto que é procurado dentro do array de categorias com o nome informado na função
      categoryData => categoryData.name === name, // se dentro dos dados das categorias encontrar um objeto com o nome estritamente igual ao nome informado para a função ele é retornado a constante category
    );
    return category; // e então retornamos a categoria, se não tiver vai retornar vazio
  }
}
