let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn").addEventListener("click", weatherFetch);
let cityRef = document.getElementById("city")

async function weatherFetch() {
    let cityValue = cityRef.value;
   

    if(cityValue.length == 0){
        result.innerHTML = `<h3 class="msg">Please enter a city Name</h3>`
    } else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
        cityRef.value = "";
        await fetch(url).then((response) => response.json())
        .then((data) => {
            console.log(data);
            console.log(data.name);
            console.log(data.weather[0].description)
            console.log(data.weather[0].main)
            console.log(data.weather[0].icon)
            console.log(data.main.temp)
            console.log(data.main.temp_min)
            console.log(data.main.temp_max)
            result.innerHTML = `
            <h2>${data.name}</h2>
            <h4 class="weather">${data.weather[0].main}</h4>
            <h4 class="desc">${data.weather[0].description}</h4>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h1>${data.main.temp} &#176;</h1>
             <div class="temp-container">
                <div>
                    <h4 class="title">Min</h4>
                    <h4 class="temp min">${data.main.temp_min}</h4>
                </div>
                 <div>
                    <h4 class="title">Max</h4>
                    <h4 class="temp max">${data.main.temp_max}</h4>
                </div>
            </div>`
        }).catch(() => {
            result.innerHTML = `<h3>City not Found</h3>`
        });
    };
    
};
// searchBtn.addEventListener("click", weatherFetch)
window.addEventListener("load", weatherFetch);