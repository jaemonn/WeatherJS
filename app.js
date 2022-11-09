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

// Seach input event listener
// document.getElementById('location').addEventListener('keyup', (e) => {
//     // Get input text
//     const locationText = e.target.value;

//     if(locationText !== '') {
//         // Make http call
//         getLocation();
//     }else {
        
//     }

// });


// Change Location
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const location = document.getElementById('location').value;
    const locModal = document.getElementById('locModal');

    // Change location
    weather.changeLocation(location);

    // Set location in LS
    storage.setLocationData(location);

    //Get and display weather
    getWeather();

    // Close modal
    ui.clear();

    e.preventDefault();

});



function getWeather() {
    weather.getWeather()
        .then(results => {
            console.log(results);

            ui.paint(results);
        })
        .catch(err => console.log(err));
}

