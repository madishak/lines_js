// arr = [9,5,2,3,5,8,1,0];
arr = [7, 8, 4, 8, 3];
let l = [];
let pointer = 1;
// while (!pointer) {
//
//     for (let i = 0; i < arr.length; i++) {
//
//         if (arr[i] > arr[i + 1]) {
//             [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//
//             // let temp = arr[i];
//             // arr[i] = arr[i + 1];
//             // arr[i + 1] = temp;
//             l = [i, i+1, ...l];
//             pointer = pointer + 1;
//
//             alert(arr);
//             alert(l);
//         }
//     }
//
//
// }


while (pointer) {
    pointer = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

            // let temp = arr[i];
            // arr[i] = arr[i + 1];
            // arr[i + 1] = temp;
            l = [i, i+1, ...l];
            pointer = 1;

            alert(arr);
            alert(l);
        }
    }


}


//
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//             l = [i, j, ...l];
//             // this.pointer = this.pointer + 1;
//             alert(arr);
//             // alert(this.l);
//         }
//     }
// }



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