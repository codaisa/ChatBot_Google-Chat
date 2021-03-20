var home = [{
    "image": { "imageUrl": randomGIF()},
   },{
"textParagraph": {
  "text": "Estes são alguns dos meus tópicos." +
    "<br/><b>Basta clicar e navegar."
}
},{
"buttons": [{
      "imageButton": {
       "iconUrl": "https://media.giphy.com/media/oNbxIzpMMj2b6sL6jd/giphy.gif",
        "onClick": {
         "action": {
          "actionMethodName": "ESCOLHADUVIDAS"
      }
    }
  }
},{
  "textButton": {
  "iconUrl": "https://media.giphy.com/media/oNbxIzpMMj2b6sL6jd/giphy.gif",
    "text": "ESTOU COM DÚVIDAS",
    "onClick": {
      "action": {
        "actionMethodName": "ESCOLHADUVIDAS"
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
    "text": "ÁREA DE CHAMADOS",
    "onClick": {
      "action": {
        "actionMethodName": "HOMECHAMADOS"
      }
    }
  }
}]},{"buttons": [{
      "imageButton": {
       "iconUrl": arrowRigthIcon,
        "onClick": {
         "action": {
          "actionMethodName": "AJUDAPERFEITO"
      }
    }
  }
},{
  "textButton": {
    "text": "ME AJUDE A SER PERFEITO",
    "onClick": {
      "action": {
        "actionMethodName": "AJUDAPERFEITO"
      }
    }
  }
}]},{"buttons": [{
      "imageButton": {
       "iconUrl": arrowRigthIcon,
        "onClick": {
         "action": {
          "actionMethodName": "APONTARHORAS"
      }
    }
  }
},{
  "textButton": {
    "text": "CARTÃO DE PONTO MANUAL",
    "onClick": {
      "action": {
        "actionMethodName": "APONTARHORAS"
      }
    }
  }
}]
}];