import { v4 as uuidV4 } from 'uuid'; // importamos a versão 4 do uuid e atribuimos a um nome entendivel

export default class Specification {
  // criamos a classe para servir de padão de atributos e tipagem de especificação
  id?: string; // colocamos o id como opcional para que ele seja gerado automaticamente pelo constructor a baixo toda vez que esse model for instanciado

  name: string;

  description: string;

  created_at: Date;

  constructor() {
    // criamos a função construtora para atribuir um id uuid ao atributo id quando ele for criado a partir da instancia
    if (!this.id) {
      // se não tiver um id criamos um novo se tiver seguimos em frente
      this.id = uuidV4(); // atribuimos a função uuid para a geração randomica do id
    }
  }
}
