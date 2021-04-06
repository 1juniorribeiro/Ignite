import { inject, injectable } from 'tsyringe';
import Category from '../../entities/Category'; // importamos o model para validar os atributos
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

@injectable()
export default class ListCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {} // criamos uma instancia do nosso repositorio para uso

  async execute(): Promise<Category[]> {
    // criamos uma função execute que vai retornar um array de categorias
    const categories = await this.categoriesRepository.list(); // atribuimos a constante categories a execução do metodo list do nosso repositorio de categorias

    return categories; // retornamos essas categorias
  }
}
