let lineValue = document.getElementById('line');
let inner = document.getElementById('inner');
let newArr = [];
let k;

const getArray = () => {
    let nums = document.getElementById('input').value;
    return nums.split("");
}

const showInputArray = (arr) => {
    arr = getArray();
    newArr.unshift(arr);
    return drawArray(arr)
}


const increaseSort = () => {
    let arr = newArr[0];
    let l = [];
    for (let i = 0; i < arr.length-1; i++)
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                l = [arr.indexOf(arr[j]), arr.indexOf(arr[i]), ...l];
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                k = l;
                alert(l);
                let t = arr;
                newArr.unshift(t);

                return drawArray(arr);


            }

        }

}

const s = () => {
    let l = [];

    let h = function () {
        let arr = newArr[0];
        for (let i = 0; i < arr.length-1; i++)
            for (let j = i+1; j < arr.length; j++) {

                if (arr[i] > arr[j]) {
                    l = [arr.indexOf(arr[j]), arr.indexOf(arr[i]), ...l];
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    newArr = [arr, ...newArr];
                    alert(l);
                   return l;


                }

            }
    };
    h();

    // alert(lis);
    return l;

}

const backSort = () => {
    let arr = newArr.reverse();
    for (let j = 0; j < arr.length-1; j++) {
        let actualArr = newArr[0];
        let t = actualArr[0];
        let y = actualArr[3];
        if (window.document.getElementById(t).textContent == '2') {
            alert("yes");
        }



        return drawArray(actualArr);

        // }
    }

}



const array = () => {
    alert(s());
    // return alert(newArr);
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
increase.addEventListener('click', increaseSort);

let decrease = document.getElementById('dec');
res = decrease.addEventListener("click", s);

let showArr = document.getElementById('show');
showArr.addEventListener('click', array);