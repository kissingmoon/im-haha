<template>
	<div class="log-wrapper">
		<div class="main-container display-flex">
			<div class="form-box flex-1">
				<div class="form-title">登录</div>
				<div class="form-input-content">
					<ims-input
						class="form-input-item"
						v-for="(v, k) in formData"
						:key="k"
						:name="k"
						v-model="v.model"
						:placeholder="v.placeholder"
						:type="v.type"
						:valueType="v.valueType"
						:maxlength="v.maxlength"
						@onInputFocus="inputFocusFun(v, k)"
						@onInputBlur="inputBlurFun(v, k)"
						@onleftClick="leftClickFun(v, k)"
						@onrightClick="rightClickFun(v, k)"
					>
						<div class="slot-icon--left" :class="v.leftIconClass" slot="leftIcon"></div>
						<div class="slot-icon--right" :class="v.rightIconClass" slot="rightIcon">
							<img v-if="v.imgSrc" :src="codeSrc">
						</div>
					</ims-input>
				</div>
				<div class="form-tip display-flex justify-between align-center">
					<div></div>
					<div class="tip-item right-tip-box" @click="goToKefu">忘记密码?</div>
				</div>
				<div
					class="form-submit-content display-flex flex-center"
					:class="{ 'active': btnActive }"
					@click="login"
				>登录</div>
				<div class="submit-tip">
					<div href @click="goHome">先去逛逛</div>
				</div>
			</div>
			<div class="submit-box display-flex flex-center flex-column" @click="goNext">
				<div class="submit-box__btn--top"></div>
				<div class="submit-box__btn--bot">注册新用户</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import imsInput from '@/components/ims-input/ims-input'
import mainOptions from '@/config/main-option.js'
import { randomWord } from '@/js/tools.js'
import { net_login } from '@/js/network.js'

export default {
	components: {
		imsInput
	},
	data() {
		return {
			formData: {
				userId: {
					model: '',
					placeholder: '请输入用户名',
					leftIconClass: 'left-icon__userId',
					rightIconClass: '',
					type: '',
					valueType: 'letterNum',
					maxlength: 11
				},
				pwd: {
					model: '',
					placeholder: '请输入密码',
					leftIconClass: 'left-icon__pwd',
					rightIconClass: 'right-icon__eye',
					type: 'password',
					valueType: 'letterNum',
					maxlength: 16
				},
				code: {
					model: '',
					placeholder: '验证码',
					leftIconClass: 'left-icon__code',
					rightIconClass: '',
					type: 'tel',
					regTip: '',
					imgSrc: true,
					valueType: 'num',
					maxlength: 4
				}
			},
			btnActive: false,
			code_id: '',
			codeSrc: ''
		}
	},

	computed: {
		...mapGetters(['platformFlag'])
	},
	watch: {
		formData: {
			handler(newVal, oldVal) {
				var allRight = true
				for (let key in newVal) {
					if (!newVal[key].model) {
						allRight = false
					} else if (key == 'userId') {
						this.formData.userId.rightIconClass = 'right-icon__clear'
					}
				}
				this.btnActive = allRight
			},
			deep: true
		}
	},
	created() {
		this.setCode()
	},
	methods: {
		...mapMutations({
			setUserToken: 'SET_USER_TOKEN',
			setAccount: 'SET_ACCOUNT',
			setPlatformFlag: 'SET_PLATFORM_FLAG'
		}),
		goNext() {
			this.$emit('goNext')
		},
		rightClickFun(v, k) {
			if (k == 'code') {
				this.formData.code.model = ''
				this.setCode()
			}
			if (k == 'pwd') {
				if (this.formData.pwd.rightIconClass == 'right-icon__eye') {
					this.formData.pwd.rightIconClass = 'right-icon__eye0'
				} else {
					this.formData.pwd.rightIconClass = 'right-icon__eye'
				}
			}
		},
		inputFocusFun(v, k) {},
		inputBlurFun(v, k) {
			if (k == 'userId') {
				this.formData.userId.rightIconClass = ''
			}
		},
		setCode() {
			this.code_id = 'H' + randomWord(false, 8, 10)
			this.codeSrc = `${mainOptions.generatorCode}?code_id=${this.code_id}`
		},
		checkForm(param) {
			let keys = Object.keys(param),
				result = false
			for (let item of keys) {
			}
			return result
		},
		async login() {
			if (!this.btnActive) return
			let param = {}
			param.code = this.formData.code.model
			param.codeId = this.code_id
			param.userId = this.formData.userId.model.toLowerCase()
			param.pwd = this.formData.pwd.model
			param.agentUrl = location.host
			param.platformFlag = this.platformFlag
			let res = await net_login(param)
			if (res.code == '200') {
				toast('登录成功！')
				this.setUserToken(res.data.token)
				localStorage.setItem('U_TK', res.data.token)
				this.setPlatformFlag(res.data.platformFlag)
				this.$api.getUserInfo()
				if (history.length <= 1) {
					this.$router.push('/')
				} else {
					this.$router.go(-1)
				}
			} else {
				this.formData.code.model = ''
				this.setCode()
				toast(res.msg)
			}
		},
		goToKefu() {
			location.href =
				'https://e19.entrychat.com/chat/chatClient/chatbox.jsp?companyID=1146765&configID=2564&jid=6346431126&s=1'
		},
		goHome() {
			this.$router.push('/')
		}
	}
}
</script>

