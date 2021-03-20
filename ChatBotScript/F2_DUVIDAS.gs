function caseF2_DUVIDAS(event){
    switch(event){
  
      case "ACESSARPORTAL":
      return createCardResponseCustom(createHeaderWithURL("Bip-Bop você preciva disso? ","Basta clicar em acessar.",botImgVeryHappy),createImg2Text("https://i.ibb.co/gr0BfD8/image-37.png","Acessar o Portal","https://bit.ly/portaldeajuda3c"));
  
      case "FALARCENTRAL":
      return createCardResponseCustom(createHeader("Bip-Bop, Oba! Já tenho as informações","Mas preciso que você responda:"),falarCentral);
  
      case "EscolhaSetorComercial":
      return createCardResponseCustom(createHeaderWithURL("Achei! Agora é só entrar em contato.","Estamos ansiosos para falar com você. ",botImgVeryHappy),createCardNum("Para atendimento exclusivo e especializado, ligue para:<b> 0800 704 1324"));
  
      case "EscolhaSetorGeral":
      return createCardResponseCustom(createHeaderWithURL("Consegui! Agora basta ligar.","Estamos ansiosos para falar com você. ",botImgVeryHappy),createCardNum("Para atendimento especializado, ligue para:<br> <b>(85) 4006 5543"));
      
      case "BackCard":
      var userProperties = PropertiesService.getUserProperties();
      if( userProperties.getProperty('estouComDuvidasCounter') != 0){
      changeValue("subtrair")
      }else{
      PropertiesService.getUserProperties().setProperty('estouComDuvidas', true);
      return createJustHeader(createHeaderWithURL("Pode mandar, essa eu respondo! ","Digite sua dúvida.",doubtsIcon));
      }
      estouComDuvidasCounter = parseInt(userProperties.getProperty('estouComDuvidasCounter'));
      msg = userProperties.getProperty("userMessage")
  
      return createCardResponseCustomUPDATE(createHeaderWithURL("Achei 5 respostas relevantes.⠀⠀⠀⠀⠀⠀<br>"+(estouComDuvidasCounter + 1) +" / 5</br>",msg,newsIcon),createCardDoubt("<b>" + cbDoubt(msg,estouComDuvidasCounter).itemTitle + "</b> <br><br>" + cbDoubt(msg,estouComDuvidasCounter).itemSnippet + "<br><u>" + cbDoubt(msg,estouComDuvidasCounter).itemLink));
  
      case "NextCard":
      var userProperties = PropertiesService.getUserProperties();
      if( userProperties.getProperty('estouComDuvidasCounter') != 4){
      changeValue("soma")
      }else{
      return createCardResponseCustom(createHeaderWithURL("Eita, as respostas acabaram!","Acho que elas foram precisas dessa vez...",loadingIcon),posDuvidas);
      }
      estouComDuvidasCounter = parseInt(userProperties.getProperty('estouComDuvidasCounter'));
      msg = userProperties.getProperty("userMessage")
  
      return createCardResponseCustomUPDATE(createHeaderWithURL("Achei 5 respostas relevantes.⠀⠀⠀⠀⠀⠀<br>"+(estouComDuvidasCounter + 1) +" / 5</br>",msg,newsIcon),createCardDoubt("<b>" + cbDoubt(msg,estouComDuvidasCounter).itemTitle + "</b> <br><br>" + cbDoubt(msg,estouComDuvidasCounter).itemSnippet + "<br><u>" + cbDoubt(msg,estouComDuvidasCounter).itemLink));
  
  }
  }
  
     var falarCentral = [{
        "textParagraph": {
          "text": "Qual o seu setor?"
        }
      }, {
        "buttons": [{
          "textButton": {
            "text": "Comercial",
            "onClick": {
              "action": {
                "actionMethodName": "EscolhaSetorComercial",
              }
            }
          }
        },{
          "textButton": {
            "text": "Outros Setores",
            "onClick": {
              "action": {
                "actionMethodName": "EscolhaSetorGeral",
              }
            }
          }
        }]
    }];
  
       var posDuvidas = [{
        "textParagraph": {
          "text": "<b>Eu consegui ajudar você?"
        }
      }, {
        "buttons": [{
          "textButton": {
            "text": "Avaliar a resposta.",
            "onClick": {
              "action": {
                "actionMethodName": "CONSTRUCAO",
              }
            }
          }
        }]},
        {
        "textParagraph": {
          "text": "<br><b>Esses tópicos também podem te ajudar..."
        }
      },{
        "buttons": [{
          "textButton": {
            "text": "Falar com a central.",
            "onClick": {
              "action": {
                "actionMethodName": "FALARCENTRAL",
              }
            }
          }
        },{
          "textButton": {
            "text": "Visualizar o Portal de Ajuda.",
            "onClick": {
              "action": {
                "actionMethodName": "ACESSARPORTAL",
              }
            }
          }
        },{
          "textButton": {
            "text": "Voltar ao início.",
            "onClick": {
              "action": {
                "actionMethodName": "INICIO",
              }
            }
          }
        }]
    }];