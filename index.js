// Write your code here!
const main = document.querySelector('#main');
main.remove();

let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
document.body.appendChild(newHeader);
newHeader.innerHTML = "Ajay is the champion";