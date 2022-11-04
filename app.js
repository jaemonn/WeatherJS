
// Init ui
const ui = new UI;

// Init localStorage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.location);

// Get DOMLoadContent
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const location = document.getElementById('location').value;

    // Change location
    weather.changeLocation(location);

    // Set location in LS
    storage.setLocationData(location);

    //Get and display weather
    getWeather();

    // Close modal
    $('#locModal').modal('hide');
  

    e.preventDefault();

});

function getWeather() {
    weather.getWeather()
        .then(results => {
            console.log(results);

            ui.paint(results);
        })
        .catch(err => console.log(err))
}