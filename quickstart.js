const {google} = require('googleapis');

sendMessage();

function sendMessage(){
  const chat = google.chat({
    version: 'v1',
    auth: 'AIzaSyDm-K5Nh9dDqY_7moHovfURZVvpMhJOSHI' // specify your API key here
  });
  
  var scopes = 'https://www.googleapis.com/auth/chat.bot'
  
  async function main() {
    const auth = new google.auth.GoogleAuth({
      // Scopes can be specified either as an array or as a single, space-delimited string.
      scopes: scopes,
    });
    
    // Do the magic
    const res = await chat.spaces.messages.create({
      parent: 'spaces/AAAAZw0HEoY',
      // Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Hangouts Chat thread ID of a thread (created earlier by them) to post further updates to it. Has no effect if thread field, corresponding to an existing thread, is set in message.
      
      // Request body metadata
      requestBody: {
        // request body parameters
        // {
          "actionResponse": {},
          "annotations": [],
          "argumentText": "my_argumentText",
          "attachment": [],
          "cards": [],
          "fallbackText": "my_fallbackText",
          "name": "my_name",
          "sender": {},
          "slashCommand": {},
          "space": {},
          "text": "Esta é uma mensagem enviada por meio de um código convertido em JS.",
          "thread": {}
          
        },
      });
      console.log(res.data);
    }
    
    main().catch(e => {
      console.error(e);
      throw e;
    }); 
  }