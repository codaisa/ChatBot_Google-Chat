function caseF1_DUVIDAS(event){
    switch(event){
  
      case "ACESSARPORTAL":
      return caseF2_DUVIDAS(event)
  
      case "FALARCENTRAL":
      return caseF2_DUVIDAS(event)
  
      case "EscolhaSetorComercial":
      return caseF2_DUVIDAS(event)
  
      case "EscolhaSetorGeral":
      return caseF2_DUVIDAS(event)
  
      case "BackCard":
      return caseF2_DUVIDAS(event)
  
      case "NextCard":
      return caseF2_DUVIDAS(event)
  } }
    
  function createText (text) {
  return [{
        "textParagraph": {
          "text": text +
            "<br/>"
        }
      },{"buttons": [{
        
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
            "text": "Avaliar resposta",
            "onClick": {
              "action": {
                "actionMethodName": "CONSTRUCAO",
              }
            }
          }
        }]} ,{
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
            "text": "Começar de novo.",
            "onClick": {
              "action": {
                "actionMethodName": "INICIO",
              }
            }
          }
        }]
    }];
  }
  
    function createHeaderCards(){
    return {
    "header": {
      "title" : "Uhuul! Encontrei uma respota!",
      "subtitle" : "Esta resposta ajudou você?",
      "imageUrl" : "https://i.ibb.co/KF3F91x/Group-363.png"
    }}; 
    }
  
  
  