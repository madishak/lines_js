let arr = [5,9,58,3,5,6];
let n = [];

const f = (arr) => {

    let flag = true;
    while (flag) {
        flag = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                flag = true;
                return arr;
            }
        }
    }
}

let t = f(arr);
n = [t, ...n];
console.log(t);
console.log(n);
console.log('++++++++++++++++++++');

t = f(arr);
n = [t, ...n];
console.log(t);
console.log(n);
console.log('++++++++++++++++++++');

t = f(arr);
n = [t, ...n];
console.log(t);
console.log(n);
console.log('++++++++++++++++++++');

t = f(arr);
n = [t, ...n];
console.log(t);
console.log(n);
console.log('++++++++++++++++++++');

t = f(arr);
n = [t, ...n];
console.log(t);
console.log(n);
console.log('++++++++++++++++++++');

t = f(arr);
n = [t, ...n];
console.log(t);
console.log(n);
console.log('++++++++++++++++++++');

t = f(arr);
n = [t, ...n];
console.log(t);
console.log(n);
console.log('++++++++++++++++++++');