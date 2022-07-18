const btn2 = document.querySelector('#v2');
btn2.onclick = function(){
    console.log("This is without using event listeners")
}

const btn3 = document.querySelector("#v3");
btn3.addEventListener('click',function(){
    alert("Clicked. This was using event listeners.")
});