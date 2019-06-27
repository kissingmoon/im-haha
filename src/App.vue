<template>
	<div id="app" :class="[mjb_ios ? 'mjb_ios' : '', appWeb ? 'appWeb': '']">
		<transition name="fade">
			<keep-alive :include="keepALivePages">
				<router-view/>
			</keep-alive>
		</transition>

		<van-dialog class="actv_8888_dialog" :show-confirm-button="false" v-model="show188">
			<div class="actv_88">
				<div class="actv_8888_t">
					<img class="actv_8888_img" src="./assets/88.png">
					<div class="actv_8888_b">
						<div class="actv_8888_btn" @click="closeDialog"></div>
					</div>
				</div>
			</div>
		</van-dialog>
	</div>
</template>
<script>
import { mapMutations } from 'vuex'
import { generateUUID } from '@/js/tools.js'
export default {
	data() {
		return {
			keepALivePages: ['index'],
			appWeb: false,
			show188: false,
			mjb_ios: false
		}
	},
	computed: {
		isGetCJ: {
			get: function() {
				return this.$store.state.isGetCJ
			},
			set: function() {}
		}
	},
	watch: {
		isGetCJ: {
			handler(val, old) {
				if (val != old && val) this.show188 = true
			},
			immediate: true
		},
		$route: {
			handler(val, oldVal) {
				let query = this.$route.query
				this.appWeb = query.appWeb == 'true' ? true : false //rn写的app内会用到h5页面
			},
			immediate: true
		}
	},
	created() {
		// this.checkUUID()
		this.checkUTK()
		this.setAliToken()
		this.mjb_ios = this.$route.query.ismjb == 'ios' ? true : false
		this.getServiceUrl()
	},
	methods: {
		...mapMutations({
			setUserToken: 'SET_USER_TOKEN',
			setMjb: 'SET_MJB',
			setPlatformFlag: 'SET_PLATFORM_FLAG',
			setServiceUrl: 'SET_SERVICE_URL'
		}),
		getServiceUrl() {
			this.$http.post('/home/getServiceUrl').then(res => {
				if (res.code == '200') {
					this.setServiceUrl(res.data.serviceUrl)
				}
			})
		},
		closeDialog() {
			this.show188 = false
		},
		checkUTK() {
			let U_TK = localStorage.getItem('U_TK')
			const ismjb = this.$route.query.ismjb
			if (localStorage.getItem('ismjb')) {
				this.setMjb(ismjb)
			} else {
				if (ismjb) {
					localStorage.setItem('ismjb', ismjb)
					this.setMjb(ismjb)
				}
			}
			if (U_TK) {
				this.setUserToken(U_TK)
				this.$api.getUserInfoNoWarn()
			} else {
				this.setUserToken('')
			}
		},
		setAliToken() {
			var uabModule
			var webUmidToken
			var uaToken
			//人机识别模块，只需初始化一次
			AWSC.use('uab', function(state, uab) {
				if (state === 'loaded') {
					uabModule = uab
					uaToken = uabModule.getUA()
					sessionStorage.setItem('uaToken', uaToken)
				}
			})
			//设备指纹模块，得到设备token，只需初始化一次
			AWSC.use('um', function(state, um) {
				if (state === 'loaded') {
					um.init(
						{
							//appName请直接使用'saf-aliyun-com'
							appName: 'saf-aliyun-com'
						},
						function(initState, result) {
							if (initState === 'success') {
								webUmidToken = result.tn
								sessionStorage.setItem('webUmidToken', webUmidToken)
							}
						}
					)
				}
			})
		}
	}
}
</script>
<style lang="less">
.actv_8888_dialog {
	width: 321px;
	background: transparent;
}
.actv_88 {
	width: 100%;
	.actv_8888_t {
		height: 433px;
		position: relative;
	}
	.actv_8888_img {
		width: 100%;
		display: block;
	}
	.actv_8888_b {
		position: absolute;
		left: 48px;
		bottom: 26px;
		width: 237px;
		height: 48px;
	}
	.actv_8888_btn {
		width: 237px;
		height: 48px;
		margin: 0 auto;
		box-shadow: none;
		background: url('./assets/88_btn.png') no-repeat;
		background-size:100%;
	}
}
#app {
	height: 100%;
}
</style>

