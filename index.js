const apiKey = 'bf9e4a07def84c81d923c3b4696f0c16';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    // var data = await response.json();
    if(response.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }else{
        var data = await response.json();
    }



    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = 'assets/weather.png';
    }
    else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = 'assets/sun.png';
    }
    else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = 'assets/rain.png';
    }
    else if(data.weather[0].main == 'Drizz'){
        weatherIcon.src = 'assets/rain.png';
    }
    document.querySelector('.weather').style.display = 'block'
    document.querySelector('.error').style.display = 'none'
}
searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value)
})