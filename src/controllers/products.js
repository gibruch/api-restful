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

    //refatorando o codigo com ifternario = [?] pergunta tenho [:] caso contrario
    const objFind = id ? { _id: id } : null

    const products = await ProductsModel.find(objFind)
    res.send(products)
}

module.exports = {
    get,
}