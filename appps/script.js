const colors = ["red", "blue", "yellow", "orange", "purple"]
const hex = [1,2,3,4,5,6,7,8,9, "A","B","C","E","F"]


const colorSpan = document.querySelector("#color")
const colorButton = document.querySelector("#get-color")
const randBtn = document.querySelector("#random-color")

colorButton.addEventListener("click", function() {
    console.log("clicked")
let pickedColor = Math.floor(Math.random() * colors.length)
document.body.style.backgroundColor = colors[pickedColor]
colorSpan.innerText = colors[pickedColor]

})
randBtn.addEventListener("click", fucntion() {
    console.log("Clicked random")
    let pickedColor= "#";
    for(let el=0; el<6; el++)
        pickedColor += Math.floor(Math.random() * hex.length)
        console.log(pickedColor)
document.body.style.backgroundColor = pickedColor;

})