class SortAndDraw  {
    constructor(numberString) {
        this.arr = numberString.split("").map(element => Number(element));
        this.listOfIndexes = [];
        this.changeColumns = {};
    }



    showArray() {
        return this.drawArray(this.arr);
        // alert(this.arr);
    }

    increaseSort() {
        // for (let i = 0; i < this.arr.length - 1; i++) {
        //     for (let j = i + 1; j < this.arr.length; j++) {
        //         if (this.arr[i] > this.arr[j]) {
        //             [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
        //             this.listOfIndexes = [i, j, ...this.listOfIndexes];
        //             // this.pointer = this.pointer + 1;
        //             return this.drawArray(this.arr);
        //             // alert(this.l);
        //         }
        //     }
        // }
        let pointer = 1;
        while (pointer) {
            pointer = 0;

            for (let i = 0; i < this.arr.length; i++) {

                if (this.arr[i] > this.arr[i + 1]) {
                    [this.arr[i], this.arr[i + 1]] = [this.arr[i + 1], this.arr[i]];

                    // let temp = arr[i];
                    // arr[i] = arr[i + 1];
                    // arr[i + 1] = temp;
                    this.listOfIndexes = [i, i + 1, ...this.listOfIndexes];
                    this.changeColumns.first = this.arr[i];
                    this.changeColumns.second = this.arr[i+1];
                    pointer = 1;
                    return this.arr;
                    //
                    // alert(this.arr);
                    // alert(l);
                }
            }


        }


        // while (!this.pointer) {
        // for (let i = 0; i < this.arr.length ; i++) {
        //
        //         if (this.arr[i] > this.arr[i+1]) {
        //
        //             let temp = this.arr[i];
        //             this.arr[i] = this.arr[i+1];
        //             this.arr[i+1] = temp;
        //             this.l = [i, i+1, ...this.l];
        //             // this.pointer = this.pointer + 1;
        //             return this.drawArray(this.arr);
        //             // alert(this.l);
        //         }
        //     }
        //
        // }
    }

    backSort() {
        for (let i = 0; i < this.arr.length; i++)
        {
            if (this.listOfIndexes.length != 0) {
                [this.arr[this.listOfIndexes[0]], this.arr[this.listOfIndexes[1]]] = [this.arr[this.listOfIndexes[1]], this.arr[this.listOfIndexes[0]]];
                this.listOfIndexes.shift(this.listOfIndexes[0]);
                this.listOfIndexes.shift(this.listOfIndexes[1]);
                return this.drawArray(this.arr);
                //return this.arr;
            }
        }
    }

    rowOfIndexes() {
        return this.listOfIndexes;
    }


    drawArray(arr) {

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

    }

    // drawArray() {
    //
    //     let container = document.createElement('div');
    //     container.className = "line__inner";
    //     document.body.appendChild(container);
    //     for (let i = 0; i < this.arr.length; i++) {
    //
    //         let newDiv = document.createElement('div');
    //         newDiv.innerHTML = this.arr[i];
    //         newDiv.id = this.arr[i];
    //         newDiv.className = "line";
    //         container.appendChild(newDiv);
    //         newDiv.style.height = 15 * this.arr[i]+'px';
    //         newDiv.style.display = 'block';
    //     }
    //
    // }
    // this.drawArray = function () {
    //
    //     this.container = document.createElement('div');
    //     this.container.className = "line__inner";
    //     document.body.appendChild(this.container);
    //     for (let i = 0; i < this.arr.length; i++) {
    //
    //         this.newDiv = document.createElement('div');
    //         this.newDiv.innerHTML = this.arr[i];
    //         this.newDiv.id = this.arr[i];
    //         this.newDiv.className = "line";
    //         this.container.appendChild(this.newDiv);
    //         this.newDiv.style.height = 15 * this.arr[i]+'px';
    //         this.newDiv.style.display = 'block';
    //     }
    //
    //     return this.newDiv;
    // }


    animateArray() {
        alert(this.changeColumns.first);
        alert(this.changeColumns.second);
        let firstCollCoordinate = document.getElementById(this.changeColumns.first).offsetLeft;
        let secondCollCoordinate = document.getElementById(this.changeColumns.second).offsetLeft;
        alert(firstCollCoordinate);
        alert(secondCollCoordinate);
        [firstCollCoordinate, secondCollCoordinate] = [secondCollCoordinate, firstCollCoordinate];
        alert(firstCollCoordinate);
        alert(secondCollCoordinate);
        // alert(document.getElementById(this.changeColumns.first).style.width);
        document.getElementById(this.changeColumns.first).style.right = secondCollCoordinate + 'px';


        // for (let i = 0; i < this.arr.length; i++) {
        //
        // }
        // for (let i = 0; i < this.arr.length; i++) {
        //     if (this.arr[i] == this.changeColumns.first) {
        //         alert("yes");
        //         alert(document.getElementById(this.changeColumns.first).offsetLeft);
        //         alert(document.getElementById(this.changeColumns.second).offsetLeft);
        //         alert(this.changeColumns.first);
        //         alert(this.changeColumns.second);
        //     }
        //     alert("no");
        // }

        //return (this.changeColumns.first + '*' + this.changeColumns.second);
        // return alert('Madina');
        alert("Madina");

    }


}

class Render {

}


let inputValue = document.getElementById('input').value;

let sortAndDraw = new SortAndDraw(inputValue);

let render = new Render();

let inputShow = document.getElementById('input');
inputShow.addEventListener('change', () => sortAndDraw.showArray());


let increase = document.getElementById('inc');
increase.addEventListener('click',() => sortAndDraw.drawArray(sortAndDraw.increaseSort()));


let decrease = document.getElementById('dec');
decrease.addEventListener('click', () => sortAndDraw.backSort());

let ob = document.getElementById('ob');
ob.addEventListener('click', () => sortAndDraw.animateArray());

let indexes = document.getElementById('indexes');
indexes.addEventListener('click', () => sortAndDraw.rowOfIndexes());
