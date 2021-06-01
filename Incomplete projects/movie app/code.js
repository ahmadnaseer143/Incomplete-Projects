const bar=document.querySelector(".bar");
const menu=document.querySelector(".menu");

bar.addEventListener("click",function(){
    menu.classList.toggle("display");
});