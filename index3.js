class SortAndDraw  {
    constructor(numberString) {
        this.arr = numberString.split("").map(element => Number(element));
        this.listOfIndexes = [];
    }



    showArray() {
        return this.drawArray(this.arr);
        // alert(this.arr);
    }

    increaseSort() {
        // for (let i = 0; i < this.arr.length - 1; i++) {
        //     for (let j = i + 1; j < this.arr.length; j++) {
        //         if (this.arr[i] > this.arr[j]) {
        //             [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
        //             this.listOfIndexes = [i, j, ...this.listOfIndexes];
        //             // this.pointer = this.pointer + 1;
        //             return this.drawArray(this.arr);
        //             // alert(this.l);
        //         }
        //     }
        // }
        let pointer = 1;
        while (pointer) {
            pointer = 0;

            for (let i = 0; i < this.arr.length; i++) {

                if (this.arr[i] > this.arr[i + 1]) {
                    [this.arr[i], this.arr[i + 1]] = [this.arr[i + 1], this.arr[i]];

                    // let temp = arr[i];
                    // arr[i] = arr[i + 1];
                    // arr[i + 1] = temp;
                    this.listOfIndexes = [i, i + 1, ...this.listOfIndexes];
                    pointer = 1;
                    return drawArray(this.arr);
                    //
                    // alert(this.arr);
                    // alert(l);
                }
            }


        }


        // while (!this.pointer) {
        // for (let i = 0; i < this.arr.length ; i++) {
        //
        //         if (this.arr[i] > this.arr[i+1]) {
        //
        //             let temp = this.arr[i];
        //             this.arr[i] = this.arr[i+1];
        //             this.arr[i+1] = temp;
        //             this.l = [i, i+1, ...this.l];
        //             // this.pointer = this.pointer + 1;
        //             return this.drawArray(this.arr);
        //             // alert(this.l);
        //         }
        //     }
        //
        // }
    }

    backSort() {
        for (let i = 0; i < this.arr.length; i++)
        {
            if (this.listOfIndexes.length != 0) {
                [this.arr[this.listOfIndexes[0]], this.arr[this.listOfIndexes[1]]] = [this.arr[this.listOfIndexes[1]], this.arr[this.listOfIndexes[0]]];
                this.listOfIndexes.shift(this.listOfIndexes[0]);
                this.listOfIndexes.shift(this.listOfIndexes[1]);
                return this.drawArray(this.arr);
            }
        }
    }

    rowOfIndexes() {
        return this.listOfIndexes;
    }


    drawArray(arr) {

        let container = document.createElement('div');
        container.className = "line__inner";
        document.body.appendChild(container);
        for (let i = 0; i < arr.length; i++) {

            let newDiv = document.createElement('div');
            newDiv.innerHTML = arr[i];
            newDiv.id = arr[i];
            newDiv.className = "line";
            container.appendChild(newDiv);
            newDiv.style.height = 15 * arr[i]+'px';
            newDiv.style.display = 'block';
        }

    }

    // this.drawArray = function () {
    //
    //     this.container = document.createElement('div');
    //     this.container.className = "line__inner";
    //     document.body.appendChild(this.container);
    //     for (let i = 0; i < this.arr.length; i++) {
    //
    //         this.newDiv = document.createElement('div');
    //         this.newDiv.innerHTML = this.arr[i];
    //         this.newDiv.id = this.arr[i];
    //         this.newDiv.className = "line";
    //         this.container.appendChild(this.newDiv);
    //         this.newDiv.style.height = 15 * this.arr[i]+'px';
    //         this.newDiv.style.display = 'block';
    //     }
    //
    //     return this.newDiv;
    // }
}




let inputValue = document.getElementById('input').value;

let sortAndDraw = new SortAndDraw(inputValue);


let inputShow = document.getElementById('input');
inputShow.addEventListener('change', () => sortAndDraw.showArray());


let increase = document.getElementById('inc');
increase.addEventListener('click',() => sortAndDraw.increaseSort());


let decrease = document.getElementById('dec');
decrease.addEventListener('click', () => sortAndDraw.backSort());


let indexes = document.getElementById('indexes');
indexes.addEventListener('click', () => sortAndDraw.rowOfIndexes());
