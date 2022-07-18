let max = parseInt(prompt("Enter the maximum number!"));
while(!max)
{
    max = parseInt(prompt("Enter a valid number!"));
}
const target = Math.floor(Math.random()*max)+1;
let guess = prompt("Enter your first guess!");
let attempts = 1;
while(parseInt(guess)!==target)
{
    if(guess==='q')
    {
        break;
    }
    attempts++;
    if(parseInt(guess)>target)
    {
        guess = prompt("Too High! Enter a new number");
    }
    else{
        guess = prompt("Too low! Enter a new number");
    }
}
if(guess==='q')
{
    console.log("OK, YOU QUIT THE GAME");
}
else
{
    console.log(`YOU GOT IT It took you ${attempts} guesses`);
}

