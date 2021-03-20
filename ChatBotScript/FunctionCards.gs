function createImg(imageUrl, text){
    return [{
                "image": { "imageUrl": imageUrl }
              },
              {
                "buttons": [
                  {
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
                      "text": text,
                      "onClick": {
                          "action": {
                          "actionMethodName": "INICIO",
                        }
                      }
                    }
                  }
                ]
              }
            ];
  }
  
  function createImg2Text(imageUrl, text, textURL){
    return [{
                "image": { "imageUrl": imageUrl }
              },
              {
                "buttons": [
                  {
                    "textButton": {
                      "text": text,
                      "onClick": {
                          "openLink": {
                          "url": textURL
                        }
                      }
                    }
                  }
                ]
              },{
                "buttons": [
                  {
                    "textButton": {
                      "text": "Começar de novo",
                      "onClick": {
                          "action": {
                          "actionMethodName": "INICIO",
                        }
                      }
                    }
                  }
                ]
              }
            ];
            
  }
  
  /* ## FUNÇÃO PARA CRIAR O EMBED ##*/
  function createCardResponse(widgets) {
    return {
      "cards": [
        randomHeader(),
        {
          "sections": [{
            "widgets": widgets
          }]
        }]
    };
  }
  
  function createCardResponseCustom(header, widgets) {
    return {
      
    "actionResponse":{
      "type":"NEW_MESSAGE"
    },
      "cards": [
        header,
        {
          "sections": [{
            "widgets": widgets
          }]
        }]
    };
  }
  
  function createCardResponseCustomUPDATE(header, widgets) {
    return {
      
    "actionResponse":{
      "type":"UPDATE_MESSAGE"
    },
      "cards": [
        header,
        {
          "sections": [{
            "widgets": widgets
          }]
        }]
    };
  }
  
  function createCardResponseWithTwoHeaders(headerTwo,header, widgets) {
    return {
      "cards": [
        headerTwo,
        header,
        {
          "sections": [{
            "widgets": widgets
          }]
        }]
    };
  }
  
  function createHeader(title, subtitle){
    return {
    "header": {
      "title" : title,
      "subtitle" : subtitle,
      "imageUrl" : "https://i.ibb.co/9wFcKNQ/robo.png"
    }}; 
    }
  
    function createHeaderWithURL(title, subtitle,url){
    return {
    "header": {
      "title" : title,
      "subtitle" : subtitle,
      "imageUrl" : url
    }}; 
    }
  
    function createJustHeader(header){
    return {
      "cards": [
      header,
      ]
    };
    }
  
  function createCardNum(text){
  return [{
        "textParagraph": {
          "text": text
        }
      }, {
        "buttons": [{
          "textButton": {
            "text": "COMEÇAR DE NOVO",
            "onClick": {
              "action": {
                "actionMethodName": "INICIO"
              }
            }
          }
        }
      ]
    }]
  }
  
  function createJustText(text){
  return [{
        "textParagraph": {
          "text": text
        }
      }]
  }
  
  function createCardDoubt(text){
  return [{
        "textParagraph": {
          "text": text
        }
      },{
            "buttons": [{
              "textButton": {
                "text": "⠀< < ",
                "onClick": {
                  "action": {
                    "actionMethodName": "BackCard",
                  }
                }
              }
            }, {
              "textButton": {
                "text": "⠀⠀⠀⠀⠀Voltar ao início⠀⠀⠀⠀⠀",
                "onClick": {
                  "action": {
                    "actionMethodName": "INICIO"
                  }
                }
              }
            },{
              "textButton": {
                "text": " > >⠀",
                "onClick": {
                  "action": {
                    "actionMethodName": "NextCard"
                  }
                }
              }
            }]
          }]
  }
  