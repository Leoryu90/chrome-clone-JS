const API_KEY = "2e5de27e6d70d02145cc98866a78d3b1"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const weather = document.querySelector('#weather span:first-child');
            const city = document.querySelector('#weather span:last-child');
            city.innerText = data.name
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`
        })
}

function onGeoError() {
    alert("위치정보를 찾을 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)


