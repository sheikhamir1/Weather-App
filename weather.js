let apikey = "6b556005dae9d19ffd7918ac69d92c9f";
let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let input = document.getElementById("user_input");
let search_btn = document.getElementById("btn");

async function check_Weather(city){
    let response = await fetch(apiurl + city + `&appid=${apikey}`)
    let data = await response.json();
    console.log(data)

    document.getElementById("city_name").innerHTML = data.name;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.getElementById("humi").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + "km/h";
    document.getElementById("coun").innerHTML= data.sys.country;
    document.getElementById("my-img").innerHTML = data.weather[0].main;

    let image = document.getElementById("my-img");
    if (data.weather[0].main === "Clear") {
        image.src = 'image/sunny.gif'
    }else if (data.weather[0].main === "Clouds"){
        image.src = 'image/cloudy1.gif'
    }else if (data.weather[0].main === "Mist" || data.weather[0].main === "Rain"){
        image.src = 'image/rany.gif'
    }else if (data.weather[0].main === "Haze"){
        image.src = 'image/haze.gif'
    }else{
        image.src = 'image/stromy.gif'
    }
}

let show = document.getElementById("hide").style.display="none"

search_btn.addEventListener("click",()=>{
    document.getElementById("hide").style.display="block";
    check_Weather(input.value); 
})




