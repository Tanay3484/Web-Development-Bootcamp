let input = "sample";
let list = [];
while(input.toLowerCase()!=="quit")
{
    input = prompt("What do you want to do");
    if(input.toLowerCase()==="new")
    {
        let n = prompt("Type out a new entry");
        list.push(n);
    }
    else if(input.toLowerCase()==="list")
    {
        console.log("**************");
        for(let i = 0;i<list.length;i++)
        {
            console.log(`${i+1}.${list[i]}`);
        }
        console.log("**************");
    }
    else if(input.toLowerCase()==="delete")
    {
        let index = prompt("Which entry do you want to delete");
        if(index<list.length&&index>=0)
        {
            list.splice(index,1);
        }
        else
        {
            console.log("Index out of range")
        }
    }

}
console.log("Thank you for using this sample todo list!")