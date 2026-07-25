const apiKey = "2f24d13f986764adb7226cb8a80527e2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status === 404) {
        alert("City not found");
        return;
    }

    const data = await response.json();

const iconCode = data.weather[0].icon;

document.querySelector(".weather-icon").src =
`https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    
const iconCode = data.weather[0].icon;

document.querySelector(".weather-icon").src =
`https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener("click", function () {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});
