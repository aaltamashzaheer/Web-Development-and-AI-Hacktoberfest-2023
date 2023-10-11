document.getElementById("enterBtn").addEventListener("click", function() 
{
    var locationInput = document.getElementById("Loc").value;
    getWeatherData(locationInput);
});

function getWeatherData(location) 
{
    // Make an API request to Flask route to retrieve weather data
    fetch("/" + location)
        .then(resp => resp.json())
        .then(data => {
            // Update the weather information in the HTML
            document.getElementById("weatherLocation").innerText = "Weather in " + data.location + ":";
            document.getElementById("temperature").innerText = "Temperature: " + data.temperature + "°C";
            document.getElementById("humidity").innerText = "Humidity: " + data.humidity + "%";
            document.getElementById("description").innerText = "Description: " + data.description;
        })
        .catch(error => console.log(error));
}