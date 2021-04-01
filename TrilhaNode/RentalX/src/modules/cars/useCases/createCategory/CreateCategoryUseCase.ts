/* eslint-disable no-useless-constructor */
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'; // importamos os tipos de manipulação de dados a serem feitas por um repositorio

interface IRequest {
  // criamos um tipo request para definir quais informações vao ser recrecebidas
  name: string; // criamos isso pq o service não precisa saber de onde vem, se um express ou um adonnis por exemplo
  description: string;
}

export default class CreateCategoryUseCase {
  // criamos a classe de criação de categoria e exportamos
  constructor(private categoriesRepository: ICategoriesRepository) {} // criamos a função construtora com um repositorio privado sendo inicado com o tipo de operção que podem ser feitas pelo repositorio

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name); // usamos o metodo do repositorio para procurar o nome informado no corpo da requisição e atribuimos ele a uma constante
    // agora usamos o this para ter acesso a variavel privada e usar o metodo findByname que a interface vai mandar para o repositorio que implementos o repositorio usando o implements
    if (categoryAlreadyExists) {
      // se encontrarmos o nome informado a categoria não vai poder ser criada e vamos retornar um erro
      throw new Error('Category already exists'); // infromamos um erro js pq a tratativa de erros vem depois no curso
    }

    this.categoriesRepository.create({ name, description }); // se não encontrar vamos passar o nome e a descrição para o nosso repositorio e usar o metodo create para armazenar os dados no array
  }
}