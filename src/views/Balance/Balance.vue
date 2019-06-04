<template>
	<div class="balance-wrapper">
		<ims-header title="余额提现">
			<span
				style="width:5em;display:block;text-align:right;"
				slot="right"
				@click="$router.push('/balanceRecord')"
			>提现记录</span>
		</ims-header>
		<div class="main-container">
			<div class="title-box display-flex flex-center flex-column">
				<div class="ims-txt--midum">可提现金额</div>
				<div class="title-num" v-if="account.userMoney">
					<em>￥</em>
					<span>{{ account.userMoney.split(".")[0]}}</span>
					<i>.</i>
					<em>{{ account.userMoney.split(".")[1]}}</em>
				</div>
			</div>
			<div class="balance-box">
				<div>
					<div class="item-content" v-for="(v,k,index) in balanceObj" :key="index">
						<div class="item-title ims--txt--small">{{ v.title }}</div>
						<div class="item-body" @click="v.canClick &&  goPage('/setPassword?type=4')">
							<input
								class="normal-input"
								:type="v.type"
								:readonly="v.readonly"
								v-model="v.model"
								:status="v.status"
								:valueType="v.valueType"
								:maxlength="v.maxlength"
								:placeholder="v.placeholder"
								@input="onInput"
							>
						</div>
					</div>
					<div class="tip-content">
						<div style="color:#E60012">{{ balanceTip }}</div>
						<div>提现金额最低100元</div>
						<div>当前打码：{{ account.currentDml }} 出款需要打码量：{{ account.chukDml }}</div>
					</div>

					<div class="loginBtn-box">
						<div class="normal-button" :class="{'active':btnActive}" @click="gotoDraw">
							<b>确&nbsp;定</b>
						</div>
					</div>
				</div>
			</div>
		</div>

		<van-dialog
			v-model="dialogShow"
			title="您还未设置提现密码，为了您的账户安全，请先设置再提现。"
			confirm-button-text="好的"
			@confirm="confirm"
		/>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { net_drawCash } from '@/js/network.js'

export default {
	data() {
		return {
			dialog: false,
			btnActive: {},
			balanceTip: '',
			balanceObj: {
				drawNum: {
					model: '',
					title: '提现金额',
					placeholder: '请输入提现金额',
					readOnly: false,
					status: '',
					maxlength: 10,
					valueType: 'num',
					type: 'text'
				},
				bankNum: {
					model: '',
					title: '银行卡号',
					placeholder: '',
					readonly: true,
					status: '',
					maxlength: 6,
					valueType: '',
					type: 'text',
					canClick: true
				},
				drawPwd: {
					model: '',
					title: '提款密码',
					placeholder: '请输入您的提款密码',
					status: '',
					maxlength: 6,
					valueType: 'num',
					type: 'password'
				}
			}
		}
	},
	computed: {
		...mapGetters(['user_token', 'account']),
		dialogShow: {
			get: function() {
				return this.account.bankPassword == 'true' ? false : true
			},
			set: function() {}
		}
	},
	watch: {
		balanceObj: {
			handler(newVal, oldVal) {
				var allRight = true
				for (let key in newVal) {
					if (newVal[key].model) {
						newVal[key].status = 'active'
						if (newVal[key].valueType == 'lowLetterNum') {
							// newVal[key].model = newVal[key].model.replace(/[^a-z0-9]/g,'');
						} else if (newVal[key].valueType == 'num') {
							newVal[key].model = newVal[key].model.replace(/\D/g, '')
						} else if (newVal[key].valueType == 'letterNum') {
							// newVal[key].model = newVal[key].model.replace(/[^\w_]/g,'');
						}
					} else {
						newVal[key].status = ''
						allRight = false
					}
				}
				this.btnActive = allRight
			},
			deep: true
		},
		account: {
			handler(newVal, oldVal) {
				this.setBankNum()
			},
			deep: true
		}
	},
	created() {
		this.setBankNum()
	},
	methods: {
		confirm() {
			this.$router.push('/setPassword?type=2&from=balance')
		},
		goPage(url) {
			this.$router.push({ path: url })
		},
		onInput(e, v) {},
		setBankNum() {
			if (this.account.bankNumber) {
				this.balanceObj.bankNum.model = this.account.bankNumber
				this.balanceObj.bankNum.canClick = false
			} else {
				this.balanceObj.bankNum.placeholder = '请添加银行卡'
				this.balanceObj.bankNum.model = this.account.bankNumber
				this.balanceObj.bankNum.canClick = true
			}
		},
		checkDraw() {
			let obj = this.balanceObj
			this.balanceTip = ''
			for (let key in obj) {
				if (key == 'drawNum') {
					let intNum = parseInt(obj[key].model)
					if (intNum < 100) {
						toast('最低提现金额100元')
						return false
					} else if (intNum > parseInt(this.account.userMoney)) {
						toast('提现金额不能大于账户余额')
						return false
					} else if (parseFloat(this.account.chukDml) > parseFloat(this.account.currentDml)) {
						toast('当前打码量不足！')
						return false
					}
				} else {
					obj[key].wrongTip = ''
				}
			}
			return true
		},
		async gotoDraw() {
			if (!this.btnActive) return
			if (!this.checkDraw()) return
			let param = {}
			param.money = this.balanceObj.drawNum.model
			param.bankPassword = this.balanceObj.drawPwd.model
			let res = await net_drawCash(param)
			if (res.code == '200') {
				toast('提现申请成功！')
				this.$api.getUserInfo()
				this.balanceObj.drawNum.model = ''
				this.balanceObj.drawPwd.model = ''
			} else if (res.code == '201') {
				this.balanceTip = res.msg
			}
		}
	}
}
</script>

<style lang="less" scoped>
.balance-wrapper {
	padding-top: @app_head_height;
	min-height: 100%;
	box-sizing: border-box;
	background: url('../../assets/page_bg_default.jpg') no-repeat;
	background-size: 100%;
	background-attachment: fixed;
	/deep/ .van-dialog__header {
		padding-left: 10px;
		padding-right: 10px;
		padding-bottom: 14px;
		line-height: 26px;
	}
	/deep/ .van-dialog {
		width: 76%;
	}
	.head-container {
		height: 44px;
	}
}
.main-container {
	.title-box {
		padding: 30px 0;
		.title-num {
			color: #fff;
			font-size: 35px;
			line-height: 35px;
			font-weight: bold;
			margin-top: 12px;
			em {
				font-size: 24px;
			}
		}
	}
	.balance-box {
		.item-content {
			padding: 20px 20px 0 20px;
			.item-body {
				height: 44px;
				padding-top: 8px;
			}
		}

		.tip-content {
			padding-bottom: 30px;
			padding: 11px 20px 64px 20px;
			font-size: 13px;
			font-family: 'PingFangSC-Regular';
			color: rgba(160, 160, 160, 1);
			& > div {
				margin-top: 3px;
			}
		}
		.loginBtn-box {
			padding: 0 55px 40px 55px;
			height: 44px;
		}
	}
}
</style>


