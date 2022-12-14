const counter = document.querySelector(".counter");

let count = 0;
counter.innerHTML= count
const cookie = document.querySelector("img");
cookie.addEventListener("click", function () {
  
  count++;
  counter.innerHTML= count
});


const sampletext = document.querySelector("#sample")
let a = 16
const zoomin = document.querySelector("#but1");
zoomin.addEventListener("click", function (){
  if(a<=99){
    a++
    console.log(a)
  }
  sampletext.style.fontSize = a+"px"
})
const zoomout = document.querySelector("#but2");
zoomout.addEventListener("click", function (){
  if(a>=2){
  a--
  console.log(a)
}
sampletext.style.fontSize = a+"px"
})

const body = document.querySelector("body")
const color = document.querySelector("#textbox");
const Hazaa = document.querySelector("#Hazaa");
Hazaa.addEventListener("click", function () {
  console.log(color.value)
  body.style.backgroundColor= color.value
});

const Dice = document.querySelector("#inputdice");
const Die = document.querySelector("#Die");
const Roll = document.querySelector("#Roll");
Roll.addEventListener("click", function () {
  let b = Dice.value
  let x = Math.floor(Math.random() * b) +1;
  Die.innerHTML= x
});
