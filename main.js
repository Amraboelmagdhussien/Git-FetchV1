let submitbtn = document.querySelector(".btn");
let showResult = document.querySelector(".hiddenResult");
let apiUrl = "https://api.github.com/";

let searchBox = document.querySelector(".search input")

async function checkMyProfile(check) {
    const response = await fetch(apiUrl + `users/${searchBox.value}`)
    let data = await response.json()

    document.querySelector("#name").innerHTML = data.login
    document.querySelector("#repos").innerHTML = data.public_repos
    document.querySelector("#followers").innerHTML = data.followers
    document.querySelector("#url").innerHTML = data.url

    showResult.style.display= "block"

}

submitbtn.addEventListener("click", () => {
    checkMyProfile(searchBox.value)
    
})