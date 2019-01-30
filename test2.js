// let arr = [120, 52, 45, 6, 81, 100];
let lineValue = document.getElementById('line');
let inner = document.getElementById('inner');
let newArr = [];

const getArray = () => {
    let nums = document.getElementById('input').value;
    return nums.split(" ");
}

const showInputArray = (arr) => {
    arr = getArray();
    newArr.unshift(arr);
    return drawArray(arr)
}

// const showArray = (arr) => drawArray(arr);

const drawArray = (arr) => {
    let newDiv;
    for (let i = 0; i < arr.length; i++) {
        newDiv = document.createElement('div');
        newDiv.innerHTML = arr[i];
        newDiv.className = "line";
        inner.appendChild(newDiv);
        newDiv.style.height = arr[i]+'px';
        newDiv.style.display = 'block';
    }

    return newDiv;
}

const introduce = (arr) => {
    // let node = drawArray();
    inner.removeChild;
    return drawArray(arr);
}


const increaseSort = () => {
    let arr = newArr[0];
    for (let i = 0; i < arr.length-1; i++)
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                newArr.unshift(arr);
                return introduce(arr);


            }

        }


}


const array = () => {
    let iter;
    for (let i = 0; i < newArr.length; i++) {
        iter = newArr[i];
    }
    return alert(iter);
}

let inputValue = document.getElementById('input');
inputValue.addEventListener('change',showInputArray);

let increase = document.getElementById('inc');
increase.addEventListener('click', increaseSort);

let showArr = document.getElementById('show');
showArr.addEventListener('click', array);