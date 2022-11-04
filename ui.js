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
        this.location.textContent = weather.response.resolvedAddress;
        this.desc.textContent = weather.response.days[0].description;

        const desiredLink = `Icons/${weather.response.days[0].icon}.svg`;
        // this.icon.location.href = desiredLink;
        console.log(desiredLink);
        this.icon.setAttribute('src', desiredLink);

        this.humidity.textContent = `Relative Humidity: ${weather.response.days[0].humidity}%`;
        this.dewpoint.textContent = `Dew Point: ${weather.response.days[0].dew} F`;
        this.feels_like.textContent = `Feels like: ${weather.response.days[0].feelslike} F`;
        this.wind.textContent = `Wind: ${weather.response.days[0].windspeed} mph`
    }
}

