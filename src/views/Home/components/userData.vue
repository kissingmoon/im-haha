<template>
	<div class="user">
		<div class="top">
			<div @click="userGreeting" class="login">{{greeting}}</div>
			<div @click="gotoPage('/userinfo')" class="data">个人资料</div>
			<img class="logo" src="../img/yg_logo@2x.png">
		</div>
		<div class="bottom">
			<div @click="userGreeting" class="user_center">
				<div class="wallet">账户余额</div>
				<div v-if="isLogin" class="money">
					<span class="money_icon">￥</span>
					<span class="money_text">{{account.userMoney}}</span>
				</div>
				<div v-else class="login">登入查看</div>
			</div>
			<div class="linear_v"></div>
			<div @click="gotoPage('/bank-savings')" class="option">
				<div class="icon icon1"></div>
				<p>存款</p>
			</div>
			<div @click="gotoPage('/balance')" class="option">
				<div class="icon icon2"></div>
				<p>取款</p>
			</div>
			<div @click="gotoPage('/service',false)" class="option">
				<div class="icon icon3"></div>
				<p>客服</p>
			</div>
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex'
import { getGreeting } from '@/js/tools.js'
export default {
	data() {
		return {}
	},
	computed: {
		...mapState(['account']),
		isLogin() {
			return !!this.account.userId
		},
		greeting() {
			let str = getGreeting()
			let name = this.account.userName ? this.account.userName : '请登录'
			return `${str}，${name}`
		}
	},
	methods: {
		userGreeting() {
			if (this.account.userId) {
				return
			} else {
				this.login()
			}
		},
		login() {
			this.$router.push('/login')
		},
		gotoPage(path, needLogin = true) {
			if (needLogin && !this.isLogin) {
				this.login()
				return
			}
			this.$router.push(path)
		}
	}
}
</script>
<style lang='less' scoped>
.bottom {
	color: #77674d;
	display: flex;
	align-items: center;
	height: 65px;
	.user_center {
		width: 133px;
		font-size: 12px;
		font-weight: 500;
		color: #896a4b;
		text-align: center;
		letter-spacing: 1px;
		.wallet {
			letter-spacing: 1px;
			color: #999;
			font-weight: bold;
		}
		.login {
			width: 65px;
			height: 18px;
			border-radius: 9px;
			font-weight: 500;
			color: #896a4b;
			font-size: 10px;
			line-height: 16px;
			margin: 8px auto 0;
			border: 1px solid;
			box-sizing: border-box;
		}
		.money {
			height: 20px;
			margin: 10px auto 0;
			.money_icon {
				font-family: Arial;
				font-size: 12px;
				color: #896a4b;
				font-weight: normal;
				vertical-align: middle;
				display: inline-block;
				line-height: 12px;
			}
			.money_text {
				display: inline-block;
				vertical-align: middle;
				font-size: 18px;
				line-height: 18px;
				font-weight: bold;
				color: #896a4b;
				font-family: 'fontLibrary' !important;
			}
		}
	}
	.linear_v {
		width: 1px;
		height: 25px;
		background: #d8d8d8;
		transform: scaleX(0.5);
	}
	.option {
		width: 70px;
		text-align: center;
		font-size: 12px;
		font-weight: 600;
		color: #77674d;
		.icon {
			width: 32px;
			height: 32px;
			background-position: center;
			background-repeat: no-repeat;
			background-size: 100%;
			margin: 0 auto;
		}
		.icon1 {
			background-image: url('../img/icon_wallet_deposit.png');
		}
		.icon2 {
			background-image: url('../img/icon_wallet_transfer.png');
		}
		.icon3 {
			background-image: url('../img/icon_wallet_withdraw.png');
		}
	}
}
.user {
	width: 94.666%;
	margin: 0 auto;
	overflow: hidden;
	border-radius: 5px;
	box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.2);
	background: rgba(255, 255, 255, 0.66);
	.top {
		height: 22px;
		background: url('../img/user_bg.png') no-repeat;
		background-size: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 12px;
		font-weight: 500;
		color: #fff;
		letter-spacing: 1px;
		position: relative;
		.logo {
			position: absolute;
			width: 75px;
			height: 22px;
			right: 90px;
		}
		.login {
			line-height: 22px;
			padding-left: 14px;
			position: relative;
			z-index: 1;
		}
		.data {
			margin-right: 13px;
			font-size: 10px;
			border: 1px solid #fff;
			width: 60px;
			height: 18px;
			line-height: 15px;
			border-radius: 9px;
			box-sizing: border-box;
			text-align: center;
		}
	}
}
</style>
