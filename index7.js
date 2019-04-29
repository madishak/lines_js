class Sort {
    constructor(numberString) {
        this.numsArr =  numberString.split("").map(element => Number(element));
        this.arr = this.numsArr.slice(0);
        this.listOfIndexes = [];
        this.struct = {"arr": this.arr}
    }

    arrayAndIndexes(){
        return this.struct;
    }


    decreaseSort() {
        const incEveryIndex = this.listOfIndexes.reduce((acc, elem) => [elem+1, elem,...acc], []).reverse();
        console.log(incEveryIndex);
        for (let i = 0; i < this.arr.length; i++)
        {
            if (this.listOfIndexes.length !== 0) {
                [this.arr[incEveryIndex[0]], this.arr[incEveryIndex[1]]] = [this.arr[incEveryIndex[1]], this.arr[incEveryIndex[0]]];
                incEveryIndex.shift(incEveryIndex[0]);
                incEveryIndex.shift(incEveryIndex[1]);

                this.listOfIndexes.shift(this.listOfIndexes[0]);

                this.struct.indexes = this.listOfIndexes;
                this.struct.arr = this.arr;


                return this.arr;
            }
        }
    }



    increaseSort()  {

        let flag = true;
        while (flag) {
            flag = false;
            for (let i = 0; i < this.arr.length; i++) {
                if (this.arr[i] > this.arr[i + 1]) {
                    [this.arr[i], this.arr[i + 1]] = [this.arr[i + 1], this.arr[i]];
                    this.listOfIndexes = [i, ...this.listOfIndexes];
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
        alert(this.arrayAndIndexes.indexes);
        const fixedColumnHeight = 15;
        const columnMargin = 5;
        // let mainInner = document.createElement('div');
        // mainInner.className = "main__inner";
        // mainInner.id = "main__inner";
        // document.body.appendChild(mainInner);
        let container = document.createElement('div');
        container.className = "line__inner";
        container.id = "line__inner";
        document.body.appendChild(container);
        // mainInner.appendChild(container);
        for (let i = 0; i < this.arr.length; i++) {

            let newDiv = document.createElement('div');
            newDiv.innerHTML = this.arr[i];
            newDiv.id = this.arr[i];
            newDiv.className = "line";
            container.appendChild(newDiv);
            newDiv.style.height = fixedColumnHeight * this.arr[i]+'px';
            newDiv.style.left = i * columnMargin + 'px';
            newDiv.style.display = 'block';
        }

    }

    movement() {
        let listOfIndexes = this.arrayAndIndexes.indexes;   //indexes' stack (sort steps)

        const [...columns] = document.getElementsByClassName('line'); //columns => HTML objects





        return columns.forEach((elem, ind) => {
            const elemOffset = elem.offsetLeft;
            console.log(elemOffset);
            const position = listOfIndexes[ind];
            console.log(listOfIndexes[ind]);
            // if (listOfIndexes[1] === ind) {
            //     alert("madina");
            // }

            return elem.style.left = position * elemOffset + 'px';
        })



    }


}

let inputValue = document.getElementById('input').value;

let sort = new Sort(inputValue);

let draw = new Draw(sort.arrayAndIndexes());

let inputShow = document.getElementById('input');
inputShow.addEventListener('change', () => draw.drawArray());


let increase = document.getElementById('inc');
increase.addEventListener('click',() => draw.movement(sort.increaseSort()));



let decrease = document.getElementById('dec');
decrease.addEventListener('click', () => draw.drawArray(sort.decreaseSort()));



