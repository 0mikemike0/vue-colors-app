<template lang="pug">
.app
  header.header
    .header-wrapper
      button.burger
        span.burger__line
        span.burger__line
        span.burger__line
      a(href="#")
        picture
          source(media='(max-width: 960px)' srcset='@/assets/images/SmallLogo.svg')
          source(media="(min-width: 961px)" srcset="@/assets/images/Logo-SVG.svg")
          img.logo.header__logo(src="@/assets/images/Logo-SVG.svg", alt="Logo")
      nav.nav
        ul.nav__list
          li.nav__item
            a.nav__link(href="#") Продукты
          li.nav__item
            a.nav__link(href="#") Цвета
          li.nav__item
            a.nav__link(href="#") Вдохновение
          li.nav__item
            a.nav__link(href="#") Советы
          li.nav__item
            a.nav__link(href="#") Найти магазин
      section.contact.header__contact
        a.contact__tel(href="tel:") +7(495)221-77-69
        button.contact__callback Заказать звонок
      section.buttons
        ul.buttons__list
          li.buttons__item
            button.buttons__search
          li.buttons__item
            button.buttons__profile
          li.buttons__item
            button.buttons__favourites
          li.buttons__item
            button.buttons__cart(@click="showCart=true") {{ cartAmount }}

  main.main
    CatalogSlider

    section.breadcrumbs
      .breadcrumbs-wrapper
        a.breadcrumbs__item(href="#") Главная
        a.breadcrumbs__item(href="#") Продукты
        a.breadcrumbs__item(href="#") Краски

    h1.mobile-title Краски

    .main-wrapper
      CatalogFilter(
        v-show="showFilters"
        @close="showFilters=false"
        v-model="filterData"
        :categories="filterCategories")

      .catalog-wrapper
        section.catalog-header
          button.catalog-filters.catalog-header__filters(@click="showFilters=true") Фильтры
          p.catalog-header__amount {{ sortedProducts.length  }} товаров
          button.catalog-sort(@click="showSort=true") {{ sortMethods[sortMethodId-1].title}}
            span.catalog-sort__arrow

        CatalogList(:products="sortedProducts")

      CatalogSort(
        v-show="showSort"
        @close="showSort=false"
        :methods="sortMethods"
        v-model="sortMethodId")

    CartList(
      v-show="showCart"
      @close="showCart=false"
    )

  footer.footer
</template>

<script>
import store from './data/store';
import productsData from './data/products';
import filterCategories from './data/categories';
import sortMethods from './data/methods';
import CatalogSlider from './components/CatalogSlider.vue';
import CatalogList from './components/CatalogList.vue';
import CatalogFilter from './components/CatalogFilter.vue';
import CatalogSort from './components/CatalogSort.vue';
import CartList from './components/CartList.vue';

