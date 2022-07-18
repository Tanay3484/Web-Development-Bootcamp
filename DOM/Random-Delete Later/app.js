// WRITE YOUR CODE IN HERE:
const divContainer = document.querySelector('#container');
for(let i = 1;i<=100;i++){
    const newButton = document.createElement('button');
    newButton.innerText = 'Hey!';
    divContainer.appendChild(newButton);
}