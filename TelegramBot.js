const telegramBot = require("node-telegram-bot-api");
const isPrime = require('is-prime');
const {isEven,isOdd,isEvenOrOdd} = require('is-number-even-or-odd');
const token = '7963494705:AAFQzwVl5R36tTqJ81fx9WSm1ojv6IWGhf8';
const bot = new telegramBot(token,{polling:true});

bot.on('message',(msg)=>{
  if(msg.text=="/start"){
    bot.sendMessage(msg.chat.id,"How can i help you");
    return;
  }
});
bot.on('message',(msg) =>{
  var arr = msg.text.split(" ");
  console.log(arr);
  var opt = arr[0].toLowerCase();
  var num = parseInt(arr[1]);
  if(isNaN(num)){
    bot.sendMessage(msg.chat.id,"please provide a vslid number");
    return;
  }
  if(opt == "even"){
    if(isEven(num)){
      console.log("Even");
      bot.sendMessage(msg.chat.id,"Even");
    }
    else{
      console.log("Not a Even");
      bot.sendMessage(msg.chat.id,"Not a Even");
    }
  }
  else if(opt =="odd"){
    if(isOdd(num)){
      console.log("Odd");
      bot.sendMessage(msg.chat.id,"Odd");
    }
    else{
      console.log("Not a Odd");
      bot.sendMessage(msg.chat.id,"Not a Odd");
    }
  }
  else {
    if(isPrime(num)){
      console.log("Prime");
      bot.sendMessage(msg.chat.id,"Prime");
    }
    else{
      console.log("Composite Number");
      bot.sendMessage(msg.chat.id,"Composite Number");
    }
  }
});
