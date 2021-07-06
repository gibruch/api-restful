const router = require('express').Router()

// definindo rota : clientes
router.get('/clientes', (req, res) => {
    res.send( {
        ok: 123
    })
})

module.exports = router