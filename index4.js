class SortAndDraw  {
    constructor(numbersString) {
        this.nums = numbersString;
        this.arr;
        this.l = [];
        // this.pointer;
        this.changeColumns = {};
        this.newDiv;
        this.container;
        this.firstColl;
        this.secondColl;
    }

    getArray()  {
        this.arr = this.nums.split("").map(element => Number(element));
        return  this.arr;

    }

    showArray() {
        return this.drawArray(this.getArray());
    }

    increaseSort() {
        for (let i = 0; i < this.arr.length - 1; i++) {
            for (let j = i + 1; j < this.arr.length; j++) {
                if (this.arr[i] > this.arr[j]) {
                    [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
                    this.changeColumns.first = this.arr[i];
                    this.changeColumns.second = this.arr[j];
                    this.l = [i, j, ...this.l];
                    // this.pointer = this.pointer + 1;
                    return this.drawArray(this.arr);
                    // alert(this.l);
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

    backSort()  {
        for (let i = 0; i < this.arr.length; i++)
        {
            if (this.l.length != 0) {
                [this.arr[this.l[0]], this.arr[this.l[1]]] = [this.arr[this.l[1]], this.arr[this.l[0]]];
                this.l.shift(this.l[0]);
                this.l.shift(this.l[1]);
                return this.drawArray(this.arr);
            }
        }


    }

    rowOfIndexes() {
        return this.l;
    }


    drawArray(arr) {

        this.container = document.createElement('div');
        this.container.className = "line__inner";
        document.body.appendChild(this.container);
        for (let i = 0; i < arr.length; i++) {

            this.newDiv = document.createElement('div');
            this.newDiv.innerHTML = arr[i];
            this.newDiv.id = arr[i];
            this.newDiv.className = "line";
            this.container.appendChild(this.newDiv);
            this.newDiv.style.height = 15 * arr[i]+'px';
            this.newDiv.style.display = 'block';
        }
        document.body.insertBefore(this.container, h1);


        return this.newDiv;
    }

    anArray() {
        this.firstColl = document.getElementById(this.changeColumns.first).offsetLeft;
        this.secondColl = document.getElementById(this.changeColumns.second).offsetLeft;
        // alert(firstCol);
        // alert(secondCol);
        [this.firstColl, this.secondColl] = [this.secondColl, this.firstColl];
        // alert(firstCol);
        // alert(secondCol);
        document.getElementById(this.changeColumns.first).style.left = this.secondColl + 'px';
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

    }

}




let inputValue = document.getElementById('input').value;

let sortAndDraw = new SortAndDraw(input.value);


let inputShow = document.getElementById('input');
inputShow.addEventListener('change', () => sortAndDraw.showArray());


let increase = document.getElementById('inc');
increase.addEventListener('click',() => sortAndDraw.increaseSort());


let decrease = document.getElementById('dec');
decrease.addEventListener('click', () => sortAndDraw.backSort());


let ob = document.getElementById('ob');
ob.addEventListener('click', () => sortAndDraw.anArray());


let indexes = document.getElementById('indexes');
indexes.addEventListener('click', () => sortAndDraw.rowOfIndexes());

