<template>
  <div>
    <span>爆款推荐</span>
    <ul class="item-container">
      <li v-for="item in selectData" :key="item.id">
        <div class="img-container">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="content">
          <span>{{ item.name }}</span>
          <p>{{ item.content }}</p>
          <div class="price">
            <span>￥ </span>
            <span>{{ item.price }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive,toRefs } from 'vue'
//引入数据结构
import {InitData} from '@/type/home/recommend'

export default defineComponent({
  name:'RecommendView',
  setup () {
    const data = reactive(new InitData())

    return {...toRefs(data)}
  }
})
</script>

<style scoped lang="less">
.item-container{
  width: 100%;
  li{
    width: 100%;
    padding: 10px;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    .img-container{
      img{
        width: 100%;
      }
    }
    .content{
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      padding-right: 0.8rem;
      &>span{
        font-size: 0.4rem;
      }
      &>p{
        font-size: 0.45rem;
      }
      .price{
        margin-top: 0.45rem;
        font-size: 0.37333rem;
        :last-child{
          font-size: 0.55rem;
          color: red;
        }
      }
    }
  }
}
</style>
