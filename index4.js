class Sort {
    constructor(numberString) {
        this.numsArr =  numberString.split("").map(element => Number(element));
        this.arr = this.numsArr.slice(0);
        this.storage = [this.numsArr];
        this.indSaver = {};

    }

    performArray(){
        return this.arr;
    }


    decreaseSort() {
        alert(this.storage);
        this.arr = this.storage.shift();

        return this.arr;
    }



    increaseSort()  {
        alert(this.storage);
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
        // let i = 0;
        alert(this.storage);
    }

    changeNums() {

        if (this.storage.length > 1) {
            let firstArr  = this.storage[0];
            let secondArr = this.storage[1];
            for (let i = 0; i < firstArr.length; i++) {
                this.indSaver.a1 = firstArr[i];
                this.indSaver.a2 = firstArr[i+1];



                for (let j = 0; j < secondArr.length; j++) {
                    this.indSaver.b1 = secondArr[j];
                    this.indSaver.b2 = secondArr[j+1];

                    if (this.indSaver.a1 === this.indSaver.b2 && this.indSaver.a2 === this.indSaver.b1)  {
                        return this.indSaver;
                    }


                }

            }


        }
        else  {
            return "Nothing";
        }
    }

    anim() {
        // this.changeNums();
        // alert("tuk");
        // alert(this.indSaver.b1);
        // alert(this.indSaver.b2);
        //
        // let firstWidth = document.getElementById(this.indSaver.a1).offsetWidth;
        // let secondWidth = document.getElementById(this.indSaver.a2).offsetWidth;
        // alert(firstWidth);
        // alert(secondWidth);
        let firstColl = document.getElementById(this.indSaver.a2);
        let secondColl = document.getElementById(this.indSaver.a1);
        // // alert(firstColl);
        // // alert(secondColl);
        // firstColl.style.right = -firstWidth - 20 + 'px';
        // secondColl.style.right = secondWidth + 20 + 'px';
        // alert("Madina");
        const [...n] = document.getElementsByClassName('line');

        for(let i = 0; i < this.arr.length; i++) {
            //alert(typeof Number(n[i].id));
            //alert(typeof this.indSaver.b1);
            firstColl.style.left = i + 28 + 'px';
            secondColl.style.left = i - 28 + 'px';
            //[n[this.indSaver.a2].style.right, n[this.indSaver.a1].style.right] = [n[this.indSaver.a1].style.right, n[this.indSaver.a2].style.right]
            // if (i === this.indSaver.a2 && i+1 === this.indSaver.a1) {
            //     n[i].style.right = i * 10 + 'px';
            //     n[i+1].style.right = i * 10 + 'px';
            // }

        }
    }

    anime() {
        const [...n] = document.getElementsByClassName('line');
        let i = 0;
        alert(n[this.indSaver.a2]);
        // while (i < n.length) {
        //     if (n[i].id === "1") {
        //         n[i].style.background = 'red';
        //         i++;
        //     }
        // }
        // for (let i = 0; i < n.length; i++) {
        //     n[i].style.right = i * 5 + 'px';
        // }
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
            //newDiv.style.right = i * 5 + 'px';
            newDiv.style.display = 'block';
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
decrease.addEventListener('click', () => draw.drawArray(sort.decreaseSort()));

let ob = document.getElementById('ob');
ob.addEventListener('click', () => sort.print());

