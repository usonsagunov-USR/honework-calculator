var a = Number(prompt("Ведеите сумму"))

var discount = 0
if (a  < 100) {
    discount = 0
}else if (a < 500) {
    discount = 0.05
}else if (a < 1000) {
    discount = 0.10
}else {
    discount = 0.15
}

var result = a - a * discount

console.log("Скидка: " + (discount * 100) + "%")
console.log("Итоговая сумма: " + result.toFixed(2))