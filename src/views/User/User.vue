<template>
	<div>
		<div class="head_title">
			<p class="p">
				<img class="head_title_img" src="../../assets/grzx.png">
			</p>
		</div>
		<div class="user">
			<div class="top">
				<div class="info">
					<div @click="clickThis(13)" class="avator">
						<ims-image class="img" lazy :src=" account.headPortrait || require('../../assets/user.png')"/>
					</div>
					<div v-if="isLogin" class="name_id">
						<p class="name">{{account.userName}}</p>
						<p class="id">{{account.userId}}</p>
					</div>
					<div v-else @click="login" class="login">请登录</div>
				</div>
				<div class="options">
					<div class="account">
						<p class="p1">￥{{account.userMoney || '0.00'}}</p>
						<p class="p2">账户余额</p>
					</div>
					<div class="linear"></div>
					<div class="opts">
						<div @click="clickThis(10)" class="opt">
							<img class="img" src="./img/icon2.png" >
							<p>存款</p>
						</div>
						<div @click="clickThis(11)" class="opt">
							<img class="img" src="./img/icon3.png" >
							<p>取款</p>
						</div>
						<div @click="clickThis(12,false)" class="opt">
							<img class="img" src="./img/icon1.png" >
							<p>优惠</p>
						</div>
					</div>
				</div>
			</div>

			<div class="btns">
				<div @click="clickThis(0)" class="btn">
					<img class="img" src="./img/i1.png">
					<p class="p">个人资料</p>
				</div>
				<div class="linear"></div>
				<div @click="clickThis(1)" class="btn">
					<img class="img" src="./img/i2.png">
					<p class="p">交易记录</p>
				</div>
				<div class="linear"></div>
				<div @click="clickThis(2)" class="btn">
					<img class="img" src="./img/i3.png">
					<p class="p">投注记录</p>
				</div>
			</div>
			<div class="btns">
				<div @click="clickThis(3)" class="btn">
					<img class="img" src="./img/i4.png">
					<p class="p">额度转换</p>
				</div>
				<div class="linear"></div>
				<div @click="clickThis(4)" class="btn">
					<img class="img" src="./img/i5.png">
					<p class="p">VIP详情</p>
				</div>
				<div class="linear"></div>
				<div @click="clickThis(5,false)" class="btn">
					<img class="img" src="./img/i6.png">
					<p class="p">客服</p>
				</div>
			</div>
			<div class="btns">
				<div @click="clickThis(6,false)" class="btn">
					<img class="img" src="./img/i7.png">
					<p class="p">关于</p>
				</div>
				<div class="linear"></div>
				<div @click="clickThis(7)" class="btn">
					<img class="img" src="./img/i8.png">
					<p class="p">安全中心</p>
				</div>
				<div class="linear"></div>
				<div @click="clickThis(8)" class="btn">
					<img class="img" src="./img/i9.png">
					<p class="p">账号退出</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { net_signOut } from '@/js/network.js'
import ImsImage from '@/components/ims-image.vue'
export default {
	name: 'user',
	components: { ImsImage },
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
					toast('正在升级中，敬请期待')
					break
				}
				case 5: {
					this.$router.push('/customer-service')
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
					this.quitClick()
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
.head_title {
	height: 50px;
	.p {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		font-size: 0;
		color: rgba(51, 51, 51, 1);
		height: 50px;
		line-height: 50px;
		z-index: 1000;
		background-color: @base_color;
		text-align: center;
	}
	.head_title_img {
		display: inline-block;
		height: 24px;
		margin-top: 13px;
	}
}
.user {
	.top {
		width: 345px;
		height: 172px;
		background: linear-gradient(-85deg, rgba(228, 170, 96, 1) 0%, rgba(229, 200, 139, 1) 100%);
		border-radius: 14px;
		padding: 18px 0 0 0;
		margin: 0 auto 29px;
		box-sizing: border-box;
	}
}
.options {
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 18px 0 28px;
	.account {
		text-align: center;
		.p1 {
			font-size: 20px;
			font-weight: 500;
			margin-bottom: 5.5px;
		}
		.p2 {
			font-size: 12px;
			opacity: 0.71;
		}
	}
	.linear {
		width: 1px;
		height: 30px;
		background: rgba(255, 255, 255, 1);
		opacity: 0.43;
		margin: 0 10px 0 20px;
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
		p {
			font-size: 13px;
		}
		.img {
			width: 28px;
			height: 28px;
			display: block;
			margin-bottom: 6.5px;
		}
	}
}
.info {
	display: flex;
	align-items: center;
	padding-left: 28px;
	margin-bottom: 18px;
	.avator {
		width: 60px;
		height: 60px;
		box-sizing: border-box;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 15px;
		background: #fff;
		.img {
			display: block;
			width: 100%;
		}
	}
	.name_id {
		font-size: 13px;
		color: rgba(255, 255, 255, 1);
	}
	.name {
		margin-bottom: 6px;
	}
	.id {
		font-size: 12px;
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
	width: 345px;
	height: 73px;
	background: rgba(255, 255, 255, 1);
	border-radius: 7px;
	margin: 0 auto 18px;
	display: flex;
	align-items: center;
	.linear {
		width: 1px;
		height: 22px;
		background: rgba(237, 237, 237, 1);
	}
	.btn {
		flex: 1;
		text-align: center;
	}
	.img {
		width: 25px;
		height: 25px;
		display: block;
		margin: 0 auto 4.5px;
	}
	.p {
		font-size: 13px;
		color: rgba(51, 51, 51, 1);
	}
}
</style>
