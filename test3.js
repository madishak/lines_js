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



    increaseSort()  {

        let flag = true;
        while (flag) {
            flag = false;
            for (let i = 0; i < this.arr.length; i++) {
                if (this.arr[i] > this.arr[i + 1]) {
                    [this.arr[i], this.arr[i + 1]] = [this.arr[i + 1], this.arr[i]];
                    this.listOfIndexes = [i, i + 1, ...this.listOfIndexes];
                    this.storage = [this.arr.slice(0), ...this.storage];
                    flag = true;
                    return this.arr;
                }
            }
        }


    }





}

class Draw {
    constructor(sequence) {
        this.listOfIndexes = sequence;
        this.storage = sequence;
        // this.inputValue = document.getElementById('input').value.split("").map(element => Number(element));
        //this.arr = this.inputValue.slice(0);

    }

    print() {
        console.log(this.storage);
    }


}


let sort = new Sort('5124');
// console.log(sort.storage);
let draw = new Draw(sort.performArray());



sort.increaseSort();
console.log(sort.performArray());
draw.print();
console.log("=================");
// console.log(sort.increaseSort());
// console.log(sort.increaseSort());
// console.log(sort.increaseSort());
// console.log(sort.increaseSort());
sort.increaseSort();
console.log(sort.performArray());
draw.print();
console.log("=================");
sort.increaseSort();
console.log(sort.performArray());
draw.print();
console.log("=================");


sort.decreaseSort();
console.log(sort.performArray());
draw.print();
console.log("=================");

sort.decreaseSort();
console.log(sort.performArray());
draw.print();
console.log("=================");

sort.decreaseSort();
console.log(sort.performArray());
draw.print();
console.log("=================");