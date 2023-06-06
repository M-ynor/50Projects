window.onload = function(){
const ball = document.querySelector(".ball");
const changer = document.querySelector(".switch");
const body = document.getElementById("body");
const nav = document.getElementById("nav");
const enlaces = document.getElementById("enlaces");
const logotipo = document.getElementById("logotipo");
let state = ("sun");
var spans = document.getElementsByTagName('span');
for(i=0;i<spans.length;i++)
spans[i].onclick=ChangeState;


function ChangeState(){
    if(state === "sun"){
        state = "moon";
        console.log("moon");
        body.classList.add("moon");
        nav.classList.add("moon");
        enlaces.classList.add("moon");
        logotipo.classList.add("moon");
    }
    
    else{
        state = "sun";
        console.log("sun");
        body.classList.remove("moon");
        nav.classList.remove("moon");
        enlaces.classList.remove("moon");
        logotipo.classList.remove("moon");
    }
};
}