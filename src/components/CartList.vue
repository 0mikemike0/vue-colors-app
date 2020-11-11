<template lang="pug">
  .modal-cart
    article.cart
      section.cart-header
        h2.cart-header__title Корзина
        button.cart-header__close
      section.cart-items
        .cart-items__header
          p.cart-items__amount 4 товара
          button.cart-items__clean Очистить список
        form.cart-form(action="#", method="POST")
          ul.cart__list
            <CartItem/>
          section.cart-footer
            .cart-total
              p.cart-total__label Итого
              p.cart-total__cost 6000 &#8381
            button.cart-footer__order(type="submit", aria-label="Оформить заказ") Оформить заказ
</template>

<script>
import CartItem from './CartItem.vue';

export default {
  components: {
    CartItem,
  },
};
</script>

<style lang="scss">
.modal-cart {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  visibility: hidden;
  opacity: 1;
  background: rgba(0, 0, 0 , 0.7);
  z-index: 10;
  transition: opacity 0.25s ease-in-out, visibility 0.25s ease-in-out;

  &_showed {
    visibility: visible;
    opacity: 1;
  }
}
.cart {
  padding: 29px 40px 0 40px;
  height: 100%;
  width: 600px;
  right: 0;
  background-color: #fff;
  position: absolute;
  transition: right 0.25s ease-in-out;
  .cart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__title {
    font-weight: 500;
    font-size: 30px;
    line-height: 88%;
    letter-spacing: -0.04em;
    }
    &__close {
    width: 48px;
    height: 48px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    background-color: #fff;
    background-image: url('~@/assets/images/x.svg');
    background-repeat: no-repeat;
    background-position: 11px 11px;
    }
  }
  .cart-items__header {
    margin-top: 83px;
    display: flex;
    justify-content: space-between;

    .cart-items__amount {
      font-size: 14px;
      line-height: 112%;
    }
    .cart-items__clean {
      border: none;
      background-color: transparent;
      text-transform: uppercase;
      font-weight: 300;
      font-size: 12px;
      line-height: 16px;
      opacity: 0.4;
    }
  }
  .cart__list {
    margin-top: 10px;
  }
  .cart-footer {
    width: 520px;
    position: fixed;
    bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .cart-total {
      margin-top: 5px;
      &__label{
        font-size: 16px;
        line-height: 100%;
    }
      &__cost {
        margin-top: 5px;
        font-weight: 500;
        font-size: 30px;
        line-height: 100%;
        letter-spacing: -0.02em;
      }
    }
    &__order {
      width: 241px;
      height: 58px;
      background: #7BB899;
      border-radius: 4px;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
  }
}

</style>
