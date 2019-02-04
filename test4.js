let lineValue = document.getElementById('line');
let inner = document.getElementById('inner');


const getArray = () => {
    let nums = document.getElementById('input').value;
    return nums.split("");
}

const showInputArray = (arr) => {
    arr = getArray();

    return drawArray(arr)
}

// const t = (arr) => {
//     arr = getArray();
//     return increaseSort(t);
// }

const increaseSort = (arr) => {
    let newArr = [];
    // arr = getArray();
    // newArr = [arr, ...newArr];
    let arr = newArr[0];

    for (let i = 0; i < arr.length-1; i++)
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                newArr = [arr, ...newArr];
                // newArr.unshift(g);

                return drawArray(arr);
            }

        }

}

// const d = (n) => {
//     let t = [];
//     a = getArray();
//     newArr = [a, ...newArr];
//     for (let i = 0; i < a.length; i++) {
//         a = n;
//         t = [a,...t];
//     }
//     return alert(t.length1);
//
// }

// const backSort = () => {
//     let arr = newArr.reverse();
//     for (let j = 0; j < arr.length-1; j++) {
//         let actualArr = newArr[0];
//         let t = actualArr[0];
//         let y = actualArr[3];
//         if (window.document.getElementById(t).textContent == '2') {
//             alert("yes");
//         }
//
//
//
//         return drawArray(actualArr);
//
//         // }
//     }
//
// }



// const array = () => {
//     return alert(newArr);
// }

const drawArray = (arr) => {

    let newDiv;

    for (let i = 0; i < arr.length; i++) {
        newDiv = document.createElement('div');
        newDiv.innerHTML = arr[i];
        newDiv.id = arr[i];
        newDiv.className = "line";
        inner.appendChild(newDiv);
        newDiv.style.height = 10 + arr[i]+'px';
        newDiv.style.display = 'block';
    }

    return newDiv;
}

let inputValue = document.getElementById('input');
inputValue.addEventListener('change',showInputArray);

let increase = document.getElementById('inc');
increase.addEventListener('click', t);

let decrease = document.getElementById('dec');
res = decrease.addEventListener("click", d);

let showArr = document.getElementById('show');
showArr.addEventListener('click', array);