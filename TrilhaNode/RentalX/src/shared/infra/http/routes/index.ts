import { Router } from 'express'; // importamos o router, gerenciador de rotas do express

import authenticateRoutes from './authenticate.routes';
import categoriesRoutes from './categories.routes'; // importamos nossas duas rotas criadas
import specificationsRoutes from './specifications.routes';
import usersRoutes from './users.routes';

const router = Router(); // atribuimos nosso Router a uma variavel para executar suas funções

router.use('/categories', categoriesRoutes); // definimos que todo acesso pelo caminho categories vai ser encaminhado para as rotas do arquivo de rotas
router.use('/specifications', specificationsRoutes);
router.use('/users', usersRoutes);
router.use(authenticateRoutes);

export default router; // exportamos nossas rotas para o server usar
