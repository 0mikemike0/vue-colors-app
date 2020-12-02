<template lang="pug">
  article.slide
    img.slide__image(:src="sliderItem.src", :alt="sliderItem.name")

</template>

<script>
export default {
  props: ['sliderItem'],
};
</script>

<style lang="scss">

.slide {
  position: relative;

  &__image {
    min-width: 100%;
    height: auto;
  }
}
</style>
