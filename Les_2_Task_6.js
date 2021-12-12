/*
### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов,
operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций
(использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
*/
function addition(arg1, arg2) {
    return arg1 + arg2;
}

function subtraction(arg1, arg2) {
    return arg1 - arg2;
}

function multiplication(arg1, arg2) {
    return arg1 * arg2;
}

function division(arg1, arg2) {
    return arg1 / arg2;
}
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return addition;
        case 'вычитание':
            return subtraction;
        case 'деление':
            return division;
        case 'умножение':
            return multiplication;
    }
}



alert(mathOperation(45, 23, addition))