fetch("http://localhost:3000/api/products")
.then(response => response.json())
.then(res => {
    console.log(res);
    const imageUrl = res[0] .imageUrl
    console.log("url de l'image",imageUrl)


const anchor = document.createElement("a")
anchor.href = "http://localhost:3000/images/kanap01.jpeg"
anchor.text = "Premier texte"
const items = document.querySelector("#items")

items.appendChild(anchor)
console.log("lien ajouté")
}) 