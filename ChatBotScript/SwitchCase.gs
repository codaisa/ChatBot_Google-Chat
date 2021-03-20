var homeIcon = "https://media.giphy.com/media/x58YCBUxr9NwoWCux3/giphy.gif";
var robotIcon = "https://media.giphy.com/media/P89FwnPXmeJgW2li7y/giphy.gif";
var engrenagemIcon = "https://i.pinimg.com/originals/89/d9/e0/89d9e0f67c361865fe9746c3c3de6b8a.gif";
var engrenagemIcon2 = "https://media.giphy.com/media/iLgZq9oS3kDjEEvNzX/giphy.gif";
var doubtsIcon = "https://media.giphy.com/media/PidtQ2uWrHqxhBnhOa/giphy.gif";
var newsIcon = "https://media.giphy.com/media/ruh0rTUdBlIcHdrjfq/giphy.gif";
var loadingIcon = "https://media.giphy.com/media/ET2ajssSdVeDM9EH7S/giphy.gif"
var updateIcon = "https://media.giphy.com/media/ZIqWns7saAc4oR2N1f/giphy.gif";
var userWriteIcon = "https://media.giphy.com/media/1yM1SaJAhRRHB7qv0u/giphy.gif";
var pointIcon = "https://media.giphy.com/media/O5LaF3NV6QSfEt1jhs/giphy.gif"
var userIcon = "https://media.giphy.com/media/5pG25RKPdbZ1QfRrfi/giphy.gif"
var ideaIcon = "https://media.giphy.com/media/TcDwMSpL0sAt7DF33b/giphy.gif"
var heartIcon = "https://media.giphy.com/media/1SbMc69YtkWnebNHdC/giphy.gif"
var correctIcon = "https://media.giphy.com/media/FFYNQ3hHkZjnZdWhJw/giphy.gif"
var wrongIcon = "https://media.giphy.com/media/9Vg0p2UGGOs1fq59R6/giphy.gif"
var arrowRigthIcon = "https://media0.giphy.com/media/cluiWeXsDpg5uEtyrG/source.gif"

function onCardClick(event) {
  var eventName = event.action.actionMethodName

  switch(eventName){
    /* ## F0_CONTENT ## */

    case "INICIO":
    return createCardResponse(home);

    /* ## F0_CONTENT ## */


    /* ## F1_CONTENT ## */

    case "ESCOLHADUVIDAS":
    PropertiesService.getUserProperties().setProperty('estouComDuvidas', true);
    return createJustHeader(createHeaderWithURL("Pode mandar, essa eu respondo! ","Digite sua dúvida.",doubtsIcon));

    case "AJUDAPERFEITO":
    return createCardResponseCustom(createHeaderWithURL("Nossa, Já achei aqui!","Essa resposta foi super rápida.",engrenagemIcon2),ajudePerfeito);

    case "APONTARHORAS":
    return createCardResponse(apontamentoHoras);

    case "HOMECHAMADOS":
    return createCardResponseCustom(createHeaderWithURL("Página de chamados saindo do forno!","Para onde você deseja ir? ",updateIcon),homeChamado);

        case "ABRIRCHAMADO":
    return createCardResponseCustom(createHeaderWithURL("Parece que teremos um novo chamado. ","Como você deseja abri-lo?",userIcon),abrirChamado);

    /* ## F1_CONTENT ## */
    case "HORAENTRADA":
     ponto(event.user.displayName,"ENTRADA");
     if(event.space.singleUserBotDm){
     return createCardResponseCustom(createHeaderWithURL("Oobaaa! Mãos a obra! ","Hora de entrada adicionada " + convertName(event.user.displayName),correctIcon), apontamento); 
     }else{
    return createJustHeader(createHeaderWithURL("Oobaaa! Mãos a obra! ","Hora de entrada adicionada " + convertName(event.user.displayName),correctIcon));    
     }

    case "HORASAIDA":
      ponto(event.user.displayName,"SAIDA");
         if(event.space.singleUserBotDm){
     return createCardResponseCustom(createHeaderWithURL("Ahhh, você já está saindo? ","Hora de saída adicionada " + convertName(event.user.displayName),correctIcon), apontamento);
         }
      else{
     return createJustHeader(createHeaderWithURL("Ahhh, você já está saindo? ","Hora de saída adicionada " + convertName(event.user.displayName),correctIcon));
      }

    /* ## F2_CONTENT ## */

    case "FALARCENTRAL":
    return caseF1_DUVIDAS(eventName);

    case "EscolhaSetorComercial":
     return caseF1_DUVIDAS(eventName);

     case "EscolhaSetorGeral":
    return caseF1_DUVIDAS(eventName);
    
    case "ACESSARPORTAL":
    return caseF1_DUVIDAS(eventName);

    case "BackCard":
    return caseF1_DUVIDAS(eventName);

    case "NextCard":
    return caseF1_DUVIDAS(eventName);

    case"ESCOLHANOME":
    return caseF1_AJUDE_PERFEITO(eventName);

    case "CALLBACKUSER":
    return caseF1_AJUDE_PERFEITO(eventName);

    case "PLATAFORMACHAMADO":
    return caseF1_ABRIR_CHAMADO(eventName);

    case "FORMULARIOCHAMADO":
    return caseF1_ABRIR_CHAMADO(eventName);

    case "DUVIDAEMCHAMADOS":
    return caseF1_ABRIR_CHAMADO(eventName);

    case "DUVIDAPORTAL":
    
 
     /* ## F2_CONTENT ## */


    /* ## OTHER ## */

    case"CONSTRUCAO":
    return createCardResponseCustom(createHeaderWithURL("Ooops, esta página ainda está em construção. ","Em breve estará pronta, ok?",engrenagemIcon), construcao);

    default:
    var message = "CODE 001: Falha na opção selecionada, ( " + event.action.actionMethodName + " )";
    return { "text": message };
    break;

    /* ## OTHER ## */
  }
}