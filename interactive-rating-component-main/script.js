const mainContainer = document.querySelector("#container-one")
const thanksContainer = document.querySelector(".container-two")

const submitButton = document.getElementById("submit")

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

let rating = document.getElementById("rating")
let numberSelect = document.querySelectorAll(".button")

numberSelect.forEach((rate) => {
    rate.addEventListener ("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})




