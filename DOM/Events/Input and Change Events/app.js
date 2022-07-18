const h1 = document.querySelector('h1');
const inp = document.querySelector('input[type="text"]');

inp.addEventListener('input',function(e){
    if(inp.value!==''){
        let text = `${inp.value}`;
        h1.innerText = `Welcome, ${text}`;
    }
    else
    {
        h1.innerText = "Enter Your Username";
    }
    
});