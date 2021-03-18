const express = require('express');
const router = express.Router();

const callFunction = require('./quickstart.js')


router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem:'Oops. Esta rota na api não foi ajustada.'
    });
});

 router.get('/:space/:message', (req, res, next) =>{
    var space = req.params.space
    const msg = req.params.message
    space = space.split()[0]
    callFunction.sendMessage(msg, space)

        res.status(200).send({
            status:'Ok, processo disparado.',
            space: space,
            msg: msg,
        });
}); 

module.exports = router;