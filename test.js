class Test {
    constructor(list) {
        this.arr =  list;
        this.storage = [];

    }
    decrease() {
        let last = this.storage.shift();
        return last;
    }

    increase()  {

            this.storage = [this.arr, ...this.storage];

            let flag = true;
            while (flag) {
                flag = false;
                for (let i = 0; i < this.arr.length; i++) {
                    if (this.arr[i] > this.arr[i + 1]) {
                        [this.arr[i], this.arr[i + 1]] = [this.arr[i + 1], this.arr[i]];
                        flag = true;
                        return this.arr;
                    }
                }
            }


    }


    print() {
        return this.storage;
    }

}


let t = new Test([9,3,6,7,1,7]);

console.log(t.increase());
console.log(t.print());
console.log("=================");
console.log(t.increase());
console.log(t.print());
console.log("=================");
console.log(t.increase());
console.log(t.print());
console.log("=================");
console.log(t.increase());
console.log(t.print());
console.log("=================");
console.log(t.increase());
console.log(t.print());
console.log("=================");
console.log(t.increase());
console.log(t.print());
console.log("=================");
console.log(t.increase());
console.log(t.print());
console.log("=================");
console.log(t.increase());
console.log(t.print());


