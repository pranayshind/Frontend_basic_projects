//contains - ckeks classList for specifi class
//add- add class
//remove- remove class
//toggle- toggle class

const navToggle=document.querySelector(".navToggle");
const links=document.querySelector(".links");

navToggle.addEventListener("click",function(){
    // if(links.classList.contains("showLinks")){
    //     links.classList.remove("showLinks");
    // }
    // else{
    //     links.classList.add("showLinks");
    // }
    links.classList.toggle("showLinks");

})