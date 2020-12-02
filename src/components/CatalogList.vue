<template lang="pug">
  section.catalog-items
    ul.catalog-items__list
      li.catalog-items__item(v-for='product in products' :key='product.id')
        article.catalog-items__article.catalog-item
          .image-wrapper
            picture
              source(media='(max-width: 960px)' :srcset='product.imageMobile')
              source(media="(min-width: 961px)" :srcset="product.image")
              img.catalog-item__image(
                :src="product.image",
                :alt="product.title"
              )
            picture
              source(media='(max-width: 960px)' :srcset='product.imageMobileHover')
              source(media="(min-width: 961px)" :srcset="product.imageHover")
              img.catalog-item__image_hover(
                :src="product.imageHover",
                :alt="product.title"
              )
            h3.catalog-item__title {{ product.title }}
            p.catalog-item__number {{ product.articleNumber }}
          .footer-wrapper
            p.catalog-item__cost {{ product.price }} &#8381
            button.catalog-item__button(@click="addToCart(product.id)")
</template>

<script>
import store from '../data/store';

export default {
  props: ['products'],
  methods: {
    addToCart(value) {
      store.addToCart({ productId: value, amount: 1, flag: false });
    },
  },
};
</script>

<style lang="scss">

.catalog-items{
  &__list {
    margin: 43px 0 0 0;
    display: flex;
    flex-wrap: wrap;

    @media(max-width: 960px){
      margin: 24px 0 0 0;
    }
  }

  &__item {
    flex-basis: min-content;
    margin-right: 21px;
  }
}

.catalog-item {
  margin: 0 0 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  & .image-wrapper {
    position: relative;

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
    line-height: 112%;
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

    @media(max-width: 960px){
      margin: 20px 0 35px 0;
    }
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

    @media(max-width: 960px){
      width: 40px;
      height: 24px;
      background-position: 9px 2px;
    }

    &:active {
      background-color: #b6e0ca;
    }
  }

  &:hover .catalog-item__button{
    visibility: visible;
  }

  &:hover .catalog-item__image{
    opacity: 0;
  }
}
</style>
