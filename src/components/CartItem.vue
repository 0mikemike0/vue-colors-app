<template lang="pug">
  li.cart__item.cart-item
    img.cart-item__image(src="/img/Photo1.png", alt="Название товара")
    .cart-item__detailes
      h3.cart-item__title Краска Wallquest, Brownsone MS90102
      span.cart-item__cost 6000 &#8381
      .cart-item__counter
        button(type="button", aria-label="Убрать один товар")
        input(type="text", value="1", name="count")
        button(type="button", aria-label="Добавить один товар")
      button.cart-item__del(type="button", aria-label="Удалить товар из корзины")
      button.cart-item__rel(type="button", aria-label="Восстановить удалённый товар")
</template>

<script>
export default {

};
</script>
