
// Get a reference to the database service
let database = firebase.database();
let root = database.ref()

// create a post node under child
let postsRef = root.child('posts')

let postTitleTextBox = document.getElementById("postTitleTextBox")
let postBodyTextBox = document.getElementById("postBodyTextBox")
let savePostButton = document.getElementById("savePostButton")
let postListUL = document.getElementById("postListUL")

function setupObservers() {
    postsRef.on('child_added', (snapshot) => {
        let post = { key: snapshot.key, ...snapshot.val() }
        let postItems = `<li>
        ${post.title}, ${post.body} 
        <button onclick= "deleteItem('${snapshot.key}')">Delete</button>
        </li>`
        postListUL.innerHTML += postItems
    })
}
setupObservers()

function deleteItem(key) {
    postsRef.child(key).remove()

}
savePostButton.addEventListener('click', () => {
    let title = postTitleTextBox.value
    let body = postBodyTextBox.value

    postsRef.push({
        title: title,
        body: body
    })
})