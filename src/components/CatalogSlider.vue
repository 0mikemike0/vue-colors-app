<template lang="pug">
  section.slider
      .slider-wrapper
        article.slide.slider__slide
          img.slider__image(src="/img/Slider-Background.png", alt="Background-image")
          .slide-wrapper
            h1.slide__title Краски
            p.slide__details Идеально подходят для стен и других поверхностей.
            p.slide__details Найди свой идеальный цвет!
</template>

<script>
export default {

};
</script>

<style lang="scss">
.slider {
  &__image {
    max-width: 100%;
    height: auto;
  }
}
.slide {
  position: relative;
  &-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    /* typographic styles */
    color: white;
    font-size: 1.5em;
    font-weight: bold;
    text-decoration: none;

    /* position the text centrally*/
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  // &__title {
  //   font-weight: normal;
  //   font-size: 3.75vw;
  //   line-height: 88%;
  //   letter-spacing: -0.02em;
  //   color: #FFFFFF;
  // }
}

</style>
