let count=0;  // set initial count to 0
const value=document.getElementById("value");
const btns=document.querySelectorAll(".btn");
// console.log(btns); =>NodeList(3) [ button.btn.Increase, button.btn.Reset, button.btn.Decrease ]

btns.forEach(function(btn){
    // console.log(btn); => 
    //  <button class="btn Increase">
    //  <button class="btn Reset">
    //  <button class="btn Decrease">
    btn.addEventListener("click",function(e){
        // console.log(e.currentTarget); =>after click on increase
        // <button class="btn Increase"></button>
        // console.log(e.currentTarget.classList); =>after click on increase
        // DOMTokenList [ "btn", "Increase" ]
        const style=e.currentTarget.classList;
        if(style.contains("Increase")){
            count++;
        }
        else if(style.contains("Decrease")){
            count--;
        }
        else{
            count=0;
        }
        value.textContent=count;

        if(count>0){
            value.style.color="green";
        }
        if(count<0){
            value.style.color="red";
        }
        if(count===0){
            value.style.color="black";
        }
    })
})