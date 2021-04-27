/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import express, { NextFunction, Request, Response } from 'express'; // importamos o express, lembrese de acicionar os tipos
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';

import 'reflect-metadata';

import '@shared/container';
import AppError from '@shared/errors/AppError';
import router from '@shared/infra/http/routes';

import swaggerFile from '../../../swagger.json';
import createConnection from '../typeorm';

createConnection();
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

export { app };
