import { RouterTabRoutes } from "vue-router-tab"

import Home from "../components/home.vue"
import dashboard from "../components/dashboard.vue"
import testComp from "../components/testComp.vue"

export default [
	{
		// name: "home",
		path: "/",
		component: Home,
		children: [
			...RouterTabRoutes,
			{
				path: "/",
				name: "main",
				component: dashboard,
			},

			{
				path: "/child/:key",
        component: testComp,
        name: "test",
				meta: {
					key: "path",
				},
			},
		],
	},
]
