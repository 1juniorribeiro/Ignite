/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe';
import AppError from '../../../../errors/AppError';
import ISpecificationRepository from '../../repositories/implementations/SpecificationRepository'; // importamos o nosso repositorio, vale lembrar que importamos o repositorio e não a implementação dele, tem q ser desse tipo
// ai no nosso index desse caso de uso colocamos o repositorio a ser usado
interface IRequest {
  // definimos o tipo de informção que nosso caso de uso vai receber
  name: string;
  description: string;
}

@injectable()
export default class CreateSpecificationUseCase {
  // criamos um classe para criar uma especificação
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationRepository,
  ) {} // instanciamos um repositorio do tipo de repositorio de especificações

  async execute({ name, description }: IRequest): Promise<void> {
    // criamos a função para executar a tarefa que nesse caso é armazenar os dados num array
    const SpefificationAlreadyExists = await this.specificationsRepository.findByName(
      name,
    );
    // criamos uma constante que recebe o a verificação pelo metodo findByName para verificar se existe um nome desse

    if (SpefificationAlreadyExists) {
      throw new AppError('Specification already exists'); // se ja existir essa especificação, damos um erro
    }

    await this.specificationsRepository.create({ name, description }); // se não existir fazemos um create pelo nosso repositorio, e o nosso repositorio pelo metodo create faz um push no array
  }
}
