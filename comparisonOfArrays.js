let inputValue = [5, 1, 2, 4];
let current = [1, 5, 2, 4];
ob = {};

console.log(inputValue);
console.log(current);


const f = () => {
    inputValue.map((elem1) => {
        ob.el1 = elem1;
        current.map((elem2) => {
            ob.el2 = elem2;


        });
        if (ob.el1 !== ob.el2) {

            console.log(ob.el1);
            console.log(ob.el2);
            return ob;

        }
    });
};


f();






