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
}

alert("Сумма четных чисел = " + sum);


let num;
let power;

do {
    num = +prompt("введите число")
    if (isNaN(num)) {
        alert("нельзя писать буквы")
    }
} while (isNaN(num));

do {
    power = +prompt("введите степень")
    if (isNaN(power)) {
        alert("нельзя писать буквы")
    }
} while (isNaN(power));

let result = 1;

for (let i = 1; i <= power; i++) {
    result *= num;
}
alert("ответ: " + result)