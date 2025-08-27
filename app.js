const city = document.getElementById('search');
const search_btn = document.getElementById('searchBTN');

search_btn.addEventListener("click", () => {
    const cityName = city.value.trim();
    if (cityName !== "") {
        creat_data(cityName);
    } else {
        alert("لطفا نام شهر را وارد کنید!");
    }
});

async function getData(cityName) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1263413d5c995d8016261a77ed19bd33&units=metric&lang=tr`
        );

        const data = await response.json();
        const temp_min = data.main.temp_min;
        const temp_max = data.main.temp_max;
        const weather_main = data.weather[0].main;
        const description = data.weather[0].description;
        const temp = data.main.temp;

        console.log("Min:", temp_min);
        console.log("Max:", temp_max);
        console.log("Temp:", temp);
        console.log("Main:", weather_main);
        console.log("Desc:", description);

        return data;

    } catch (error) {
        console.log("Error:", error);
    }
}

async function creat_data(cityName) {
    const weather = await getData(cityName);

    if (weather) {
        document.querySelector(".city").textContent = weather.name;
        document.querySelector(".temp").textContent = Math.round(weather.main.temp) + "°";
        document.querySelector(".max-min").textContent = 
            `${Math.round(weather.main.temp_max)} / ${Math.round(weather.main.temp_min)}°`;
        document.querySelector(".check-info").textContent = weather.weather[0].description;
    }
}
