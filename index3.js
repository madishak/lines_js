class SortAndDraw {
    constructor(numberString) {
        this.numsArr =  numberString.split("").map(element => Number(element));
        this.arr = this.numsArr.slice(0);
        this.storage = [];

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
            newDiv.id = this.arr[i];
            newDiv.className = "line";
            container.appendChild(newDiv);
            newDiv.style.height = 15 * this.arr[i]+'px';
            newDiv.style.left = i * 5 + 'px';
            newDiv.style.display = 'block';
        }

    }

    print() {
        return this.storage;
    }

    anim() {
        if (this.storage.length > 2) {
            let firstArr  = this.storage[0];
            let secondArr = this.storage[1];

        }
    }

}

let inputValue = document.getElementById('input').value;

let sortAndDraw = new SortAndDraw(inputValue);


let inputShow = document.getElementById('input');
inputShow.addEventListener('change', () => sortAndDraw.drawArray());


let increase = document.getElementById('inc');
increase.addEventListener('click',() => sortAndDraw.drawArray(sortAndDraw.increaseSort()));


let decrease = document.getElementById('dec');
decrease.addEventListener('click', () => sortAndDraw.drawArray(sortAndDraw.decreaseSort()));

let ob = document.getElementById('ob');
ob.addEventListener('click', () => alert(sortAndDraw.print()));

