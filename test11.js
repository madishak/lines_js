// arr = [9,5,2,3,5,8,1,0];
arr = [9,5,2,5];
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
            alert(arr);
            alert(l);
        }
    }


}



// while (!flag) {
//
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[i + 1]) {
//             let temp = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = temp;
//             flag = true;
//             // pointer++;
//             alert(arr);
//         }
//     }
//
//
//
// }