window.onload = function (){
    var color = document.querySelector(":root");
    const bt = document.querySelector(".btn");
    const txt = document.getElementById("color");

    let color1 = 0;
    let color2 = 0;
    let color3 = 0;
    export let colors;

    function randomIntFromInterval() {
        max=255;
        min=0;
        color1 = Math.floor(Math.random() * (max - min + 1) + min)
        color2 = Math.floor(Math.random() * (max - min + 1) + min)
        color3 = Math.floor(Math.random() * (max - min + 1) + min)
    }
    function TxtChange(){
        color.innerHTML = "rbg(" +color1 +","+ color2 + "," + color3 + ")";
    }

    function SetColor() {
        randomIntFromInterval();
        var c = color.style.setProperty('--color',(+ color1 +"," + color2 +","+color3));
        console.log("color changed");
    }

    bt.addEventListener('click',()=>{
        SetColor();
        TxtChange();
    });
    colors ="rbg(" +color1 +","+ color2 + "," + color3 + ")";
}