const API_KEY = "8a81320a1fa53f724da0630fe0e851bc";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.main.temp}°C`;
            // ${data.weather[0].main} / 
        });
  }
  function onGeoError() {
    weather.innerText = "위치 액세스를 허용해주세요 ";

  }
  
  navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

  
