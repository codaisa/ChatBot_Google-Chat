const verificar = (event) =>{
    let a = 0;
    let msgPadrao = [/* MENSSAGEM QUE DESEJA VERIFICAR SE CONTÉM NO QUE O USUÁRIO ESCREVEU.  */]
    for(a = 0; a <= msgPadrao.length; a++){
      if(event.indexOf(msgPadrao[a]) > -1){ return event }
    }
  }
  
  const saudacoes = () =>{
   let data = new Date();
    let hora = data.getHours();
    if(hora < 12 && hora >= 6){
      return "bom dia";
    } if (hora <= 18 && hora >= 12){
      return "boa tarde";
    } else {
      return "boa noite";
    }
  }
  
  /* ## FUNÇÃO PARA CONVERTER O NOME DO USUÁRIO ## */
  const convertName = (name) => {
    const [firstLetter, ...rest] = name.split(" ")[0];
    return `${firstLetter}${rest.join('').toLowerCase()}`;
  }
  
  /* ## FUNÇÃO PARA RESPONDER A MENSAGEM DO USUÁRIO ##*/
  function onMessage(event) {
    var msg = event.message.text.replace(/@PortalBot /i, '').toLowerCase();
    var msg2 = event.message.text.toLowerCase();
  
    if (event.space.type == "DM") {
      if (PropertiesService.getUserProperties().getProperty('estouComDuvidas')){
        var userProperties = PropertiesService.getUserProperties();
        if(verificar(msg2)){
          userProperties.deleteAllProperties();
          let msgAdjust = msg2.replace(/ /g,"+")
          userProperties.setProperty('msg',msgAdjust)
          return createCardResponseCustom(createHeaderWithURL("Opa, essa pergunta é famosa.","Vamos viajar juntos para o portal de ajuda!",pointIcon),anotherDoubts())
        }
  
        userProperties.deleteAllProperties();
        userProperties.setProperty('estouComDuvidasCounter',"0")      
        userProperties.setProperty('userMessage',msg)
        estouComDuvidasCounter = parseInt(userProperties.getProperty('estouComDuvidasCounter'))
  
        return createCardResponseCustom(createHeaderWithURL("Achei 5 respostas relevantes.⠀⠀⠀⠀⠀⠀<br>"+(estouComDuvidasCounter + 1) +" / 5</br>",msg,newsIcon),createCardDoubt("<b>" + cbDoubt(msg,estouComDuvidasCounter).itemTitle + "</b> <br><br>" + cbDoubt(msg,estouComDuvidasCounter).itemSnippet + "<br><u>" + cbDoubt(msg,estouComDuvidasCounter).itemLink));
      }
  
      if (PropertiesService.getUserProperties().getProperty('selectName')){
        PropertiesService.getUserProperties().deleteAllProperties()
        insertName(msg);
        return createCardResponseCustom(createHeaderWithURL("Nossa eu adorei o nome! ","Ficarei super feliz em usar.",heartIcon),nickName);
      }
  
      if(verificar(msg2)){
        return createCardResponseCustom(createHeaderWithURL("Olá " + convertName(event.user.displayName) + ", " + saudacoes() + "!", "Em que  posso ajudar você?", homeIcon),home);
      }
  
      else{
        return createCardResponseCustom(createHeaderWithURL("T̷r̷a̷v̷e̷e̷i̷, não conheço este comando :(","Vamos voltar para o início?",wrongIcon),createJustText("Este comando é desconhecido pra mim, você poderia tentar digitar outro?<br><u>Tente digitar: <b>@Portalbot"))   
      }
    }
    else {
      return createCardResponseCustom(createHeaderWithURL("Bip-bop Você precisa da minha ajuda? ","Me chame no privado!",robotIcon),createJustText("Ainda estou em fase de desenvolvimento, por conta disto meus desenvolvedores me ajustaram para lhe ajudar somente no <b>privado.<br><br>Basta clicar no meu ícone e me permitir falar com você!"));
    }
  }
  
  /* ## FUNÇÃO PARA RESPONDER QUANDO É ADICIONADO AO CHAT ## */
  function onAddToSpace(event) {
    if (event.space.singleUserBotDm) {
      return createCardResponseCustom(createHeaderWithURL("Olá " + convertName(event.user.displayName) +", " + saudacoes() + "!","Tudo certo? ",robotIcon),createImg("https://media.giphy.com/media/lQ7payiGhj5xkyxIg2/giphy.gif","INICIAR A CONVERSA"))
  
    } else {
      return createCardResponseCustom(createHeaderWithURL("Os humanos falam " + saudacoes() +"...","Calma, eu estou em um grupo??",robotIcon),createResponseGroup((event.space.displayName ? event.space.displayName : "/")))
  
    }
  }
  
  
  /* ## FUNÇÃO PARA RESPONDER QUANDO É REMOVIDO DO CHAT ##*/
  function onRemoveFromSpace(event) {
    console.info("Bot removed from ",
        (event.space.name ? event.space.name : "this chat"));
  }
  
  function pickByPlan(range) {
    var spreadsheet = SpreadsheetApp.openByUrl(/* LINK DA PLANILHA QUE DESEJA BUSCAR O DADO */);
    return spreadsheet.getRange(range).getValue();
  };
  
  function insertName(name) {
    var spreadsheet = SpreadsheetApp.openByUrl(/* LINK DA PLANILHA PARA ESCREVER A SUGESTÃO DE NOME */);
    var counter = 13
    while(spreadsheet.getRange("A"+counter).getValue() > ""){
    counter ++;
    }
    
    spreadsheet.getRange("A"+counter).setValue(name);
  };
  
  function ponto(userID, paramn) {
    var data = new Date();
    var tipe = paramn == "ENTRADA" ? "C" : "D";
  
    var spreadsheet = SpreadsheetApp.openByUrl(/* LINK DA PLANILHA DE PONTO */);
      let a = 0
      while (spreadsheet.getSheets()[a].getSheetName() != userID) {
      a++
      }
  
      var hora = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
      var moth = data.getMonth()+1 <= 10 ? "0"+ (data.getMonth()+1) : (data.getMonth()+1)
      var day =  data.getDate() <= 10 ? "0"+ data.getDate() : data.getDate()
      var dataFull = data.getFullYear()+"-"+moth+ "-" + day
  
      let d = 3
      while(spreadsheet.getSheets()[a].getRange("A"+ d).getValue().toISOString().replace(/\.\d{3}Z$/, '').substr(0,10) != dataFull){
        d++
      }
      spreadsheet.getSheets()[a].getRange(tipe + d).setValue(hora)
   };
  
  function cbDoubt(duvida,value){
    duvida.replace(/ /g,"+")
    try{
      var userProperties = PropertiesService.getUserProperties();
      if(parseInt(userProperties.getProperty('estouComDuvidasCounter')) == 0){
        resApi = UrlFetchApp.fetch(/* API CUSTOM SEARCH */+duvida).getC+ontentText()
        userProperties.setProperty('resApi', resApi)
        resApiJSON= JSON.parse(userProperties.getProperty('resApi'))
      }
      else{
        resApiJSON= JSON.parse(userProperties.getProperty('resApi'))
      }
      var item = resApiJSON.items[value];
      concat = {itemTitle: item.title, itemSnippet: item.snippet, itemLink: "Para mais informações acesse: " + item.link}
      }
    catch(error){
      concat = {itemTitle: "FALHA NA CONSULTA", itemSnippet: "Oops. A quota de requisições de dúvidas da minha API foi excedida. Favor entrar em contato com Elzevir.", itemLink: ""}    
      }
    return concat
  }
  
  const changeValue = (change) => {
    let userProperties = PropertiesService.getUserProperties()
    let convertNumber = parseInt(userProperties.getProperty('estouComDuvidasCounter'));
    userProperties.deleteProperty('estouComDuvidasCounter')
    change == "soma" ? convertNumber ++ : convertNumber -- ;
    userProperties.setProperty('estouComDuvidasCounter',convertNumber)
  }
  
  function sendMessage(){
    var data = new Date();
    fullhour = data.getHours() + ":" + data.getMinutes();
    switch(fullhour){
    
    case "8:0":
      sendMessagePonto(/* SPACE KEY */);
    break;
  
    case "14:0":
      sendMessagePonto(/* SPACE KEY */);
    break
  
    case "18:0":
      sendMessagePonto(/* SPACE KEY */);
    break
    }
  }
  