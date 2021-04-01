import express from 'express'; // importamos o express, lembrese de acicionar os tipos
import swaggerUi from 'swagger-ui-express';

import router from './routes'; // importamos o arquivo de rotas da nossa pasta de rotas
import swaggerFile from './swagger.json';

const app = express(); // colocamos a constante app para receber as funções do express
app.use(express.json()); // colocamos o app para usar json

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router); // colocamos nossa aplicação para usar as rotas que criamos no arquivo index das rotas da aplicação

app.listen(3333, () => console.log('Server is Running! 🚀')); // colocamos o app para ser ouvido na porta 3333
