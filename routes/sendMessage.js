const express = require('express');
const router = express.Router();

const callFunction = require('./quickstart.js')


router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem:'Ok! Procedimento concluído.'
    });
});

 router.get('/:message', (req, res, next) =>{
    const id = req.params.message
        res.status(200).send({
            mensagem:'Ok, o processo foi chamado. ',
            id: id
        });

        callFunction.sendMessage(id)
}); 

module.exports = router;