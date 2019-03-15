const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

alert(array1.reduce(reducer));

const array2 = [4,8,6,3];

const incSort = (arr) => {
    //this.storage.push(this.arr);
    let pointer = 1;

    while (pointer) {
        pointer = 0;


        for (let i = 0; i < arr.length; i++) {

            if (arr[i] > arr[i + 1]) {


                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];


                pointer = 1;

                return arr;
            }
        }
    }
};

incSort(array2);

array2.reduce((accumulator, currentValue) => {
    return [currentValue, ...accumulator];
}, []);

alert(array2);