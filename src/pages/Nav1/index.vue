<template>
  <div class="page">
    <swiper
      class="container"
      ref="mySwiper"
      :options="swiperOption"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <slide-1 />
      </swiper-slide>
      <swiper-slide>
        <slide-2 />
      </swiper-slide>
      <swiper-slide>
        <slide-3 />
      </swiper-slide>
    </swiper>
    <div v-if="arrowShow" class="arrow" />
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import Slide1 from "./components/Slide1.vue";
import Slide2 from "./components/Slide2.vue";
import Slide3 from "./components/Slide3.vue";
import "swiper/css/swiper.css";

export default {
  name: "HomeIndex",
  components: {
    Swiper,
    SwiperSlide,
    Slide1,
    Slide2,
    Slide3,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        speed: 800,
        slidesPerView: 1,
        mousewheel: true,
      },
      arrowShow: true,
    };
  },
  methods: {
    onSlideChange() {
      const { activeIndex } = this.swiper;
      this.arrowShow = activeIndex !== 2;
    },
  },
};
</script>
<style lang="less" scoped>
.page {
  position: relative;
  //min-height: 820px;
  height: calc(100vh - 63px);
  overflow: auto;

  .container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .arrow {
    z-index: 99;
    position: absolute;
    left: 50%;
    bottom: 30px;
    margin-left: -15px;
    width: 30px;
    height: 16px;
    background: url("../../assets/images/arrow-black.png") no-repeat;
    background-size: 100% 100%;
    -webkit-animation: bounce-down 1s linear infinite;
    animation: bounce-down 1s linear infinite;
  }

  @keyframes bounce-down {
    25% {
      opacity: 0.3;
      transform: translateY(-5px);
    }
    50% {
      opacity: 0.5;
      transform: translateY(0);
    }
    75% {
      opacity: 0.7;
      transform: translateY(5px);
    }
    100% {
      opacity: 0.9;
      transform: translateY(0);
    }
  }
}
</style>
