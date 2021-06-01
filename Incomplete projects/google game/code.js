const game=document.querySelector(".game");
const character=document.querySelector(".character");
const object=document.querySelector(".objects");
game.addEventListener("click",function(){
    character.classList.toggle("animate");
});
var x=setInterval(fade,10);
function fade(){
    var characterTop=parseInt(window.getComputedStyle(character)
    .getPropertyValue("top"));
    var objectLeft=parseInt(window.getComputedStyle(object)
    .getPropertyValue("left"));
    if(objectLeft>20 && objectLeft<40 && characterTop>=140){
        object.style.animation="none";
        object.style.display="none";
        alert("Gameover");
    }
}