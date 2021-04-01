import Category from '../../model/Category'; // importamos o model para validar os atributos
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

export default class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {} // criamos uma instancia do nosso repositorio para uso

  execute(): Category[] {
    // criamos uma função execute que vai retornar um array de categorias
    const categories = this.categoriesRepository.list(); // atribuimos a constante categories a execução do metodo list do nosso repositorio de categorias

    return categories; // retornamos essas categorias
  }
}
