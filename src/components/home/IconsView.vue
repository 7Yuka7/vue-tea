<template>
    <ul class="icons">
      <li v-for="item in selectData" :key="item.id">
        <img :src="item.imgUrl" alt="">
        <span>{{ item.title }}</span>
      </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent,reactive,toRefs } from 'vue'
//引入数据类型
import {InitData} from '@/type/home/icons'

export default defineComponent({
  name:'IconsView',
  setup () {
    const data = reactive(new InitData())

    return {...toRefs(data)}
  }
})
</script>

<style scoped lang="less">
.icons{
  display: flex;
  justify-content: space-around;
  padding: 0.4rem 0 ;
  li{
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      width: 1.013rem;
      height: 1.013rem;
    }
    span{
      padding: 0.16rem 0;
      font-size: 0.42666rem;
    }
  }
}
</style>
