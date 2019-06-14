<template>
	<div class="index_wrapper" style="height:100%">
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
<style lang='less' scoped>
.index_wrapper{
	position: relative;
}
.index_wrapper:before{
	position: fixed;
	content: '';
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -1;
	background: url('../../assets/page_bg_default.jpg') no-repeat;
	background-size: cover;
}
</style>



