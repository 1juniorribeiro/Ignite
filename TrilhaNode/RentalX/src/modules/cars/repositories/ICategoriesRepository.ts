import Category from '../entities/Category';

// DTO => Data transfer object,  criar um objeto que vai ser responsavel pela transferencia de dados entre uma camada e outra
interface ICreateCategoryDTO {
  // criamos um interface para receber os dados para ser transferido para o array
  name: string; // colocamos os nome e os tipos dos atributos
  description: string;
}

interface ICategoriesRepository {
  // aqui criamos a interface para a tipagem dos metodos que serão utilizados no nosso repositorio
  findByName(name: string): Promise<Category>; // criamos o findbyname que vai receber um namoe em string que é do tipo category, a tipagem vem pelo model
  list(): Promise<Category[]>; // criamos o metodo list que vai ser um array das categorias
  create({ name, description }: ICreateCategoryDTO): Promise<void>; // criamos o metodo create que vai receber o nome e descrição que são do tipo DTO que retornam nada o void no caso
}

export { ICreateCategoryDTO, ICategoriesRepository }; // exportamos as duas interfaces
