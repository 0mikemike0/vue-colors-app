<template lang="pug">
  .modal-cart(@click.self="$emit('close')")
    article.cart
      section.cart-header
        h2.cart-header__title Корзина
        button.cart-header__close(@click.self="$emit('close')")
      section.cart-items
        .cart-items__header
          p.cart-items__amount 4 товара
          button.cart-items__clean Очистить список
        form.cart-form(action="#", method="POST")
          ul.cart-form__list
            li.cart-form__item.cart-item
              img.cart-item__image(src="/img/cart/Photo1.png", alt="Название товара")
              .cart-item__detailes
                h3.cart-item__title Краска Wallquest, Brownsone MS90102
                p.cart-item__cost 6000 &#8381
              .cart-item__counter
                button.cart-item__minus(type="button", aria-label="Убрать один товар")
                input.cart-item__input(type="text", value="1", name="count")
                button.cart-item__plus(type="button", aria-label="Добавить один товар")
              button.cart-item__del(type="button", aria-label="Удалить товар из корзины")
              button.cart-item__rel(
                  v-show="false" type="button", aria-label="Восстановить удалённый товар")
          section.cart-footer
            .cart-total
              p.cart-total__label Итого
              p.cart-total__cost 6000 &#8381
            button.cart-footer__order(type="submit", aria-label="Оформить заказ") Оформить заказ
</template>

<script>

export default {
};
</script>

<style lang="scss">
.modal-cart {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  // visibility: hidden;
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
    cursor: pointer;
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
}
.cart-form {
  .cart-form__list {
    margin-top: 10px;
  }
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

  &__detailes{
    padding: 16px 40px 0 8px;
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
    margin: 15px 23px 0 10px;
    display: flex;
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
  }

  &__input {
    width: 48px;
    border: none;
    outline: none;
    text-align: center;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
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
  }

  &__del {
    width: 39px;
    height: 24px;
    margin: 11px 5px 0 10px;
    border: none;
    background: url('~@/assets/images/cartx.svg');
    background-repeat: no-repeat;
    background-position: 3px 2px;
    background-color: transparent;
  }

  &__rel {
    margin: 5px 10px 0 10px;
  }
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

</style>
