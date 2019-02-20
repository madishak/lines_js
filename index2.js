
function sortAndDraw (r) {
    this.nums = r;
    this.arr;
    this.l = [];
    // this.pointer;
    this.newDiv;
    this.container;

    //
    this.gArray = function () {

        this.arr = this.nums.split("").map(element => Number(element));
        return this.arr;

    }

    this.show = function () {
       return this.gArray();
        // return alert(this.gArray());

    }
    this.increaseSort = function () {
            for (let i = 0; i < this.arr.length - 1; i++) {
                for (let j = i + 1; j < this.arr.length; j++) {
                    if (this.arr[i] > this.arr[j]) {

                        let temp = this.arr[i];
                        this.arr[i] = this.arr[j];
                        this.arr[j] = temp;
                        this.l = [i, j, ...this.l];
                        // this.pointer = this.pointer + 1;
                        return this.arr;
                        // alert(this.l);
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
        //             return this.arr;
        //             // alert(this.l);
        //         }
        //     }
        //
        // }
    }

    this.backSort = function () {
        for (let i = 0; i < this.arr.length; i++)
        {
            if (this.l.length != 0) {
                let temp = this.arr[this.l[0]];
                this.arr[this.l[0]] = this.arr[this.l[1]];
                this.arr[this.l[1]] = temp;
                this.l.shift(this.l[0]);
                this.l.shift(this.l[1]);
                return this.drawArray(this.arr);
            }
        }

        ;
    }

    this.showL = function () {
        return this.l;
    }


    this.drawArray = function (arr) {

        this.container = document.createElement('div');
        this.container.className = "line__inner";
        document.body.appendChild(this.container);
        for (let i = 0; i < arr.length; i++) {

            this.newDiv = document.createElement('div');
            this.newDiv.innerHTML = arr[i];
            this.newDiv.id = arr[i];
            this.newDiv.className = "line";
            this.container.appendChild(this.newDiv);
            this.newDiv.style.height = 15 * arr[i]+'px';
            this.newDiv.style.display = 'block';
        }

        return this.newDiv;
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




let t = document.getElementById('input').value;

let f = new sortAndDraw(t);

// let t = f.getArray();
// f.drawArray(t);
// const showInputArray = () => {
//
//     return alert(sortAndDraw.getArray());
//
// }


let inputValue = document.getElementById('input');
inputValue.onchange = function () {
    f.show();

};

let increase = document.getElementById('inc');
increase.onclick = function () {
    return alert(f.increaseSort());
};

let decrease = document.getElementById('dec');
decrease.onclick = function () {
    return alert(f.backSort());
};

let indexes = document.getElementById('indexes');
indexes.onclick = function () {
    // let r = f.showL();
    return alert(f.showL());
};