const request = require('request');
request('https://api.weatherapi.com/v1/current.json?key=09fcaf218b36a5c164543241712&q=Bhimavaram', function (error, response, body) {
    if("error" in JSON.parse(body)){
        if(JSON.parse(body).error.code.toString().length>0){
            console.log(JSON.parse(body).error.message);
        }
    }
    else{
        //console.log('body:', body); // Print the HTML for the Google homepage.
        console.log("temp",JSON.parse(body).current.temp_c);
    }
});
