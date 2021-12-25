
const main = document.querySelector('#main');

let shoppingCart = []
let emptyBasket = '<p>Ваша корзина пуста</p>'

class Basket {
    constructor(product, image, price, quantity) {
        this.product = product;
        this.image = `img/${image}.png`;
        this.price = price;
        this.quantity = quantity;
    }
}

shoppingCart.push(
    new Basket('Ipad', 'Image1', 45000, 2)
);
shoppingCart.push(
    new Basket('Iphone', 'Image2', 77990, 3)
);
shoppingCart.push(
    new Basket('Ipod', 'Image3', 15000, 1)
);


/*
var product_1 = {
    product: 'Планшет',
    model: "Ipad",
    year: 2021,
    color: "черный",
    price: 40000,
    quantity: 2
}

var product_2 = {
    product: 'Телефон',
    model: "Iphone",
    year: 2021,
    color: "черный",
    price: 95999,
    quantity: 3
}

var shoppingCart = new Basket(product_1, product_2)
*/
if (shoppingCart == 0) {
    main.insertAdjacentHTML('beforeend', `<div class="prod_item total">${emptyBasket}</div>`);
} else {
    for (const iterator of shoppingCart) {
        main.insertAdjacentHTML('beforeend',
            `<div class="prod_item">
        <span>Товар - ${iterator.product}</span> 
        <span>Цена товара - ${iterator.price} руб</span>
        <span>Количество - ${iterator.quantity}</span>
        <span><img src="${iterator.image}"></span>
        </div>`);
    }
}


function finalChart(shoppingCart) {
    return shoppingCart.reduce(function (acc, shoppingCart) {
        return acc + shoppingCart.quantity
    }, 0)
};


function finalCost(shoppingCart) {
    return shoppingCart.reduce(function (acc, shoppingCart) {
        return acc + (shoppingCart.price * shoppingCart.quantity)
    }, 0)
};


if (shoppingCart != 0) {
    const totalPrice = main.insertAdjacentHTML('beforeend',
        `<hr><div class="prod_item total">В корзине: ${finalChart(shoppingCart)} товаров на сумму 
    ${finalCost(shoppingCart)} рублей</div>`);
}