function task1() {
  let myArray = ["hi", "hidouble" , "hittriple"];
  let target = document.querySelector("#task-1-target")
  // This will run when you click the button.
  myArray.forEach((item) => {
    let el = document.createElement("p");
    el.innerText = item;
    target.appendChild(el);
  });
}

function task2A() {
  // Write your code in here
  let colors = document.querySelectorAll("#color-lsit > li")
  colors.forEach(color =>( console.log(color)))
}

function task2B() {
  // Writ your code in here
  let names = document.querySelectorAll("#name-lsit > li")
  let target = document.querySelector.apply("#name-list")
  
  console.log(names)

  names.forEach(item => (
    let newEL = document.createdElement("li")
    newEL.innertext = "Hi" + item.innerText;
    newEL.style.fontweight = 800;
    target.appendChild(newLi)
  ))
}

function task3() {
  // Write your code in here
  let txt = docuemnt.querySelectorAll(".item > p")

  txt.forEach(item => {
    item.style.backgroundColor = "#" + item.innerText;
  });
}