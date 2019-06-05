<template>
	<div class="loginPwd-wrapper">
		<div class="header-container">
			<ims-header :title="titleList[pointers.title]">
				<span slot="left" class="icon_left" @click="back">
					<svg class="svg_left">
						<use xlink:href="#left"></use>
					</svg>
				</span>
			</ims-header>
		</div>
		<div class="main-container">
			<div class="login-body display-flex flex-column">
				<div class="item-body" v-for="(v, k, index) in currentObj" :key="index">
					<div v-if="v.title" class="body-title small-white-txt">{{ v.title }}</div>
					<div class="body-input-box" @click="v.readonly && showPlugin(k, 'list')">
						<input
							class="normal-input"
							:type="v.type"
							v-model="v.model"
							:placeholder="v.placeholder"
							:status="v.status"
							:valueType="v.valueType"
							:maxlength="v.maxlength"
							:readonly="v.readonly"
						>
					</div>
				</div>
				<div class="bottom-body">
					<div class="btn-box display-flex flex-center">
						<div class="normal-button" :class="{'active':btnActive}" @click="submit()">确&nbsp;定</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 账户下拉框 -->
		<van-popup v-model="switchs.pickShow" position="bottom">
			<van-picker
				show-toolbar
				:columns="bankList"
				@cancel="onPickConfirm"
				@confirm="onPickConfirm"
				@change="onPickChange"
				:loading="switchs.packLoading"
			></van-picker>
		</van-popup>
	</div>
