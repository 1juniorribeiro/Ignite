// dependencias instaladas, express, tipos do express, adicionamos o typescript em modo de desenvolvimento
// e demos um yarn tsc --init para gerar o arquivo de configuração do typescript
import express from 'express'; // importamos o express
import { createCourse } from './routes'; // importamos a criação de cursos das rotas 

const app = express(); // colocamos o express na constante app

app.get("/", createCourse) // chamamos a rota get com a rota de criação de cursos

app.listen(3333); // botamos o app pra ser ouvido na porta 3333
