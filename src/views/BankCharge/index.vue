<template>
	<div class="b_charge_wrapper headview_wrapper">
		<ims-header title="银行转账入款"/>
		<div v-if="isShow" class="bank_charge">
			<div class="main">
				<p class="money">
					<span>存款金额：</span>
					<span class="text">{{money}}</span>
				</p>
				<ul class="banks">
					<li
						v-for="(item,index) in typeDetail"
						:class="{active:(index==curIndex) ? true : false}"
						@click="selectThis(index)"
						:key="index"
						class="bank"
						style="cursor: pointer;"
					>
						<div class="bank_text">
							<div class="left">
								<div class="left_0">银行：</div>
								<div>{{item.account_kh_address}}</div>
							</div>
							<div class="right"></div>
						</div>
						<div class="bank_text">
							<div class="left">
								<div class="left_0">名称：</div>
								<div class="left_1">{{item.sk_people}}</div>
							</div>
							<div
								style="cursor: pointer;"
								onclick="void(0)"
								:data-clipboard-text="item.sk_people"
								class="right copy needsclick"
							>复制</div>
						</div>
						<div class="bank_text">
							<div class="left">
								<div class="left_0">账户：</div>
								<div>{{item.account_no}}</div>
							</div>
							<div
								style="cursor: pointer;"
								onclick="void(0)"
								:data-clipboard-text="item.account_no"
								class="right copy needsclick"
							>复制</div>
						</div>
					</li>
				</ul>
				<div class="i_name">
					<label class="i_name_lavel" for="name">汇款姓名</label>
					<div class="i_name_box">
						<input v-model="name" name="name" placeholder="请输入汇款人姓名" type="text">
					</div>
				</div>
				<div class="i_name">
					<label class="i_name_lavel" for="tip">备注留言</label>
					<div class="i_name_box">
						<input v-model="tip" name="tip" placeholder="选填项" type="text">
					</div>
				</div>
			</div>
			<button @click="openCharge" :disabled="disabled" class="submit">立即存款</button>
		</div>
	</div>
</template>
<script>
import QS from 'qs'
import clipboard from 'clipboard'
export default {
	name: 'bankCharge',
	data() {
		return {
			isShow: false,
			name: '',
			tip: '',
			money: '',
			curIndex: 0,
			pay: {},
			payList: [],
			typeDetail: []
		}
	},
	computed: {
		disabled() {
			this.name = this.name.replace(/\s/g, '')
			if (
				this.name &&
				/^[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29\u{20000}-\u{2A6D6}\u{2A700}-\u{2B734}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}]{1,10}$/u.test(
					this.name
				)
			) {
				return false
			}
			return true
		}
	},
	async mounted() {
		this.money = this.$route.query.money
		if (!this.money) {
			toast('链接不对')
			return
		}
		let loading = this.$loading({ text: '正在加载…' })
		try {
			await this.getData()
			loading.close()
		} catch {
			loading.close()
		}
	},
	methods: {
		selectThis(index) {
			this.curIndex = index
		},
		openCharge() {
			let param = {
				money: this.money,
				payUser: this.name,
				payId: this.typeDetail[this.curIndex].id,
				payRemark: this.tip,
				modelType: this.pay.model_type
			}

			this.$http.post(this.interfaces.comPaySubmit, param).then(res => {
				if (res.code == '200') {
					toast('成功提交充值信息！')
					this.name = ''
					this.tip = ''
					this.curIndex = 0
				}
			})
		},
		getData() {
			return this.$http.post('/charge/getPayType').then(res => {
				if (res && res.code == '200') {
					this.payList = res.data.payList
					this.payList.forEach(item => {
						if (item.typeDetail) {
							this.pay = item
							this.typeDetail = item.typeDetail
							this.$nextTick(() => {
								new clipboard('.copy').on('success', () => {
									toast('复制成功')
								})
							})
						}
					})
					this.isShow = true
				} else {
					this.error = true
				}
			})
		}
	}
}
</script>
<style lang="less" scoped>
.b_charge_wrapper {
	height: 100vh;
	background: #fff;
	box-sizing: border-box;
	.i_name {
		width: 345px;
		height: 44px;
		background: rgba(229, 229, 229, 1);
		border-radius: 4px;
		margin: 0 auto 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 16px;
		.i_name_lavel {
			font-size: 16px;
			color: rgba(0, 0, 0, 1);
			line-height: 44px;
			padding: 0 11px 0 16px;
		}
		.i_name_box {
			flex: 1;
			input {
				display: block;
				width: 100%;
			}
		}
	}
	.money {
		font-size: 16px;
		color: rgba(0, 0, 0, 1);
		line-height: 24px;
		padding: 16px 15px;
		display: flex;
		align-items: center;
		.text {
			color: #e5c88b;
			font-size: 24px;
		}
	}
	.bank_charge {
		.banks {
			padding: 0 15px;
			width: 100%;
			box-sizing: border-box;
		}
		.bank {
			padding: 16px 15px 0 16px;
			border: 1px solid rgba(229, 229, 229, 1);
			border-radius: 6px;
			margin-bottom: 10px;
			transition: border 0.1s linear;
		}
		.bank.active {
			background: url('../../assets/img/icon.png') no-repeat;
			background-position: right 0 bottom 0;
			background-size: 25px;
			border-color: @color_deep_blue;
		}
		.bank_text {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 16px;
		}
		.left {
			flex: 1;
			display: flex;
			align-items: flex-start;
			font-size: 16px;
			color: rgba(0, 0, 0, 1);
			line-height: 22px;
			.left_0 {
				width: 4em;
			}
			.left_1 {
				flex: 1;
			}
		}
		.right {
			width: 3em;
			text-align: right;
			font-size: 14px;
			color: rgba(0, 122, 255, 1);
			line-height: 20px;
		}
	}
	.submit {
		display: block;
		width: 265px;
		height: 44px;
		background: @btn_color;
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
		opacity: 0.8;
	}
	.submit:disabled {
		background: @btn_color_disabled;
		color: #fff;
	}
}
</style>
