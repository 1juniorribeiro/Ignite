import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ImportCategoryUseCase from './ImportCategoryUseCase';

export default class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request; // no nosso controller recebemos o arquivo com nome file pela request

    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    await importCategoryUseCase.execute(file); // passamos para nosso useCase na função execute

    return response.status(201).send(); // e retornamos a resposta que vem do useCase
  }
}
