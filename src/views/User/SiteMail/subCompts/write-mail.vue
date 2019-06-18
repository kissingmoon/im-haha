<template>
	<div class="write-wrapper">
		<div class="item-form">
			<div class="form-title">
				标题&nbsp;
				<span style="color:red">*</span>
			</div>
			<div class="input-box">
				<input
					maxlength="16"
					v-model="msgParam.title"
					class="text-input display-flex"
					type="text"
					placeholder="请输入标题(最长输入16个字符)"
				>
			</div>
		</div>
		<div class="item-form">
			<div class="form-title">
				内容&nbsp;
				<span style="color:red">*</span>
			</div>
			<div class="input-box">
				<textarea
					maxlength="200"
					v-model="msgParam.content"
					class="text-area display-flex"
					placeholder="请输入内容(10-200字之间)"
				></textarea>
			</div>
		</div>
		<div class="item-form">
			<div class="form-btn display-flex flex-center" @click="submitMsg">提交</div>
		</div>
	</div>
</template>

<script>
import { net_msgSave } from '@/js/network.js'
import { Toast } from 'vant'
import { resetObj } from '@/js/tools.js'

export default {
	data() {
		return {
			msgParam: {
				title: '',
				content: ''
			}
		}
	},
	methods: {
		submitMsg() {
			let canSub = this.checkTxt(this.msgParam)
			if (!canSub) {
				return
			}
			this.saveMsg()
		},
		checkTxt(param) {
			for (let key in param) {
				if (!param[key]) {
					if (key == 'title') {
						Toast('请填写标题')
					}
					if (key == 'content') {
						Toast('请填写内容')
					}
					return false
				} else {
					let pattern = /^\s+$/
					if (pattern.test(param[key])) {
						Toast('内容输入格式不正确，请重新输入')
						return false
					}
					if (key == 'content') {
						if (param[key].length < 20) {
							Toast('填写内容不能少于20个字符')
							return false
						}
					}
				}
			}
			return true
		},
		async saveMsg() {
			let param = {}
			param.title = this.msgParam.title
			param.content = this.msgParam.content
			let res = await net_msgSave(param)
			if (res.code == '200') {
				Toast('提交成功！')
				resetObj(this.msgParam)
			}
		}
	}
}
</script>

<style lang="less" scoped>
.write-wrapper {
	padding: 0 20px;
	.item-form {
		margin-top: 10px;
		.form-title {
			font-size: 15px;
			padding-bottom: 8px;
		}
		.input-box {
			box-shadow: 0 4px 8px 0 rgba(2, 145, 254, 0.1);
			.text-input {
				height: 45px;
				padding: 0 10px;
				background: rgba(255, 255, 255, 0.5);
				width: 100%;
				box-sizing: border-box;
			}
			.text-area {
				height: 145px;
				padding: 10px;
				outline: none;
				border: none;
				box-sizing: border-box;
				width: 100%;
				background: rgba(255, 255, 255, 0.5);
			}
		}
		.form-btn {
			height: 40px;
			background: @btn_color;
			color: #ffffff;
			font-size: 14px;
			border-radius: 10px;
		}
	}
}
</style>
