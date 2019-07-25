<template>
	<div class="user_wrapper view_wrapper">
		<div class="msg_box">
			<div @click="clickThis(14)" class="msg_icon"></div>
		</div>
		<div class="user">
			<div class="top">
				<div class="info">
					<div @click="clickThis(13)" class="avator">
						<ims-image class="img" lazy :src=" account.headPortrait || require('../../assets/user.png')"/>
						<img v-if="isLogin" class="img_edit" src="./img/icon_mine_editor.png">
					</div>
					<div v-if="isLogin" class="name_id">
						<p class="name">{{account.userName}}</p>
						<p class="id">{{account.userId}}</p>
					</div>
					<div v-else @click="login" class="login">请登录</div>
				</div>
				<div class="options">
					<div class="account">
						<p class="p1">
							<span class="p1_0">￥</span>
							<span class="p1_1">{{account.userMoney || '0.00'}}</span>
						</p>
						<p class="p2">账户余额</p>
					</div>
					<div class="linear"></div>
					<div class="opts">
						<div @click="clickThis(10)" class="opt">
							<img class="img" src="./img/icon_new_mine_desposit.png">
							<p class="p">存款</p>
						</div>
						<!-- <div @click="clickThis(11)" class="opt">
							<img class="img" src="./img/icon_new_mine_transfer.png">
							<p class="p">转账</p>
						</div>-->
						<div @click="clickThis(11)" class="opt">
							<img class="img" src="./img/icon_new_mine_withdraw.png">
							<p class="p">取款</p>
						</div>
						<div @click="clickThis(12,false)" class="opt">
							<img class="img" src="./img/icon_new_mine_discount.png">
							<p class="p">优惠</p>
						</div>
					</div>
				</div>
			</div>

			<div class="btns">
				<div @click="clickThis(0)" class="btn">
					<img class="img" src="./img/icon_new_mine_personal.png">
					<p class="p">个人资料</p>
				</div>
				<div class="linear"></div>
				<div @click="clickThis(1)" class="btn">
					<img class="img" src="./img/icon_new_mine_deal.png">
					<p class="p">资金明细</p>
				</div>
				<div class="linear"></div>
				<div @click="clickThis(2)" class="btn">
					<img class="img" src="./img/icon_new_betting_log.png">
					<p class="p">投注记录</p>
				</div>
			</div>
			<div class="btns">
				<div @click="clickThis(8)" class="btn">
					<img class="img" src="./img/daili_icon.png">
					<p class="p">我的代理</p>
				</div>
				<div class="linear"></div>
				<div @click="clickThis(3)" class="btn">
					<img class="img" src="./img/icon_new_mine_courtesy.png">
					<p class="p">额度转换</p>
				</div>
				<div class="linear"></div>
				<div @click="clickThis(4,false)" class="btn">
					<img class="img" src="./img/guide.png">
					<p class="p">新手教程</p>
				</div>	
			</div>
			<div class="btns">
				<div @click="clickThis(5,false)" class="btn">
					<img class="img" src="./img/icon_new_mine_bankcard.png">
					<p class="p">客服</p>
				</div>
				<div class="linear"></div>
				<div @click="clickThis(6,false)" class="btn">
					<img class="img" src="./img/icon_new_mine_about.png">
					<p class="p">关于</p>
				</div>
				<div class="linear"></div>
				<div @click="clickThis(7)" class="btn">
					<img class="img" src="./img/icon_new_mine_proxy.png">
					<p class="p">安全中心</p>
				</div>
				<div class="linear"></div>
				<!-- <div @click="clickThis(8)" >
					<img class="img" src="./img/icon_new_mine_loginout.png">
					<p class="p">账号退出</p>
				</div> -->
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { net_signOut } from '@/js/network.js'
export default {
	name: 'user',
	data() {
		return {
			inited: false
		}
	},
	computed: {
		...mapGetters(['account']),
		isLogin() {
			return !!this.account.userId
		}
	},
	activated() {
		this.inited = true
		this.$api.getUserInfoNoWarn({ transferOut: '1' })
	},
	methods: {
		login() {
			this.$router.push('/login')
		},
		clickThis(num, needLogin = true) {
			if (needLogin && !this.account.userId) {
				this.login()
				return
			}
			switch (num) {
				case 0: {
					this.$router.push('/userinfo')
					break
				}
				case 1: {
					this.$router.push('/fundsDetail')
					break
				}
				case 2: {
					this.$router.push('/betDetail')
					break
				}
				case 3: {
					this.$router.push('/edu')
					break
				}
				case 4: {
					this.$router.push('/course')
					break
				}
				case 5: {
					// this.$router.push('/customer-service')
					this.$router.push('/service')
					break
				}
				case 6: {
					this.$router.push('/about')
					break
				}
				case 7: {
					this.$router.push('/safeCenter')
					break
				}
				case 8: {
					// this.$toast('正在升级中，敬请期待')
					this.$router.push('/agent')
					break
				}
				case 10: {
					this.$router.push('/bank-savings')
					break
				}
				case 11: {
					this.$router.push('/balance')
					break
				}
				case 12: {
					this.$router.push('/activity')
					break
				}
				case 13: {
					this.$router.push('/userinfo')
					break
				}
				case 14: {
					this.$router.push('/siteMail')
					break
				}
			}
		},
		// quitClick() {
		// 	Dialog.confirm({
		// 		title: '确定要退出登录账户吗？'
		// 	})
		// 		.then(() => {
		// 			this.quitAccount()
		// 		})
		// 		.catch(() => {})
		// },
		// async quitAccount(action, done) {
		// 	// if (action === 'confirm') {
		// 	// let res = await net_signOut();
		// 	// if(res.code == "200"){
		// 	// 	this.$api.clearLocal ();
		// 	// 	done();
		// 	// }
		// 	// } else {
		// 	// 	done();
		// 	// }
		// 	let res = await net_signOut()
		// 	if (res.code == '200') {
		// 		this.$api.clearLocal()
		// 		toast('成功退出登录！')
		// 	}
		// }
	}
}
</script>
<style lang="less" scoped>
.user_wrapper {
	.msg_box {
		padding: 22px 13px 18px;
		text-align: right;
	}
	.msg_icon {
		display: inline-block;
		width: 20px;
		height: 20px;
		background: url('../../assets/icon_new_mine_message.png') no-repeat;
		background-size: 100%;
	}
	.user {
		.top {
			width: 349px;
			height: 160px;
			background-color: rgba(255, 255, 255, 0.5);
			box-shadow: 0 0.02rem 0.04rem 0 rgba(0, 0, 0, 0.1);
			border-radius: 5px;
			padding: 14px 15px;
			margin: 0 auto 21px;
			box-sizing: border-box;
			color: @text_color;
		}
	}
	.options {
		color: @text_color;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.account {
			text-align: center;
			flex: 1;
			.p1 {
				font-size: 16px;
				font-weight: 500;
				color: #0076ff;
				margin-bottom: 4px;
				.p1_0 {
					font-weight: 600;
					font-family: 'PingFangSC-Regular', sans-serif;
				}
				.p1_1 {
					font-weight: 600;
					font-family: 'fontLibrary', 'sans-serif';
				}
			}
			.p2 {
				font-size: 11px;
				color: #1e1e1e;
			}
		}
		.linear {
			width: 1px;
			height: 30px;
			background: rgba(0, 0, 0, 0.2);
			margin: 0 10px 0 5px;
		}
		.opts {
			display: flex;
			flex: 1;
			justify-content: space-between;
			align-items: center;
			text-align: center;
			.opt {
				padding: 0 10px;
			}
			.p {
				font-size: 13px;
			}
			.img {
				width: 46px;
				height: 46px;
				display: block;
			}
		}
	}
	.info {
		display: flex;
		align-items: center;
		margin-bottom: 16px;
		padding-left: 8px;
		.avator {
			width: 54px;
			height: 54px;
			box-sizing: border-box;
			border-radius: 50%;
			margin-right: 14px;
			background: #fff;
			border: 2px solid rgba(255, 255, 255, 0.6);
			position: relative;
			.img_edit {
				position: absolute;
				right: 0;
				bottom: 0;
				width: 19px;
				height: 19px;
			}
			.img {
				display: block;
				width: 100%;
				border-radius: 50%;
			}
		}
		.name_id {
			font-size: 13px;
			color: rgba(255, 255, 255, 1);
		}
		.name {
			margin-bottom: 6px;
			font-size: 19px;
			color: #fff;
		}
		.id {
			font-size: 10px;
			color: rgba(255, 255, 255, 0.8);
		}
		.login {
			width: 70px;
			height: 26px;
			border: 1px solid rgba(255, 255, 255, 1);
			border-radius: 13px;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
			line-height: 26px;
			text-align: center;
			font-size: 12px;
			letter-spacing: 1px;
		}
	}
	.btns {
		width: 349px;
		height: 73px;
		box-shadow: 0 0.02rem 0.04rem rgba(0, 0, 0, 0.1);
		background: rgba(255, 255, 255, 0.5);
		border-radius: 5px;
		margin: 0 auto 21px;
		display: flex;
		align-items: center;
		.linear {
			width: 1px;
			height: 23px;
			background: #c1cdd2;
		}
		.btn {
			flex: 1;
			text-align: center;
		}
		.img {
			width: 29px;
			height: 29px;
			display: block;
			margin: 0 auto;
		}
		.p {
			font-size: 12px;
			line-height: 17px;
			color: @text_color;
		}
	}
}
</style>
