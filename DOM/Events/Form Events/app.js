const form = document.querySelector('form');
const ul = document.querySelector('#list');

const addProduct = (product, quantity) => {
    const newLi = document.createElement('li');
    newLi.innerText = " "+`${quantity}`+" "+`${product}`;
    ul.appendChild(newLi);
}

form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    const product = form.elements.product;
    const quantity = form.elements.qty;
    addProduct(product.value, quantity.value);
    product.value = '';
    quantity.value = '';
});