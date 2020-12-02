<template lang="pug">
  aside.catalog-filters(@click.self="$emit('close')")
    .aside-wrapper
      button.mobile-filters__close(@click.self="$emit('close')")

      .switch-box(v-for="category in categories" :key="category.id")
        input.switch(
          type="checkbox"
          :id="category.id"
          :value="category.id"
          v-model="filter")
        label(:for="category.id") {{ category.title }}
</template>

<script>
export default {
  props: ['filterData', 'categories'],
  model: {
    prop: 'filterData',
    event: 'filterChange',
  },
  computed: {
    filter: {
      get() {
        return this.filterData;
      },
      set(value) {
        this.$emit('filterChange', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>

.catalog-filters {
  margin-top: 21px;
  flex-shrink: 0;

  @media (max-width: 960px) {
    margin-top: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    opacity: 1;
    background: rgba(0, 0, 0 , 0.7);
    z-index: 10;
    transition: opacity 0.25s ease-in-out, visibility 0.25s ease-in-out;
  }
}

.aside-wrapper {
  @media (max-width: 960px) {
    position: absolute;
    padding: 54px 0 0 24px;
    top: 160px;
    height: 100%;
    width: 100%;
    background-color: #fff;
    border-radius: 24px 24px 0px 0px;
  }
}

.switch-box {
  margin: 10px 0 0 4px;
  display: flex;
  align-items: center;

  & label {
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0.06em;
    text-transform: uppercase;

    &:hover {
    cursor: pointer;
    }
  }
}

input[type="checkbox"].switch{
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

  &:hover {
    cursor: pointer;
    }
}

input[type="checkbox"].switch:checked{
  background: #7BB899;
}

input[type="checkbox"].switch:after{
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

input[type="checkbox"].switch:checked:after{
  left: 20px;
}

.mobile-filters__close {
  position: absolute;
  left: 50%;
  top: 12px;
  transform: translateX(-50%);
  border: none;
  width: 28px;
  height: 4px;
  border-radius: 40px;
  background: $main-color;
  cursor: pointer;

  @media (min-width: 961px){
    @include visually-hidden;
  }
}

</style>
