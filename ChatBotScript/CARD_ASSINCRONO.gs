function sendMessagePonto(space){
console.log(cardTeste)
UrlFetchApp.fetch(/* CHAVE DE API (SENDMESSAGE) */  +space, {
  'method' : 'post',
  'contentType': 'application/json',
  'payload': JSON.stringify(cardTeste)
});
}

var cardTeste = {
    "header": {
      "title" : "Pessoal, vocês já apontaram as horas hoje?",
      "subtitle" : "Talvez esteja na hora de apontar.",
      "imageUrl" : engrenagemIcon
    },
    "sections": [{
        "widgets": [{
  "textParagraph": {
    "text": "<b>Basta escolher qual hora você deseja apontar."
  }
},{
  "buttons": [{
    "imageButton": {
             "iconUrl": arrowRigthIcon,
              "onClick": {
               "action": {
                "actionMethodName": "HOMECHAMADOS"
            }
          }
        }
    },{
    "textButton": {
      "text": "APONTAR HORA DE ENTRADA",
      "onClick": {
        "action": {
          "actionMethodName": "HORAENTRADA"
        }
      }
    }
  }]},{"buttons": [{
    "imageButton": {
             "iconUrl": arrowRigthIcon,
              "onClick": {
               "action": {
                "actionMethodName": "HOMECHAMADOS"
            }
          }
        }
    },{
    "textButton": {
      "text": "APONTAR HORA DE SAÍDA",
      "onClick": {
        "action": {
          "actionMethodName": "HORASAIDA"
        }
      }
    }
  }]
}]      
}]            
}