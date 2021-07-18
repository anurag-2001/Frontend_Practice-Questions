const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
const data_hide = document.querySelector(".data_hide")

const body = document.querySelector('body')
img1.addEventListener("click", () => {
    img1.src = "m2.png"
})


img1.addEventListener("dblclick", () => {
    img1.src = "m3.png"
})

window.addEventListener("resize", () => {
    img1.src = "resize.gif"
})

const preloader = document.querySelector(".preloader")


window.addEventListener("load", () => {
    preloader.classList.add("hide")
})


img1.addEventListener("mouseover", () => {
    img1.src = "m4.png"
})

img1.addEventListener("mouseout", () => {
    img1.src = "smile.jpg"
})


img1.addEventListener("mouseout", () => {
    img1.src = "smile.jpg"
})

window.addEventListener("keydown", () => {
    img1.src = "s1.png"
    data_hide.classList.remove("data_hide")
})
window.addEventListener("keyup", () => {
    img1.src = "m1.png"
    data_hide.classList.add("data_hide")
})



window.onbeforeprint = (event) => {

    console.log("printing")
    alert("Page printing Process will be start soon")
}
window.onafterprint = (event) => {

    console.log("printing done")
    alert("Your HTML file print successfully")
}


