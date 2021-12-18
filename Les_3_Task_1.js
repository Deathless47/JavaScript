/*
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/


var i = 0;
while (i <= 100) {
    var a = true;
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            a = false;
            break;
        }
    }
    if (a) console.log(i);
    i++;
}