</template>
<script>
import Vue from 'vue'
import { Picker } from 'vant'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { net_bankList, net_bindBank, net_editPassword, net_setDrawPwd } from '@/js/network.js'
Vue.use(Picker)
export default {
	data() {
		return {
			currentObj: {},
			pointers: {
				title: 0
			},
			titleList: ['登录密码', '提款密码', '昵称修改', '绑定银行卡'],
			btnActive: false,
			loginPwdObj: {
				userPwd: {
					model: '',
					title: '原始密码',
					placeholder: '请输入您的密码',
					status: '',
					maxlength: 16,
					valueType: 'letterNum',
					type: 'password'
				},
				newUserPwd: {
					model: '',
					title: '新密码',
					placeholder: '请输入您的新密码',
					status: '',
					maxlength: 16,
					valueType: 'letterNum',
					type: 'password'
				},
				confirmNewPwd: {
					model: '',
					title: '确认密码',
					placeholder: '请再次输入您的新密码',
					status: '',
					maxlength: 16,
					valueType: 'letterNum',
					type: 'password'
				}
			},
			payPwdObj: {
				payPwd: {
					model: '',
					title: '设置支付密码',
					placeholder: '请输入您的6位数密码',
					status: '',
					maxlength: 6,
					valueType: 'num',
					type: 'password'
				},
				confirmPwd: {
					model: '',
					title: '确认密码',
					placeholder: '请再次输入您的提款密码',
					status: '',
					maxlength: 6,
					valueType: 'num',
					type: 'password'
				}
			},
			nickNameObj: {
				userNickName: {
					model: '',
					title: '',
					placeholder: '起个好名字让人更容易记住',
					maxlength: 10
				}
			},
			bankFlag: '',
			bankObj: {
				realName: {
					model: '',
					title: '真实姓名',
					placeholder: '请输入您的真实姓名',
					status: '',
					maxlength: 10,
					valueType: '',
					type: ''
				},
				bankName: {
					model: '',
					title: '银行开户行',
					placeholder: '请选择您的银行开户行',
					status: '',
					maxlength: 15,
					valueType: '',
					type: '',
					readonly: 'readonly'
				},
				bankBranchName: {
					model: '',
					title: '开户支行',
					placeholder: '请输入您的开户支行',
					status: '',
					maxlength: 20,
					valueType: '',
					type: ''
				},
				bankNumber: {
					model: '',
					title: '银行卡号',
					placeholder: '请输入您的银行卡号',
					status: '',
					maxlength: 20,
					valueType: 'num',
					type: 'tel'
				}
			},
			payHavePwdObj: {
				oldPassword: {
					model: '',
					title: '原始密码',
					placeholder: '请输入您的密码',
					status: '',
					maxlength: 6,
					valueType: 'num',
					type: 'password'
				},
				payPwd: {
					model: '',
					title: '设置新的支付密码',
					placeholder: '请输入您的6位数密码',
					status: '',
					maxlength: 6,
					valueType: 'num',
					type: 'password'
				},
				confirmPwd: {
					model: '',
					title: '确认密码',
					placeholder: '请再次输入您的提款密码',
					status: '',
					maxlength: 6,
					valueType: 'num',
					type: 'password'
				}
			},
			bankList: [],
			switchs: {
				pickShow: false,
				packLoading: false
			},
			inputLock: false,
			pattern: {}
		}
	},

	created() {
		this.pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？0-9]")
		if (this.user_token) {
			this.judgeType()
		} else {
			toast('录信息失效,请重新登录')
			this.$router.replace('./user')
		}
	},
	computed: {
		...mapGetters(['user_token', 'account'])
	},
	watch: {
		currentObj: {
			handler(newVal, oldVal) {
				var allRight = true
				for (let key in newVal) {
					if (newVal[key].model) {
						newVal[key].status = 'active'
					} else {
						newVal[key].status = ''
						allRight = false
					}
					if (newVal[key].valueType == 'num') {
						newVal[key].model = newVal[key].model.replace(/\D/g, '')
					}
					if (newVal[key].valueType == 'lowLetterNum') {
						newVal[key].model = newVal[key].model.replace(/[^a-z0-9]/g, '')
					}
					if (newVal[key].valueType == 'letterNum') {
						newVal[key].model = newVal[key].model.replace(/[^\w_]/g, '')
					}
				}
				this.btnActive = allRight
			},
			deep: true
		}
	},
	methods: {
		back() {
			if (this.$route.query.from) {
				if (this.$route.query.from == 'balance') {
					this.$router.replace('/user')
				}
			} else {
				this.$router.go(-1)
			}
		},
		judgeType() {
			let type = this.$route.query.type
			let type_num = parseInt(type)
			this.pointers.title = type_num - 1
			switch (type) {
				case '1':
					this.currentObj = this.loginPwdObj
					break
				case '2':
					this.currentObj = this.account.bankPassword == 'true' ? this.payHavePwdObj : this.payPwdObj
					break
				case '3':
					this.nickNameObj.userNickName.placeholder = this.account.userName
					this.currentObj = this.nickNameObj
					break
				case '4':
					this.currentObj = this.bankObj
					this.getBank()
					break
				default:
					break
			}
		},
		submit() {
			if (!this.btnActive) return
			let type = this.$route.query.type
			switch (type) {
				case '1':
					this.setLoginPwd()
					break
				case '2':
					this.setBalancePwd()
					break
				case '3':
					this.setNickName()
					break
				case '4':
					this.setBank()
					break
				default:
					break
			}
		},
		checkBalancePwd() {
			let obj = this.currentObj
			for (let key in obj) {
				if (obj[key].model.length != 6) {
					toast('提款密码长度只能为6位')
					return false
				} else if (key == 'confirmPwd') {
					if (obj[key].model != obj['payPwd'].model) {
						toast('密码不一致，请重新输入')
						return false
					}
				} else {
					obj[key].wrongTip = ''
				}
			}
			return true
		},
		async setBalancePwd() {
			if (!this.checkBalancePwd()) return
			let param = {}
			param.drawingPwd = this.currentObj.payPwd.model
			param.oldPassword = this.account.bankPassword == 'true' ? this.currentObj.oldPassword.model : ''
			let res = await net_setDrawPwd(param)
			if (res.code == '200') {
				toast('设置提款密码成功！')
				this.$api.getUserInfo()
				this.$router.go(-1)
			}
		},
		checkLoginPwd() {
			let obj = this.currentObj
			for (let key in obj) {
				if (obj[key].model.length < 6) {
					toast('密码长度不能小于6位')
					return false
				} else if (key == 'confirmNewPwd') {
					if (obj[key].model != obj['newUserPwd'].model) {
						toast('密码不一致，请重新输入')
						return false
					}
				} else {
					obj[key].wrongTip = ''
				}
			}
			return true
		},
		async setLoginPwd() {
			if (!this.checkLoginPwd()) return
			let param = {}
			param.userPwd = this.currentObj.userPwd.model
			param.newUserPwd = this.currentObj.newUserPwd.model
			let res = await net_editPassword(param)
			if (res.code == '200') {
				toast('设置登录密码成功,请重新登录')
				setTimeout(() => {
					this.$api.quitAccount()
				}, 1000)
			}
		},
		async getBank() {
			let res = await net_bankList()
			if (res.code == '200') {
				this.bankList = res.data.bankList
			}
		},
		checkBank() {
			let obj = this.currentObj
			for (let key in obj) {
				if (!obj[key].model) {
					toast('请填写完整信息!')
					return false
				}
				if (key == 'realName') {
					if (this.pattern.test(obj[key].model)) {
						toast('姓名输入格式不正确，请重新输入')
						return false
					}
				}
				if (key == 'bankNumber') {
					if (obj[key].model.length < 15) {
						toast('银行卡长度不能小于15位')
						return false
					} else {
						obj[key].wrongTip = ''
					}
				}
				if (key == 'bankBranchName') {
					if (this.pattern.test(obj[key].model)) {
						toast('开户支行输入格式不正确，请重新输入')
						return false
					}
				}
			}
			return true
		},
		async setBank() {
			if (!this.checkBank()) return
			let param = {}
			param.realName = this.currentObj.realName.model
			param.bankBranchName = this.currentObj.bankBranchName.model
			param.bankNumber = this.currentObj.bankNumber.model
			param.bankFlag = this.bankFlag
			let res = await net_bindBank(param)
			if (res.code == '200') {
				toast('绑定银行卡成功！')
				this.$api.getUserInfo()
				this.$router.go(-1)
			}
		},
		checkNickName() {
			let obj = this.currentObj
			for (let key in obj) {
				if (!obj[key].model) {
					toast('请填写要修改的昵称！')
					return false
				}
			}
			return true
		},
		setNickName() {
			if (!this.checkNickName()) return
			let param = {}
			param.userNickName = this.currentObj.userNickName.model
			this.$http.post(this.interfaces.editNickName, param).then(res => {
				if (res.code == '200') {
					toast('设置昵称成功！')
					this.$api.getUserInfo()
					this.$router.go(-1)
				}
			})
		},
		goback() {
			if (this.$route.query.from) {
				if (this.$route.query.from == 'balance') {
					this.$router.replace('/personalCenter')
				}
			} else {
				this.$router.go(-1)
			}
		},
		showPlugin(key, type) {
			switch (type) {
				case 'list':
					this.switchs.pickShow = true
					break
				default:
					break
			}
		},
		onPickChange(picker, value, index) {
			this.bankObj.bankName.model = value.text
			this.bankFlag = value.flag
		},
		onPickConfirm(value, index) {
			this.switchs.pickShow = false
			this.bankFlag = value.flag
			this.bankObj.bankName.model = value.text
		}
	}
}
</script>
<style lang="less" scoped>
.icon_left {
	width: @app_head_height;
	height: @app_head_height;
	display: inline-block;
}
.svg_left {
	width: 22px;
	height: 22px;
	fill: currentColor;
	margin: 12.5px 0 0 15px;
}
.loginPwd-wrapper {
	min-height: 100%;
	box-sizing: border-box;
	padding-top: @app_head_height;
	background: #e5e5e5;
	.header-container {
		height: 49px;
	}
	.main-container {
		padding: 0 11px;
		.login-body {
			padding: 20px;
			.item-body {
				margin-top: 6px;
				.body-title {
					padding: 7px 0;
				}
				.body-input-box {
					height: 40px;
				}
			}
			.bottom-body {
				margin: 80px 0 20px 0;
			}
		}
	}
}
</style>

