function caseF1_ABRIR_CHAMADO(event){
    switch(event){
      case"FORMULARIOCHAMADO":
      return createCardResponseCustom(createHeaderWithURL("Uhuul! Encontrei o nosso formulário. ","Basta clicar em Abrir formulário",userWriteIcon),createImg2Text("https://i.ibb.co/DbpFr8y/Captura-de-tela-2021-02-02-114153.png","Abrir formulário","https://sites.google.com/3coracoes.com.br/portaldeajuda/abrir-chamado"));
      
      case "PLATAFORMACHAMADO":
      return createCardResponseCustom(createHeaderWithURL("Uhuul! Encontrei o nosso site de chamados ","Basta clicar em Acessar Site",userWriteIcon),createImg2Text("https://i.ibb.co/DbpFr8y/Captura-de-tela-2021-02-02-114153.png","Acessar Site","https://sites.google.com/3coracoes.com.br/portaldeajuda/abrir-chamado"));
  
      case "DUVIDAEMCHAMADOS":
      return createCardResponseCustom(createHeaderWithURL("Opa! Encontrei essa dúvida no meu SSD. ","Entenda abaixo as diferenças.",engrenagemIcon),createCardDuvidas("Existem algumas diferenças entre abrir um chamado por <b><u>formulário</b></u> ou abrir diretamente na plataforma <b><u>Xmanager</b></u>.<br><br><b>Por formulário: </b>O processo é mais simples porém não é possível você acompanha-lo já que não terá o número do mesmo.<br><br><b>Por Xmanager: </b> O processo é um pouco mais complexo, porém, você conseguirá acompanhar o mesmo e toda a navegação do chamado apartir do número de abertura."));
  
  }}
  
  var homeChamado = [{
  "textParagraph": {
          "text": ""
        }
      }, {
        "buttons": [{
              "imageButton": {
               "iconUrl": arrowRigthIcon,
                "onClick": {
                 "action": {
                  "actionMethodName": "CONSTRUCAO"
              }
            }
          }
        },{
          "textButton": {
            "text": "Meus Chamados Abertos",
            "onClick": {
              "action": {
                "actionMethodName": "CONSTRUCAO",
              }
            }
          }
        }]},{ "buttons": [{
              "imageButton": {
               "iconUrl": arrowRigthIcon,
                "onClick": {
                 "action": {
                  "actionMethodName": "CONSTRUCAO"
              }
            }
          }
        },{
          "textButton": {
            "text": "Consultar um chamado",
            "onClick": {
              "action": {
                "actionMethodName": "CONSTRUCAO",
              }
            }
          }
        }]},{ "buttons": [{
              "imageButton": {
               "iconUrl": arrowRigthIcon,
                "onClick": {
                 "action": {
                  "actionMethodName": "CONSTRUCAO"
              }
            }
          }
        },{
          "textButton": {
            "text": "Abrir um chamado",
            "onClick": {
              "action": {
                "actionMethodName": "ABRIRCHAMADO",
              }
            }
          }
        }]
    }];
  
  var abrirChamado = [{
        "textParagraph": {
          "text": ""
        }
      }, {
        "buttons": [{
              "imageButton": {
               "iconUrl": arrowRigthIcon,
                "onClick": {
                 "action": {
                  "actionMethodName": "ABRIRCHAMADO"
              }
            }
          }
        },{
          "textButton": {
            "text": "Abrir por o Xmanager",
            "onClick": {
              "action": {
                "actionMethodName": "PLATAFORMACHAMADO",
              }
            }
          }
        }]},{ "buttons": [{
              "imageButton": {
               "iconUrl": arrowRigthIcon,
                "onClick": {
                 "action": {
                  "actionMethodName": "ABRIRCHAMADO"
              }
            }
          }
        },{
          "textButton": {
            "text": "Abrir por formulário",
            "onClick": {
              "action": {
                "actionMethodName": "FORMULARIOCHAMADO",
              }
            }
          }
        }]},{ "buttons": [{
              "imageButton": {
               "iconUrl": arrowRigthIcon,
                "onClick": {
                 "action": {
                  "actionMethodName": "ABRIRCHAMADO"
              }
            }
          }
        },{
          "textButton": {
            "text": "Qual a diferença entre eles ?",
            "onClick": {
              "action": {
                "actionMethodName": "DUVIDAEMCHAMADOS",
              }
            }
          }
        }]
    }];
  
  function createCardDuvidas(text){
  return [{
        "textParagraph": {
          "text": text
        }
      }, {
        "buttons": [{
          "textButton": {
            "text": "Voltar",
            "onClick": {
              "action": {
                "actionMethodName": "ABRIRCHAMADO"
              }
            }
          }
        }
      ]
    }]
  }