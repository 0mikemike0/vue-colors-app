<template lang="pug">
  li.cart__item.cart-item
    img.cart-item__image(src="@/assets/images/Photo1.png", alt="Название товара")
    .cart-item__detailes
      h3.cart-item__title Краска Wallquest, Brownsone MS90102
      span.cart-item__cost 6000 &#8381
      .cart-item__counter
        button(type="button", aria-label="Убрать один товар")
          svg(width="10", height="10", fill="currentColor")
            use(xlink:href="#icon-minus")
        input(type="text", value="1", name="count")
        button(type="button", aria-label="Добавить один товар")
          svg(width="10", height="10", fill="currentColor")
            use(xlink:href="#icon-plus")
      button.cart-item__del(type="button", aria-label="Удалить товар из корзины")
</template>

<script>
export default {

};
</script>
