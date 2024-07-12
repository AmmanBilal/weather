const apiKey = "f591c97c7c7f609c7c399f8bb564ea5a"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const search_box=document.querySelector(".search input")
const search_btn=document.querySelector(".search button")
const weather_icon=document.querySelector(".weather-icon")

async function checkWeather(city){
    const response= await fetch(apiUrl +city+ `&appid=${apiKey}`)

        if(response.status==404){
                document.querySelector(".error").style.display="block"
                document.querySelector(".weather").style.display="none"
        }
        else{
            
var data = await response.json()

console.log (data)
document.querySelector(".city").innerHTML=data.name
document.querySelector(".temp").innerHTML=Math.round(data.main.temp )+"°C"
document.querySelector(".humidty").innerHTML=data.main.humidity +"%"
document.querySelector(".wind").innerHTML=data.wind.speed+"km/h"


if (data.weather[0].main =="Clouds"){
weather_icon.src="images/clouds.png"
}
else if(data.weather[0].main =="Clear"){
weather_icon.src="images/clear.png"
}
else if(data.weather[0].main =="Rain"){
weather_icon.src="images/rain.png"
}
else if(data.weather[0].main =="Drizzle"){
weather_icon.src="images/drizzle.png"
}
else if(data.weather[0].main =="Mist"){
weather_icon.src="images/mist.png"
}
document.querySelector(".weather").style.display = "block"
}



}

search_btn.addEventListener("click",()=>{
    checkWeather(search_box.value)
})
