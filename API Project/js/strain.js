let strainList = document.getElementById("strainList")

fetch("http://strainapi.evanbusse.com/0d4ocxj/strains/search/all")
    .then(response => response.json())
    .then(strainPosts => {
        let strainItems = ""
        // console.log(Object.values(strainPosts))

        for (let index = 0; index < Object.values(strainPosts).length; index++) {
            const strainItem = Object.values(strainPosts)[index]
            strainItems += `<b>Strain Name: ${Object.keys(strainPosts)[index]}</b>
                            <p>Strain Type: ${strainItem.race}</p>
                            <p>Strain Flavors: ${strainItem.flavors}</p>
                            <p>Helps to treat: ${strainItem.effects.medical}</p>
                            <p>Positive Effects: ${strainItem.effects.positive}</p>
                            <p>Negative Effects: ${strainItem.effects.negative}</p>`
        }
        strainList.innerHTML = strainItems
    })

