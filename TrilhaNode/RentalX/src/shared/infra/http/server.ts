/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import express, { NextFunction, Request, Response } from 'express'; // importamos o express, lembrese de acicionar os tipos
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';

import '../typeorm';
import '@shared/container';
import AppError from '@shared/errors/AppError';
import router from '@shared/infra/http/routes'; // importamos o arquivo de rotas da nossa pasta de rotas

import swaggerFile from '../../../swagger.json';

const app = express(); // colocamos a constante app para receber as funções do express
app.use(express.json()); // colocamos o app para usar json

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router); // colocamos nossa aplicação para usar as rotas que criamos no arquivo index das rotas da aplicação

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  },
);

app.listen(3333, () => console.log('Server is Running! 🚀')); // colocamos o app para ser ouvido na porta 3333
