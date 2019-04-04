class SortAndDraw {
    constructor(numberString) {
        this.numsArr =  numberString.split("").map(element => Number(element));
        this.arr = this.numsArr.slice(0);
        this.storage = [this.numsArr];
        this.indSaver = {};

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


    drawArray() {
        let container = document.createElement('div');
        container.className = "line__inner";
        document.body.appendChild(container);
        for (let i = 0; i < this.arr.length; i++) {

            let newDiv = document.createElement('div');
            newDiv.innerHTML = this.arr[i];
            newDiv.id = i;
            newDiv.className = "line";
            container.appendChild(newDiv);
            newDiv.style.height = 15 * this.arr[i]+'px';
            newDiv.style.right = i * 5 + 'px';
            newDiv.style.display = 'block';
        }

    }

    print() {
        // let i = 0;
       console.log(typeof this.arr[i]);
    }

    changeNums() {

        if (this.storage.length > 1) {
            let firstArr  = this.storage[0];
            let secondArr = this.storage[1];
            for (let i = 0; i < firstArr.length; i++) {
                this.indSaver.a1 = i;
                this.indSaver.a2 = i + 1;


                for (let j = 0; j < secondArr.length; j++) {
                    this.indSaver.b1 = j;
                    this.indSaver.b2 = j + 1;

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
        // let firstColl = document.getElementById(this.indSaver.b1);
        // let secondColl = document.getElementById(this.indSaver.b2);
        // // alert(firstColl);
        // // alert(secondColl);
        // firstColl.style.right = -firstWidth - 20 + 'px';
        // secondColl.style.right = secondWidth + 20 + 'px';
        // alert("Madina");
        const [...n] = document.getElementsByClassName('line');

        for(let i = 0; i < n.length; i++) {
            //alert(typeof Number(n[i].id));
            //alert(typeof this.indSaver.b1);
            n[this.indSaver.a2].style.right = i * 7 + 'px';
            n[this.indSaver.a1].style.right = -i * 7 + 'px';
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
        while (i < n.length) {
            if (n[i].id === '6') {
                n[i].style.right = i * 5 + 'px';
                i++;
            }
        }
        // for (let i = 0; i < n.length; i++) {
        //     n[i].style.right = i * 5 + 'px';
        // }
    }

}
//
let inputValue = document.getElementById('input').value;

let sortAndDraw = new SortAndDraw(inputValue);


let inputShow = document.getElementById('input');
inputShow.addEventListener('change', () => sortAndDraw.drawArray());


let increase = document.getElementById('inc');
increase.addEventListener('click',() => sortAndDraw.anime(sortAndDraw.changeNums(sortAndDraw.increaseSort())));


let decrease = document.getElementById('dec');
decrease.addEventListener('click', () => sortAndDraw.anim(sortAndDraw.changeNums(sortAndDraw.decreaseSort())));

let ob = document.getElementById('ob');
ob.addEventListener('click', () => alert(sortAndDraw.print()));

