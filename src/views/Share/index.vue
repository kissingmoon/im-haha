<style lang="less">
.share_wrapper {
	padding-bottom: 20px;
}
</style>
<style lang="less" scoped>
.banner {
	width: 355px;
	height: 255px;
	margin: 0 auto;
	overflow: hidden;
	border-radius: 6px;
	padding-top: 12px;
	position: relative;
	.instructions{
		position: absolute;
		width:92%;
		min-height:50px;
		bottom: 0;
		line-height: 20px;
		color:#f0f0f0;
		padding:0 4% 
	}
	.img {
		display: block;
		width: 100%;
	}
}
.dash {
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 355px;
	margin: 10px auto 0;
	padding: 20px 0;
	background: rgba(255, 255, 255, 0.5);
	.dash_l {
		flex-basis: 50%;
	}
	.p0 {
		font-size: 16px;
		font-weight: 500;
		color: rgba(68, 68, 68, 1);
		line-height: 22px;
	}
}
.qr_box {
	width: 355px;
	border-radius: 4px;
	overflow: hidden;
	background: rgba(255, 255, 255, 0.5);
	margin: 10px auto 0;
	padding: 16px 10px;
	box-sizing: border-box;
}
.qr {
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	margin-bottom: 16px;
	.qr_l {
		width: 154px;
		height: 154px;
		box-sizing: border-box;
		padding: 4px;
		background: #ffffff;
		.qr_img {
			width: 100%;
			height: 100%;
			overflow: hidden;
			.img {
				display: block;
				width: 100%;
			}
		}
	}
	.qr_l_off {
		padding: 0;
	}
	.qr_r {
		.invite {
			font-size: 15px;
			font-weight: 500;
			color: rgba(230, 88, 88, 1);
			line-height: 21px;
			margin-bottom: 10px;
		}
		.login {
			font-size: 15px;
			font-weight: 500;
			color: rgba(68, 68, 68, 1);
			line-height: 21px;
			margin-bottom: 10px;
			text-align: center;
		}
		.copy {
			width: 168px;
			height: 44px;
			background: linear-gradient(90deg, rgba(73, 144, 226, 1) 0%, rgba(126, 193, 240, 1) 100%);
			border-radius: 4px;
			margin-bottom: 10px;
			font-size: 16px;
			color: rgba(255, 255, 255, 1);
			line-height: 22px;
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.copy:last-child {
			margin-bottom: 0;
		}
	}
}
.tip {
	font-size: 14px;
	color: rgba(74, 74, 74, 1);
	line-height: 20px;
}
.mask {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.7);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
	.mask_main {
		width: 230px;
	}
	.mask_qr {
		background: #ffffff;
		width: 200px;
		height: 200px;
		margin: 0 auto;
		padding: 10px;
		box-sizing: border-box;
		.mask_qr_img {
			display: block;
			width: 100%;
			height: 100%;
			.img {
				display: block;
				width: 100%;
			}
		}
	}
	.mask_p0 {
		font-size: 14px;
		color: #f5a623;
		letter-spacing: 0;
		text-align: center;
		margin-top: 18px;
	}
	.mask_p {
		font-size: 12px;
		color: #ffffff;
		letter-spacing: 0;
		text-align: center;
		line-height: 21px;
		margin-top: 13px;
	}
	.mask_close {
		width: 22px;
		height: 22px;
		background: url('../../assets/icon1.png') no-repeat;
		background-size: 100%;
		margin: 30px auto 0;
	}
}
</style>

<template>
	<div class="share_wrapper view_wrapper">
		<div v-if="isShow">
			<div class="banner">
				<img class="img" src="../../assets/banner.png">
				<div class="instructions">
					说明：推荐佣金，您分享给小伙伴，小伙伴通过您的链接或者是邀请码注册成功后，游戏在线5分钟，您获得2元佣金，小伙伴获得1元佣金，以此类推，分享越多佣金越多！
				</div>
			</div>
			<div class="dash">
				<div @click="gopage('/team')" class="dash_l">
					<p class="p0">{{result.peopleNum}}人</p>
					<p class="p0">推荐人数总计</p>
				</div>
				<div @click="gopage('/commissionAll')" class="dash_l">
					<p class="p0">￥{{result.inviteMoney=='null'?0:result.inviteMoney}}</p>
					<p class="p0">推荐佣金总计</p>
				</div>
			</div>
			<div class="qr_box">
				<div class="qr">
					<div class="qr_l" :class="{'qr_l_off':isLogin ? false : true}">
						<div v-if="!isLogin" class="qr_img">
							<img class="img" src="../../assets/qr.png">
						</div>
						<div v-else ref="qrcode" @click="openQr" class="qr_img">
							<img class="img" :src="qrSrc">
						</div>
					</div>
					<div class="qr_r" style="cursor: pointer;">
						<p v-if="isLogin" class="invite">邀请码：{{result.inviteCode}}</p>
						<p v-else @click="login" class="login">{{greeting}}</p>
						<div v-if="!isLogin" class="copy" @click="login">复制邀请码</div>
						<div
							v-else
							class="copy needsclick"
							@click="tipone('复制邀请码')"
							style="cursor: pointer;"
							:data-clipboard-text="result.inviteCode"
						>复制邀请码</div>
						<div v-if="!isLogin" class="copy" @click="login">复制链接</div>
						<div
							v-else
							class="copy needsclick"
							@click="tip('复制链接')"
							style="cursor: pointer;"
							:data-clipboard-text="result.url"
						>复制链接</div>
					</div>
				</div>
				<div v-if="!user_token" class="tip">通过分享邀请好友一起游戏，您将获得推荐和红利佣金，越分享越多金。</div>
				<div v-else class="tip">您已成功通过推荐{{shareobj.userNum}}个好友，累计获得了 <span style="color:#E65858">￥{{shareobj.userMoney==null?0:shareobj.userMoney}}</span> 佣金，快去召唤小伙伴吧</div>
			</div>
		</div>
		<transition name="fade">
			<div @click.stop="isShowMask = false" v-show="isShowMask" class="mask">
				<div class="mask_main">
					<div class="mask_qr">
						<div ref="mask_qr_img" class="mask_qr_img">
							<img class="img" :src="qrSrc">
						</div>
					</div>
					<p class="mask_p0">长按二维码点击进行保存</p>
					<p class="mask_p">保存后点击微信发送图片，小伙伴通过扫描二维码注册成功，立享佣金</p>
					<div @click="isShowMask = false" class="mask_close"></div>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import clipboard from 'clipboard'
