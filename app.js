// let r = document.getElementById('input').value;
import madina from './index10.js';

const input = document.createElement('input');
input.id = 'input';
input.value = '';
document.body.appendChild(input);

const t = (r) => {
    madina();
    console.log('Madina' + r);

};

// let inputShow = document.getElementById('input');
input.addEventListener('change', () => t(input.value));
