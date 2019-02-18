function  sum(arr) {
    this.value = arr;
    this.newArr = [];
    this.newV = 0;
    this.s = function () {
        this.newV += this.value.reduce((elem, acc) => elem+acc,0);
        return +this.newV;
    }
    this.ad = function (x) {
        this.newV  = this.newV + x;
        return this.newV ;

    }
    this.minus = function (x) {
        this.newV  = this.newV - x;
        return this.newV ;

    }

}

var d = new sum([2,9,5,7]); //вызвала конструктор
alert(d.s()); //вывод того что получилось в this.s
d.ad(3); // прибавляю к this.s переданное значение в this.ad
alert(d.ad(1)); //прибавляю к this.s переданное значение в this.ad (acc)


alert(d.ad(5));//прибавляю к this.s переданное значение в this.ad (acc)


let increase = document.getElementById('inc');
increase.onclick = function () {
    return alert(d.ad(2));
};

let decrease = document.getElementById('dec');
decrease.onclick = function () {
    return alert(d.minus(2));
};