import QRCode from '@/js/qrcode.js'
import { getGreeting } from '@/js/tools.js'
import { Dialog } from 'vant';
export default {
	name: 'share',
	data() {
		return {
			isShow: false,
			isInit: false, //是否登入初始化
			isShowMask: false,
			qrSrc: null,
			result: {
				peopleNum: '0',
				inviteMoney: '0.00'
			},
			shareobj:{},
			link:'',
			txt:''
		}
	},
	computed: {
		...mapGetters(['user_token', 'account']),
		isLogin() {
			return !!this.user_token
		},
		greeting() {
			let str = getGreeting()
			let name = this.account.userName ? this.account.userName : '请登录'
			return `${str}，${name}`
		}
	},
	mounted() {
		this.getData()
	},
	activated() {
		if (this.isLogin && !this.isInit) {
			this.getData()
		}
	},
	methods: {
		copy(text) {
			if (!this.isLogin) {
				this.login()
				return
			}
			if (!text) {
				return
			}
		},
		getData() {
			if (!this.isLogin) {
				this.isShow = true
				return
			}
			this.$http
				.post('/user/getUserPromotion', {}, { loginoutWarn: true })
				.then(res => {
					this.isShow = true
					if (res.code == '200') {
						this.result = res.data
						if(this.result.inviteMoney<=0||this.result.inviteMoney=='null'){
							this.result.url=this.result.url+'&我已经入驻YG娱乐平台，想邀请你来跟我一起免费赚佣金，快点来吧'
						}else{
							this.result.url=this.result.url+`&我已在YG娱乐平台赚到￥${this.result.inviteMoney}，想邀请你来跟我一起免费赚佣金，快点来吧`
						}
						this.$nextTick(() => {
							this.setQrcode(res.data.url)
							new clipboard('.copy').on('success', () => {
								if(this.txt=='复制链接'){
									return
								}
								if(this.txt=='复制邀请码'){
									this.$toast('邀请码复制成功，快去通知好友吧')
								}
							})
							this.isInit = true
						})
					}
					this.sharethat()
				})
				.catch(err => {
					this.isShow = true
				})
		},
		sharethat(){
			this.$http
				.post('/user/getUserShareMoney')
				.then(res=>{
					this.shareobj=res.data
				})
		},
		tip(txt){
			this.txt=txt
			Dialog.alert({
				confirmButtonText:'好的',
				message: '推荐链接与文案复制成功，赶快跟好友分享吧，分享人数越多，获得的佣金越多。'
			}).then(() => {
				
			});
		},
		tipone(txt){
			this.txt=txt
		},
		gopage(path){
			if(this.user_token){
				this.$router.push(path)
			}else{
				
				this.$router.push("/login")
			}
		},
		login() {
			this.$router.push('/login')
		},
		setQrcode(url) {
			if (!url) {
				return
			}
			let qrcodeEl = this.$refs.qrcode
			let w = qrcodeEl.offsetWidth
			let h = qrcodeEl.offsetHeight
			let qr = new QRCode(qrcodeEl, {
				text: url,
				width: w,
				height: h,
				correctLevel: QRCode.CorrectLevel.L
			})
			let qrcodeSrc = qr._oDrawing.srcData
			this.qrSrc = qrcodeSrc
		},
		openQr() {
			this.isShowMask = true
			// this.$nextTick(() => {
			// 	let qrcodeEl = this.$refs.mask_qr_img
			// 	let w = qrcodeEl.offsetWidth
			// 	let h = qrcodeEl.offsetHeight
			// 	new QRCode(qrcodeEl, {
			// 		text: this.result.url,
			// 		width: w,
			// 		height: h,
			// 		colorLight: '#fff',
			// 		correctLevel: QRCode.CorrectLevel.L
			// 	})
			// })
		}
	}
}
</script>


