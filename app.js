let city = document.getElementById('search')
const city2= "tehran"
// let city2 = city.value 

async function getData() {

    try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=1263413d5c995d8016261a77ed19bd33&units=metric`)

    
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

getData();
async function creat_data () {
    
    const wethaer = await getData()
  
    parent1.innerHTML = "" 
    products.forEach(product => {
  
 
 

        
        });

}
