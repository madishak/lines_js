l = [5, 1, 2, 3, 4, 5, 3, 2];
arr = [2,6,4,9,6,9,0,1,2];
// let index1 = l[0];
// let index2 = l[1];
// alert(index1);
// alert(index2);
let i = 0;
for (let i = 0; i <= arr.length; i++) {

    let temp = arr[l[0]];
    arr[l[0]] = arr[l[1]];
    arr[l[1]] = temp;
    l.shift(l[0]);
    l.shift(l[1]);
    // i++;
    alert(l);
    alert(arr);
    alert(arr[l[0]]);
    alert(arr[l[1]]);





}

