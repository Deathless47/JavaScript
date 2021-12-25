
class Product {
    constructor(product, image, price, discount = 0) {
        this.product = product;
        this.image = `img/${image}.png`;
        this.price = price;
        this.discount = discount;
    }
}

let catalodList = []

catalodList.push(new Product('iPad', 'Image1', 45000, 7));
catalodList.push(new Product('iPhone', 'Image2', 77990));
catalodList.push(new Product('iPod', 'Image3', 15000));


function drowItems() {
    catalodList.forEach(function (item, i) {
        drowItem(item, i);
    })
}

const $catalog = document.querySelector('#catalog');
function drowItem(item, id) {
    $catalog.insertAdjacentHTML('beforeend',
        `<div id="item-${id}" class="prod_item">
        <div class="item">
            <div class="image"><img src="${item.image}"></div>
                <div class="price">Цена: 
                    <span>${item.price}</span> руб.
                </div>
            </div>
        </div>
        <div class="sale">
            <span class='offer ${item.discount > 0 ? 'show' : ''}'>Скидка: ${item.discount}%</span>
            <div data-id="${id}" class="button">В корзину</div>
        </div>
    </div>`);
}
drowItems(catalodList);



let shoppingCart = [];
let emptyBasket = 'Ваша корзина пуста.';

class basketItem {
    constructor(product, price, discount = 0) {
        this.product = product;
        this.price = price;
        this.discount = discount;
        this.finalPrice = function () {
            if (this.discount != 0) {
                return this.price - this.price * this.discount / 100;
            } else {
                return this.price;
            }
        };
    }
}


function totalSumm(shoppingCart) {
    return shoppingCart.reduce(function (acc, price) {
        return acc + price.finalPrice();
    }, 0);
}


function drowTotal(shoppingCart) {
    const $basket = document.querySelector('#basket');
    $basket.textContent = '';

    if (shoppingCart == 0) {
        $basket.insertAdjacentHTML('beforeend', `<div class="total">${emptyBasket}</div>`);
    } else {
        $basket.insertAdjacentHTML('beforeend',
            `<div class="total">
            <p>В корзине: ${shoppingCart.length} 
            товара на сумму ${totalSumm(shoppingCart)} рублей.</p>
            <a class="buy" href="#">Купить</a>
        </div>`);
    }
}
drowTotal(shoppingCart);


$catalog.addEventListener('click', function (e) {
    if (e.target.className === 'button') {
        const id = Number(e.target.getAttribute('data-id'));
        const choice = catalodList[id];
        shoppingCart.push(new basketItem(choice.product, choice.price, choice.discount));
        drowTotal(shoppingCart);
    }
});
