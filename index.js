class SortAndDraw  {
    constructor(numberString) {
        this.arr = numberString.split("").map(element => Number(element));
        this.listOfIndexes = [];
        this.changeColumns = {};
        this.newArr = [];


    }

    increaseSort() {
        let pointer = 1;

        while (pointer) {
            pointer = 0;

            for (let i = 0; i < this.arr.length; i++) {

                if (this.arr[i] > this.arr[i + 1]) {
                    this.changeColumns.first = this.arr[i];
                    this.changeColumns.second = this.arr[i+1];
                    this.newArr = [this.arr, ...this.newArr];
                    [this.arr[i], this.arr[i + 1]] = [this.arr[i + 1], this.arr[i]];
                    this.listOfIndexes = [i, i + 1, ...this.listOfIndexes];

                    pointer = 1;
                    return this.arr;
                }
            }
        }
    }


    put() {
        // let newArr3 = [];
        // let arr = this.increaseSort();
        // this.newArr = [arr, ...this.newArr];
        // newArr3 = [this.increaseSort(), newArr3];
        // return alert(this.newArr);

        //
        // this.arrArr = [this.newArr, ...this.arrArr];
        alert(this.newArr);

    }

    backSort() {
        for (let i = 0; i < this.arr.length; i++)
        {
            if (this.listOfIndexes.length != 0) {
                [this.arr[this.listOfIndexes[0]], this.arr[this.listOfIndexes[1]]] = [this.arr[this.listOfIndexes[1]], this.arr[this.listOfIndexes[0]]];
                this.changeColumns.first = this.arr[this.listOfIndexes[0]];
                this.changeColumns.second = this.arr[this.listOfIndexes[1]];
                this.listOfIndexes.shift(this.listOfIndexes[0]);
                this.listOfIndexes.shift(this.listOfIndexes[1]);
                return this.arr;
            }
        }
    }





    drawArray() {
        let container = document.createElement('div');
        container.className = "line__inner";
        document.body.appendChild(container);
        for (let i = 0; i < this.arr.length; i++) {

            let newDiv = document.createElement('div');
            newDiv.innerHTML = this.arr[i];
            newDiv.id = this.arr[i];
            newDiv.className = "line";
            container.appendChild(newDiv);
            newDiv.style.height = 15 * this.arr[i]+'px';
            newDiv.style.left = i * 5 + 'px';
            newDiv.style.display = 'block';
        }

    }


    animateArray() {
        let firstWidth = document.getElementById(this.changeColumns.first).offsetWidth;
        let secondWidth = document.getElementById(this.changeColumns.second).offsetWidth;
        alert(firstWidth);
        alert(secondWidth);
        let firstColl = document.getElementById(this.changeColumns.first);
        let secondColl = document.getElementById(this.changeColumns.second);
        alert(firstColl);
        alert(secondWidth);
        firstColl.style.right = firstWidth + 20 + 'px';
        secondColl.style.right = -secondWidth - 20 + 'px';
    }

    anArray() {
        let firstWidth = document.getElementById(this.changeColumns.first).offsetWidth;
        let secondWidth = document.getElementById(this.changeColumns.second).offsetWidth;
        let firstColl = document.getElementById(this.changeColumns.first);
        let secondColl = document.getElementById(this.changeColumns.second);
        firstColl.style.right =  -29 + 'px';
        secondColl.style.right =  29 + 'px';
    }

    animArray() {
        // let firstWidth = document.getElementById(this.changeColumns.first).offsetWidth;
        // let secondWidth = document.getElementById(this.changeColumns.second).offsetWidth;
        let line = document.getElementById("line");
        for (let i = 0; i < this.arr.length; i++) {
            this.arr[i].style.left = i * 20 + 'px';
        }

        // for (let i = 0; i < this.arr.length; i++) {
        //     if (this.arr[i] == this.changeColumns.first) {
        //         firstColl.style.right = this.arr[i] + 7 + 20 + 'px';
        //     }
        //     if (this.arr[i] == this.changeColumns.second) {
        //         secondColl.style.right = this.arr[i] - 7 - 20 + 'px';
        //     }
        //     // firstColl.style.right = this.arr[i] + 7 + 20 + 'px';
        //     //secondColl.style.right = this.arr[i-1] - 7 - 20 + 'px';
        // }

        //secondColl.style.right = -secondWidth - 20 + 'px';
    }


}



let inputValue = document.getElementById('input').value;

let sortAndDraw = new SortAndDraw(inputValue);

let inputShow = document.getElementById('input');
inputShow.addEventListener('change', () => sortAndDraw.drawArray());


let increase = document.getElementById('inc');
increase.addEventListener('click',() => sortAndDraw.animateArray(sortAndDraw.increaseSort()));


let decrease = document.getElementById('dec');
decrease.addEventListener('click', () => sortAndDraw.drawArray(sortAndDraw.backSort()));


let ob = document.getElementById('ob');
ob.addEventListener('click', () => sortAndDraw.put());

