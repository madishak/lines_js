function drawArray() {
    this.arr = [9,5,4,5,3,2,7];
    this.container;
    this.newDiv;
    this.draw = function () {

        this.container = document.createElement('div');
        this.container.className = "line__inner";
        document.body.appendChild(this.container);
        for (let i = 0; i < this.arr.length; i++) {

            this.newDiv = document.createElement('div');
            this.newDiv.innerHTML = this.arr[i];
            this.newDiv.id = this.arr[i];
            this.newDiv.className = "line";
            this.container.appendChild(this.newDiv);
            this.newDiv.style.height = 15 * this.arr[i]+'px';
            this.newDiv.style.display = 'block';
        }

        return this.newDiv;
    }
}

let f = new drawArray();

let indexes = document.getElementById('indexes');
indexes.onclick = function () {
    let r = f.showL();
    return drawArray(r);
};