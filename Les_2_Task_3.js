/*
3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
*/

var a = 7;
var b = 6;
if (a > 0 && b > 0) {
    x = a - b;
    console.log('Разность чисел = ')
    alert(x);
}
else if (a < 0 && b < 0) {
    x = a * b;
    console.log('Произведение чисел = ')
    alert(x);
}
else if (a > 0 && b < 0 || a < 0 && b > 0) {
    x = a + b;
    console.log('Сумма чисел = ')
    alert(x);
}