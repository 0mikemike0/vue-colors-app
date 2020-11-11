<template lang="pug">
  section.catalog-items
    ul.catalog-items__list
      li(v-for='product in products' :key='product.id')
        article.catalog-items__item.catalog-item
          a(href="#")
            .image-wrapper
              img.catalog-item__image(
                :src="product.image",
                :alt="product.title"
              )
              img.catalog-item__image_hover(
                :src="product.imageHover",
                :alt="product.title"
              )
            h3.catalog-item__title {{ product.title }}
            p.catalog-item__number {{ product.articleNumber }}
          .footer-wrapper
            p.catalog-item__cost {{ product.price }} &#8381
            button.catalog-item__button
</template>

<script>

export default {
  props: ['products'],
};
</script>

<style lang="scss">
.catalog-items__list {
  margin: 43px 0 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.catalog-item {
  margin: 0 0 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  & .image-wrapper {
    position: relative;
  // width: 278px;
  // height: 278px;
  }
  &__image {
    position: absolute;
    left: 0;
    top: 0;
  }
  &__title {
    font-weight: 300;
    font-size: 16px;
    padding-top: 11px;
    letter-spacing: 0.02em;
  }
  &__number {
    margin-top: -2px;
  }
  & .footer-wrapper {
    margin: 15px 0 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__cost {
    letter-spacing: 0.03em;
    font-weight: 600;
    font-size: 16px;
  }
  &__button {
    visibility: hidden;
    width: 80px;
    height: 32px;
    background-color: #7BB899;
    background-image: url('~@/assets/images/plus.svg');
    background-repeat: no-repeat;
    background-position: 30px 6px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }
  &:hover .catalog-item__button{
    visibility: visible;
  }
   &:hover .catalog-item__image{
    opacity: 0;
  }
}
</style>
