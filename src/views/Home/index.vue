<template>
	<div class="index_wrapper" style="height:100%">
		<keep-alive :include="keepALivePages">
			<router-view/>
		</keep-alive>
		<navs/>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navs from './components/Navs/Navs.vue'
import { net_getAlert, net_alertRead } from '@/js/network.js'
export default {
	name: 'index',
	components: {
		Navs
	},
	data() {
		return {
			keepALivePages: ['home', 'share', 'activity', 'user']
		}
	},
	computed: {
		...mapGetters(['user_token'])
	},
	watch: {
		user_token(val, old) {
			if (val) {
				this.getAlert()
			}
		}
	},
	methods: {
		async getAlert() {
			let res = await net_getAlert()
			if (res.code == '200') {
				if (res.data && res.data.alert) {
					if (!this.isGetCJ) {
						Dialog.alert({
							title: res.data.title,
							message: res.data.content
						}).then(() => {
							if (res.data.msgType == '1') {
								net_alertRead({ id: res.data.id })
							}
						})
					}
				}
			}
		}
	}
}
</script>
<style lang='less' scoped>
.index_wrapper {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	overflow-y: auto;
	-webkit-overflow-scrolling: touch;
}
.index_wrapper:before {
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