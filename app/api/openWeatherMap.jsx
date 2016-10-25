var axios = require('axios');

const APP_ID = '089d0ab8587d97851b70a68424a12c74';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&units=imperial';



module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&appid=${APP_ID}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else {
        //console.log(res);
        return res.data.main.temp;
      }
    }, function(err){
      throw new Error(res.data.message);
    });
  }
}
