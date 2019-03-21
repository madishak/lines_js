class Test {
    constructor(list) {
        this.arr =  list;
        this.storage = [];
        //this.arrSaver = [...this.arr];

    }
    decrease() {
        let last = this.storage.shift();
        return last;
    }



    increase()  {

            let t = this.arr;
            this.storage = [t, ...this.storage];

            let flag = true;
            while (flag) {
                flag = false;

                for (let i = 0; i < t.length; i++) {
                    // let arrCopy = arrSaver;
                    if (t[i] > t[i + 1]) {
                        [t[i], t[i + 1]] = [t[i + 1], t[i]];
                        t = [...this.arr];
                        flag = true;
                        return t;
                    }
                }
            }


    }


    print() {
        return this.storage;
    }

}

const a = [9,3,6,7,1,7];


let t = new Test(a);

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






