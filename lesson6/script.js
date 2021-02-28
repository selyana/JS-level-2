'use strict'



const BASE_URL = 'https://mock-api-builder.vercel.app/api/schema/get';


//компоненты оформила, но как теперь должны работать слушатели событий? 
//компонент для списка товаров
Vue.component('app-goods-list', {
  props: ['goods'],
  template: `
  <div>
    <div v-if="goods.length">
        <app-goods-item
            :name="item.productName"
            :price="item.price"
            v-for="item in goods">
        </app-goods-item>
    </div>
    <div v-if="goods.length == 0">
    <h3>Нет данных</h3>
    </div>
  </div>`,
});

// компонент для товара
// зачем тут нужен онклик? 
Vue.component('app-goods-item', {
  props: ['name', 'price', 'onClick'],
  template: `<div class="goods-item">
                <h3>{{name}}</h3>
                <span>{{price}}</span>
                <button>add to cart 🛒</button>
            </div>`,
});


//компонент для списка товаров в корзине
Vue.component('app-goods-cart', {
  props: ['cart'],
  template: `<div>
  <div class="goods-item" v-for="item in this.cartItems">
  <h3>{{item.productName}}</h3>
  <span>{{item.price}}$</span>
  <span>there are {{item.quantity}} items</span>
  <button>remove from cart 🛒</button>
  </div>
  </div>`,
});

// компонент для поиска
Vue.component('app-input', {
  template: `<div>
  <input type="search" placeholder="Search" v-model="this.searchGoods">
  <button>искать</button>
  </div>
  `,
});


const app = new Vue({
  el: '#root',
  data: {
    cartItems: [],
    goods: [],
    filteredGoods: [],
    searchGoods: '',
    errorMessage: '',
  },

  methods: {

    // почему передается item? 
    addToCart(item){
      let existant = false;
      for (const goodsItem of this.cartItems){
        if (goodsItem.id === item.id){
        existant = true; 
        goodsItem.quantity += 1;
      }
      }

      if (!existant){
        this.cartItems.push({ ... item, quantity: 1});
      }
    },

    removeFromCart(){

    },

    filterGoods() {
          if (!this.goods.length) this.filteredGoods = [];
          if (!this.searchGoods) this.filteredGoods = this.goods;
          this.filteredGoods = this.goods.filter(i => i.productName.toLowerCase().includes(this.searchGoods.toLowerCase()));
        },

    getGoods() {
      fetch(`${BASE_URL}/602c166a89c4a60009ef7046`)
        .then(r => r.json())
        .then(r => {
          this.goods = r;
          this.filteredGoods = this.goods;
        })
        .catch(e => {
          this.errorMessage = e;
        });
    },

  },

  mounted() {
    this.getGoods();
  },
});
