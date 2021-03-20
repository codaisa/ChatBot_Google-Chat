function caseF1_AJUDE_PERFEITO(event){
    switch(event){
      case"ESCOLHANOME":
      return caseF2_AJUDE_PERFEITO(event);
  
      case "CALLBACKUSER":
      return caseF2_AJUDE_PERFEITO(event);
  }}
  
  var ajudePerfeito = [{
        "textParagraph": {
          "text": "<b>Olá, você sabia que estou em constante melhoria?</b><br>Meus desenvolvedores estão diariamente propondo melhorias em meu software para que eu lhe ajude da melhor forma, então, sua resposta irá me ajudar a me tornar uma pessoa, ops, um robozinho melhor!"
        }
      }, {
        "buttons": [{
          "textButton": {
            "text": "Sugerir um nome",
            "onClick": {
              "action": {
                "actionMethodName": "ESCOLHANOME",
              }
            }
          }
        }, {
          "textButton": {
            "text": "Avalie o ChatBot",
            "onClick": {
              "action": {
                "actionMethodName": "CALLBACKUSER",
              }
            }
          }
        }]
    }];
    