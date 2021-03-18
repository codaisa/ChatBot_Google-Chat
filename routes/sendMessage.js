const express = require('express');
const router = express.Router();

const callFunction = require('./quickstart.js')


router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem:'Ok! Procedimento concluído.'
    });
});

 router.get('/:message/:canal', (req, res, next) =>{
    var id = req.params.message
    const space = req.params.canal
    id = id.split()[0]
    id = id.replace(/[+]/g, " ")
    callFunction.sendMessage(id, space)

        res.status(200).send({
            mensagem:'Ok, o processo foi chamado.',
            Message: id,
            space: space,
        });
}); 

module.exports = router;