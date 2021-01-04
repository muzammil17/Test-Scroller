import Vue from "vue"
import App from "./App.vue"
import VueRouter from "vue-router"
import VueRouterTab from "vue-router-tab"
import routes from "./routes"
import "vue-router-tab/dist/lib/vue-router-tab.css"

Vue.use(VueRouter)
Vue.use(VueRouterTab)

Vue.config.productionTip = false

const router = new VueRouter({
	routes,
	mode: "history",
})

new Vue({
	render: (h) => h(App),
	router,
}).$mount("#app")
