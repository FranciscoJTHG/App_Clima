export class Store {
    constructor() {
        this.city;
        this.countryCode;
        this.defaultCity = 'Caracas';
        this.defaultCountry = 've';
    }

    getLocationData() {
        if ( localStorage.getItem('city') === null && localStorage.getItem('contryCode') === null ) {
            this.city = this.defaultCity;
            this.countryCode = this.defaultCountry;
        } else {
            this.city = localStorage.getItem('city');
            this.countryCode = localStorage.getItem('countryCode');
        }

        return {
            city: this.city,
            countryCode: this.countryCode
        }
    }

    setLocationData(city, contryCode) {
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }
}