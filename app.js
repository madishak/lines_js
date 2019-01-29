const getArray = () => {
    let nums = document.getElementById('input').value;
    return nums.split(" ");
}

const showInputArray = (arr) => {
    arr = getArray();
    return drawArray(arr)
}

const showArray = (arr) => drawArray(arr);

const drawArray = (arr) => {
    let lineValue = document.getElementById('line');
    let inner = document.getElementById('inner');

    if (arr.length == 0) {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = arr[i];
        newDiv.className = "line";
        inner.appendChild(newDiv);
        newDiv.style.height = arr[i]+'px';
        newDiv.style.display = 'block';
    }

    return newDiv;
}


const compareNumbersIncrease = (a , b) => a - b;
const compareNumbersDecrease = (a , b) => b - a;

const increaseSort = () => {
    let arr = getArray();
    let sortedArray = arr.sort(compareNumbersIncrease);
    return showArray(sortedArray);
}


const decreaseSort = () => {
    let arr = getArray();
    let sortedArray = arr.sort(compareNumbersDecrease);
    return showArray(sortedArray)
}

let inputValue = document.getElementById('input');
inputValue.addEventListener('change',showInputArray);

let increase = document.getElementById('inc');
let res = increase.addEventListener('click',increaseSort);

let decrease = document.getElementById('dec');
res = decrease.addEventListener("click", decreaseSort);


// const sortedArr = () => {
//     let narr = getArray(arr);
//     for (let i = 0; i < narr.length-1; i++)
//         for (let j = i+1; j < narr.length; j++) {
//             if (narr[i] > narr[j]) {
//                 let temp = narr[i];
//                 narr[i] = narr[j];
//                 narr[j] = temp;
//                 return narr
//
//             }
//
//         }
//
// }