'use strict';

const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 650 },
    { title: 'Jeans', price: 550 },
    { title: 'Gloves', price: 100 }
];

// я не понимаю, как мы на уроке использовали ниже деструктуризацию ({title, price}) - у меня оба undefined, если записывать так
const renderGoodsItem = (title, price) => {
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
        ${title}
        </div>
        <div class="price">${price}</div>
    </div>
</div>`;
};

const renderGoodsList = () => {
    const goodsList = goods.map(item => renderGoodsItem(item.title, item.price));
    const wrapper = document.querySelector('.goods-list');
    wrapper.innerHTML = goodsList;
}

// попробовала использовать форыч, но я так понимю, он не может делать ретурн? 
// const renderGoodsList = () => {
//     const goodsList = goods.forEach(function (item) {
//         return renderGoodsItem(item.title, item.price);
//     });
//     const wrapper = document.querySelector('.goods-list');
//     wrapper.innerHTML = goodsList;
// }

renderGoodsList();