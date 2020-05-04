// let   = document.getElementById("")
// let homeButton = document.getElementById("homeButton")
let allButtonMenu = document.getElementById("allButtonMenu")
let allButtonBody = document.getElementById("allButtonBody")
// let effectSelector = document.getElementById("effectSelector")
// let searchEffectButton = document.getElementById("searchEffectButton")
let searchPositiveEffectButton = document.getElementById("searchPositiveEffectButton")
let searchMedicalEffectButton  = document.getElementById("searchMedicalEffectButton")
let searchNegativeEffectButton  = document.getElementById("searchNegativeEffectButton")
// let flavorSelector = document.getElementById("flavorSelector")
let searchFlavorButton = document.getElementById("searchFlavorButton")
let displayDiv = document.getElementById("displayDiv")
//--------------------------------------------------------------------
// CODE FOR ALL STRAINS API 
//--------------------------------------------------------------------
function renderPosts(strainPosts) {
    displayDiv.innerHTML = ""
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
    displayDiv.innerHTML = strainItems
}

allButtonMenu.addEventListener("click", function () {
    fetch("http://strainapi.evanbusse.com/0d4ocxj/strains/search/all")
        .then(response => response.json())
        .then(strainPosts => {
            renderPosts(strainPosts)
        })
})

allButtonBody.addEventListener("click", function () {
    fetch("http://strainapi.evanbusse.com/0d4ocxj/strains/search/all")
        .then(response => response.json())
        .then(strainPosts => {
            renderPosts(strainPosts)
    })
})

//--------------------------------------------------------------------
// CODE FOR STRAIN SELECTOR BY RACE
//--------------------------------------------------------------------
// fetch("http://strainapi.evanbusse.com/0d4ocxj/strains/search/race/RACE")


//--------------------------------------------------------------------
// CODE FOR STRAIN SELECTOR BY EFFECT 
//--------------------------------------------------------------------
// function effectOptions() {
//     fetch("http://strainapi.evanbusse.com/0d4ocxj/searchdata/effects")
//         .then(response => response.json())
//         .then(effectPosts => {
//             let effectItem = effectPosts.map(function (effect) {
//                 return `<select>
//             <option value="${effect.effect}">${effect.effect}</option>`
//             })
//             effectSelector.innerHTML = effectItem
//     })
// }

// searchPositiveEffectButton.addEventListener("click", function () {
function PosEffects() { 
    var e = document.getElementById("effectSelectorPositive").selectedIndex;
    console.log(e)
    var posSelection = document.getElementsByName("pos")[e].value;
    console.log(posSelection)
    let effectURL = `http://strainapi.evanbusse.com/0d4ocxj/strains/search/effect/${posSelection}`
    fetch(effectURL)
        .then(response => response.json())
        .then(effectPosts => {
            let effectItem = effectPosts.map(function (effect) {
                return `<div class="card w-75" style="width: 18rem;">
                <div class="card-body" class="card text-center">
                <h4><b>${effect.name}</b></h4>
                <h6 class="card-subtitle mb-2 text-muted">${effect.id}</h6>
                <p class="card-text">${effect.race}</p>
                <p class="card-text">${effect.effect}</p>
                </div>
            </div>`
            })
            displayDiv.innerHTML = effectItem.join("")
        })
}

// searchMedicalEffectButton.addEventListener("click", function () {
function MedEffects() { 
    var e = document.getElementById("effectSelectorMedical").selectedIndex;
    console.log(e)
    var medSelection = document.getElementsByName("med")[e].value;
    console.log(medSelection)
    let effectURL = `http://strainapi.evanbusse.com/0d4ocxj/strains/search/effect/${medSelection}`
    fetch(effectURL)
        .then(response => response.json())
        .then(effectPosts => {
            let effectItem = effectPosts.map(function (effect) {
                return `<div class="card w-75" style="width: 18rem;">
                <div class="card-body" class="card text-center">
                <h4><b>${effect.name}</b></h4>
                <h6 class="card-subtitle mb-2 text-muted">${effect.id}</h6>
                <p class="card-text">${effect.race}</p>
                <p class="card-text">${effect.effect}</p>
                </div>
            </div>`
            })
            displayDiv.innerHTML = effectItem.join("")
        })
}

