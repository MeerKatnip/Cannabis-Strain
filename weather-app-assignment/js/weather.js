let weatherList = document.getElementById("weatherList")
let cityTextBox = document.getElementById("cityTextBox")
let cityButton = document.getElementById("cityButton")

cityButton.addEventListener("click", function () {
    let varURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityTextBox.value}&appid=c21770cabaf023a3209138a2437745e6&units=imperial`
    // console.log(cityTextBox.value)
    fetch(varURL)
        .then(response => response.json())
        .then(weatherPosts => {
            console.log(weatherPosts)
            let weatherVar = ` 
            <h3>${cityTextBox.value}'s weather:</h3> 
            <p><b>City Name: </b>${weatherPosts.name}</p>
            <p><b>Current Temperature: </b>${weatherPosts.main.temp} \xB0F</p>
            <p><b>Feels Like: </b>${weatherPosts.main.feels_like} \xB0F</p>
            <p><b>Minimum Temperature: </b>${weatherPosts.main.temp_min} \xB0F</p>
            <p><b>Maximum Temperature: </b>${weatherPosts.main.temp_max} \xB0F</p>
            <p><b>Pressure: </b>${weatherPosts.main.pressure} mb</p>`
            weatherList.innerHTML = weatherVar
        })
})

fetch("http://api.openweathermap.org/data/2.5/weather?q=houston&appid=c21770cabaf023a3209138a2437745e6&units=imperial")
    .then(response => response.json())
    .then(weatherPosts => {
        // console.log(weatherPosts)
        let weatherVar = `
        <h3>Houston's weather:</h3> 
        <p><b>City Name: </b>${weatherPosts.name}</p>
        <p><b>Current Temperature: </b>${weatherPosts.main.temp} \xB0F</p>
        <p><b>Feels Like: </b>${weatherPosts.main.feels_like} \xB0F</p>
        <p><b>Minimum Temperature: </b>${weatherPosts.main.temp_min} \xB0F</p>
        <p><b>Maximum Temperature: </b>${weatherPosts.main.temp_max} \xB0F</p>
        <p><b>Pressure: </b>${weatherPosts.main.pressure} mb</p>`
        weatherList.innerHTML = weatherVar
    })

function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c21770cabaf023a3209138a2437745e6&units=imperial`)
        .then(response => response.json())
        .then(weatherPosts => {
            // console.log(weatherPosts)
            let weatherVar = `<h3>${weatherPosts.name}'s weather:</h3> 
        <p><b>City Name: </b>${weatherPosts.name}</p>
        <p><b>Current Temperature: </b>${weatherPosts.main.temp} \xB0F</p>
        <p><b>Feels Like: </b>${weatherPosts.main.feels_like} \xB0F</p>
        <p><b>Minimum Temperature: </b>${weatherPosts.main.temp_min} \xB0F</p>
        <p><b>Maximum Temperature: </b>${weatherPosts.main.temp_max} \xB0F</p>
        <p><b>Pressure: </b>${weatherPosts.main.pressure} mb</p>`
            weatherList.innerHTML = weatherVar
        })
}
navigator.geolocation.getCurrentPosition((position) => {
    success(position);
});