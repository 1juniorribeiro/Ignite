import express from 'express'; // importamos o express, lembrese de acicionar os tipos
import categoriesRoutes from './routes/categories.routes'; // importamos as rotas das categorias

const app = express(); // colocamos a constante app para receber as funções do express
app.use(express.json()); // colocamos o app para usar json

app.use('/categories', categoriesRoutes); // definimos que todo acesso pelo caminho categories vai ser encaminhado para as rotas do arquivo de rotas

app.listen(3333, () => console.log('Server is Running! 🚀')); // colocamos o app para ser ouvido na porta 3333
