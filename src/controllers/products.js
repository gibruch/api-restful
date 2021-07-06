const ProductsModel = require('../models/products')

/**
 * GET
 * @param {*} req 
 * @param {*} res 
 */
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

/**
 * POST
 * @param {*} req 
 * @param {*} res 
 */
async function post(req, res) {
    const {
        name,
        brand,
        price,
    } = req.body

    const products = new ProductsModel({
        name,
        brand,
        price,
    })
    products.save()
    res.send({
        message: 'success'
    })
}

/**
 * PUT
 * @param {*} req 
 * @param {*} res 
 */
async function put(req, res) {
    const { id } = req.params

    //altera e retorna o item alterado
    const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, { new: true })
    res.send({
        message: 'success',
        product,
    })

    /*  altera e retorna o item antes de ser alterado
    const product = await ProductsModel.findOne({ _id: id })
    await product.updateOne(req.body)

    res.send({
        message: 'success',
        product,
    }) */
}

/**
 * DELETE (remove)
 */
async function remove(req, res) {
    const { id } = req.params

    const remove = await ProductsModel.deleteOne({ _id: id })
    const mesage = remove.ok ? 'success' : 'error'

    res.send({
        mesage,
    })
}


module.exports = {
    get,
    post,
    put,
    remove,
}