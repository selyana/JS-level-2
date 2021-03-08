'use strict';

const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 650 },
    { title: 'Jeans', price: 550 },
    { title: 'Gloves', price: 100 }
];

const renderGoodsItem = ({title, price}) => {
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

const wrapper = document.querySelector('.goods-list');

const renderGoodsList = (goodsObj, DOMElement) => {
    const goodsList = goodsObj.map(item => renderGoodsItem(item));
    DOMElement.innerHTML = goodsList.join("");
}

renderGoodsList(goods, wrapper);

