
 function randomHeader(){
    let texts = ["Eu já estava com saudades de você. ","Ufa! achei que você não voltaria.","O dia hoje está tão lindo.","Qual deve ser a previsão de hoje?","Obaa! olha quem voltou.","Nossa, que sono eu estou sentindo.","Que bom ver você!","Como você está?"]
   let number = Math.floor(Math.random() * (texts.length - 0) + 0);

  return header = {
  "header": {
    "title" : "Oii, sou o bot do portal de ajuda!",
    "subtitle" : texts[number],
    "imageUrl" : homeIcon
  }};
 }

 function randomGIF(){
      let gifs = ["https://media.giphy.com/media/0numoxtLOEcHKvQTVJ/giphy.gif","https://media.giphy.com/media/v7fBgZDczt7TZOqbTy/giphy.gif","https://media.giphy.com/media/MLqSL4lURR4461nbY9/giphy.gif", "https://media.giphy.com/media/lG6CyZ0kIET999yTqD/giphy.gif", "https://media.giphy.com/media/P97TGaGZjV99HOhbxQ/giphy.gif","https://media.giphy.com/media/54eSyXiHwzRUuuXieC/giphy.gif","https://media.giphy.com/media/33UPcwsc4G7iAIjcu5/giphy.gif","https://media.giphy.com/media/Ou0DhuxShWBAh86w5v/giphy.gif"]
      let number = Math.floor(Math.random() * (gifs.length - 0) + 0);
      return gifs[number]
 }
  
  var header = {
  "header": {
    "title" : "Oii, sou o bot do portal de ajuda!",
    "subtitle" : "Estou super feliz em ajudar você.",
    "imageUrl" : "https://i.ibb.co/KF3F91x/Group-363.png"
  }};

    var construcao = [{
      "textParagraph": {
        "text": "Oooops! Esta página ainda está em construção" +
          "<br/> Em breve estará disponível."
      }
    }, {
      "buttons": [{
        "textButton": {
          "text": "Começar de novo.",
          "onClick": {
            "action": {
              "actionMethodName": "INICIO",
            }
          }
        }
      }]
  }];

  var apontamento = [{
      "textParagraph": {
        "text": "Deseja continuar navegando comigo?" 
      }
    }, {
      "buttons": [{
        "textButton": {
          "text": "Começar de novo.",
          "onClick": {
            "action": {
              "actionMethodName": "INICIO",
            }
          }
        }
      }]
  }];
  
  function anotherDoubts(){
    msg = PropertiesService.getUserProperties().getProperty('msg')
  return anotherDoubts = [{
      "textParagraph": {
        "text": "<b>Eu preciso te dar um aviso sobre essa pergunta.</b><br><br>Eu encontrei ela em nossa base de conhecimento, por isso te levarei pra achar a resposta em nosso portal de ajuda, tá?<br>Sem dúvidas você não irá se arrepender de ir lá.<br>Basta clicar em <b><u>CONTINUAR PESQUISA"
      }
    },{
      "buttons": [{
        "imageButton": {
             "iconUrl": arrowRigthIcon,
            "onClick": {
              "openLink": {
              "url": "https://sites.google.com/search/3coracoes.com.br/portaldeajuda?query=" + msg
            }
          }
        }
      },{"textButton": {
          "text": "Continuar pesquisa",
            "onClick": {
              "openLink": {
              "url": "https://sites.google.com/search/3coracoes.com.br/portaldeajuda?query=" + msg
            }
          }
        }
      }]},{"buttons":[{
        "imageButton": {
             "iconUrl": arrowRigthIcon,
              "onClick": {
               "action": {
                "actionMethodName": "ESCOLHADUVIDAS"
            }
          }
        }
      },{"textButton": {
          "text": "Fazer outra pergunta",
          "onClick": {
            "action": {
              "actionMethodName": "ESCOLHADUVIDAS",
            }
          }
        }
      }]},{
      "buttons": [{
        "imageButton": {
             "iconUrl": arrowRigthIcon,
              "onClick": {
               "action": {
                "actionMethodName": "INICIO"
            }
          }
        }
      },{"textButton": {
          "text": "Voltar ao início",
              "onClick": {
               "action": {
                "actionMethodName": "INICIO"
            }
          }
        }
      }]
  }];
  }

function createResponseGroup(paramn){
return text = [{
      "textParagraph": {
        "text": "<b>Olá pessoas do grupo " + paramn + "!<br></b>" + "É um prazer participar do grupo com vocês.<br>Se precisarem de mim, basta me chamar."
      }
}]
}




