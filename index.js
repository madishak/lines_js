// let lineValue = document.getElementById('line');
// let inner = document.getElementById('inner');
let newArr = [];
let l = [];


const getArray = () => {
    let nums = document.getElementById('input').value;
    return nums.split("").map(element => Number(element));
}



const showInputArray = (arr) => {
    arr = getArray();
    newArr = [arr, ...newArr];
    return drawArray(arr);
}



const increaseSort = () => {

    // the right one

    let arr = newArr[0];
    // let arr = getArray();
    // let l = [];
    for (let i = 0; i < arr.length; i++)
        for (let j = i+1; j < arr.length; j++) {

            if (arr[i] > arr[j]) {
                l = [arr.indexOf(arr[i]), arr.indexOf(arr[j]), ...l];
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;


                // newArr = [arr, ...newArr];
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



const increaseSort2 = () => {

    // the right one

    let arr = getArray();

    let l = [];
    let pointer;
    while (!pointer) {

        for (let i = 0; i < arr.length; i++) {

            if (arr[i] > arr[i + 1]) {

                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                l = [arr.indexOf(arr[i]), arr.indexOf(arr[i+1]), ...l];
                pointer = pointer + 1;
                return drawArray(arr);
                // alert(arr);
                // let first = arr[i];
                // let second = arr[i+1];
                // let d1 = document.getElementById(first);
                // let d2 = document.getElementById(second);
                // let w1 = d1.style.width;
                // let w2 = d2.style.width;
                // d1.style.left = w1;
                // d1.style.transition = 'left 5s cubic-bezier(0, 0, 1, 1)';



                // alert(l);
            }
        }


    }

}


const backSort = () => {
    let arr = increaseSort();

    for (let i = 0; i < arr.length; i++)
    {

        let temp = arr[l[0]];
        arr[l[0]] = arr[l[1]];
        arr[l[1]] = temp;
        l.shift(l[0]);
        l.shift(l[1]);

    }

    return arr;
}


const drawArray = (arr) => {

    let newDiv;
    let container;
    container = document.createElement('div');
    container.className = "line__inner";
    document.body.appendChild(container);
    for (let i = 0; i < arr.length; i++) {

        newDiv = document.createElement('div');
        newDiv.innerHTML = arr[i];
        newDiv.id = arr[i];
        newDiv.className = "line";
        container.appendChild(newDiv);
        newDiv.style.height = 15 * arr[i]+'px';
        newDiv.style.display = 'block';
    }

    return newDiv;
}


let inputValue = document.getElementById('input');
inputValue.addEventListener('change',showInputArray);

let increase = document.getElementById('inc');
increase.addEventListener('click', increaseSort2);

let decrease = document.getElementById('dec');
decrease.addEventListener("click", backSort);

