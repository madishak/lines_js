const [b1, b2] = document.querySelectorAll('button');
const span = document.querySelector('span');

const storage = [0];
let current = 0;

function render() {
    span.innerText = current;
}

function dec() {
    alert(storage);
    current = storage.pop();
    alert(current);
    render();
}

function inc() {

    storage.push(current);
    current++;

    render();
}

b1.addEventListener('click', dec);
b2.addEventListener('click', inc);

render();