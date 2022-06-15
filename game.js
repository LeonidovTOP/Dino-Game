
const dino = document.getElementById("dino2"); // привязка к динозавтру
const cactus = document.getElementById("cactus2"); // привязка к кактусу

document.addEventListener("keydown", function(event){ // ждём нажатие кнопки
    jump2(); // выполняем функцию прыжка по нажатию на кнопку
});

function jump2 () {
    if (dino.classList !== "jump2"){
        dino.classList.add("jump2");
    }
    setTimeout (function(){
        dino.classList.remove("jump2");
    }, 1500);
}
/*
window.onload = function() {
myAudio = new AudioContext('mp3/music.mp3'); 
myAudio.loop = true;
if (typeof myAudio.loop == 'boolean')
{
    myAudio.loop = true;
}
else
{
    myAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}
myAudio.play();
}*/

let isAlive = setInterval(function (){
    let score=0;
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    
    if (cactusleft < 100 && cactusleft > -20 && dinoTop >= 216){
        console.log("GAME OVER!!");
    } else {
      score++;
      console.log(score);
    };
}, 200); 
