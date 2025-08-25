const city = document.getElementById('search')
const search_btn = document.getElementById('searchBTN')
// const city2= city.value
// let city2 = city.value 

 search_btn.addEventListener("click" , () => {
    const cityName = city.value 
    creat_data(cityName)
 })

async function getData(cityName) {

    try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1263413d5c995d8016261a77ed19bd33&units=metric`)

    
    const data = await response.json()

        const temp_min= data.main.temp_min;
        console.log(temp_min);
        const temp_max= data.main.temp_max;
        console.log(temp_max);
        const weather_main= data.weather[0].main;
        console.log(weather_main);
        console.log(data);
    // return data;

    } catch (error)
    {
        console.log(error)
        // return []
    }
}
async function creat_data (city) {
    
    const wethaer = await getData(city)

  
}

creat_data()