// searchNegativeEffectButton.addEventListener("click", function () {
function NegEffects() {    
    var e = document.getElementById("effectSelectorNegative").selectedIndex;
    console.log(e)
    var negSelection = document.getElementsByName("neg")[e].value;
    console.log(negSelection)
    let effectURL = `http://strainapi.evanbusse.com/0d4ocxj/strains/search/effect/${negSelection}`
    fetch(effectURL)
        .then(response => response.json())
        .then(effectPosts => {
            let effectItem = effectPosts.map(function (effect) {
                return `<div class="card w-75" style="width: 18rem;">
                <div class="card-body" class="card text-center">
                <h4><b>${effect.name}</b></h4>
                <h6 class="card-subtitle mb-2 text-muted">${effect.id}</h6>
                <p class="card-text">${effect.race}</p>
                <p class="card-text">${effect.effect}</p>
                </div>
            </div>`
            })
            displayDiv.innerHTML = effectItem.join("")})
        }
    

//--------------------------------------------------------------------
// CODE FOR STRAIN SELECTOR BY FLAVOR
//--------------------------------------------------------------------
function flavorOptions() {
    fetch("http://strainapi.evanbusse.com/0d4ocxj/searchdata/flavors")
        .then(response => response.json())
        .then(flavorPosts => {
            // flavorSelector.innerHTML = ""
            let flavorItem = flavorPosts.map(function (flavor) {
                return `<select>
            <option name="flav" value="${flavor}">${flavor}</option>`
            })
            flavorSelector.innerHTML = flavorItem
        })
}

flavorOptions()

searchFlavorButton.addEventListener("click", function () {
    // displayDiv.innerHTML = ""
    var f = document.getElementById("flavorSelector").selectedIndex;
    console.log(f)
    var flavorSelection = document.getElementsByName("flav")[f].value;
    console.log(flavorSelection)
    let flavorURL = `http://strainapi.evanbusse.com/0d4ocxj/strains/search/flavor/${flavorSelection}`
    fetch(flavorURL)
        .then(response => response.json())
        .then(flavorPosts => {

            let flavorItem = flavorPosts.map(function (flavor) {
                return `<div class="card w-75" style="width: 18rem;">
                            <div class="card-body" class="card text-center">
                                <h4><b>${flavor.name}</b></h4>
                                <h6 class="card-subtitle mb-2 text-muted">${flavor.id}</h6>
                                <p class="card-text">${flavor.race}</p>
                                <p class="card-text">${flavor.flavor}</p>
                            </div>
                        </div>`
            })
            console.log(flavorItem)
            displayDiv.innerHTML = flavorItem.join("")
        })
})

//--------------------------------------------------------------------
// CODE TO SEARCH DESCRIPTION BY STRAIN ID NUMBER 
//--------------------------------------------------------------------
// displayDiv.innerHTML = ""
// var setupArray = [...Array(2162).keys()].map(x => x+1);
// console.log(setupArray)
// // var idArray = [setupArray]
// // console.log(idArray);
// for (let index = 0; index < setupArray.length; index++) {
  
//     fetch("http://strainapi.evanbusse.com/0d4ocxj/strains/data/desc/" + [index].values
//     .then(response => response.json())
//     .then(descPosts => {            
//         console.log(descPosts)
//         const descItem = Object.values(descPosts)
//         // let descItem = setupArray[index]
//         console.log(descItem)
        
//                 let descItems = `<div class="card w-75" style="width: 18rem;">
//                 <div class="card-body" class="card text-center">
                    
//                     <h6>${Oject.values(descItem)}</h6>
//                 </div>
//             </div>`
            
//             displayDiv.innerHTML = descItems
            
//             })
//             // console.log(descItems)
            
//         }
descButton.addEventListener("click", function () {
    let descURL = `http://strainapi.evanbusse.com/0d4ocxj/strains/data/desc/${idTextBox.value}`
    fetch(descURL)
        .then(response => response.json())
        .then(descPosts => {
            console.log(descPosts)
            let descVar = `<div class="card w-75" style="width: 18rem;">
                            <div class="card-body" class="card text-center">
                                <h6 class="card-subtitle mb-2 text-muted">${idTextBox.value}</h6>
                                <h6>${descPosts.desc}</h6>
                            </div>
                        </div>`
            displayDiv.innerHTML = descVar
        })
})
//--------------------------------------------------------------------
// API ADDRESSES FOR REFERENCE 
// BOLD letters at the end of API address must have an input value 
// substituted for the BOLD word at the end.
// For example:
// http://strainapi.evanbusse.com/0d4ocxj/strains/data/desc/STRAIN_ID
// "STRAIN_ID" would have to have a number such as "3"
// http://strainapi.evanbusse.com/0d4ocxj/strains/data/desc/3
// STRAIN_ID 3 is named Afternoon Delight. 
// After the strain name, it would show a strain description on the website 
//--------------------------------------------------------------------

