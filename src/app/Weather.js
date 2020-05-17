
export class Wheather {
    constructor(city, countryCode) {
        this.apyKey = '4dcd268aa18f81d898be63e935dd7967'
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWheater() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apyKey}&units=metric`;

        const response  = await fetch(URI);
        const data = response.json();
        return data;
    }

    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
    }
}