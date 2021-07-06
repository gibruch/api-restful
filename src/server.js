const express = require('express')
//const path = require('path')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

// concexao com o banco de dados
db.connect()

//habilita server para receber dados via post (formulario)
app.use(express.urlencoded({ extended: true }))

//definindo as rotas
app.use('/api', routes)

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on porto ${port}`))

