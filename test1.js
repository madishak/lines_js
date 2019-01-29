let arr = [120, 52, 45, 6, 81, 100];

let lineValue = document.getElementById('line');
let inner = document.getElementById('inner');

const draw = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = arr[i];
        newDiv.className = "line";
        inner.appendChild(newDiv);
        newDiv.style.height = arr[i] + 'px';
        newDiv.style.display = 'block';

    }
}

const sortedArr = () => {

    for (let i = 0; i < arr.length-1; i++)
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                // draw(arr);
               return draw(arr);


            }

        }


}

let increase = document.getElementById('inc');
let res = increase.addEventListener('click', sortedArr);


