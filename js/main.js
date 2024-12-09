// Global variables================================================================
var todayName = document.querySelector('#todayName');
var currentDate = document.querySelector('#currentDate');
var searchInput = document.querySelector('#searchInput');
var cityName = document.querySelector('#cityName');
var cityTemp = document.querySelector('#cityTemp');
var weatherConditionImg = document.querySelector('#weatherConditionImg');
var weatherCondition = document.querySelector('#weatherCondition');
var tomorrowDay = document.querySelector('#tomorrowDay');
var tomorrowIcon = document.querySelector('#tomorrowIcon');
var maxTemp = document.querySelector('#maxTemp');
var minTemp = document.querySelector('#minTemp');
var tomorrowCondition = document.querySelector('#tomorrowCondition');
var afterTomorrowDay = document.querySelector('#afterTomorrowDay');
var AftertomorrowIcon = document.querySelector('#AftertomorrowIcon');
var afterTomorrowMaxTemp = document.querySelector('#afterTomorrowMaxTemp');
var afterTomorrowMinTemp = document.querySelector('#afterTomorrowMinTemp');
var afterTomorrowCondition = document.querySelector('#afterTomorrowCondition');

var humidity = document.querySelector('#humidity');
var wind = document.querySelector('#wind');
var windDirection = document.querySelector('#windDirection');

var tomorrowHumidity = document.querySelector('#tomorrowHumidity');
var tomorrowWind = document.querySelector('#tomorrowWind');
var tomorrowWindDirection = document.querySelector('#tomorrowWindDirection');

var afterTomHumidity = document.querySelector('#afterTomHumidity');
var afterTomWind = document.querySelector('#afterTomWind');
var afterTomWindDirection = document.querySelector('#afterTomWindDirection');

//======================================================================================
async function getWeatherData(city) {
    var response = await (await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ea7787fb0d3849b188e61225240701&q=${city}&days=3`)).json();

    data = response;
    console.log(data);
    displayData(data);

}

function displayData(data) {

    // ===========TODAY================================

    var todayDate = new Date()
    currentDate.innerHTML = todayDate.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    todayName.innerHTML = todayDate.toLocaleDateString('en-US', { weekday: 'long' })
    cityName.innerHTML = data.location.name;
    cityTemp.innerHTML = data.current.temp_c + '°C'
    weatherConditionImg.setAttribute("src", 'https:' + data.current.condition.icon);
    weatherCondition.innerHTML = data.current.condition.text

    humidity.innerHTML = data.current.humidity + '%'
    wind.innerHTML = data.current.wind_kph + 'km/h'
    windDirection.innerHTML = data.current.wind_dir


    // ===========TOMORROW================================

    var tomorrowDate = new Date(data.forecast.forecastday[1].date)

    tomorrowDay.innerHTML = tomorrowDate.toLocaleDateString('en-US', { weekday: 'long' })
    tomorrowIcon.setAttribute('src', 'http:' + data.forecast.forecastday[1].day.condition.icon)
    maxTemp.innerHTML = data.forecast.forecastday[1].day.maxtemp_c + '°C'
    minTemp.innerHTML = data.forecast.forecastday[1].day.mintemp_c + '°C'
    tomorrowCondition.innerHTML = data.forecast.forecastday[1].day.condition.text

    var tomorrowFirstHour = data.forecast.forecastday[1].hour[0];
    tomorrowHumidity.innerHTML = tomorrowFirstHour.humidity + '%';
    tomorrowWind.innerHTML = tomorrowFirstHour.wind_kph + 'km/h'
    tomorrowWindDirection.innerHTML = tomorrowFirstHour.wind_dir

    // ===========AFTER TOMORROW================================

    var afterTomorrowDate = new Date(data.forecast.forecastday[2].date);

    afterTomorrowDay.innerHTML = afterTomorrowDate.toLocaleDateString('en-US', { weekday: 'long' });
    AftertomorrowIcon.setAttribute('src', 'https:' + data.forecast.forecastday[2].day.condition.icon);
    afterTomorrowMaxTemp.innerHTML = data.forecast.forecastday[2].day.maxtemp_c + '°C';
    afterTomorrowMinTemp.innerHTML = data.forecast.forecastday[2].day.mintemp_c + '°C';
    afterTomorrowCondition.innerHTML = data.forecast.forecastday[2].day.condition.text;


    var afterTomorrowHour = data.forecast.forecastday[2].hour[0];
    afterTomHumidity.innerHTML = afterTomorrowHour.humidity + '%'
    afterTomWind.innerHTML = afterTomorrowHour.wind_kph + 'km/h';
    afterTomWindDirection.innerHTML = afterTomorrowHour.wind_dir;
}



searchInput.addEventListener('input', function () {
    getWeatherData(searchInput.value);
})

getWeatherData('riyadh')

//======================================================

const text = "Discover the world's weather in real-time ";
const typingText = document.getElementById("typingText");
let index = 0;

function typeEffect() {
    typingText.textContent += text.charAt(index);
    index++;

    if (index < text.length) {
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(() => {
            typingText.textContent = "";
            index = 0;
            typeEffect();
        }, 1000);
    }
}

typeEffect();


















































































