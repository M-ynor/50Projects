window.onload = function(){
    let blender = document.getElementById("blender");
    let state = ("off");
    let btnSound = document.getElementById("btnsound");
    let blenderSound = document.getElementById("blendersound");
    const btn = document.querySelector('.blender-btn');
    btn.addEventListener('click',()=>{
        if(state === "off"){
        state = "on";
        Makesound();
        console.log("on");
        blender.classList.add("active")
        }
        else{
            state = "off";
            Makesound();
            console.log("off");
            blender.classList.remove("active")
        }
    });

    function Makesound(){
        if(blenderSound.paused){
            btnSound.play();
            blenderSound.play();
        }
        else{
            btnSound.play();
            blenderSound.pause();
            blenderSound.currentTime = 0;
        }
    }
}