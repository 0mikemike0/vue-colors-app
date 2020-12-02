<template lang="pug">
  .modal-sort(@click="$emit('close')")
    article.sort
     p.sort__method(
       v-for="method in methods"
       @click="sortMethodChange(method.id)"
       :class="{'sort__method_active': method.id === sortMethodId}")
      span {{ method.title }}
</template>

<script>
export default {
  props: ['sortMethodId', 'methods'],
  model: {
    prop: 'sortMethodId',
    event: 'sortMethodChange',
  },
  methods: {
    sortMethodChange(value) {
      this.$emit('sortMethodChange', value);
    },
  },
};
</script>

<style lang="scss">

.modal-sort {
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

.sort {
  position: absolute;
  top: 30%;
  right: 64px;
  width: 280px;
  background-color: #fff;

  &__method {
    height: 48px;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
      background-color: #b6e0ca;
    }

    &_active {
      background-color: #7BB899;
    }

    & span {
      padding-left: 24px;
    }
  }
}
</style>
