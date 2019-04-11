class Sort {
    constructor(numberString) {
        this.numsArr =  numberString.split("").map(element => Number(element));
        this.arr = this.numsArr.slice(0);
        this.storage = [this.numsArr];
        this.indSaver = {};
        this.listOfIndexes = [];
        this.changeColumns = {};
        this.newArr = [];

    }

    performArray(){
        return this.arr;
    }


    decreaseSort() {
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



    print() {
        // let i = 0;
        alert(this.storage);
    }





}

class Draw {
    constructor(sequence) {
        this.arr = sequence;

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

    movement() {
        [...elems] = document.getElementsByClassName('line');
        for (let i =0; i < this.arr; i++){
            for (let j =0; j < this.listOfIndexes; j++) {
                this.arr[this.listOfIndexes[j]].style.left = i * 5 + 'px';
            }
        }
    }
}

let inputValue = document.getElementById('input').value;

let sort = new Sort(inputValue);

let draw = new Draw(sort.performArray());

let inputShow = document.getElementById('input');
inputShow.addEventListener('change', () => draw.drawArray());


let increase = document.getElementById('inc');
increase.addEventListener('click',() => draw.drawArray(sort.increaseSort()));



let decrease = document.getElementById('dec');
decrease.addEventListener('click', () => draw.movement(sort.decreaseSort()));

let ob = document.getElementById('ob');
ob.addEventListener('click', () => sort.print());

