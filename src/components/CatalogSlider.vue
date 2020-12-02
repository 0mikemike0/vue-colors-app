<template lang="pug">
  .slider-wrapper
    section.slider(
      :style="{ 'margin-left': `-${1920 * currentSlideIndex}px` }"
    )
      CatalogSlide(
        v-for='item in sliderItems'
        :key='item.id'
        :slider-item='item'
      )
      .title-wrapper
        h1.slider__title Краски
        p.slider__detailes Идеально подходят для стен и других поверхностей.
        p.slider__detailes Найди свой идеальный цвет!
      .slider__buttons
        button.slider__button-prev(@click="prevSlide()")
        button.slider__button-next(@click="nextSlide()")
      ul.slider__pages
        li.slider__page(v-for="item in sliderItems.length" :key="item")
          button.slider__page-button(
            @click="goTo(item)"
            :class="{'slider__page-button_current': item === currentSlideIndex + 1}"
          )
</template>

<script>
import CatalogSlide from './CatalogSlide.vue';

export default {
  components: {
    CatalogSlide,
  },
  data() {
    return {
      sliderItems: [
        { id: 1, name: 'Slide1', src: './img/slider/Slide1.jpg' },
        { id: 2, name: 'Slide2', src: './img/slider/Slide2.jpg' },
        { id: 3, name: 'Slide3', src: './img/slider/Slide3.jpg' },
        { id: 4, name: 'Slide4', src: './img/slider/Slide4.jpg' },
        { id: 5, name: 'Slide5', src: './img/slider/Slide5.jpg' },
        { id: 6, name: 'Slide6', src: './img/slider/Slide6.jpg' },
      ],
      currentSlideIndex: 0,
    };
  },
  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        // console.log(this.currentSlideIndex);
        this.currentSlideIndex -= 1;
      }
    },
    nextSlide() {
      if (this.currentSlideIndex >= this.sliderItems.length - 1) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex += 1;
      }
      // console.log(this.currentSlideIndex);
    },
    goTo(value) {
      this.currentSlideIndex = value - 1;
    },
  },
};
</script>

<style lang="scss">

.slider-wrapper {
    position: relative;
    overflow: hidden;

    @media (max-width: 1024px) {
      @include visually-hidden;
  }

}

.title-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

.slider {
  display: flex;
  transition: margin-left ease-in-out 0.5s;

  &__title {
    margin-bottom: 25px;
    font-weight: normal;
    font-size: 72px;
    line-height: 88%;
    letter-spacing: -0.02em;
    color: #FFFFFF;
  }

  &__detailes {
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: 0.03em;
  }

  &__buttons {
    position: absolute;
    width: 59vw;
    top: 59%;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    justify-content: space-between;
  }

  &__button-prev,
  &__button-next {
    width: 80px;
    height: 80px;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 33px 20px;
    border: none;
    cursor: pointer;
  }

  &__button-next {
    background-image: url(~@/assets/images/next.svg);

  }

  &__button-prev {
    background-image: url(~@/assets/images/prev.svg);
  }

  &__pages {
    position: absolute;
    top: 86.7%;
    left: 50%;
    transform: translate(-44%);
    width: 124px;
    height: 32px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__page {
    margin: 0 8px 3px 0;
  }

  &__page:last-child {
    margin-right: 0;
  }

  &__page-button {
    vertical-align: middle;
    width: 6px;
    height: 6px;
    border: none;
    border-radius: 50%;
    background: #FFFFFF;
    opacity: 0.2;
    cursor: pointer;

    &_current {
      opacity: 1;
    }
  }
}

</style>
