<template>
	<div class="balance-wrapper headview_wrapper">
		<ims-header title="安全中心"/>
		<div class="main-container">
			<div class="bank-box display-flex flex-center">
				<div
					class="bank-content display-flex align-center"
					:class="account.bankNumber?'has-card':'no-card'"
				>
					<div
						class="bank-body flex-1 display-flex justify-between has-card-body flex-column"
						v-if="account.bankNumber"
					>
						<div class="title-box">
							<div class="title-white-txt">
								<b>{{ account.bankName }}</b>
							</div>
							<div class="body-white-txt">储蓄卡</div>
						</div>
						<div class="chip-box"></div>
						<div class="bottom-box">
							<!-- <div class="small-white-txt">卡号</div> -->
							<div class="card-num">
								<b class="card-content">{{ account.bankNumber | spliceCardNum }}</b>
							</div>
						</div>
					</div>
					<div class="bank-body flex-1 display-flex justify-center no-card-body" v-else>
						<img src="./img/bank-empty.png" alt @click="gotoPage(-1)">
					</div>
				</div>
			</div>
			<div class="pwd-box">
				<div class="bar-slot">
					<div
						class="slot-item midum-white-txt display-flex align-center"
						@click="gotoPage(k)"
						v-for="(v,k) in mainList"
						:key="k"
					>
						<div class="left-content display-flex flex-center">
							<span class="icon-bg" :class="v.className"></span>
						</div>
						<span class="flex-1">{{ v.title }}</span>
						<svg class="svg_left">
							<use xlink:href="#right"></use>
						</svg>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { net_signOut } from '@/js/network.js'
export default {
	data() {
		return {
			swipeList: [
				{
					imageUrl: ''
				}
			],
			mainList: [
				{
					title: '登录密码',
					className: 'icon-bg__login',
					iconName: 'loginPwd'
				},
				{
					title: '提款密码',
					className: 'icon-bg__pay',
					iconName: 'drawPwd'
				},
				{
					title: '退出登录',
					className: 'icon-login__out',
				}
			]
		}
	},
	computed: {
		...mapGetters(['user_token', 'account'])
	},
	filters: {
		spliceCardNum(value) {
			if (!value) return ''
			let newVal = []
			let length = value.length
			for (let i = 0; i < length; i += 4) {
				newVal += `${value.substring(i, i + 4)} `
			}
			return newVal
		}
	},
	methods: {
		...mapMutations({
			setUserToken: 'SET_USER_TOKEN',
			setAccount: 'SET_ACCOUNT'
		}),
		gotoPage(k) {
			switch (k) {
				case -1:
					this.$router.push({ path: 'setPassword?type=4' })
					break
				case 0:
					this.$router.push({ path: 'setPassword?type=1' })
					break
				case 1:
					this.$router.push({ path: 'setPassword?type=2' })
					break
				case 2:
					this.quitClick()
					break
				default:
					break
			}
		},
		quitClick() {
			Dialog.confirm({
				title: '确定要退出登录账户吗？'
			})
				.then(() => {
					this.quitAccount()
				})
				.catch(() => {})
		},
		async quitAccount(action, done) {
			// if (action === 'confirm') {
			// let res = await net_signOut();
			// if(res.code == "200"){
			// 	this.$api.clearLocal ();
			// 	done();
			// }
			// } else {
			// 	done();
			// }
			let res = await net_signOut()
			if (res.code == '200') {
				this.$api.clearLocal()
				toast('成功退出登录！')
			}
		}
	}
}
</script>

<style lang="less" scoped>
.balance-wrapper {
	min-height: 100%;
	box-sizing: border-box;
	padding-top: @app_head_height;
	background: url('../../../assets/page_bg_default.jpg') no-repeat;
	background-size: cover;
	background-attachment: fixed;
	.main-container {
		.bank-box {
			height: 220px;
			.bank-content {
				width: 317px;
				height: 170px;
				box-sizing: border-box;
				border-radius: 10px;
				&.has-card {
					background: url('../../../assets/bank_bg.png') no-repeat;
					background-size: cover;
				}
				&.no-card {
					background: rgba(255, 255, 255, 0.5);
				}
				.bank-body {
					img {
						width: 133px;
						height: 94px;
					}
					.title-box {
						.title-white-txt {
							font-size: 16px;
							color: #ffffff;
							font-family: '黑体';
						}
						.body-white-txt {
							margin-top: 5px;
							font-size: 14px;
							color: #ffffff;
						}
					}
				}
				.has-card-body {
					padding: 30px 15px;
					box-sizing: border-box;
					height: 100%;
					position: relative;
					.chip-box {
						width: 38px;
						height: 35px;
						background: url('./img/chip.png') no-repeat;
						background-size: 100% 100%;
						position: absolute;
						right: 10px;
						top: 22%;
					}
					.bottom-box {
						.card-content {
							white-space: nowrap;
							overflow: auto;
						}
						.card-num {
							font-size: 22px;
							color: #ffffff;
							letter-spacing: 1px;
						}
					}
				}
			}
		}

		.quit-box {
			padding: 0 11px;
			margin-top: 50px;
		}
		.slot-item {
			height: 50px;
			background-color: rgba(255, 255, 255, 0.5);
			border-top: 1px solid #ccc;
			font-size: 16px;
			&:first-child {
				border-top: none;
			}
			.left-content {
				width: 54px;
				.icon-bg {
					width: 22px;
					height: 22px;
				}
				.icon-bg__login {
					background: url('./img/ico_login_pwd.png') no-repeat;
					background-size: cover;
				}
				.icon-bg__pay {
					background: url('./img/ico_pay_pwd.png') no-repeat;
					background-size: cover;
				}
				.icon-login__out {
					background: url('./img/icon_new_mine_loginout.png') no-repeat;
					background-size: cover;
				}
			}
			.svg_left {
				width: 24px;
				height: 24px;
				padding-right: 10px;
				color: rgba(0,0,0,.3);
				fill: currentColor;
			}
		}
	}
}
</style>


