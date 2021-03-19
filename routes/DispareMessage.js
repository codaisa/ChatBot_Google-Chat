const {google} = require('googleapis');

exports.sendMessage = async (card, spaceValue)=>{
  const chat = google.chat({
    version: 'v1',
    auth: 'AIzaSyDm-K5Nh9dDqY_7moHovfURZVvpMhJOSHI'
  });
  
  var scopes = 'https://www.googleapis.com/auth/chat.bot'

  async function main() {
    const auth = new google.auth.GoogleAuth({
      scopes: scopes,
    });
    

    const res = await chat.spaces.messages.create({
      parent: 'spaces/' + spaceValue,


      requestBody: {
          "actionResponse": {},
          "annotations": [],
          "argumentText": "my_argumentText",
          "attachment": [],
          "cards": [card],
          "fallbackText": "my_fallbackText",
          "name": "my_name",
          "sender": {},
          "slashCommand": {},
          "space": {},
          "thread": {}
          
        },
      });
      console.log(res.data)
    }

    main().catch(e => {
      console.error(e);
      throw e;
    });
}
  