import fs from 'fs'; // importamos a biblioteca de filesystem do proprio node para o gerenciamento de arquivos
import csvParse from 'csv-parse'; // importamos o csvparse que faz a leitura e converte o scv em dados
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'; // importamos a tipagem do repositorio

interface IImportCategory {
  // criamos a tipagem dos dados da categoria que vamos ler no arquivo csv
  name: string;
  description: string;
}

export default class ImportCategoryUseCase {
  // criamos a classe para executar a leitura e validação do caso de uso
  constructor(private categoriesRepository: ICategoriesRepository) {} // criamos nossa variavel de repositorio

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    // criamos um metodo para carregar as categorias do arquivo, que tem tem retorno uma promessa para esperar o carregamento para mostrar os dados
    return new Promise((resolve, reject) => {
      // retornamos do metodo uma nova promessa com um resolve  e um reject
      const stream = fs.createReadStream(file.path);
      // criamos nossa variavel de stram que recebe a função de ler o arquivo em modo de strem, que é um pedaço do arquivo de cada vez
      const categories: IImportCategory[] = [];
      // criamos nosso array de categorias do tipo de import categorias que éo tipo de dados que vem no arquivo csv
      const parseFile = csvParse();
      // criamos nossa constante para fazer o parse dos dados vindos do arquivo csv

      stream.pipe(parseFile); // pipe responsavel por passar o pedaço lido para o parseFile

      parseFile
        .on('data', async line => {
          const [name, description] = line;
          // nosso parsefile é uma função assincrona que recebe os dados do arquivo e recebe linha por linha, o primeiro elemento sendo name e o segundo descripttion
          categories.push({
            // em seguida fazemos um push no array de categories que criamos, lembrando que esses são os dados lidos do csv, adicionamos os dados no array de armazenamento no execute
            name,
            description,
          });
        })
        .on('end', () => {
          // quando acabar o arquivo retornamos o array de elementos separados
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on('error', err => {
          // se der erro damos uma rejeição e informamos o erro
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    // para salvarmos os dados no array com id e suas informações pegamos os dados lidos pelo metodo acima

    categories.map(async category => {
      // lemos dado por dado do array com o map
      const { name, description } = category;
      // recebemos o nome e a descrição de cada ele mento do array, que vem [{name, description}, {name, description}] assim no array, mas um de cada vez
      const existsCategory = this.categoriesRepository.findByName(name);
      // verificamos cada nome vindo do array com o findbyname
      if (!existsCategory) {
        // se não existir criamos uma nova categoria
        this.categoriesRepository.create({ name, description });
      }
    });
  }
}
