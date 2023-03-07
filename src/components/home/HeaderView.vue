<template>
  <header>
    <h1 class="logo">
      <img src="@/assets/images/logo.png" alt="">
    </h1>
    <div class="search">
      <i class="iconfont icon-fangdajing"></i>
      <span>搜您喜欢的...</span>
    </div>
    <div class="kefu">
      <i class="iconfont icon-kefu"></i>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  name:'HeaderView',
  setup () {

    return {}
  }
})
</script>

<style scoped lang="less">
header{
  width: 100%;
  height: 1.3333rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #b0352f;
  h1{
      width: 1.866rem;
      height: 100%;
      margin: 0 0.3rem 0 0.3rem;
    img{

      width: 100%;
      vertical-align: super;
      // height: 100%;
    }
  }
  .search{
    width: 6.56rem;
    height: 0.8rem;
    line-height: 0.8rem;
    background-color: white;
    border-radius: 12px;
    display: flex;
    // justify-content: ;
    align-content: center;
    i{
      padding: 0 0.16rem;
      color: #ccc;
    }
    span{
      font-size: 0.37333rem;
      color: #ccc;
    }
  }
  .kefu{
    i{
      font-size: 0.66rem;
      color: white;
    }

  }

}
</style>
