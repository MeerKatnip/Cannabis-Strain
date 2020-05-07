// let descButton = document.getElementById("descButton")

// let nameButton = document.getElementById("nameButton")
// let allButtonMenu = document.getElementById("allButtonMenu")
let allButtonBody = document.getElementById("allButtonBody")
// let searchPositiveEffectButton = document.getElementById("searchPositiveEffectButton")
// let searchMedicalEffectButton  = document.getElementById("searchMedicalEffectButton")
// let searchNegativeEffectButton  = document.getElementById("searchNegativeEffectButton")
// let searchFlavorButton = document.getElementById("searchFlavorButton")
let nameButton = document.getElementById("nameButton")
let displayDivAllStrain = document.getElementById("displayDivAllStrain")
//--------------------------------------------------------------------
// CODE FOR ALL STRAINS API 
//--------------------------------------------------------------------

// fetch("http://strainapi.evanbusse.com/0d4ocxj/strains/search/all")
//     .then(response => response.json())
//     .then(strainPosts => {
//     let strainItems = ""
//     for (let index = 0; index < Object.values(strainPosts).length; index++) {
//         const strainItem = Object.values(strainPosts)[index]
//         strainItems += `
//         <div class="card w-75" style="width: 18rem;">
//             <div class="card-body" class="card text-center">
//                 <h4><b>${Object.keys(strainPosts)[index]}</b></h4>
//                 <h6 class="card-subtitle mb-2 text-muted">${strainItem.race}</h6>
//                 <p id="descList" class="card-text"></p>
//                 <p class="card-text"><b>ID: </b>${strainItem.id}</p>
//                 <p class="card-text"><b>Flavors: </b>${strainItem.flavors}</p>
//                 <p class="card-text"><b>Helps to treat: </b>${strainItem.effects.medical}</p>
//                 <p class="card-text"><b>Positive Effects: </b>${strainItem.effects.positive}</p>
//                 <p class="card-text"><b>Negative Effects: </b>${strainItem.effects.negative}</p>
//             </div>
//         </div>`
//     }
//     displayDiv.innerHTML = strainItems
// })

function renderPosts(strainPosts) {
    displayDivAllStrain.innerHTML = ""
    let strainItems = ""
    for (let index = 0; index < Object.values(strainPosts).length; index++) {
        const strainItem = Object.values(strainPosts)[index]
        strainItems += `
        <div class="card w-75" style="width: 18rem;">
            <div class="card-body" class="card text-center">
                <h4><b>${Object.keys(strainPosts)[index]}</b></h4>
                <h6 class="card-subtitle mb-2 text-muted">${strainItem.race}</h6>
                <p id="descList" class="card-text"></p>
                <p class="card-text"><b>ID: </b>${strainItem.id}</p>
                <p class="card-text"><b>Flavors: </b>${strainItem.flavors}</p>
                <p class="card-text"><b>Helps to treat: </b>${strainItem.effects.medical}</p>
                <p class="card-text"><b>Positive Effects: </b>${strainItem.effects.positive}</p>
                <p class="card-text"><b>Negative Effects: </b>${strainItem.effects.negative}</p>
            </div>
        </div>`
    }
    displayDivAllStrain.innerHTML = strainItems
}
renderPosts()

allButtonBody.addEventListener("click", function () {
    fetch("http://strainapi.evanbusse.com/0d4ocxj/strains/search/all")
        .then(response => response.json())
        .then(strainPosts => {
            renderPosts(strainPosts)
    })
})

//--------------------------------------------------------------------
// CODE TO SEARCH DESCRIPTION BY STRAIN ID NUMBER 
//--------------------------------------------------------------------

// descButton.addEventListener("click", function () {
//     let descURL = `http://strainapi.evanbusse.com/0d4ocxj/strains/data/desc/${idTextBox.value}`
//     fetch(descURL)
//         .then(response => response.json())
//         .then(descPosts => {
//             console.log(descPosts)
//             let descVar = `<div class="card w-75" style="width: 18rem;">
//                             <div class="card-body" class="card text-center">
//                                 <h6 class="card-subtitle mb-2 text-muted">${idTextBox.value}</h6>
//                                 <h6>${descPosts.desc}</h6>
//                             </div>
//                         </div>`
//             displayDiv.innerHTML = descVar
//         })
// })

//--------------------------------------------------------------------
// CODE FOR STRAIN SELECTOR BY NAME
//--------------------------------------------------------------------
nameButton.addEventListener("click", function () {
    let nameURL = `http://strainapi.evanbusse.com/0d4ocxj/strains/search/name/${nameTextBox.value}`
    fetch(nameURL)
        .then(response => response.json())
        .then(namePosts => {
            console.log(namePosts)
            let nameVar = namePosts.map(function(name) {
                return `
                    <div class="card w-75" style="width: 18rem;">
                            <div class="card-body" class="card text-center">
                            <p class="card-text">${name.id}</p>
                            <h4><b>${name.name}</b></h4>
                            <h6 class="card-subtitle mb-2 text-muted">${name.race}</h6>
                            <p id="descList" class="card-text"></p>
                            <p class="card-text">${name.desc}</p>    
                        </div>
                    </div>`
            })            
            displayDivAllStrain.innerHTML = nameVar
        })
})