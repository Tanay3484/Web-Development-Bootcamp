// function collectEggs()
// {
//     let totalEggs = 6;
//     console.log(totalEggs);
// }

//Function expressions
const a1 = parseInt(prompt("Enter first number"));
const a2 = parseInt(prompt("Enter second number"));
const add = function (x,y){
    return x+y;
} //no error is returned as this is essentialy the same as defining function add(x,y){return x+y};
alert(`The sum of the entered numbers is ${add(a1,a2)}`);
Math.pow(2,3);