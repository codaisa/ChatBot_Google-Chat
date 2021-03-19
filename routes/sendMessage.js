const express = require('express');
const router = express.Router();

const callFunction = require('./quickstart.js')
const callFunctionPOST = require('./quicsktartPOST.js')


router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Ok! Procedimento concluído.'
    });
});

router.get('/:space/:message', (req, res, next) => {
    var space = req.params.space
    const msg = req.params.message
    space = space.split()[0]
    callFunction.sendMessage(msg, space)

    res.status(200).send({
        mensagem: 'Ok, o processo foi chamado.',
        space: space,
        msg: msg,
    });
});


router.use(express.json()) // for parsing application/json
router.use(express.urlencoded({ extended: true }))  
router.post('/:space', (req, res, next) => {
    var resBody = req.body
    var space = req.params.space
    callFunctionPOST.sendMessage(resBody,space)
    console.log(resBody)
    res.status(201).send({
        status: 'Ok, o card foi emitido. ',
        cardResponse:  resBody
    });
});

module.exports = router;