//recovery code Twillio dev Account rFnH01G_0x8aBzmcesoQsf6RsrYmYtDoEFD7zmIY
require('dotenv').config({path: "./credentials.env"});

// const accountSid = "ACc82afbffe0ae04d0a3d66cae5f4f7a13"; 
// const authToken = "63d3205f6a755ba0dddbe24a812ad9da"; 
const accountSid = process.env.accountSid; 
const authToken = process.env.authToken; 
const client = require('twilio')(accountSid, authToken); 

// client.messages 
//     .create({ 
//         body: 'Message from Node Server', 
//         from: 'whatsapp:+14155238886',       
//         to: 'whatsapp:+971563729386' 
//     }) 
//     .then(message => console.log(message.sid)) 
//     .done();



//Send Whatsapp Messages with Image
client.messages 
    .create({ 
        body: 'Image from NODEJS SERVER', 
        from: 'whatsapp:+14155238886',       
        to: 'whatsapp:+971563729386',
        mediaUrl:"https://imgix.datadoghq.com/img/APM-Drill-Gif-3-Final.png",
    }) 
    .then(message => console.log(message.sid)) 
    .done();

