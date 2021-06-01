const navBar=document.querySelector(".navbar");
const link=document.querySelector(".links");


navBar.addEventListener("click",function(){
    link.classList.toggle("show-links");
    //or second method is:
    /*if(link.classList.contains("show-links")){
        link.classList.remove("show-links");
    }
    else{
        link.classList.add("show-links");
    }
    */

});