<style lang="less" scoped>
.log-wrapper {
	width: 100%;
	height: 100%;
	padding: 0 12px;
	flex-shrink: 0;
	box-sizing: border-box;
	.main-container {
		height: 100%;
		width: 100%;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		box-sizing: border-box;
		.form-box {
			background: rgba(255, 255, 255, 0.4);
			box-shadow: 0px 5px 20px 0px rgba(223, 223, 223, 0.1);
			padding: 0 15px 18px 15px;
			.form-title {
				padding: 25px 0 20px 0;
				text-align: center;
				font-size: 18px;
				font-family: 'HiraginoSansGB-W3';
				font-weight: normal;
				color: #fff;
			}
			.form-input-content {
				width: 100%;
				.form-input-item {
					margin-top: 14px;
					.slot-icon--left {
						width: 20px;
						height: 20px;
						background-size: 100% 100%;
						background-repeat: no-repeat;
						&.left-icon__userId {
							background-image: url('../img/dl_peo.png');
						}
						&.left-icon__pwd {
							background-image: url('../img/dl_password.png');
						}
						&.left-icon__code {
							background-image: url('../img/yanzhengma.png');
						}
					}
					.slot-icon--right {
						background-size: 100% 100%;
						background-repeat: no-repeat;
						&.right-icon__eye {
							width: 18px;
							height: 12px;
							background-image: url('../img/yanjing.png');
						}
						&.right-icon__eye0 {
							width: 18px;
							height: 12px;
							background-image: url('../img/yanjing0.png');
						}
						&.right-icon__clear {
							width: 17px;
							height: 17px;
							.bg-image('./../img/clear');
						}
						img {
							display: flex;
							width: 80px;
							height: 35px;
						}
					}
				}
			}
			.form-tip {
				height: 54px;
				.tip-item {
					font-size: 12px;
					font-family: 'HiraginoSansGB-W3';
					font-weight: normal;
					color: #fff;
				}
			}
			.form-submit-content {
				height: 42px;
				border-radius: 21px;
				font-size: 18px;
				font-family: 'HiraginoSansGB-W3';
				font-weight: normal;
				color: rgba(255, 255, 255, 1);
				background: rgba(155, 155, 155, .8);
				&.active {
					background: @btn_color;
				}
			}
			.submit-tip {
				text-align: center;
				padding-top: 10px;
				div {
					text-decoration: underline;
					color: #fff;
				}
			}
		}
		.submit-box {
			width: 54px;
			background: rgba(0, 0, 0, 0.4);
			flex-shrink: 0;
			.submit-box__btn--top {
				width: 24px;
				height: 24px;
				background: url('../img/ico_zhuce.png') no-repeat;
				background-size: 100% 100%;
				margin-bottom: 15px;
			}
			.submit-box__btn--bot {
				width: 15px;
				color: #ffffff;
				font-size: 14px;
			}
		}
	}
}
</style>
