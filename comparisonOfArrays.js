let current = [ 9, 7, 9, 9, 6, 9];
let inputValue = [9, 9, 7, 9, 6, 9];
ob = {};

console.log(current);
console.log(inputValue);



const f = () => {
    let el1, el2;
    inputValue.map((elem1) => {
        el1 = elem1;
        current.map((elem2) => {
            el2 = elem2;


        });
        if (el1 === el2) {

            console.log(el1);
            console.log(el2);
            return ob;

        }

    });
};


const y = () => {
    let el1, el2, el3, el4;
for (let i = 0; i < current.length; i++) {
    el1 = current[i];
    el2 = current[i+1];
    for (let j = 0; j < inputValue.length; j++) {
        el3 = inputValue[j];
        el4 = inputValue[j+1];
    }
    if (el1 === el3 && el2 === el4)  {


        console.log(el1);
        console.log(el2);
        console.log(el3);
        console.log(el4);
        return ob;
    }
}
};

y();






