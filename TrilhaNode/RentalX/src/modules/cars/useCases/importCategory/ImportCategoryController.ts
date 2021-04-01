import { Request, Response } from 'express';

import ImportCategoryUseCase from './ImportCategoryUseCase';

export default class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { file } = request; // no nosso controller recebemos o arquivo com nome file pela request

    this.importCategoryUseCase.execute(file); // passamos para nosso useCase na função execute

    return response.send(); // e retornamos a resposta que vem do useCase
  }
}
