function SortAndDraw () {
    this.nums = document.getElementById('input').value;
    this.arr = arr;
    const getArray = () => {
        this.arr =  this.nums.split("").map(element => Number(element));
        return this.arr;

    }


    this.drawArray = function (c) {
         alert(this.arr);
        // this.newDiv =  newDiv;
        // this.container = container;
        // this.container = document.createElement('div');
        // this.container.className = "line__inner";
        // document.body.appendChild(this.container);
        // for (let i = 0; i < this.arr.length; i++) {
        //
        //     this.newDiv  = document.createElement('div');
        //     this.newDiv.innerHTML = this.arr[i];
        //     this.newDiv.id = this.arr[i];
        //     this.newDiv.className = "line";
        //     this.container.appendChild(this.newDiv);
        //     this.newDiv.style.height = 15 * this.arr[i]+'px';
        //     this.newDiv.style.display = 'block';
        // }
        //
        // return this.newDiv;
    }

}


let f = new SortAndDraw();
alert(f.arr);
// let t = f.getArray();
// f.drawArray(t);
// const showInputArray = () => {
//
//     return alert(sortAndDraw.getArray());
//
// }


// let inputValue = document.getElementById('input');
// inputValue.addEventListener('change', showInputArray);