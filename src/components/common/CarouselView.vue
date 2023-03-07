<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="10"
    :loop="true"
    :autoplay="{ delay: 2500, disableOnInteraction: false }"
    :pagination="{ clickable: true }"

  >
    <swiper-slide v-for="item in selectData" :key="item.id">
      <img :src="item.imgUrl" alt="">
    </swiper-slide>

  </swiper>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
//引入数据格式
import { InitData } from '@/type/common/carousel'
// 轮播图组件和样式
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default defineComponent({
  name: 'CarouselView',
  components: { Swiper, SwiperSlide },
  setup() {
    const data = reactive(new InitData())

    // 轮播图相关，后期转变为活数据后，使用watch监视传入的数据



    return {
      ...toRefs(data),
      modules: [ Pagination, Scrollbar, A11y, Autoplay],
    }
  }
})
</script>

<style scoped lang="less">
.swiper{
  margin-top: 2.8rem;
  height: 4.4rem;
  .swiper-wrapper{

    .swiper-slide{
      width: 100%;
      img{
        width: 100%;
        vertical-align: top;
      }
    }
  }
}
//less 穿透 最外层 /deep/ 想要修改样式的class选择器
.swiper /deep/ .swiper-pagination-bullet-active{
      background-color: #b0352f;
    }
</style>
