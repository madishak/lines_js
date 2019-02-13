let lineValue = document.getElementById('line');
let inner = document.getElementById('inner');
let newArr = [];
let l = [];

const getArray = () => {
    let nums = document.getElementById('input').value;
    let t = nums.split("");
    return t;
}



const showInputArray = (arr) => {
    arr = getArray();
    arr = arr.map(elem => Number(elem));
    newArr = [arr, ...newArr];
    // newArr.unshift(arr);
    return drawArray(arr)
}


const increaseSort = () => {

    // the right one

    let arr = newArr[0];
    // let l = [];
    for (let i = 0; i < arr.length; i++)
        for (let j = i+1; j < arr.length; j++) {

            if (arr[i] > arr[j]) {
                l = [arr.indexOf(arr[i]), arr.indexOf(arr[j]), ...l];
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;


                newArr = [arr, ...newArr];
                let first = arr[j];
                let second = arr[i];
                let d1 = document.getElementById(first);
                let d2 = document.getElementById(second);
                let d11 = d1.cloneNode(true);
                let d22 = d2.cloneNode(true);
                d2.parentNode.insertBefore(d11, d2);
                d1.parentNode.insertBefore(d22, d1);
                d1.parentNode.removeChild(d1);
                d2.parentNode.removeChild(d2);
                return arr;


            }

        }


}

//
const increaseSort2 = () => {
    let arr = newArr[0];

    for (let i = 0; i < arr.length-1; i++)
        for (let j = i+1; j < arr.length; j++) {

            if (arr[i] > arr[j]) {
                let first = arr[i];
                let second = arr[j];
                let d1 = document.getElementById(first);
                let d2 = document.getElementById(second);


                l = [arr.indexOf(arr[i]), arr.indexOf(arr[j]), ...l];
                let temp = d1;
                d1 = d2;
                d2 = temp;

                newArr = [arr, ...newArr];

                // let d11 = d1.cloneNode(true);
                // let d22 = d2.cloneNode(true);
                // d2.parentNode.insertBefore(d11, d2);
                // d1.parentNode.insertBefore(d22, d1);
                // d1.parentNode.removeChild(d1);
                // d2.parentNode.removeChild(d2);
                return arr;


            }

        }


}



// const backSort = () => {
//
//     let actualArr = newArr.reverse();
//     let b = increaseSort();
//     let arr= newArr[0];
//     alert(b);
//     alert(arr);
//     for (let j = 0; j < arr.length-1; j++) {
//         for (let i = 0; i < b.length-1; i++) {
//             if (arr[j] !== b[i]) {
//                 // b[i] = arr[j];
//                 let first = b[i];
//                 let second = arr[j];
//                 let d1 = document.getElementById(first);
//                 let d2 = document.getElementById(second);
//                 let w1 = d1.style.width;
//                 let w2 = d2.style.width;
//                 let d11 = d1.cloneNode(true);
//                 let d22 = d2.cloneNode(true);
//                 d2.parentNode.insertBefore(d11, d2);
//                 d1.parentNode.insertBefore(d22, d1);
//                 d1.parentNode.removeChild(d1);
//                 d2.parentNode.removeChild(d2);
//                 return b;
//             }
//
//
//         }
//
//     }
//
//
// }


const t = () => {
  arr = increaseSort();
    // alert(l);
  for (let i = 0; i < arr.length; i++)
    {

        let temp = arr[l[0]];
        arr[l[0]] = arr[l[1]];
        arr[l[1]] = temp;
        l.shift(l[0]);
        l.shift(l[1]);

  }
    // alert(l);
    return arr;
}









const drawArray = (arr) => {

    let newDiv;

    for (let i = 0; i < arr.length; i++) {
        newDiv = document.createElement('div');
        newDiv.innerHTML = arr[i];
        newDiv.id = arr[i];
        newDiv.className = "line";
        inner.appendChild(newDiv);
        newDiv.style.height = 15 * arr[i]+'px';
        newDiv.style.display = 'block';
    }

    return newDiv;
}

let inputValue = document.getElementById('input');
inputValue.addEventListener('change',showInputArray);

let increase = document.getElementById('inc');
increase.addEventListener('click', t);

// let decrease = document.getElementById('dec');
// res = decrease.addEventListener("click", backSort);

let showArr = document.getElementById('show');
showArr.addEventListener('click', increaseSort);

// let showInd = document.getElementById('ind');
// showArr.addEventListener('click', change);