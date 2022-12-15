const counter = document.querySelector(".counter");

let count = 0;
counter.innerHTML= count
const cookie = document.querySelector("#chip");
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
  }
  sampletext.style.fontSize = a+"px"
})
const zoomout = document.querySelector("#but2");
zoomout.addEventListener("click", function (){
  if(a>=2){
  a--
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

const hook= document.querySelector("#hook")
const rope= document.querySelector("#rope")
let hor = -10.5
let horhook = 0
const left = document.querySelector("#left");
left.addEventListener("click", function (){
  if(hor>=-900){
    hor-=5
    horhook-=5
  }
  rope.style.right = hor+"px"
  hook.style.right = horhook+"px"})


const right = document.querySelector("#right");
right.addEventListener("click", function (){
  if(hor<=-10.5){
    hor+=5
    horhook+=5
  }console.log(hor+"px")
  rope.style.right = hor+"px"
  hook.style.right = horhook+"px"})

let ver = 90
  const up = document.querySelector("#up");
up.addEventListener("click", function (){
  if(ver>=10){
    ver-=5
  }
  rope.style.height = ver+"px"})
  const down = document.querySelector("#down");
down.addEventListener("click", function (){
  if(ver<=120){
    ver+=5
  }
  rope.style.height = ver+"px"})



const Dice = document.querySelector("#inputdice");
const Die = document.querySelector("#Die");
const Roll = document.querySelector("#Roll");
Roll.addEventListener("click", function () {
  let b = Dice.value
  let x = Math.floor(Math.random() * b) +1;
  Die.innerHTML= x
});


  