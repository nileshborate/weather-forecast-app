
const http = require('http');

const url = "http://api.weatherstack.com/current?access_key=8099067d386c526f4ea3369d68bedb3e&query=pune";

const request = http.request(url,(response) => {
    response.on('data',(res)=>{
        console.log("Data = ",res.toString());
    })
    response.on('end',()=>{
        console.log("End");
    })
})

request.end();


