<template>
	<div style="height:100%">
		<keep-alive>
			<router-view/>
		</keep-alive>
		<navs />
	</div>
</template>

<script>
import Navs from './components/Navs/Navs.vue'
export default {
	components: {
		Navs
	},
	computed:{
	},
}
</script>


