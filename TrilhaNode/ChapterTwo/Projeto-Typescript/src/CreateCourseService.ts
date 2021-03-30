
interface Course { // criamos a interface course para definir o molde de dados de um curso
    name: string; // definimos os tipode de cada atribudo da interface
    duration?: number; // colocamos dutarion como opicional com o ponto de interrogação
    educator: string;
}

class CreateCourseService { // criamos o service de criação de um curso com uma classe
    execute({name, duration = 8, educator}: Course) { // recebmos no execute os atributos da interface course desestruturadas
        console.log(name, duration, educator); // imprimimos essas informações
    }
}

export default new CreateCourseService; // exportamos a classe já instanciada