const ProductsModel = require('../models/products')

async function get(req, res) {
    const { id } = req.params

    /* exemplo normal aqui e abaixo com ifternario
    // cria objeto find vazio
    let objFind = {}
    // verifca se exite o id recebido no parametro e passa para o objeto
    if (id) {
        objFind._id = id
    }*/

    //refatorando o codigo com ifternario = [?] pergunta tem/existe [:] caso contrario
    //condição ? valor se for verdadeiro : valor se for falso
    const objFind = id ? { _id: id } : null

    const products = await ProductsModel.find(objFind)
    res.send(products)
}

async function post(req, res) {
    const {
        name,
        brand,
        price,
    } = req.body

    const products = new ProductsModel( {
        name,
        brand,
        price,
    })
    products.save()
    res.send( {
        message: 'success'
    })
}

module.exports = {
    get,
    post,
}