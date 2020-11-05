const axios = require('axios');

const getClima = async (lat, lon) => {

    const apiid = '5782752bff4f5a0e44200c876d634249';
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiid}&units=metric`);

    const temp = resp.data.main.temp;

    return {
        temp
    }
}

module.exports = {
    getClima
}