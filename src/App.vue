<template lang="pug">
.app
  header.header
    .header-wrapper
      button.burger
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
          <CartIndicator/>

  main.main
    <CatalogSlider/>

    section.breadcrumbs
      .breadcrumbs-wrapper
        a.breadcrumbs__item(href="#") Главная
        a.breadcrumbs__item(href="#") Продукты
        a.breadcrumbs__item(href="#") Краски

    h1.mobile-title Краски

    .main-wrapper
      <CatalogFilter/>

      .catalog-wrapper
        section.catalog-header
          button.catalog-filters.catalog-header__filters(disabled) Фильтры
          p.catalog-header__amount 412 товаров
          button.catalog-sort Сначала дорогие
            span.catalog-sort__arrow

        <CatalogList/>

    <CatalogSort/>

    <CartList/>

  footer.footer
</template>

<script>
import CartIndicator from './components/CartIndicator.vue';
import CatalogSlider from './components/CatalogSlider.vue';
import CatalogList from './components/CatalogList.vue';
import CatalogFilter from './components/CatalogFilter.vue';
import CatalogSort from './components/CatalogSort.vue';
import CartList from './components/CartList.vue';

export default {
  components: {
    CartIndicator,
    CatalogSlider,
    CatalogList,
    CatalogFilter,
    CatalogSort,
    CartList,
  },
};
</script>

<style lang="scss">

.header {
  &-wrapper {
  max-width: 1840px;
  margin: auto;
  padding: 36px 20px 38px 20px;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr 1fr;
  align-items: center;
  }
  &__logo {
    margin-left: 4px;
  }
}
.burger {
  @include visually-hidden;
}

.nav {
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
}

.header__contact {
  margin: 0 0 0 22px;
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
  top: 25px;
  left: 65px;
}
  .breadcrumbs {
    &__item {
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #FFFFFF;
    opacity: 0.3;
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
  max-width: 1840px;
  margin: auto;
  padding: 36px 20px 0 20px;
  display: flex;
  }

.mobile-title {
  @include visually-hidden;
}

.catalog-header {
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;

  .catalog-filters {
    border: none;
    background: transparent;
    @include visually-hidden;
  }

  &__amount {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
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
}
</style>
