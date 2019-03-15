class T {
    constructor(t) {
        this.s = t;

        this.storage = [0];
        this.current = 0;
    }
   render() {
        this.s.innerText = this.current;
    }

   dec() {
        // alert(this.storage);
        this.current = this.storage.pop();
        // alert(current);
        this.render();
    }

   inc() {
       // alert(this.storage);
        this.storage.push(this.current);
        this.current++;
       // alert(current);
        this.render();
    }
}


const [b1, b2] = document.querySelectorAll('button');
const span = document.querySelector('span');

let t = new T(span);
t.render();
/*b3.addEventListener('click', );*/
b1.addEventListener('click', () => t.dec());
b2.addEventListener('click', () => t.inc());

