<template>
	<div class="user">
		<div class="top">
			<div @click="userGreeting" class="login">{{greeting}}</div>
			<div @click="gotoPage('/userinfo')" class="data">个人资料</div>
		</div>
		<div class="bottom">
			<div @click="userGreeting" class="user_center">
				<div class="wallet">账户余额</div>
				<div v-if="isLogin" class="money">￥{{account.userMoney}}</div>
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
			<div @click="gotoPage('/activity',false)" class="option">
				<div class="icon icon3"></div>
				<p>优惠</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	components: {},
	data() {
		return {}
	},
	computed: {
		...mapState(['account']),
		isLogin() {
			return !!this.account.userId
		},
		greeting() {
			let hour = new Date().getHours()
			var str = ''
			if (hour < 6) {
				str = '早晨好'
			} else if (hour < 11) {
				str = '上午好'
			} else if (hour < 13) {
				str = '中午好'
			} else if (hour < 18) {
				str = '下午好'
			} else if (hour < 24) {
				str = '晚上好'
			}
			let name = this.account.userName ? this.account.userName : '请登录'
			return `${str}，${name}`
		}
	},
	mounted() {},
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
	background: rgba(255, 255, 255, 1);
	display: flex;
	align-items: center;
	height: 65px;
	.user_center {
		width: 133px;
		font-size: 12px;
		font-weight: 500;
		color: rgba(190, 190, 190, 1);
		text-align: center;
		letter-spacing: 1px;
		.wallet {
			letter-spacing: 1px;
		}
		.login {
			width: 65px;
			height: 20px;
			background: rgba(230, 211, 154, 1);
			border-radius: 10px;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
			font-size: 11px;
			line-height: 20px;
			margin: 10px auto 0;
		}
		.money {
			height: 20px;
			font-weight: bold;
			font-size: 14px;
			line-height: 20px;
			margin: 10px auto 0;
			color: #EFD588;
		}
	}
	.linear_v {
		width: 1px;
		height: 28px;
		background: rgba(239, 239, 239, 1);
		transform: scaleX(0.5);
	}
	.option {
		width: 70px;
		text-align: center;
		font-size: 12px;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		.icon {
			width: 25px;
			height: 25px;
			background-position: center;
			background-repeat: no-repeat;
			margin: 0 auto 7px;
		}
		.icon1 {
			background-image: url('../img/icon1.png');
			background-size: 25px 25px;
		}
		.icon2 {
			background-image: url('../img/icon2.png');
			background-size: 19px 25px;
		}
		.icon3 {
			background-image: url('../img/icon3.png');
			background-size: 23px 19px;
		}
	}
}
.user {
	width: 345px;
	margin: 0 auto;
	overflow: hidden;
	border-radius: 10px;
	.top {
		height: 33px;
		background: linear-gradient(0deg, rgba(239, 213, 136, 1), rgba(231, 212, 155, 1));
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 12px;
		font-weight: 500;
		color: rgba(247, 247, 247, 1);
		letter-spacing: 1px;
		line-height: 33px;
	}
	.login {
		padding: 0 10px;
	}
	.data {
		padding: 0 10px;
	}
}
</style>
