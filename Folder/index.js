const counter = document.querySelector("p");

let count = 0;
counter.innerHTML= count
const cookie = document.querySelector("img");
cookie.addEventListener("click", function () {
  
  count++;
  counter.innerHTML= count
});

