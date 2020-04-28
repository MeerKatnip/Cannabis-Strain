let coffeeOrdersList = document.getElementById("coffeeOrdersList")
let request = new XMLHttpRequest()

let emailTextBox = document.getElementById("emailTextBox")
let orderTextBox = document.getElementById("orderTextBox")
let addOrderButton = document.getElementById("addOrderButton")

let deleteTextBox = document.getElementById("deleteTextBox")
let deleteOrderButton = document.getElementById("deleteOrderButton")

let searchTextBox = document.getElementById("searchTextBox")
let searchButton = document.getElementById("searchButton")

request.addEventListener("load",function() {
    let response = JSON.parse(this.responseText)
    let coffeeItems = ""
    console.log(Object.values(response))
    for(let index = 0; index < Object.values(response).length; index++) {
        const coffeeItem = Object.values(response)[index]
        
        coffeeItems += `<div><h5>${coffeeItem.coffee} </h5>
                        <p>${coffeeItem.emailAddress}</p>
                        </div>`
    }
    console.log(coffeeItems)
    coffeeOrdersList.innerHTML = coffeeItems
})    
request.open("GET","https://dc-coffeerun.herokuapp.com/api/coffeeorders/")
request.send()

addOrderButton.addEventListener("click", function() {
    let request = new XMLHttpRequest()
    request.onload = function() {
        console.log(this.responseText)
    }
    let order = {
        emailAddress : emailTextBox.value,
        coffee : orderTextBox.value
    }

    request.open("POST","https://dc-coffeerun.herokuapp.com/api/coffeeorders/")
    request.setRequestHeader("Content-Type","application/json")
    request.send(JSON.stringify(order))
})

deleteOrderButton.addEventListener("click", function() {
    
    let request = new XMLHttpRequest()
    request.onload = function() {
        console.log(this.responseText)
    }
    request.open("DELETE",`https://dc-coffeerun.herokuapp.com/api/coffeeorders/${deleteTextBox.value}`)
    request.setRequestHeader("Content-Type","application/json")
    request.send()
})

searchButton.addEventListener("click", function() {
    let request = new XMLHttpRequest()
    request.onload = function() {
        console.log(this.responseText)
    }
    request.open("GET",`https://dc-coffeerun.herokuapp.com/api/coffeeorders/${searchTextBox.value}`)
    request.setRequestHeader("Content-Type","application/json")
    request.send()
})