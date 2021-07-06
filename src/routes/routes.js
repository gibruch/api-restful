const router = require('express').Router()

const ProductController = require('../controllers/products')

/**
 * VERBOS HTTP (4 tipos basicos)
 * 
 *  GET = obter dados
 *  POST = enviar(cliente) / receber(servidor) dados
 *  PUT = atualizar dados
 *  DELETE = remover dados
 * 
 */

// definindo rota : products
router.get('/products/:id?', ProductController.get) // [?] com interogacao no final - parametro opcional 
router.post('/products', ProductController.post)
router.put('/products/:id', ProductController.put)
router.delete('/products/:id', ProductController.remove) // delete

module.exports = router