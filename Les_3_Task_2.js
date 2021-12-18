/*
2. С этого урока начинаем работать с функционалом интернет-магазина. 
Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины 
в зависимости от находящихся в ней товаров. 
Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/



var basketItems = [['Телефон', 19900], ['Планшет', 40000], ['Ноутбук', 125000], ['Телевизор', 55000], ['Пылесос', 15000]];

var basketPrice = 0;
for (let item of basketItems) {
    basketPrice += item[1];
    console.log(item[0] + ' стоит: ' + item[1]);
}


function countBasketPrice(basketItems) {
    let basketPrice = 0;
    for (let item of basketItems) {
        basketPrice += item[1];
    }
    return basketPrice;
}

console.log('Стоимость корзины товаров: ' + countBasketPrice(basketItems) + ' рублей')

