let strainList = document.getElementById("strainList")
let homeButton = document.getElementById("homeButton")
let allButton = document.getElementById("allButton")
let sativaButton = document.getElementById("sativaButton")
let hydridButton = document.getElementById("hydridButton")
let indicaButton = document.getElementById("indicaButton")

allButton.addEventListener("click", function () {
    fetch("http://strainapi.evanbusse.com/0d4ocxj/strains/search/all")
        .then(response => response.json())
        .then(strainPosts => {
            let strainItems = ""
            // console.log(Object.values(strainPosts))

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


// http://strainapi.evanbusse.com/0d4ocxj/strains/search/effect/EFFECT
// http://strainapi.evanbusse.com/0d4ocxj/strains/search/flavor/FLAVOR

// http://strainapi.evanbusse.com/0d4ocxj/searchdata/effects
// http://strainapi.evanbusse.com/0d4ocxj/searchdata/flavors

// http://strainapi.evanbusse.com/0d4ocxj/strains/search/race/RACE