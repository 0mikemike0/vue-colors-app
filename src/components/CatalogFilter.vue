<template lang="pug">
  aside.catalog-filters
      button.mobile-filters__close

      .switch_box
        input#new.switch_1(type="checkbox")
        label(for="new") Новинки
      .switch_box
        input#new.switch_1(type="checkbox")
        label(for="new") Есть в наличии
      .switch_box
        input#new.switch_1(type="checkbox")
        label(for="new") Контрактные
      .switch_box
        input#new.switch_1(type="checkbox")
        label(for="new") Экскслюзивные
      .switch_box
        input#new.switch_1(type="checkbox")
        label(for="new") Распродажа
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.catalog-filters {
  margin-top: 21px;
}
.switch_box {
  margin: 10px 0 0 4px;
  display: flex;
  align-items: center;
  & label {
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
}

input[type="checkbox"].switch_1{
  // font-size: 30px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-right: 12px;
  width: 36px;
  height: 22px;
  background: #F2F2F2;
  border-radius: 3em;
  position: relative;
  cursor: pointer;
  outline: none;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

input[type="checkbox"].switch_1:checked{
  background: #7BB899;
}

input[type="checkbox"].switch_1:after{
  position: absolute;
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: $main-color;
  left: 6px;
  top: 8px;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

input[type="checkbox"].switch_1:checked:after{
  left: 20px;
}

.mobile-filters__close {
  border: none;
  background: transparent;
  @include visually-hidden;
}

</style>
