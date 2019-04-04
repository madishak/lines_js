class Test {
    constructor(list) {
        this.nums =  list.split("").map(element => Number(element));
        this.arr = this.nums.slice(0);
        this.storage = [this.nums];

    }
    decrease() {
        let lastArr = this.storage.shift();
        return lastArr;
    }



    increase()  {

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


    print() {
        return this.storage;
    }

    anim() {
        //this.storage = [this.nums, ...this.storage];
        let indSaver = {};
        if (this.storage.length > 1) {
            let firstArr  = this.storage[0];
            let secondArr = this.storage[1];
            for (let i = 0; i < firstArr.length; i++) {
                // indSaver.a1 = firstArr.indexOf(firstArr[i]);
                // indSaver.a2 = firstArr.indexOf(firstArr[i + 1]);
                //[firstArr[i], firstArr[i+1]] = [indSaver.a1, indSaver.a2];
                indSaver.a1 = firstArr[i];
                indSaver.a2 = firstArr[i+1];


                for (let j = 0; j < secondArr.length; j++) {
                    // indSaver.b1 = firstArr.indexOf(secondArr[j]);
                    // indSaver.b2 = firstArr.indexOf(secondArr[j + 1]);
                    //[secondArr[j], secondArr[j+1]] = [indSaver.b1, indSaver.b2];
                    indSaver.b1 = secondArr[j];
                    indSaver.b2 = secondArr[j+1];

                    if (indSaver.a1 === indSaver.b2 && indSaver.a2 === indSaver.b1)  {
                        return indSaver;
                    }


                }

            }


        }
        else  {
            return "Nothing";
        }
    }

}

const a = "9369712";


let t = new Test(a);

console.log(t.increase());
console.log(t.print());
console.log(t.anim());
console.log("=================");
console.log(t.increase());
console.log(t.print());
console.log(t.anim());
console.log("=================");
console.log(t.increase());
console.log(t.print());
console.log(t.anim());
console.log("=================");
console.log(t.increase());
console.log(t.print());
console.log(t.anim());
console.log("=================");
console.log(t.increase());
console.log(t.print());
console.log(t.anim());
console.log("=================");
console.log(t.increase());
console.log(t.print());
console.log(t.anim());
console.log("=================");
console.log(t.increase());
console.log(t.print());
console.log(t.anim());
console.log("=================");
console.log(t.increase());
console.log(t.print());
console.log(t.anim());
console.log("=================");
console.log(t.increase());
console.log(t.print());
console.log(t.anim());

console.log("============================================================================");
console.log(t.decrease());
console.log(t.print());
console.log(t.anim());
console.log("=================");
console.log(t.decrease());
console.log(t.print());
console.log(t.anim());
console.log("=================");
console.log(t.decrease());
console.log(t.print());
console.log(t.anim());
console.log("=================");
console.log(t.decrease());
console.log(t.print());
console.log(t.anim());
console.log("=================");
console.log(t.decrease());
console.log(t.print());
console.log(t.anim());
console.log("=================");
console.log(t.decrease());
console.log(t.print());
console.log(t.anim());
console.log("=================");
console.log(t.decrease());
console.log(t.print());
console.log(t.anim());
console.log("=================");
console.log(t.decrease());
console.log(t.print());
console.log(t.anim());
console.log("=================");
console.log(t.nums);





