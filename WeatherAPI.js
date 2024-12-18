const request = require('request');
const telegramBot = require('node-telegram-bot-api');
const token = '7963494705:AAFQzwVl5R36tTqJ81fx9WSm1ojv6IWGhf8';
const bot = new telegramBot(token,{polling:true});
bot.on('message',(msg)=>{
    if(msg.text=="/start"){
      bot.sendMessage(msg.chat.id,"please enter the location:");
      return;
    }
  });
bot.on('message',(msg) => 
{   
    var loc = msg.text.toString();
        request('https://api.weatherapi.com/v1/current.json?key=09fcaf218dbe4b36a5c164543241712&q='+ loc , function (error, response, body) {
    
            if("error" in JSON.parse(body)){
                if(JSON.parse(body).error.code.toString().length>0){
                    console.log(JSON.parse(body).error.message);
                    bot.sendMessage(msg.chat.id,JSON.parse(body).error.message)
                }
            }
            else{
                //console.log('body:', body); // Print the HTML for the Google homepage.
                console.log("temp",JSON.parse(body).current.temp_c);
                var temp = "Temperature in " +JSON.parse(body).location.name + " city is " +JSON.parse(body).current.temp_c;
                bot.sendMessage(msg.chat.id,temp);
            }
        });
    
});
