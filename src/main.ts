import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//公共css样式的引入
import '@/assets/css/common.css'
//淘宝无线适配
import '@/assets/js/flexible'
//字体图标css文件
import '@/assets/css/iconfont.css'


//全局组件引入
import components from "./components";

createApp(App).use(store).use(router).use(components).mount("#app");
