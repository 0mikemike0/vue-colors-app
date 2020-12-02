<template lang="pug">
  .modal-cart(@click.self="$emit('close')")
    article.cart
      section.cart-header
        h2.cart-header__title Корзина
        button.cart-header__close(@click.self="$emit('close')")
      section.cart-items
        .cart-items__header
          p.cart-items__amount {{ cartAmount }} товаров
          button.cart-items__clean(@click="cleanCart") Очистить список
        form.cart-form
          ul.cart-form__list
            li.cart-form__item.cart-item(
              v-for="item in cartList"
              :key="item.id")
              img.cart-item__image(
                :src="item.product.imageCart"
                :alt="item.product.title"
                :class="{'cart-item__image_deleted': item.temporaryFlag === true}")
              .cart-item__detailes(
                :class="{'cart-item__detailes_deleted': item.temporaryFlag === true}")
                h3.cart-item__title {{ item.product.title }} {{ item.product.articleNumber }}
                p.cart-item__cost {{ item.amount * item.product.price }} &#8381
              AmountChange(:item="item")
              button.cart-item__del(
                v-show="!item.temporaryFlag"
                @click="toggleCartFlag(item.id)"
                type="button", aria-label="Удалить товар из корзины")
              button.cart-item__rel(
                v-show="item.temporaryFlag"
                @click="toggleCartFlag(item.id)"
                type="button", aria-label="Восстановить удалённый товар")
          section.cart-footer
            .cart-total
              p.cart-total__label Итого
              p.cart-total__cost {{ cartTotal }} &#8381
            button.cart-footer__order(type="submit", aria-label="Оформить заказ") Оформить заказ
</template>

<script>
import store from '../data/store';
import AmountChange from './AmountChange.vue';

export default {
  data() {
    return {
      sharedState: store.state,
    };
  },
  components: {
    AmountChange,
  },
  computed: {
    cartList() {
      return store.getCartList();
    },
    cartTotal() {
      return store.getCartTotalPrice();
    },
    cartAmount() {
      return store.getCartTotalAmount();
    },
  },
  methods: {
    toggleCartFlag(value) {
      store.toggleCartFlag(value);
    },
    cleanCart() {
      store.cleanCart();
    },
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
  padding: 29px 40px 120px 40px;
  height: 100%;
  width: 600px;
  right: 0;
  background-color: #fff;
  position: absolute;
  transition: right 0.25s ease-in-out;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 375px;
  }

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
    cursor: pointer;
    }
  }

  .cart-items {
    overflow-y: hidden;
    display: flex;
    flex-direction: column;

    &__header {
      margin-top: 83px;
      display: flex;
      justify-content: space-between;
    }

    &__amount {
      font-size: 14px;
      line-height: 112%;
    }

    &__clean {
      border: none;
      background-color: transparent;
      text-transform: uppercase;
      font-weight: 300;
      font-size: 12px;
      line-height: 16px;
      opacity: 0.4;

      &:hover {
      cursor: pointer;
      }
    }
  }
}

.cart-form {
  overflow-y: scroll;
  margin-top: 10px;

  &__item {
    margin-bottom: 20px;
    padding-top: 4px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }

  &__image_deleted,
  &__counter_deleted,
  &__detailes_deleted {
    opacity: 0.2;
  }

  &__detailes{
    padding: 16px 40px 0 8px;

    @media (max-width: 600px) {
      order: 1;
    }
  }

  &__title {
    font-weight: 300;
    font-size: 16px;
    line-height: 112%;
    letter-spacing: 0.02em
  }

  &__cost {
    padding-top: 14px;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
  }

  &__counter {
    margin: 15px 21px 0 10px;
    display: flex;

    @media (max-width: 600px) {
      order: 1;
    }
  }

  &__minus {
    width: 40px;
    height: 24px;
    border: none;
    background: url('~@/assets/images/cartminus.svg');
    background-repeat: no-repeat;
    background-position: 11px 4px;
    background-color: #F2F2F2;
    border-radius: 4px;

    &:hover {
      cursor: pointer;
    }
  }

  &__input {
    width: 48px;
    border: none;
    outline: none;
    text-align: center;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;

    &:hover {
      cursor: pointer;
    }
  }

  &__plus {
    width: 40px;
    height: 24px;
    border: none;
    background: url('~@/assets/images/cartplus.svg');
    background-repeat: no-repeat;
    background-position: 11px 4px;
    background-color: #F2F2F2;
    border-radius: 4px;

    &:hover {
      cursor: pointer;
    }
  }

  &__del {
    width: 45px;
    height: 26px;
    margin: 11px 5px 0 10px;
    border: none;
    background: url('~@/assets/images/cartx.svg');
    background-repeat: no-repeat;
    background-position: 3px 2px;
    background-color: transparent;

    &:hover {
      cursor: pointer;
    }
  }

  &__rel {
    width: 45px;
    height: 26px;
    margin: 11px 5px 0 10px;
    border: none;
    background: url('~@/assets/images/recover.svg');
    background-repeat: no-repeat;
    background-position: 3px 2px;
    background-color: transparent;

    &:hover {
      cursor: pointer;
    }
  }
}

.cart-footer {
  width: 520px;
  position: fixed;
  bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    width: 310px;
  }

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
    border: none;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    @media (max-width: 600px) {
      width: 156px;
      height: 40px;
    }
  }
}

</style>
