// let arr = [120, 52, 45, 6, 81, 100];
let lineValue = document.getElementById('line');
let inner = document.getElementById('inner');


const getArray = () => {
    let nums = document.getElementById('input').value;
    return nums.split("");
}

const showInputArray = (arr) => {
    arr = getArray();
    // let newArr = [];
    // newArr.unshift(arr);
    increaseSort(arr);
    return drawArray(arr)
}


let t =[];

const increaseSort = (yu) => {

    // t.unshift(newArr[0]);
    let arr = yu;
    // let r = [];

    // t.unshift(newArr.slice(0, 1)[0]);
    // alert(t);
    // alert(arr);

    for (let i = 0; i < arr.length-1; i++)
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                return intro(arr);


            }

        }

}


const backSort = () => {
    // let t =[];
    // t.unshift(y);
    let arr = newArr[0];
    for (let j = 0; j < arr.length-1; j++) {
        // let actualArr = newArr[0];
        return intro(arr);

    }


}


const array = (t) => {
    return alert(t);

}


const intro = (arr) => {
    let r = [];
    r.unshift(arr);
    array(r);
    // let t =[];
    // t.unshift(newArr.slice(0, 1)[0]);
    // newArr.unshift(arr);
    // alert(newArr.unshift(arr));
    // let t = [];
    // let b = [];
    // backSort(newArr[0]);
    // t.push(newArr[0]);
    // b.push(t);

    // alert(b);
    return drawArray(arr);
}



const drawArray = (arr) => {

    let newDiv;

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

let inputValue = document.getElementById('input');
inputValue.addEventListener('change',showInputArray);

let increase = document.getElementById('inc');
increase.addEventListener('click', increaseSort);

let decrease = document.getElementById('dec');
res = decrease.addEventListener("click", backSort);

let showArr = document.getElementById('show');
showArr.addEventListener('click', array);