import { getRepository, Repository } from 'typeorm';
import Category from '../../entities/Category'; // importamos o model de categoria, a classe que representa o modelo e a tipagem dos dados
import {
  // importamos a interface de transferencia de dados via objeto e a interface padrao do repositorio
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

export default class CategoriesRepository implements ICategoriesRepository {
  // criamos a classe do repositorio implementando o tipo de operações que ele vai utilizar, que vai executar todas as manipulações de dados

  private repository: Repository<Category>;

  constructor() {
    // criamos uma função construtora para que toda vez que a classe seja instanciada para a utilização ele atribua um array vazio para a variavel
    this.repository = getRepository(Category); // a atribuição é feita através do this
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    // aqui criamos o metodo create para armazenar os dados no array, colocamos um void pois a função não retorna nada, só faz um push no array

    const category = this.repository.create({
      description,
      name,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    // aqui criamos o metodo list para listar as tegorias que seguem o padrão do model
    const categories = await this.repository.find();

    return categories;
  }

  async findByName(name: string): Promise<Category> {
    // criamos o metodo para encontrar uma categoria com o nome informado
    const category = await this.repository.findOne({
      name,
    });
    return category; // e então retornamos a categoria, se não tiver vai retornar vazio
  }
}
