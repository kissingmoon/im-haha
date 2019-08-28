<template>
	<div class="bank_savings_wrapper headview_wrapper">
		<ims-header title="存款"/>
		<div v-if="isShow" class="bank_savings">
			<section class="section">
				<p class="title">选择支付方式</p>
				<ul class="pay_ways">
					<li
						v-for="(list,index) in payList"
						:key="index"
						@click="selectThisPay(index)"
						:class="{active:selectPay==index?true:false}"
						class="li"
					>
						<img :src="list.gate_img" class="icon">
						<div class="pp" :class="[(list.gate_name.includes('云闪付') || list.gate_name.includes('银行转账')) ? 'margin_4' : 'height_34'] ">{{list.gate_name}}</div>
						<!-- <div class="pp" :class="[list.gate_name.includes('银行转账') ? 'margin_4' : 'height_34'] ">{{list.gate_name}}</div> -->
						<div v-if="list.gate_name.includes('云闪付')" class="ppp">额外赠送1%</div>
						<div v-if="list.gate_name.includes('银行转账')" class="ppp">额外赠送1%</div>
						<div class="bg"></div>
					</li>
				</ul>
			</section>
			<section class="section">
				<p class="title">存款金额</p>
				<div class="money_input">
					<span class="money_word">￥</span>
					<div @click="showKeyboard=true" class="input_box">
						<div v-if="!moneyVal" :class="{placehold_active:showKeyboard}" class="fake_placehold">
							<div class="placehold">{{placeholder}}</div>
						</div>
						<div v-else :class="{text_active:showKeyboard}" class="fake_input">
							<div class="fake_text">{{moneyVal}}</div>
						</div>
					</div>
					<span @click="moneyVal = ''" v-show="!!moneyVal" class="input_clear"></span>
				</div>
				<ul class="money">
					<li
						v-for="item in money"
						@click="selectThis(item)"
						:class="{active:selectedMoney==item && moneyVal==item}"
						:key="item"
						class="li"
					>￥{{item}}</li>
				</ul>
			</section>
			<button @click="openCharge" :disabled="disabled" class="submit">立即存款</button>
		</div>
		<van-number-keyboard
			:show="showKeyboard"
			:close-button-text="'完成'"
			extra-key
			safe-area-inset-bottom
			@blur="closeKeyboard"
			@input="onInput"
			@delete="onDelete"
		/>
	</div>
</template>
<script>
import QS from 'qs'
import Vue from 'vue'
import { NumberKeyboard } from 'vant'
Vue.use(NumberKeyboard)

export default {
	name: 'bankSavings',
	data() {
		return {
			error: false,
			isShow: false,
			showKeyboard: false,
			moneyVal: '',
			payList: [],
			money: ['100', '500', '1000', '2000'],
			selectedMoney: null,
			selectPay: null,
			placeholder: ''
		}
	},
	computed: {
		disabled() {
			if (this.moneyVal && this.selectPay >= 0) {
				return false
			}
			return true
		}
	},
	watch: {
		selectPay: {
			handler(val, oldVal) {
				let item = this.payList[val]
				if (!item) return
				this.placeholder = `请输入存款金额，范围（元）：${item.min_money}～${item.max_money}`
				if (item.id == 23) {
					this.money = [item.min_money, '500', '1000', '2000']
				} else {
					this.money = ['100', '500', '1000', '2000']
				}
			},
			immediate: true
		}
	},
	async mounted() {
		let loading = this.$loading({ text: '正在加载…' })
		try {
			await this.getData()
			loading.close()
		} catch {
			loading.close()
		}
	},
	methods: {
		openCharge() {
			const pay = this.payList[this.selectPay]
			let param = {
				money: this.moneyVal,
				payType: pay.pay_type,
				gateFlag: pay.gate_flag,
				tradeAccountId: pay.id
			}
			if (pay.typeDetail) {
				this.$router.push({
					path: '/bank-charge',
					query: {
						pay:pay,
						money: this.moneyVal
					}
				})
				return
			}
			const ismjb = this.ismjb || localStorage.getItem('ismjb')
			if (ismjb == 'ios') {
				this.$router.push(`/mpage?jumpLink=${this.interfaces.toChargeNew}&goto=pay&${QS.stringify(param)}`)
			} else {
				window.open(`/mpage?jumpLink=${this.interfaces.toChargeNew}&goto=pay&${QS.stringify(param)}`)
			}
		},
		getData() {
			return this.$http
				.post('/charge/getPayType')
				.then(res => {
					if (res && res.code == '200') {
						this.payList = res.data.payList
						this.selectPay = 0
						this.isShow = true
					} else {
						this.error = true
					}
				})
				.catch(err => {
					this.error = true
				})
		},
		selectThisPay(index) {
			this.selectPay = index
		},
		closeKeyboard() {
			this.showKeyboard = false
		},
		selectThis(item) {
			this.selectedMoney = item
			this.moneyVal = item
		},
		onInput(value) {
			if (this.moneyVal.length >= 8) {
				return
			}
			this.moneyVal += String(value)
		},
		onDelete() {
			if (!this.moneyVal) return
			this.moneyVal = this.moneyVal.substr(0, this.moneyVal.length - 1)
		}
	}
}
</script>

