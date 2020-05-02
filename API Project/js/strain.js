let strainList = document.getElementById("strainList")
let homeButton = document.getElementById("homeButton")
let allButton = document.getElementById("allButton")
let sativaButton = document.getElementById("sativaButton")
let hydridButton = document.getElementById("hydridButton")
let indicaButton = document.getElementById("indicaButton")
let searchInput = document.getElementById("searchInput")
let postsCache = []

// function fetchAll(){
//     fetch("http://strainapi.evanbusse.com/0d4ocxj/strains/search/all")
//     .then(response => response.json())
//     .then(strainPosts => {
//     postsCache = strainPosts
//         renderPosts(strainPosts)
//     })
// }
// fetchAll()

// searchInput.addEventListener("change",(e) => {
//     let userInput = e.target.value.toLowerCase()
//     console.log(postsCache)
// }) 



function renderPosts(strainPosts) {
    strainList.innerHTML = ""
    let strainItems = ""
    for (let index = 0; index < Object.values(strainPosts).length; index++) {
        const strainItem = Object.values(strainPosts)[index]
        strainItems += `<div class="card w-75" style="width: 18rem;">
                        <div class="card-body" class="card text-center">
                            <h4><b>${Object.keys(strainPosts)[index]}</b></h4>
                            <h6 class="card-subtitle mb-2 text-muted">${strainItem.race}</h6>
                            <p class="card-text"><b>Flavors: </b>${strainItem.flavors}</p>
                            <p class="card-text"><b>Helps to treat: </b>${strainItem.effects.medical}</p>
                            <p class="card-text"><b>Positive Effects: </b>${strainItem.effects.positive}</p>
                            <p class="card-text"><b>Negative Effects: </b>${strainItem.effects.negative}</p>
                        </div>
                    </div>`
    }
    strainList.innerHTML = strainItems
}

allButton.addEventListener("click", function () {
    fetch("http://strainapi.evanbusse.com/0d4ocxj/strains/search/all")
        .then(response => response.json())
        .then(strainPosts => {
        postsCache = strainPosts
            renderPosts(strainPosts)
        })
})
// let filteredEffects = dishes.filter(dish => dish.course === "Starters")
let relaxedEffect = document.getElementById("relaxedEffect")
// function effectFinder()
relaxedEffect.addEventListener("click", function () {
    fetch("http://strainapi.evanbusse.com/0d4ocxj/strains/search/effect/EFFECT")
        .then(response => response.json())
        .then(strainPosts => {
            let filteredEffects = strainPosts.filter(strain => strain.effect === "Relaxed")
            // console.log(strainPosts)
            let strainItem = filteredEffects.map(function (strain) {
                return `<div class="card w-75" style="width: 18rem;">
                        <div class="card-body" class="card text-center">
                        <h4><b>${strain.name}</b></h4>
                <h6 class="card-subtitle mb-2 text-muted">${strain.race}</h6>
                <p class="card-text"><b>Positive Effects: </b>${strain.effect}</p>
                
            </div>
        </div>`
            })

            strainList.innerHTML = strainItem.join("")
        })
})

let hungryEffect = document.getElementById("hungryEffect")

hungryEffect.addEventListener("click", function () {

    fetch("http://strainapi.evanbusse.com/0d4ocxj/strains/search/effect/EFFECT")
        .then(response => response.json())
        .then(strainPosts => {
            console.log(strainPosts)
            let filteredEffects = strainPosts.filter(strain => strain.effect === "Hungry")
            // console.log(strainPosts)
            let strainItem = filteredEffects.map(function (strain) {
                return `<div class="card w-75" style="width: 18rem;">
                        <div class="card-body" class="card text-center">
                            <h4><b>${strain.name}</b></h4>
                            <h6 class="card-subtitle mb-2 text-muted">${strain.race}</h6>
                            <p class="card-text"><b>Positive Effects: </b>${strain.effect}</p>
                
                        </div>
                    </div>`
            })

            strainList.innerHTML = strainItem.join("")
        })
})
let effectSelector = document.getElementById("effectSelector")
function effectOptions() {
    fetch("http://strainapi.evanbusse.com/0d4ocxj/searchdata/effects")
    .then(response => response.json())
    .then(strainPosts => {
            // console.log(strainPosts)
    let strainItem = strainPosts.map(function (n) {
            return `<select>
             <option value="${n.effect}">${n.effect}</option>`
        })
        fetch(`http://strainapi.evanbusse.com/0d4ocxj/strains/search/effect/${n.effect})`
        console.log(strainItem)
        effectSelector.innerHTML = strainItem
    })

}
effectOptions()
function displayEffect() {

    fetch(`http://strainapi.evanbusse.com/0d4ocxj/strains/search/effect/${n.effect})`
}
fetch('http://strainapi.evanbusse.com/0d4ocxj/strains/search/effect/${ })'

effectSelector.addEventListener("click", function () {
    let varURL = `http://strainapi.evanbusse.com/0d4ocxj/strains/search/effect/${n.effect})`
    console.log(cityTextBox.value)
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

// http://strainapi.evanbusse.com/0d4ocxj/strains/search/effect/EFFECT
// http://strainapi.evanbusse.com/0d4ocxj/strains/search/flavor/FLAVOR

// http://strainapi.evanbusse.com/0d4ocxj/searchdata/effects
// http://strainapi.evanbusse.com/0d4ocxj/searchdata/flavors

// http://strainapi.evanbusse.com/0d4ocxj/strains/search/race/RACE

    // let filteredPosts = postsCache.filter((post) => {
    //     let postValues = Object.values(post)
    //     let postKeys = Object.keys(post)
    //     let properties = postValues.concat(postKeys)
    //     let passFilter = false 
    //     properties.map((prop) => {
    //         if(prop.toString().toLowerCase().includes(userInput)) {
    //             passFilter = true
    //         }
    //     }) 
    //     if(passFilter === true) {
    //         return post
    //     }
    // })
    // console.log(filteredPosts)
    // renderPosts(filteredPosts)
    // console.log(e.target.value)
