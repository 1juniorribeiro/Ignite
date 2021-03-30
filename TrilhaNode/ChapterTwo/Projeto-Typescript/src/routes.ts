import { Request, Response } from 'express'; // importamos request e response do express pra gente usar como tipos ali em baixo
import CreateCourseService from './CreateCourseService'; // importamos o service de criação de cursos do arquivo do service


export function createCourse(request: Request, response: Response) { // exportamos e criamos um function de criação de curso com o request e response do tipo do express pq vai receber uma request da rota e retornar um response
    CreateCourseService.execute({ // criamos a função execute dentro da criação de cursos para que nela seja feita a criação do curso
        name: "Nodejs", // colocamos um valor aqui nela e nos outros 2
        duration: 10,  // vale lembrar que se não for do tipo especificado no service da erro
        educator: "dani"
    });

    return response.send(); // enviamos a resposta
}