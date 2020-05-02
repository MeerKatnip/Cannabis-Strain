let strainList = document.getElementById("strainList")

fetch("http://strainapi.evanbusse.com/0d4ocxj/strains/search/all")
    .then(response => response.json())
    .then(strainPosts => {
    let strainItems = ""
    for (let index = 0; index < Object.values(strainPosts).length; index++) {
        const strainItem = Object.values(strainPosts)[index]
        strainItems += `
        <div class="card w-75" style="width: 18rem;">
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

