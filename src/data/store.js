// import Vue from 'vue';
import productsData from './products';

const store = {
  state: {
    productsData,
    cartItems: [
      {
        id: 1,
        amount: 1,
        temporaryFlag: false,
      },
      {
        id: 2,
        amount: 2,
        temporaryFlag: true,
      },
    ],
  },
  getCartList() {
    return this.state.cartItems.map((item) => ({
      ...item,
      product: this.state.productsData.find((p) => p.id === item.id),
    }));
  },

  getCartTotalAmount() {
    return this.getCartList().filter((item) => item.temporaryFlag === false)
      .reduce((acc, item) => item.amount + acc, 0);
  },

  getCartTotalPrice() {
    return this.getCartList().filter((item) => item.temporaryFlag === false)
      .reduce((acc, item) => (item.product.price * item.amount) + acc, 0);
  },

  addToCart(payload) {
    const product = this.state.cartItems.find((item) => item.id === payload.productId);
    if (product) {
      product.amount += payload.amount;
      product.temporaryFlag = false;
    } else {
      this.state.cartItems.push({
        id: payload.productId,
        amount: payload.amount,
        temporaryFlag: payload.flag,
      });
    }
  },
  toggleCartFlag(payload) {
    const product = this.state.cartItems.find((item) => item.id === payload);
    product.temporaryFlag = !product.temporaryFlag;
  },
  cleanCart() {
    this.state.cartItems = [];
  },
  updateCartAmount(payload) {
    const product = this.state.cartItems.find((item) => item.id === payload.productId);
    product.amount = payload.amount;
  },
};

export default store;
