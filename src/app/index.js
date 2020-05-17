const { Wheather } = require('./Weather');
const { UI } = require('./UI');
const { Store } = require('./Store');

const store = new Store();
const { city, countryCode } = store.getLocationData();
console.log(city, countryCode);


const ui = new UI
const weather = new Wheather(city, countryCode);

require('./index.css');

async function fetchWeather() {
    const data = await weather.getWheater();
    ui.render(data);
}

document.addEventListener('DOMContentLoaded', fetchWeather);

document.getElementById('w-change-btn').addEventListener('click', function (event) {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    weather.changeLocation(city, countryCode);
    store.setLocationData(city, countryCode);
    fetchWeather();
    event.preventDefault();
})