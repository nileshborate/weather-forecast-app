
const apicall = require("./utils")

apicall.geocode('Delhi',(error,{latitude,longitude,location})=>{
    if(error){
        return error;
    }
    apicall.forecast(latitude,longitude,(error,data2)=>{
        if(error){
            return error;
        }
        console.log("Location = ",location);
        console.log("Weather = ",data2);
    })
});

