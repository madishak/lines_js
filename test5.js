let lineValue = document.getElementById('line');
let inner = document.getElementById('inner');
let newArr = [];
let l = [];

const getArray = () => {
    let nums = document.getElementById('input').value;
    return nums.split("");
}

const showInputArray = (arr) => {
    arr = getArray();
    newArr.unshift(arr);
    return drawArray(arr);
}

//
// const increaseSort = () => {
//     let arr = newArr[0];
//     let l = [];
//     for (let i = 0; i < arr.length-1; i++)
//         for (let j = i+1; j < arr.length; j++) {
//
//             if (arr[i] > arr[j]) {
//                 l = [arr.indexOf(arr[j]), arr.indexOf(arr[i]), ...l];
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//
//                 alert(l);
//
//                 newArr = [arr, ...newArr];
//
//
//             }
//
//         }
//     return l;
//
// }

const s = () => {


    let h = function () {
        let arr = newArr[0];

        for (let i = 0; i < arr.length-1; i++) {

            for (let j = i + 1; j < arr.length; j++) {

                if (arr[i] > arr[j]) {
                    l = [arr.indexOf(arr[i]), arr.indexOf(arr[j]),...l];
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    newArr = [arr,...newArr];
                    // alert(l);
                    // return arr;


                }

            }
        }
        // alert(l);
        return l;
    };
    let t = h();

    // alert(t);
    return t;

}


//
// const change = () => {
//     let arr = getArray();
//     let indexArray = s();
//
//
//     for (let i = 0; i < arr.length; i++) {
//
//         for (let j = i + 1; j < arr.length; j++) {
//             for (let s = 0; s < indexArray.length; s++) {
//                 for (let f = s+1; f < indexArray.length; f++) {
//                     if (arr.indexOf(arr[i]) == indexArray[s] || arr.indexOf(arr[j]) == indexArray[f]) {
//                         let first = arr[i];
//                         let second = arr[j];
//
//                         let d1 = document.getElementById(first);
//                         let d2 = document.getElementById(second);
//                         let w1 = d1.style.width;
//                         let w2 = d2.style.width;
//                         d1.style.left = '200px' + w1;
//                         d1.style.transition = 'left 5s cubic-bezier(0, 0, 1, 1)';
//                         d2.style.left = '200px' + w2;
//                         d2.style.transition = 'left 5s cubic-bezier(0, 0, 1, 1)';
//
//                         let d11 = d1.cloneNode(true);
//                         let d22 = d2.cloneNode(true);
//                         d2.parentNode.insertBefore(d11, d2);
//                         d1.parentNode.insertBefore(d22, d1);
//                         d1.parentNode.removeChild(d1);
//                         d2.parentNode.removeChild(d2);
//                         // alert(first);
//                         // // // alert(indexArray[s]);
//                         // alert(second);
//                         // alert(indexArray[f]);
//
//                     }
//             // return arr;
//                 }
//             }
//
//         }
//
//    }
//
// }

const backSort = () => {
    // let t = s();

    return alert(s());
    // let arr = newArr.reverse();
    // for (let j = 0; j < arr.length-1; j++) {
    //     let actualArr = newArr[0];
    //     return drawArray(actualArr);
    //
    //
    // }


}



const array = (arr) => {
    // alert(s());
    arr = ['tiffo', ...arr];
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
        newDiv.style.height = 10 + arr[i]+'px';
        newDiv.style.display = 'block';
    }

    return newDiv;
}

let inputValue = document.getElementById('input');
inputValue.addEventListener('change',showInputArray);

let increase = document.getElementById('inc');
increase.addEventListener('click', s);

let decrease = document.getElementById('dec');
res = decrease.addEventListener("click", backSort);

let showArr = document.getElementById('show');
showArr.addEventListener('click', array);