console.log ("i'm here")
let names = document.querySelectorAll("li")
let target = document.querySelector("receiver")

console.log(names)
names.forEach(item => {
  let newEl = document.createElement("li")
  newEl.innertext = "hi"+item.innertext;
  target.appendChild(newEl)

})