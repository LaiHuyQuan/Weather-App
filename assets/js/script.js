var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var time = document.querySelector('.time')

const weather = document.querySelector('.weather')
const weatherContainer = document.querySelector('.weather-container')

async function changeWeatherUI(defaultName) {
    let capitalSearch = search.value.trim()
    let apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + capitalSearch + '&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667'
    let data = await fetch(apiURL).then(res => res.json())
    console.log(data)

    if (data.cod == 200) {
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        value.innerText = (data.main.temp)
        shortDesc.innerText = data.weather[0].main
        time.innerText = new Date().toLocaleDateString('vi')
    }else{
        let apiURL = 'https://api.openweathermap.org/data/2.5/weather?q='+ defaultName+'&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667'
        let data = await fetch(apiURL).then(res => res.json())
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        value.innerText = (data.main.temp)
        shortDesc.innerText = data.weather[0].main
        time.innerText = new Date().toLocaleDateString('vi')
    }
    changeBackground();
    
}


search.addEventListener('keypress', function (e) {
    if (e.code === 'Enter') {
        changeWeatherUI('hanoi')
    }
})

console.log(value.innerText)
function changeBackground() {
    if (value.innerText >= 25) {
        weather.classList.add('hot')
        weatherContainer.classList.add('hot')
        weather.classList.remove('cold')
        weatherContainer.classList.remove('cold')
        console.log("1")
    } else {
        weather.classList.add('cold')
        weatherContainer.classList.add('cold')
        weather.classList.remove('hot')
        weatherContainer.classList.remove('hot')
        console.log("2")
    }
}

changeWeatherUI('hanoi')
changeBackground();