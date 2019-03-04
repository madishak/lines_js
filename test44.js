let arr = [6,1,2,9,3];
let inputValue = document.getElementById('input').value;
let changeColumns = {};

// changeColumns.first

const drawArray = (arr) => {

    let container = document.createElement('div');
    container.className = "line__inner";
    document.body.appendChild(container);
    for (let i = 0; i < arr.length; i++) {

        let newDiv = document.createElement('div');
        newDiv.innerHTML = arr[i];
        newDiv.id = arr[i];
        newDiv.className = "line";
        container.appendChild(newDiv);
        newDiv.style.height = 15 * arr[i]+'px';
        newDiv.style.display = 'block';
    }

    let id1 = arr[0];
    let id3 = arr[1];
    alert(id1);
    alert(id3);
    let first = document.getElementById(id1).offsetWidth;
    let second = document.getElementById(id3).offsetWidth;
    alert(first);
    alert(second);
    let first1 = document.getElementById(id1);
    let second2 = document.getElementById(id3);

    second2.style.right = first + 20 + 'px';
    first1.style.right = -second - 20 + 'px';


   

}


const animArray = (arr) => {
    // let firstCollCoordinate = document.getElementById(this.changeColumns.first).offsetLeft;
    // let secondCollCoordinate = document.getElementById(this.changeColumns.second).offsetLeft;
    // alert(firstCollCoordinate);
    // alert(secondCollCoordinate);
    // [firstCollCoordinate, secondCollCoordinate] = [secondCollCoordinate, firstCollCoordinate];
    // alert(firstCollCoordinate);
    // alert(secondCollCoordinate);
    // // alert(document.getElementById(this.changeColumns.first).style.width);
    // document.getElementById(this.changeColumns.first).style.right = secondCollCoordinate + 'px';
    let id1 = arr[0];
    let id3 = arr[1];
    alert(id1);
    alert(id3);
    let first = document.getElementById(id1).offsetWidth;
    let second = document.getElementById(id3).offsetWidth;
    alert(first);
    alert(second);
    let first1 = document.getElementById(id1);
    let second2 = document.getElementById(id3);

        second2.style.right = first + 20 + 'px';
        first1.style.right = -second - 20 + 'px';

    // }
    // for (let i = 0; i < arr.length; i++) {
    //     let a  = 10;
    //     let b = 3;
    //     let res = a + b;
    //     alert("Madina");
    // }
    //return (this.changeColumns.first + '*' + this.changeColumns.second);
    // return alert('Madina');
    // alert("Madina");

}


const f = () => {
    let arr = [6,1,2,9,3];
    let d = drawArray(arr);
    // let r = animArray(d);
}

let ob = document.getElementById('mad');
ob.addEventListener('click', () => f());

let indexes = document.getElementById('indexes');
indexes.addEventListener('click', () => drawArray(arr));
