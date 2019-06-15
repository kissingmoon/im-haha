<template>
	<div id="app">
		<!-- <keep-alive>
			<router-view v-if="$route.meta.keepAlive"/>
		</keep-alive>
		<transition name="fade">
			<router-view v-if="!$route.meta.keepAlive"/>
		</transition>-->
		
		<transition name="fade">
			<keep-alive :include="keepALivePages">
				<router-view/>
			</keep-alive>
		</transition>

		<van-dialog class="actv_8888_dialog" :show-confirm-button="false" v-model="show8888">
			<div class="actv_8888">
				<div class="actv_8888_t">
					<img class="actv_8888_img" src="./assets/88@2x.png">
					<div class="actv_8888_text">
						<p>登录签到彩金，已经派发到您的账户</p>
						<p>登录5天即可获得全部彩金</p>
						<p>¥88.00元哦！</p>
					</div>
				</div>
				<div class="actv_8888_b">
					<div class="actv_8888_btn" @click="closeDialog">好的</div>
				</div>
			</div>
		</van-dialog>
	</div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { generateUUID } from '@/js/tools.js'
import { net_getAlert, net_alertRead } from '@/js/network.js'
export default {
	data() {
		return {
			keepALivePages: ['index'],
			show8888: false
		}
	},
	computed: {
		isGetCJ: {
			get: function() {
				return this.$store.state.isGetCJ
			},
			set: function() {}
		},
		...mapGetters(['user_token'])
	},
	watch: {
		isGetCJ: {
			handler(val, old) {
				if (val != old && val) this.show8888 = true
			},
			immediate: true
		},
		user_token(val, old) {
			if (val) {
				this.getAlert()
			}
		}
	},
	created() {
		// this.checkUUID()
		this.checkUTK()
		this.setAliToken();
	},
	methods: {
		...mapMutations({
			setUserToken: 'SET_USER_TOKEN',
			setMjb: 'SET_MJB',
			setPlatformFlag: 'SET_PLATFORM_FLAG',
			setIsgetcj: 'SET_ISGETCJ'
		}),
		closeDialog() {
			this.show8888 = false
		},
		checkUUID() {
			let U_IDK = localStorage.getItem('U_IDK')
			if (!U_IDK) {
				U_IDK = generateUUID()
				localStorage.setItem('U_IDK', U_IDK)
			}
			this.setPlatformFlag(U_IDK)
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
				this.$api.getUserInfo()
			} else {
				this.setUserToken('')
			}
		},
		setAliToken(){
			var uabModule;
			var webUmidToken;
			var uaToken;
			//人机识别模块，只需初始化一次
			AWSC.use("uab", function (state, uab) {
				if(state === "loaded") {
					uabModule = uab;  
					uaToken = uabModule.getUA();
					sessionStorage.setItem("uaToken", uaToken);
				}
			});
			//设备指纹模块，得到设备token，只需初始化一次
			AWSC.use("um", function (state, um) {
				if(state === "loaded") {
					um.init({
						//appName请直接使用'saf-aliyun-com'
						appName: 'saf-aliyun-com',
					}, function (initState, result) {
						if(initState === 'success') {
							webUmidToken = result.tn;
							sessionStorage.setItem("webUmidToken", webUmidToken);
						}
					});
				}
			});
		},
		async getAlert() {
			let res = await net_getAlert()
			if (res.code == '200') {
				if (res.data.alert) {
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

<style lang="less" scoped>
.actv_8888_dialog {
	width: 84%;
}
.actv_8888 {
	width: 100%;
	.actv_8888_t {
		height: 244px;
		position: relative;
	}
	.actv_8888_img {
		width: 100%;
		display: block;
	}
	.actv_8888_text {
		position: absolute;
		color: #fff;
		top: 18px;
		text-align: center;
		width: 100%;
		font-size: 15px;
		line-height: 23px;
	}
	.actv_8888_b {
		height: 92px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.actv_8888_btn {
		width: 265px;
		height: 44px;
		margin: 0 auto;
		text-align: center;
		background: linear-gradient(90deg, rgba(232, 200, 132, 1) 0%, rgba(226, 147, 82, 1) 100%);
		border-radius: 22px;
		box-shadow: none;
		font-size: 18px;
		color: rgba(255, 255, 255, 1);
		line-height: 44px;
	}
}
#app {
	height: 100%;
}
</style>

