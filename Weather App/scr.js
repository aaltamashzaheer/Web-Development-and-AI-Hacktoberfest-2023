const API_KEY = "a40721a225d357bfe4e3b14c20c1c081";

function getWeatherData(location) 
{
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        const weatherInfo = {
          location: location,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          description: data.weather[0].description,
        };
        document.getElementById('weatherLocation').innerHTML +="Weather in:"+" "+weatherInfo.location;
        document.getElementById('temperature').innerHTML +="Temperature:"+" "+weatherInfo.temperature+"°C";
        document.getElementById('humidity').innerHTML +="Humidity:"+" "+weatherInfo.humidity+"%";
        document.getElementById('description').innerHTML +="Description:"+" "+weatherInfo.description;

      } else {
        document.getElementById('temperature').innerHTML = data.message;
        console.error("Error:", data.message);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("search_btn").addEventListener("click",function(){
        document.getElementById('weatherLocation').innerHTML ="";
        document.getElementById('temperature').innerHTML ="";
        document.getElementById('humidity').innerHTML ="";
        document.getElementById('description').innerHTML ="";
        const location = document.getElementById('loc_inp').value;
        getWeatherData(location);
    })

})
