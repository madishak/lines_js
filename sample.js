

    //
    // let nums = document.getElementById('input').value;
    // // let arr = nums.split("");
    let l = [];
let arr = ['3','4','9','6','4','6'];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                l = [arr[i], arr[j],...l];
                let t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
                alert(arr);
                alert(l);
            }
        }
    }



    alert(l);



