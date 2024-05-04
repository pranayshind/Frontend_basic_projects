const colors=["Green", "Red", "Blue", "RGBA(133,122,200)", "#F15025"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click",function(){
const rn=getRandonNumber();
document.body.style.backgroundColor=colors[rn];
color.textContent=colors[rn];
});

getRandonNumber = ()=>{
return Math.floor(Math.random()*colors.length);
}

