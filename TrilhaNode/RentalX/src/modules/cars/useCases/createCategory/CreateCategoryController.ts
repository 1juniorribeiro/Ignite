import { Request, Response } from 'express';
import CreateCategoryUseCase from './CreateCategoryUseCase';

export default class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body; // recebemos o name e a descrição pelo corpo da requisição

    this.createCategoryUseCase.execute({ name, description }); // usamos o metodo execute para executar a tarefa, que no caso é a criação de categorias

    return response.status(201).send(); // depois de criado retornamos um status de sucesso
  }
}
