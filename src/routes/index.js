import { createWebHashHistory, createRouter } from 'vue-router'

import Music from "./Music";

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: Music,
		},
	]
})