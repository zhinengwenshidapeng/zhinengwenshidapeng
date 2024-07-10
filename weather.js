// JavaScript Document
// 替换为您的API密钥
const API_KEY = '您的API密钥';
const CITY = '您想查询的城市';

function fetchWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('weather-description').textContent = data.weather[0].description;
            document.getElementById('temperature').textContent = data.main.temp;
            document.getElementById('humidity').textContent = data.main.humidity;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

// 初始获取天气
fetchWeather();

// 每隔一段时间更新天气
setInterval(fetchWeather, 60000); // 60000毫秒 = 1分钟
