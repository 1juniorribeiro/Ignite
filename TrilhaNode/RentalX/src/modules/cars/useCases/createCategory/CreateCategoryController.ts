import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCategoryUseCase from './CreateCategoryUseCase';

export default class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body; // recebemos o name e a descrição pelo corpo da requisição

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    await createCategoryUseCase.execute({ name, description }); // usamos o metodo execute para executar a tarefa, que no caso é a criação de categorias

    return response.status(201).send(); // depois de criado retornamos um status de sucesso
  }
}
