var arr = [8,12,9,6];

class Test {
    constructor(tarr) {
        this.arr = [...tarr];
        this.storage = [...this.arr];
        this.current = 0;
    }

    backSort() {
        this.current = this.storage.pop(this.arr);
        alert(this.storage);
        return this.current;
        // alert(this.arr);
    }

    incSort() {
        // this.storage.push(this.arr);
        alert(this.arr);

        let pointer = 1;

        while (pointer) {
            pointer = 0;


            for (let i = 0; i < this.arr.length; i++) {

                if (this.arr[i] > this.arr[i + 1]) {


                    [this.arr[i], this.arr[i + 1]] = [this.arr[i + 1], this.arr[i]];


                    pointer = 1;
                    this.storage = [this.arr, ...this.storage];
                    alert(this.arr);
                    return this.arr;
                }
            }
        }
    }



    show(){

        alert(this.storage);
    }


    drawArray() {
        const gap = 15;
        let container = document.createElement('div');
        container.className = "line__inner";
        document.body.appendChild(container);
        for (let i = 0; i < this.arr.length; i++) {

            let newDiv = document.createElement('div');
            newDiv.innerHTML = this.arr[i];
            newDiv.id = this.arr[i];
            newDiv.className = "line";
            container.appendChild(newDiv);
            newDiv.style.height = gap * this.arr[i]+'px';
            newDiv.style.display = 'block';
        }

    }
}

let sortAndDraw = new Test(arr);


let increase = document.getElementById('inc');
increase.addEventListener('click',() => sortAndDraw.drawArray(sortAndDraw.incSort()));

let decrease = document.getElementById('dec');
decrease.addEventListener('click', () => sortAndDraw.drawArray(sortAndDraw.backSort()));

let ob = document.getElementById('ob');
ob.addEventListener('click', () => sortAndDraw.show());