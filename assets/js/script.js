var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var time = document.querySelector('.time')

async function changeWeatherUI(){
    let capitalSearch = search.value.trim()
    let apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=cairo&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667'
    
    let data = await fetch(apiURL).then(res=>res.json())
    console.log(data)
    
    if (data.cod == 200){
    city.innerText = data.name 
    country.innerText = data.sys.country
    visibility.innerText = data.visibility + 'm'
    wind.innerText = data.wind.speed +'m/s'
    sun.innerText = data.main.humidity +'%'
    value.innerText = (data.main.temp) 
    shortDesc.innerText = data.weather[0].main ? weather[0].main :''
    time.innerText = new Date().toLocaleDateString('vi') 
    }else{
        capitalSearch = "ha noi"
    }
}


search.addEventListener('keypress',function(e){
    console.log(e.code == 'Enter')
    if(e.code == 'Enter'){
        changeWeatherUI()
    }
})