import { inject, injectable } from 'tsyringe';

import ISpecificationRepository from '@modules/cars/infra/typeorm/repositories/SpecificationRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export default class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const SpecificationAlreadyExists = await this.specificationsRepository.findByName(
      name,
    );

    if (SpecificationAlreadyExists) {
      throw new AppError('Specification already exists');
    }

    await this.specificationsRepository.create({ name, description });
  }
}
