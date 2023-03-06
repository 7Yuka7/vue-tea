<template>
  <header>
    <h1 class="logo">
      <img src="" alt="">
    </h1>
    <div class="search">

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

<style scoped>
header{
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #b0352f;

}
</style>