export default {
  components: {
    CatalogSlider,
    CatalogList,
    CatalogFilter,
    CatalogSort,
    CartList,
  },
  data() {
    return {
      productsData,
      sharedState: store.state,
      filterCategories,
      sortMethods,
      filterData: [],
      sortMethodId: 1,
      showSort: false,
      showFilters: true,
      showCart: false,
      width: 0,
    };
  },
  computed: {
    filtredProducts() {
      return this.filterData.length
        ? this.productsData.filter((product) => (product.categoriesId
          .filter((item) => this.filterData.includes(item))).length)
        : this.productsData;
    },
    sortedProducts() {
      switch (this.sortMethodId) {
        case 1: return this.filtredProducts.slice()
          .sort((prev, next) => next.price - prev.price);

        case 2: return this.filtredProducts.slice()
          .sort((prev, next) => prev.price - next.price);

        case 3: return this.filtredProducts.slice()
          .sort((prev, next) => next.likes - prev.likes);

        case 4: return this.filtredProducts.slice()
          .sort((prev, next) => prev.date - next.date);

        default: return this.filtredProducts;
      }
    },
    cartAmount() {
      return store.getCartTotalAmount();
    },
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
      if (this.width <= 960) {
        this.showFilters = false;
      } else {
        this.showFilters = true;
      }
    },
  },
  created() {
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth);
  },
  watch: {
    showSort(value) {
      if (value === true) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    showCart(value) {
      if (value === true) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
  },
};

</script>

<style lang="scss">

.header {
  &-wrapper {
  max-width: 1840px;
  margin: auto;
  padding: 36px 20px 38px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media(max-width: 960px){
    padding: 63px 20px 20px 20px;
  }
  }

  &__logo {
    margin-left: 4px;
  }
}

.burger {
  position: relative;
  width: 24px;
  height: 14px;
  margin: 2px 0 0 5px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;

  @media (min-width: 1661px) {
      @include visually-hidden;
  }

  &__line {
    position: absolute;
    display: inline-block;
    height: 2px;
    width: 100%;
    background-color: $main-color;
  }
  &__line:nth-child(1) {
    right: 0;
    top: 0;
  }

  &__line:nth-child(2) {
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .burger__line:nth-child(3) {
    right: 0;
    bottom: 0;
  }
}

.nav {
  padding-right: 385px;
  &__list {
    margin-left: 81px;
    display: flex;
  }
  &__item {
    margin-right: 24px;
  }
  &__link {
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  @media (max-width: 1660px) {
    @include visually-hidden;
  }
}

.header__contact {
  margin: 0 0 0 22px;
  @media(max-width: 960px) {
    @include visually-hidden;
  }
}

.contact {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &__tel {
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0.02em;
  }
  &__callback {
    border: none;
    background: transparent;
    font-size: 14px;
    letter-spacing: 0.03em;
    line-height: 100%;
    opacity: 0.3;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &:hover {
      cursor: pointer;
    }
  }
}

.buttons {
  margin-right: 4px;
  &__list {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  &__item {
    margin-left: 24px;
    @media(max-width: 960px){
      margin-left: 0;
  }
  }
  &__search {
    display: inline-block;
    vertical-align: middle;
    width: 22px;
    height: 22px;
    border: none;
    background-color: #fff;
    background-image: url('~@/assets/images/Icons.svg');
    background-size: 118px 24px;
    background-position: 2px 0;
    background-repeat: no-repeat;
    @media(max-width: 960px) {
    @include visually-hidden;
  }
  }
  &__profile {
    display: inline-block;
    vertical-align: middle;
    width: 22px;
    height: 22px;
    border: none;
    background-color: #fff;
    background-image: url('~@/assets/images/Icons.svg');
    background-size: 118px 24px;
    background-position: -46px 0;
    background-repeat: no-repeat;
    @media(max-width: 960px) {
    @include visually-hidden;
  }
  }
  &__favourites {
    display: inline-block;
    vertical-align: middle;
    width: 23px;
    height: 22px;
    border: none;
    background-color: #fff;
    background-image: url('~@/assets/images/Icons.svg');
    background-size: 118px 24px;
    background-position: -95px 0;
    background-repeat: no-repeat;
    @media(max-width: 960px) {
    @include visually-hidden;
  }
  }
  &__cart {
    display: inline-block;
    vertical-align: middle;
    width: 24px;
    height: 24px;
    border: none;
    background-color: #7BB899;
    border-radius: 50%;

  }
}

.breadcrumbs-wrapper {
  position: absolute;
  margin: 0 20px 0;
  top: 25px;
  left: 45px;
  @media(max-width: 1024px) {
    position: unset;
    padding: 8px 0 0 5px;
    border-top: 1px solid rgba(0, 0, 0, 0.06)
  }
}
  .breadcrumbs {
    &__item {
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #FFFFFF;
    opacity: 0.3;
    @media (max-width: 1024px){color: $main-color;}
  }
  &__item:after {
    content: "\2022";
    margin-left: 6px;
    margin-right: 6px;
  }
  &__item:last-child:after {
    content: "";
    margin-left: 0;
    margin-right: 0;
  }
}

.main-wrapper {
  position: relative;
  max-width: 1840px;
  margin: auto;
  padding: 36px 20px 0 17px;
  display: flex;
  }

.mobile-title {
  margin: 46px 20px 0 24px;
  font-weight: normal;
  font-size: 36px;
  line-height: 88%;
  letter-spacing: -0.04em;

 @media (min-width: 1025px){
    @include visually-hidden;
  }
}
.catalog-header {
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;

  .catalog-filters {
    border: none;
    background: transparent;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    cursor: pointer;
    @media(min-width: 961px){
      @include visually-hidden;
    }
  }

  &__amount {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    @media(max-width: 960px){
      @include visually-hidden;
    }
  }

  .catalog-sort {
    margin-right: 2px;
    margin-top: -2px;
    border: none;
    background: transparent;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    cursor: pointer;
    &__arrow {
      display: inline-block;
      width: 14px;
      height: 14px;
      background-image: url('~@/assets/images/SmallArrow.svg');
      background-size: 14px 14px;
      background-position: 0 3px;
    }
  }

}

.catalog-wrapper {
  margin: 32px 0 0 134px;
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;

  @media(max-width: 960px){
    margin: 12px 0 0 7px;
  }
}
</style>
