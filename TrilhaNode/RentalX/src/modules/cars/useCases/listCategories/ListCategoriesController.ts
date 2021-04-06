import { Request, Response } from 'express'; // importamos o nosso request e response do express para servir como tipo do nosso handle pq o que vamos receber das rotas são uma request e vamos retornar uma response do express
import { container } from 'tsyringe';

import ListCategoriesUseCase from './ListCategoriesUseCase'; // recebemos nosso use case que é nosso serviço que vai validar e escolher as funções a serem usadas pelo repositorio

export default class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    // recebemos o request e response do express
    const listCategoryUseCase = container.resolve(ListCategoriesUseCase);

    const all = await listCategoryUseCase.execute(); // atribuimos a variavel all a execução da função de listagem do caso de uso

    return response.status(200).json(all); // mostramos em tela as categorias recebidas na constante all
  }
}
