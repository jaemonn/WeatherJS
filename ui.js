class UI{
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.details = document.getElementById('w-details');
        this.humidity = document.getElementById('w-humidity');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.feels_like = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        // Fahrenheit parse int
        const dewPointF = parseInt(`${weather.response.currentConditions.dew}`);
        const feelsLikeF = parseInt(`${weather.response.currentConditions.feelslike}`);

        // Unit conversion
        const dewInCelsius = Math.round((dewPointF - 32) * 5/9);
        const feelsLikeInCelsius = Math.round((feelsLikeF - 32) * 5/9);


        this.location.textContent = weather.response.resolvedAddress;
        this.desc.textContent = weather.response.currentConditions.description;

        const desiredLink = `Icons/${weather.response.currentConditions.icon}.svg`;
        // this.icon.location.href = desiredLink;
        //console.log(desiredLink);
        this.icon.setAttribute('src', desiredLink);

        this.humidity.textContent = `Relative Humidity: ${weather.response.currentConditions.humidity}%`;
        this.dewpoint.textContent = `Dew Point: ${dewInCelsius} C (${weather.response.currentConditions.dew} F)`;
        this.feels_like.textContent = `Feels like: ${feelsLikeInCelsius} C (${weather.response.currentConditions.feelslike} F) `;
        this.wind.textContent = `Wind: ${weather.response.currentConditions.windspeed} mph`
    }

    clear() {
        document.getElementById('location').value = '';
    }
}

