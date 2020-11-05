const axios = require('axios');

const getLugarLatLng = async (dir) => {

    const encodedUrl = encodeURI(dir);

    const apiid = '5782752bff4f5a0e44200c876d634249';
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=${apiid}&units=metric`,
        timeout: 1000
    });

    const resp = await instance.get();

    if (!resp.data.coord) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lon = data.coord.lon;

    return {
        direccion,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLng
}