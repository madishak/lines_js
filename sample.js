

    //
    // let nums = document.getElementById('input').value;
    // // let arr = nums.split("");
let arr = ['3','7','9','5','7','1'];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;

            }
        }
    }

alert(arr);



