// let arr = [120, 52, 45, 6, 81, 100];
let lineValue = document.getElementById('line');
let inner = document.getElementById('inner');
let newArr = [];

const getArray = () => {
    let nums = document.getElementById('input').value;
    return nums.split("");
}

const showInputArray = (arr) => {
    arr = getArray();
    newArr.unshift(arr);
    return drawArray(arr)
}

// const showArray = (arr) => drawArray(arr);

const drawArray = (arr) => {

    let newDiv;
    // if (arr.length !== 0) {
    //     inner.parentNode.removeChild(inner);
    // }
    for (let i = 0; i < arr.length; i++) {
        newDiv = document.createElement('div');
        newDiv.innerHTML = arr[i];
        newDiv.className = "line";
        inner.appendChild(newDiv);
        newDiv.style.height = 10 + arr[i]+'px';
        newDiv.style.display = 'block';
    }

    return newDiv;
}

const introduce = (arr) => {
    // let node = drawArray();
    // inner.removeChild;

    return drawArray(arr);
}


const increaseSort = () => {
    // let arr = [];

    let arr = newArr[0];


    // alert(arr);

    for (let i = 0; i < arr.length-1; i++)
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                newArr.push(arr);
                // alert(newArr);
                return drawArray(arr);


            }

        }

}


const backSort = () => {
    let arr = newArr.reverse();
    // let arr = [[5,6,9], [5,9,6]];
    for (let j = 0; j < arr.length-1; j++) {
        let actualArr = newArr[0];
        // let show = arr[0];
        // arr.unshift([2,3,6]);
        // for (let i = 0; i < arr.length - 1; i++) {
        return introduce(actualArr);
        // }
    }

    //
    //  // show;
    //     // for (let j = i+1; j < arr.length; j++) {
    //     //     if (arr[i] < arr[j]) {
    //     //         let temp = arr[i];
    //     //         arr[i] = arr[j];
    //     //         arr[j] = temp;
    //     //         // newArr.unshift(arr);
    //     //         return introduce(arr);
    //     //
    //     //
    //     //     }
    //     //
    //     // }
 // return alert(newArr);
}

// if (backSort() == true) {
//     let arr = reverse(newArr);
//     newArr.shift(arr);
// }

const array = () => {
    // let iter;
    // for (let i = 0; i < newArr.length; i++) {
    //     iter = newArr[i];
    //     alert(iter);
    // }

    return alert(newArr);

}

let inputValue = document.getElementById('input');
inputValue.addEventListener('change',showInputArray);

let increase = document.getElementById('inc');
increase.addEventListener('click', increaseSort);

let decrease = document.getElementById('dec');
res = decrease.addEventListener("click", backSort);

let showArr = document.getElementById('show');
showArr.addEventListener('click', array);