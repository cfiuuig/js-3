let num;
do {
    num = +prompt("введите кол бананов")
    if (isNaN(num)) {
        alert("введите число!")
    }
} while (isNaN(num));
console.log(num + (num === 1 ? " banana" : " bananas"));


do {
    num = +prompt("Введите число");

    if (isNaN(num)) {
        alert("Введите число!");
    }

} while (isNaN(num));

let sum = 0;

for (let i = 1; i <= num; i++) {

    if (i % 2 === 0) {
        sum += i;
    }
привет
}

alert("Сумма четных чисел = " + sum);