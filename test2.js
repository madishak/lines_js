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
                    return this.arr;
                }
            }
        }


    }





}

class Draw {
    constructor(sequence) {
        this.listOfIndexes = sequence;
       // this.inputValue = document.getElementById('input').value.split("").map(element => Number(element));
        //this.arr = this.inputValue.slice(0);

    }

    print() {
        console.log(this.listOfIndexes);
    }


}


let sort = new Sort('379531');
let draw = new Draw(sort.storage);


draw.print();
draw.print();
draw.print();
draw.print();
draw.print();
draw.print(sort.increaseSort());
draw.print(sort.increaseSort());
// draw.print(sort.increaseSort());
//
// console.log(sort.increaseSort());
// console.log(sort.increaseSort());
// console.log(sort.increaseSort());
// console.log(sort.increaseSort());
// console.log(sort.increaseSort());
// console.log(sort.increaseSort());
// console.log(sort.increaseSort());
console.log(sort.storage);
