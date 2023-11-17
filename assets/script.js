const dino = document.getElementById("Dino");
const cactus = document.getElementById("Cactus");

function jump(){

    if(dispatchEvent.classList!="jump"){

        dino.classList.add("jump");

        setTimeout(function(){
            dino.classList.remove("jump");
        },300)
    }
}
let CheckALive = setInterval(function(){


let DinoTop = parseInt(window.getComputerStyle(dino).getPropertyValue("top"));

let CactusLeft = parseInt(window.getComputerStyle(cactus).getPropertyStyle("left"));

if(CactusLeft>0 && CactusLeft<70 && DinoTop>=143){
    dino.style.animationPlayState ='paused';
    cactus.style.animationPlayState = 'paused';
    alert("Game Over !!!!")
    window.location.reload();
}

},10)
document.addEventListener("keydown", function(){
    jump();
})