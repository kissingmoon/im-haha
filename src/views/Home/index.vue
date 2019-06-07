<template>
	<div style="height:100%">
		<keep-alive :include="keepALivePages">
			<router-view/>
		</keep-alive>
		<navs/>
	</div>
</template>

<script>
import Navs from './components/Navs/Navs.vue'
export default {
	name: 'index',
	components: {
		Navs
	},
	data() {
		return {
			keepALivePages: ['home', 'course', 'activity', 'user']
		}
	}
}
</script>


