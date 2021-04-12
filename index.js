// Write your code here!

// main selector
const main = document.getElementById('main');
// remove main
main.remove();

// create node element h1
const h1 = document.createElement('h1');
// give h1 and id of "victory"
h1.id = "victory";
// has a 'newHeader' variable that points to node 'h1#victory'
const newHeader = h1;

// append element h1 to element body
document.body.appendChild(newHeader);

// has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside
newHeader.innerHTML = "YOUR-NAME is the champion";