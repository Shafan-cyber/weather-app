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
    
const weatherIcon = document.querySelector(".weather-icon");

if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "images/clouds.png";
} else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "images/clear.png";
} else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "images/rain.png";
} else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
} else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "images/mist.png";
} else if (data.weather[0].main === "Snow") {
    weatherIcon.src = "images/snow.png";
}
    
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
