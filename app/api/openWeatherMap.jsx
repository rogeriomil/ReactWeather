import axios from 'axios';

const OPEN_WEATHER_MAP = 'http://api.openweathermap.org/data/2.5/weather?appid=443b26d7dc203357f59c538cb817276c&units=metric';

//API KEY: 443b26d7dc203357f59c538cb817276c

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestURL = `${OPEN_WEATHER_MAP}&q=${location}`;

//ES6 promises.. first's true, second's false statement.

       return axios.get(requestURL).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (err) {
            throw new Error(err.response.data.message);
        });
    }
}