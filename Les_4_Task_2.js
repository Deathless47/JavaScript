/*
2. Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/


/*
Каждму из товаров можно добавить различные свойства, цвет, количество, модель и т.п.
*/





class Basket {
    constructor(...args) {
        this.args = []
        for (let item of args) {
            this.args.push(item)
        }
    }
    countBasketPrice_2() {
        return this.args.reduce((sum, item) => sum + item.price)
    }
}

var product_1 = {
    name: 'Планшет',
    model: "Ipad",
    year: 2021,
    color: "черный",
    price: 40000
}

var product_2 = {
    name: 'Телефон',
    model: "Iphone",
    year: 2021,
    color: "черный",
    price: 95999
}

var basketItems_2 = new Basket(product_1, product_2)


console.log('Стоимость товаров: ' + basketItems_2.countBasketPrice_2() + ' рублей')



