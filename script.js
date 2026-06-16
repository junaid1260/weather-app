
async function getWeather(city) {
    try {
        let response = await fetch(`https://wttr.in/${city}?format=j1`);
        let data = await response.json();
        
        let temp = data.current_condition[0].temp_C;
        let humidity = data.current_condition[0].humidity;
        let desc = data.current_condition[0].weatherDesc[0].value;
        localStorage.setItem("lastCity", city);
        result.innerHTML = `
    <h2>${city}</h2>
    <p>Temperature: ${temp}°C</p>
    <p>Humidity: ${humidity}%</p>
    <p>Weather: ${desc}</p>
`;
        
    } catch(error) {
        console.log("Error:", error.message);
    }
}

searchBtn.addEventListener("click", function() {
    const city = cityInput.value;
    getWeather(city);
});


const lastCity = localStorage.getItem("lastCity");
if(lastCity) {
    cityInput.value = lastCity;
    getWeather(lastCity);
}
