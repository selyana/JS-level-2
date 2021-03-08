'use strict';

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


class GoodsItem {
    constructor(product_id, product_name, product_price) {
        this.product_id = product_id;
        this.product_name = product_name;
        this.product_price = product_price;
    }

    render() {
        return `<div class="item goods-list">
      <div class="shadowAndImg">
          <div class="shadow">
              <button id="${this.product_id}" class="add-btn">
                  <img src="images/addToCart.png" alt="">
                  Add to Cart
              </button>
          </div>
          <img class="img" src="images/products/product1.jpg" alt="">
      </div>
      <div class="nameAndPrice">
          <div class="name">
          ${this.product_name}
          </div>
          <div class="price">${this.product_price}</div>
      </div>
  </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods(url) {
        return fetch(url)
            .then(res => res.json())
            .then(res => {
                this.goods = res;
            });
    }

    getGoodById(id) {
        return this.goods.find(good => good.id_product === id);
    }

    render() {
        let listHtml = '';
        console.log(this.goods);
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.id_product, good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

// класс для корзины
class Cart {
    constructor() {
        this.itemsPutInCart = []
    }

    // метод, кладущий товар в корзину
    addToCart(product) {
            const cartItem = new ItemPutInCart(product.id_product, product.product_name, product.price);
            this.itemsPutInCart.push(cartItem);
    }

    // метод-счетчик
    getCount() {
        return this.itemsPutInCart.length;
    }

    // метод для очистки корзины
    deleteFromCart() { 

    }
}

// класс для элемента корзины
class ItemPutInCart {
    constructor(product_id, product_name, product_price) {
        this.product_id = product_id;
        this.product_name = product_name;
        this.product_price = product_price;
        this.product_count = 1;
    }

    render() {
        return `<div></div>`;
    }
}


const list = new GoodsList();
const cart = new Cart();

list.fetchGoods(`${API_URL}/catalogData.json`)
.then(() => {
    list.render();
    ready();
});

function ready() {
    const buttons = document.querySelectorAll('.add-btn');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.id);
            const product = list.getGoodById(productId);
            console.log({ product });

            cart.addToCart(product);
            const cartCounter = document.getElementById('cart-count');
            const count = cart.getCount();
            if (count !== 0) {
                cartCounter.innerText = count;
            }
        });
    });
}