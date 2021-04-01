import { Request, Response } from 'express'; // importamos o nosso request e response do express para servir como tipo do nosso handle pq o que vamos receber das rotas são uma request e vamos retornar uma response do express
import ListCategoriesUseCase from './ListCategoriesUseCase'; // recebemos nosso use case que é nosso serviço que vai validar e escolher as funções a serem usadas pelo repositorio

export default class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoriesUseCase) {} // aqui usamos o constructor para criar uma nova instancia do nosso use case para podermos usar com o this no nosso handle

  handle(request: Request, response: Response): Response {
    // recebemos o request e response do express
    const all = this.listCategoryUseCase.execute(); // atribuimos a variavel all a execução da função de listagem do caso de uso

    return response.status(200).json(all); // mostramos em tela as categorias recebidas na constante all
  }
}
