<template>
  <div class="home">
    <HeaderView> </HeaderView>
    <!-- 标题栏内容 -->
    <div class="tab-area">
      <tabs v-model="selectedTab">
        <tab class="tab" v-for="(tab, i) in tabs" :key="`t${i}`" :val="tab" :label="tab" :indicator="true" />
      </tabs>

      <!-- <tab-panels v-model="selectedTab" :animate="true">
        <tab-panel v-for="(tab, i) in tabs" :key="`tp${i}`" :val="tab">
          {{ tab }}
        </tab-panel>
      </tab-panels> -->
    </div>
    <!-- 主体部分 -->
    <section>
      <!-- 轮播图 -->
      <CarouselView />
      <!-- 图标 -->
      <IconsView />
      <!-- 爆款推荐 -->
      <RecommendView />
    </section>


  </div>

  <TabbarViewVue />
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
//引入头部组件
import HeaderView from "@/components/home/HeaderView.vue";
//引入tab组件
import { Tabs, Tab, TabPanels, TabPanel } from 'vue3-tabs';
//引入轮播图组件
import CarouselView from '@/components/common/CarouselView.vue'
//引入Icons组件
import IconsView from '@/components/home/IconsView.vue'
//引入爆款推荐组件
import RecommendView from '@/components/home/RecommendView.vue'

const tabs = ['推荐', '金骏眉', '大红袍','铁观音','绿茶','普洱','茶具','花茶'];

export default defineComponent({
  //注册组件
  components: { HeaderView,CarouselView, IconsView,RecommendView, Tabs, Tab, TabPanels, TabPanel },
  name: 'HomeView',
  setup() {
    const state = reactive({
      selectedTab: tabs[1]
    })
    return { tabs, ...toRefs(state) };
  },
});
</script>

<style scoped lang="less">
.tab-area {
  position: fixed;
  top: 1.3333rem;
  left: 0;
  //flex可横向滚动
  overflow-x: auto;
  &::-webkit-scrollbar {display:none}//取消滚动条
  .tabs {
    flex-wrap: nowrap;
    .tab {
      flex-shrink: 0;
      font-size: 0.4rem;
      padding: 0;
      div{
        padding: 5px;
      }
    }
    .active{
      border-color: #b0352f;
      color: #b0352f;

    }
  }
}

</style>
