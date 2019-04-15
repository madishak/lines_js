class Sort {
    constructor(numberString) {
        this.numsArr =  numberString.split("").map(element => Number(element));
        this.arr = this.numsArr.slice(0);
        this.storage = [this.numsArr];
        this.indSaver = {};
        this.listOfIndexes = [];
        this.changeColumns = {};
        this.newArr = this.listOfIndexes.slice(0);


    }

    performArray(){
        return this.arr;
    }


    decreaseSort() {
        this.arr = this.storage.shift();
        alert(this.arr);
        return this.arr;
    }



    increaseSort()  {

        let flag = true;
        while (flag) {
            flag = false;
            for (let i = 0; i < this.arr.length; i++) {
                if (this.arr[i] > this.arr[i + 1]) {
                    [this.arr[i], this.arr[i + 1]] = [this.arr[i + 1], this.arr[i]];
                    this.storage = [this.arr.slice(0), ...this.storage];
                    flag = true;
                    alert(this.arr);
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
        this.listOfIndexes = sequence;
        this.inputValue = document.getElementById('input').value.split("").map(element => Number(element));
        this.arr = this.inputValue.slice(0);

    }

    drawArray() {
        let container = document.createElement('div');
        container.className = "line__inner";
        container.id = "line__inner";
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
        alert("Indexes"+this.listOfIndexes);
        // [...elems] = document.getElementsByClassName('line');
        //let elems = documents.getElementById('line__inner').children;
        //alert(elems.length);
        for (let i =0; i < this.arr.length; i++){
            for (let j =0; j < this.listOfIndexes.length; j++) {
                // this.arr[this.listOfIndexes[j]].style.left = i * 5 + 'px';
                //this.arr[this.listOfIndexes[j]].style.left = i * 5 + 'px';
            }
        }
    }

    print() {
        alert(this.listOfIndexes)
    }
}

let inputValue = document.getElementById('input').value;

let sort = new Sort(inputValue);
alert(sort.storage);
let draw = new Draw(sort.storage);

let inputShow = document.getElementById('input');
inputShow.addEventListener('change', () => draw.drawArray());


let increase = document.getElementById('inc');
increase.addEventListener('click',() => draw.drawArray(sort.increaseSort()));



let decrease = document.getElementById('dec');
decrease.addEventListener('click', () => draw.movement(sort.decreaseSort()));

let ob = document.getElementById('ob');
ob.addEventListener('click', () => draw.print());

