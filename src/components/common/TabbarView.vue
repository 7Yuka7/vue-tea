<template>
  <div class="tabbar">
    <ul>
      <li v-for="(item,index) in selectData" :key="index" @click="switchTab(item.path)">
        <!-- 当前路径和item.path中的路径相同时，显示另一个active的图标 -->
        <img :src="route.path===item.path? item.selected:item.actitive" alt="" />
        <span :class="route.path===item.path? 'active':''">{{item.title}}</span>
      </li>

    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive,toRefs } from "vue";

//路径
import { useRoute,useRouter } from "vue-router";

//传入数据类型
import {InitData} from '@/type/tabbar'

export default defineComponent({
  setup() {
    const data = reactive(new InitData())
    //创建路由的实例
    const route = useRoute()
    const router = useRouter()


    //methods:
    //点击切换tabber
    const switchTab = (path:string) => {
      //判断当前路由，若相同则不转跳
      if(path===route.path) return
      // 跳转路由
      router.replace(path)
    }

    return {...toRefs(data),route,switchTab};
  },
});
</script>

<style scoped lang="less">
.tabbar{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1.6rem;
  background-color: white;
  text-align: center;
  ul{
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    align-items: center;
    li{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img{
        width: 0.82666rem;
        height: 0.82666rem;
      }
      span{
        font-size: 0.42666rem;
      }
      .active{
        color: red;
      }
    }
  }
}
</style>
