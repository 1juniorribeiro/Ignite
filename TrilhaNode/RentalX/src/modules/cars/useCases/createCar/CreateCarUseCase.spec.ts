import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import AppError from '@shared/errors/AppError';

import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('Create Car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it('should be able to create a new car', async () => {
    const car = await createCarUseCase.execute({
      name: 'name car',
      description: 'description car',
      daily_rate: 100,
      license_plate: 'abc-1234',
      fine_amount: 60,
      brand: 'brand car',
      category_id: 'category',
    });

    expect(car).toHaveProperty('id');
  });

  it('should not be able to create a car with same license plate', () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: 'car1',
        description: 'description car',
        daily_rate: 100,
        license_plate: 'abc-1234',
        fine_amount: 60,
        brand: 'brand car',
        category_id: 'category',
      });

      await createCarUseCase.execute({
        name: 'car2',
        description: 'description car',
        daily_rate: 100,
        license_plate: 'abc-1234',
        fine_amount: 60,
        brand: 'brand car',
        category_id: 'category',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to create a car with avaliable true by default', async () => {
    const car = await createCarUseCase.execute({
      name: 'car Available',
      description: 'description car',
      daily_rate: 100,
      license_plate: 'abcd-1234',
      fine_amount: 60,
      brand: 'brand car',
      category_id: 'category',
    });

    expect(car.available).toBe(true);
  });
});
