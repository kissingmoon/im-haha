<template>
	<div id="app" :class="{'mjb_ios':mjb_ios}">
		<transition name="fade">
			<keep-alive :include="keepALivePages">
				<router-view/>
			</keep-alive>
		</transition>

		<van-dialog class="actv_8888_dialog" :show-confirm-button="false" v-model="show8888">
			<div class="actv_88">
				<div class="actv_8888_t">
					<img class="actv_8888_img" src="./assets/88@2x.png">
				</div>
				<div class="actv_8888_b">
					<div class="actv_8888_btn" @click="closeDialog">好的</div>
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
			show8888: false,
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
				if (val != old && val) this.show8888 = true
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
			this.show8888 = false
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
	width: 285px;
	background: transparent;
}
.actv_88 {
	width: 100%;
	.actv_8888_t {
		height: 244px;
		position: relative;
	}
	.actv_8888_img {
		width: 100%;
		display: block;
	}
	.actv_8888_b {
		margin-top: -36px;
		position: relative;
	}
	.actv_8888_btn {
		width: 134px;
		height: 44px;
		margin: 0 auto;
		text-align: center;
		box-shadow: none;
		font-size: 16px;
		color: #6e3be9;
		line-height: 44px;
		background: linear-gradient(0deg, rgba(208, 192, 255, 1) 1%, rgba(255, 255, 255, 1) 100%);
		border-radius: 22px;
	}
}
#app {
	height: 100%;
}
</style>

