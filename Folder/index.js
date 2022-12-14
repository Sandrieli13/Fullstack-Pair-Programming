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
const color = document.querySelector("input");
const Hazaa = document.querySelector("#Hazaa");
Hazaa.addEventListener("click", function () {
  console.log(color.value)
  body.style.backgroundColor= color.value
});