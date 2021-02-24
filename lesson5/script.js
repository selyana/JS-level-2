'use strict'

const BASE_URL = 'https://mock-api-builder.vercel.app/api/schema/get';

const app = new Vue({
  el: '#root',
  data: {
    goods: [],
    searchGoods: '',
    errorMessage: '',
    // isVisibleCart,
  },

  methods: {
    getGoods() {
      fetch(`${BASE_URL}/602c166a89c4a60009ef7046`)
        .then(r => r.json())
        .then(r => {
          this.goods = r;
          // я не понимаю, почему филтерд гудс приравнивается к гудс
          this.filteredGoods = this.goods;
        })
        .catch(e => {
          this.errorMessage = e;
        });
    },

    //добавила осуществление этого события на кнопку "искать", но не работает 
    filterGoods() {
      if (!this.goods.length) return [];
      if (!this.searchGoods) return this.goods;
      return this.goods.filter(i => i.productName.toLowerCase().includes(this.searchGoods.toLowerCase()));
    },
  },

  // я не понимаю, почему метод филтерд гудс кладется в компьютед, а не в методс (и где вызывается этот метод)
  // computed: {
  //   filteredGoods() {
  //     // не понимаю, что делает строка ниже
  //     // if (!this.goods.length) return [];
  //     if (!this.searchGoods) return this.goods;
  //     return this.goods.filter(i => i.productName.toLowerCase().includes(this.searchGoods.toLowerCase()));
  //   },
  // },

  mounted() {
    this.getGoods();
  },
});