// http://strainapi.evanbusse.com/0d4ocxj/strains/search/effect/EFFECT
// http://strainapi.evanbusse.com/0d4ocxj/strains/search/flavor/FLAVOR

// http://strainapi.evanbusse.com/0d4ocxj/searchdata/effects
// http://strainapi.evanbusse.com/0d4ocxj/searchdata/flavors

// http://strainapi.evanbusse.com/0d4ocxj/strains/search/race/RACE
// http://strainapi.evanbusse.com/0d4ocxj/strains/data/desc/STRAIN_ID



//--------------------------------------------------------------------
// CODE THAT DIDN'T WORK; 
// I'M LEAVING IT UNTIL THE PROJECT IS COMPLETE LEFT. 
// IT WILL MOST LIKELY BE DELETED.
//--------------------------------------------------------------------

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


// let sativaButton = document.getElementById("sativaButton")
// let hydridButton = document.getElementById("hydridButton")
// let indicaButton = document.getElementById("indicaButton")
// let searchInput = document.getElementById("searchInput")
// let postsCache = []
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

// let hungryEffect = document.getElementById("hungryEffect")

// hungryEffect.addEventListener("click", function () {

//     fetch("http://strainapi.evanbusse.com/0d4ocxj/strains/search/effect/EFFECT")
//         .then(response => response.json())
//         .then(strainPosts => {
//             // console.log(strainPosts)
//             let filteredEffects = strainPosts.filter(strain => strain.effect === "Hungry")
//             // console.log(strainPosts)
//             let strainItem = filteredEffects.map(function (strain) {
//                 return `<div class="card w-75" style="width: 18rem;">
//                         <div class="card-body" class="card text-center">
//                             <h4><b>${strain.name}</b></h4>
//                             <h6 class="card-subtitle mb-2 text-muted">${strain.race}</h6>
//                             <p class="card-text"><b>Positive Effects: </b>${strain.effect}</p>

//                         </div>
//                     </div>`
//             })

//             strainList.innerHTML = strainItem.join("")
//         })
// })
// let relaxedEffect = document.getElementById("relaxedEffect")

// relaxedEffect.addEventListener("click", function () {
//     fetch("http://strainapi.evanbusse.com/0d4ocxj/strains/search/effect/EFFECT")
//         .then(response => response.json())
//         .then(strainPosts => {
//             let filteredEffects = strainPosts.filter(strain => strain.effect === "Relaxed")
//             // console.log(strainPosts)
//             let strainItem = filteredEffects.map(function (strain) {
//                 return `<div class="card w-75" style="width: 18rem;">
//                         <div class="card-body" class="card text-center">
//                         <h4><b>${strain.name}</b></h4>
//                 <h6 class="card-subtitle mb-2 text-muted">${strain.race}</h6>
//                 <p class="card-text"><b>Positive Effects: </b>${strain.effect}</p>

//             </div>
//         </div>`
//             })

//             strainList.innerHTML = strainItem.join("")
//         })
// })

// function myFunction() {
//     var x = document.getElementById("mySelect").selectedIndex;
//     alert(document.getElementsByTagName("option")[x].value);
// 

// function renderDesc() {
    // let i = document.getElementById("descDisplay").selectedIndex;
    // let descList = document.getElementsByTagName("label").value;

    // fetch("http://strainapi.evanbusse.com/0d4ocxj/strains/search/all")
    // .then(response => response.json())
    // .then(strainPosts => {
    // for (let index = 0; index < Object.values(strainPosts).length; index++) 

    //     // console.log(descI)
    // descURL = `http://strainapi.evanbusse.com/0d4ocxj/strains/data/desc/${Object.values(strainPosts)[index].id}`
    // fetch(descURL) 
    // .then(response => response.json())
    // .then(idPost => {
    // console.log(idPost)
    //     for (let index = 0; index < Object.values(idPost).length; index++) 

    // let descI = Object.values(idPost)[index]
    // let dItems = ""
    // dItems += `<label>${descI.desc}<label>`
    // })  
    // descDisplay.innerHTML = dItems
    // })
// })
// renderDesc()
// fetch(`http://strainapi.evanbusse.com/0d4ocxj/strains/data/desc/STRAIN_ID`)

// let descItems = ""
// for (let index = 0; index < Object.values(strainPosts).length; index++) {
//     let descItem = Object.values(strainPosts)[index]
//     console.log(descItem)

//     descItems ===`<p>${effectPosts.desc}</p>`
// })
