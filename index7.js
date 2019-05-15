class Sort {
    constructor(numberString) {
        this.numsArr = numberString.split("").map(element => Number(element));
        this.arr = this.numsArr.slice(0);
        this.listOfIndexes = [];
        this.struct = {"arr": this.arr}
    }

    arrayAndIndexes() {
        return this.struct;
    }


    decreaseSort() {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.listOfIndexes.length !== 0) {
                [this.arr[this.listOfIndexes[0]], this.arr[this.listOfIndexes[1]]] = [this.arr[this.listOfIndexes[1]], this.arr[this.listOfIndexes[0]]];
                this.listOfIndexes.shift(this.listOfIndexes[0]);
                this.listOfIndexes.shift(this.listOfIndexes[1]);

                this.struct.indexes = this.listOfIndexes;
                this.struct.arr = this.arr;


                return this.arr;
            }
        }
    }


    increaseSort() {

        let flag = true;
        while (flag) {
            flag = false;
            for (let i = 0; i < this.arr.length; i++) {
                if (this.arr[i] > this.arr[i + 1]) {
                    [this.arr[i], this.arr[i + 1]] = [this.arr[i + 1], this.arr[i]];
                    this.listOfIndexes = [i, i + 1, ...this.listOfIndexes];
                    console.log(this.listOfIndexes);
                    flag = true;

                    this.struct.indexes = this.listOfIndexes;
                    this.struct.arr = this.arr;


                    return this.arr;
                }
            }
        }


    }


}

class Draw {
    constructor(sequence) {
        this.arrayAndIndexes = sequence;
        this.arr = this.arrayAndIndexes.arr;

    }


    drawArray() {
        //alert(this.arrayAndIndexes.indexes);
        const fixedColumnHeight = 15;
        const columnMargin = 5;

        let container = document.createElement('div');
        container.className = "line__inner";
        container.id = "line__inner";
        document.body.appendChild(container);

        for (let i = 0; i < this.arr.length; i++) {

            let newDiv = document.createElement('div');
            newDiv.innerHTML = this.arr[i];
            newDiv.id = this.arr[i];
            newDiv.className = "line";
            container.appendChild(newDiv);
            newDiv.style.height = fixedColumnHeight * this.arr[i] + 'px';
            //newDiv.style.left = i * columnMargin + 'px';
            newDiv.style.display = 'inline-block';
        }

    }

    movement() {
        let listOfIndexes = this.arrayAndIndexes.indexes;   //indexes' stack (sort steps)

        const [...columns] = document.getElementsByClassName('line'); //columns => HTML objects

        let activeIndexes = {};

        activeIndexes.first = listOfIndexes[0];
        activeIndexes.second = listOfIndexes[1];

        console.log(activeIndexes.first, activeIndexes.second);



        return columns.forEach((col, ind) => {
            listOfIndexes.forEach(elem => {
                if (ind === elem) {
                    console.log('Yes');

                }
            });

            const elemOffset = col.offsetWidth;
            //console.log(elemOffset);
            let positionLeft;
            let positionRight;
            if (ind === activeIndexes.first && ind+1 === activeIndexes.second) {
                console.log(ind, ind+1);

                // alert(ind);
                positionLeft = ind;
                positionRight = ind+1;
                col.style.backgroundColor = 'red';
                col.style.left = positionLeft + 17 + 'px';
                //col.style.left = positionRight + 10 + 'px';
            }
            // else {
            //     col.style.backgroundColor = 'blue';
            //
            // }
        });


        // return columns.forEach((col, ind) => {
        //     const elemOffset = col.offsetLeft;
        //     console.log(elemOffset);
        //
        //     listOfIndexes.forEach((elem, i) => {
        //         if (ind === elem) {
        //
        //             alert(ind);
        //             let position = listOfIndexes[i];
        //             col.style.backgroundColor = 'red';
        //             return col.style.left = position + 'px';
        //         }
        //     });
        // })


    }


}

let inputValue = document.getElementById('input').value;

let sort = new Sort(inputValue);

let draw = new Draw(sort.arrayAndIndexes());

let inputShow = document.getElementById('input');
inputShow.addEventListener('change', () => draw.drawArray());


let increase = document.getElementById('inc');
increase.addEventListener('click', () => draw.movement(sort.increaseSort()));


let decrease = document.getElementById('dec');
decrease.addEventListener('click', () => draw.drawArray(sort.decreaseSort()));



