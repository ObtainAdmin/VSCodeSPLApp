import {
	createApp
} from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
// router
import router from "@/router";
// 自定义指令
import {
	debounceDirective,
	throttleDirective,
	visibleDirective
} from "@/utils/instruction";


// 全局样式
import "@/style/main.scss";
import "@/style/animate.scss";
import "github-markdown-css/github-markdown.css";

// // #ifndef VUE3
// import Vue from 'vue'
// import './uni.promisify.adaptor'
// Vue.config.productionTip = false
// App.mpType = 'app'
// const app = new Vue({
// 	...App
// })
// // router
// app.use(router);
// // 自定义指令
// app.directive("debounce", debounceDirective);
// app.directive("throttle", throttleDirective);
// app.directive("visible", visibleDirective);
// app.$mount()
// // #endif




// 创建 Pinia 实例
const pinia = createPinia()

const app = createApp(App);
// const app = createApp(App);
// router
app.use(pinia)
app.use(router);
// 自定义指令
app.directive("debounce", debounceDirective);
app.directive("throttle", throttleDirective);
app.directive("visible", visibleDirective);
// app
app.mount("#app");
// export function createApp() {
//   const app = createSSRApp(App)
//   // router
//   app.use(router);
//   // 自定义指令
//   app.directive("debounce", debounceDirective);
//   app.directive("throttle", throttleDirective);
//   app.directive("visible", visibleDirective);
//   return {
//     app
//   }
// }