<style lang="less" scoped>
.bank_savings_wrapper {
	min-height: 100%;
	box-sizing: border-box;
	background: url('../../assets/page_bg_default.jpg') no-repeat;
	background-size: cover;
	background-attachment: fixed;
	padding-top: @app_head_height;
	.error {
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.submit {
		display: block;
		width: 265px;
		height: 44px;
		background: linear-gradient(to right, #60e6ff, #46a8fe);
		border-radius: 22px;
		border: none;
		outline: none;
		font-size: 18px;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		margin: 70px auto 0;
		transition: all 0.1s linear;
	}
	.submit:active {
		background: rgb(221, 186, 111);
	}
	.submit:disabled {
		background: rgba(139, 139, 139, 0.5);
		color: #fff;
	}
	.money_input {
		width: 345px;
		height: 51px;
		background: rgba(255, 255, 255, 0.5);
		border-radius: 4px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		.money_word {
			font-size: 29px;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
			line-height: 51px;
			padding: 0 2px 0 10px;
		}
		.input_box {
			flex: 1;
			font-size: 26px;
			position: relative;
		}
		.fake_placehold {
			position: relative;
		}
		.placehold {
			font-size: 12px;
			font-weight: 500;
			color: rgba(82, 82, 82, 0.29);
			display: inline-block;
		}
		.placehold_active::before {
			content: ' ';
			position: relative;
			right: 0;
			height: 80%;
			border-right: 2px solid #108ee9;
			animation: keyboard-cursor infinite 1s step-start;
		}
		.fake_input {
			position: relative;
		}
		.text_active::after {
			content: ' ';
			position: relative;
			right: 0;
			height: 80%;
			border-right: 2px solid #108ee9;
			animation: keyboard-cursor infinite 1s step-start;
		}
		.fake_text {
			display: inline-block;
		}
		.input_clear {
			width: 51px;
			height: 51px;
			background-color: red;
			background: url('./img/clear.png') no-repeat;
			background-size: 16px;
			background-position: center;
		}
	}
	.bank_savings {
		.money {
			padding: 14px 9px;
			.li {
				display: inline-block;
				width: 76px;
				height: 41px;
				border-radius: 5px;
				font-size: 13px;
				font-weight: 500;
				color: #4a4a4a;
				box-shadow: 0 0.02rem 0.04rem 0 rgba(0, 0, 0, 0.1);
				background: rgba(255, 255, 255, 0.5);
				line-height: 41px;
				text-align: center;
				margin: 0 6.5px;
				border: 1px solid transparent;
				box-sizing: border-box;
			}
			.li.active {
				border: 1px solid #019cfd;
				background: rgba(229, 200, 139, 1);
				background: url('./img/depnav_active.png') no-repeat;
				background-size: 17px;
				background-position: top right;
			}
		}
		.pay_ways {
			padding: 0 9px 0 9px;
			.icon {
				width: 25px;
				height: 25px;
				margin-top: 3px;
			}
			.li {
				display: inline-block;
				width: 80px;
				height: 68px;
				background: rgba(255, 255, 255, 0.5);
				box-shadow: 0px 0.02rem 0.04rem 0px rgba(0, 0, 0, 0.1);
				border-radius: 5px;
				text-align: center;
				font-size: 11px;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				margin: 0 4px 13px;
				position: relative;
				box-sizing: border-box;
				border: 1px solid transparent;
				position: relative;
				vertical-align: top;
				.pp {
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 0 4px;
				}
				.height_34{
					height: 34px;
				}
				.margin_4{
					margin-top: 4px;
				}
				.ppp {
					font-size: 10px;
					color: #FF6700;
					margin-top: 4px;
				}
			}
			.li.active {
				border: 1px solid #019cfd;
			}
			.active .bg {
				position: absolute;
				right: 0;
				top: 0;
				width: 17px;
				height: 17px;
				background: url('./img/depnav_active.png') no-repeat;
				background-size: 17px;
				background-position: top right;
			}
		}
	}
	.title {
		font-size: 13px;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		padding: 20px 18px 11px;
	}
}

@keyframes keyboard-cursor {
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
</style>
