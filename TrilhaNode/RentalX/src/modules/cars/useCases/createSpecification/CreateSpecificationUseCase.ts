/* eslint-disable no-useless-constructor */
import ISpecificationRepository from '../../repositories/implementations/SpecificationRepository'; // importamos o nosso repositorio, vale lembrar que importamos o repositorio e não a implementação dele, tem q ser desse tipo
// ai no nosso index desse caso de uso colocamos o repositorio a ser usado
interface IRequest {
  // definimos o tipo de informção que nosso caso de uso vai receber
  name: string;
  description: string;
}

export default class CreateSpecificationUseCase {
  // criamos um classe para criar uma especificação
  constructor(private specificationsRepository: ISpecificationRepository) {} // instanciamos um repositorio do tipo de repositorio de especificações

  execute({ name, description }: IRequest): void {
    // criamos a função para executar a tarefa que nesse caso é armazenar os dados num array
    const SpefificationAlreadyExists = this.specificationsRepository.findByName(
      // criamos uma constante que recebe o a verificação pelo metodo findByName para verificar se existe um nome desse
      name,
    );

    if (SpefificationAlreadyExists) {
      throw new Error('Specification already exists'); // se ja existir essa especificação, damos um erro
    }

    this.specificationsRepository.create({ name, description }); // se não existir fazemos um create pelo nosso repositorio, e o nosso repositorio pelo metodo create faz um push no array
  }
}
