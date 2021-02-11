'use strict';

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
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
          ${this.title}
          </div>
          <div class="price">${this.price}</div>
      </div>
  </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    // не понимаю, почему то, что прописано ниже, нельзя сразу записать в конструктор, зачем для этого нужна функция
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    summary() {
        let sum = 0;
        this.goods.forEach(function (good) {
            sum += good.price;
        });
        console.log(sum);
    }

}

// класс для корзины
class Cart {
    constructor() {
        this.itemsPutInCart = []
    }
    // метод, кладущий товар в корзину
    addToCart() { }
    // метод, убирающий товар из корзины
    deleteFromCart() { }
    // метод, считающий сумму покупок
    checkPrice() { }
}

// класс для элемента корзины
class ItemPutInCart {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        //тут снова будет html разметка? 
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.summary();

