'use strict';

const API_URL = 'https://github.com/GeekBrainsTutorial/online-store-api';

class GoodsItem {
    constructor(product_name, product_price) {
        this.product_name = product_name;
        this.product_price = product_price;
    }
    render() {
        return `<div class="item goods-list">
      <div class="shadowAndImg">
          <div class="shadow">
              <button>
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

    // fetchGoods(url) {
    //     return fetch(url)
    //         .then(r => r.json())
    //         .then(r => {
    //             this.goods = r;
    //         });
    // }

    // не понимаю, чем отличаются fetch и promise
    // как в promise получить данные по ссылке? 

    fetchGoods() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 3000);
        });
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.product_price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }


    // не понимаю, почему у меня не подтягивается разментка по ссылке ${API_URL}/responses/getGoodById.json
    // fetchGoods(cb) {
    //     makeGETRequest(`${API_URL}/responses/getGoodById.json`, (goods) => {
    //         this.goods = JSON.parse(goods);
    //         cb();
    //     })
    // }


}

// класс для корзины
class Cart {
    constructor() {
        this.itemsPutInCart = []
    }
    // метод, кладущий товар в корзину // ??
    addToCart() { }
    // метод, убирающий товар из корзины // ??
    deleteFromCart() { }
    // метод получения списка товаров корзины 
    getCartList() {
        let listHtml = '';
        this.itemsPutInCart.forEach(item => {
            const cartItem = new ItemPutInCart(item.product_name, item.product_price);
            listHtml += cartItem.render();
        });
        document.querySelector('.#').innerHTML = listHtml;
    }
}

// класс для элемента корзины - такой же как класс с товарами? не понимаю 
class ItemPutInCart {
    constructor(product_name, product_price) {
        this.product_name = product_name;
        this.product_price = product_price;
    }
    render() {
        return `<div class="item goods-list">
      <div class="shadowAndImg">
          <div class="shadow">
              <button>
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

const list = new GoodsList();
const cart = new Cart();
list.fetchGoods(`${API_URL}/responses/getGoodById.json`).then(() => list.render());

