<template lang="pug">
  .cart-item__counter(
    :class="{'cart-item__counter_deleted': item.temporaryFlag === true}"
    )
    button.cart-item__minus(
      @click="decrement"
      :disabled="amount <= 1"
      type="button" aria-label="Убрать один товар")
    input.cart-item__input(type="text", v-model.number="amount", name="count")
    button.cart-item__plus(
      @click="increment"
      type="button", aria-label="Добавить один товар")
</template>

<script>
import store from '../data/store';

export default {
  props: ['item'],
  computed: {
    amount: {
      get() {
        return this.item.amount;
      },
      set(value) {
        if ((value < 1) || typeof (value) !== 'number') {
          store.updateCartAmount({ productId: this.item.id, amount: this.item.amount });
          return;
        }
        store.updateCartAmount({ productId: this.item.id, amount: value });
      },
    },
  },
  methods: {
    increment() {
      store.updateCartAmount({ productId: this.item.id, amount: this.item.amount + 1 });
    },
    decrement() {
      if (this.productAmount === 1) return;
      store.updateCartAmount({ productId: this.item.id, amount: this.item.amount - 1 });
    },
  },
};
</script>

<style lang="scss" scoped>
button:disabled {
  cursor: not-allowed;
}
</style>
