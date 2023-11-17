const apiKey = "ba3a097fe8393151dd2e9d023b2a4c48";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputValue = document.querySelector(".weatherCard input");
const inputbtn = document.querySelector(".weatherCard button");
const weatherIcon = document.querySelector(".weather-Icon");
const resultCard = document.querySelector(".resultCard");

async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    resultCard.style.display = "none";
  }
  else{
    document.querySelector(".error").style.display = "none";
    resultCard.style.display = "block";
  }
  var data = await response.json();

  // console.log(data);
  document.querySelector(".city").innerHTML= data.name;
  document.querySelector(".temperature").innerHTML= Math.round(data.main.temp) + "°C";
  document.querySelector(".windSpeed").innerHTML= data.wind.speed + "km/h";
  document.querySelector(".humidity").innerHTML= data.main.humidity + "%";

  if(data.weather[0].main == "Clear"){
    weatherIcon.src = "./clear.png"
  }
  else if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "./clouds.png"
  }
  else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "./drizzle.png"
  }
  else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "./mist.png"
  }
  else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "./rain.png"
  }
  else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "./snow.png"
  }
  else if(data.weather[0].main == "Haze"){
    weatherIcon.src = "./drizzle.png"
  }
  else if(data.weather[0].main == "Smoke"){
    weatherIcon.src = "./drizzle.png"
  }
  resultCard.style.display = "block";
}

inputbtn.addEventListener("click",()=>{
  checkWeather(inputValue.value);
  // console.log(inputValue.value)
})

