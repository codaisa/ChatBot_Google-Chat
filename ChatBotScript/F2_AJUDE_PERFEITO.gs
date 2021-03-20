function caseF2_AJUDE_PERFEITO(event){
    switch(event){
      case"ESCOLHANOME":
      PropertiesService.getUserProperties().setProperty('selectName', true);
      return createJustHeader(createHeaderWithURL("Oba! vou ter um nome!","Digite sua sugestão " ,ideaIcon))
  
      case "CALLBACKUSER":
      return createCardResponseCustom(createHeaderWithURL("Uhuul! Vou receber uma melhoria. ","Basta clicar em acessar formulário",ideaIcon),createImg2Text("https://i.ibb.co/RCpjkkQ/image-248.png","Acessar formulário","https://forms.gle/23SYfR6q6SUUfkqH6"));
  }}
  
  var nickName = [{
        "textParagraph": {
          "text": ""
        }
      }, {
        "buttons": [{
          "textButton": {
            "text": "Escolher outro apelido",
            "onClick": {
              "action": {
                "actionMethodName": "ESCOLHANOME",
              }
            }
          }
        }, {
          "textButton": {
            "text": "Começar de novo",
            "onClick": {
              "action": {
                "actionMethodName": "INICIO",
              }
            }
          }
        }]
    }];