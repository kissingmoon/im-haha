<template>
	<div class="username_wrapper">
		<ims-header title="昵称修改"/>
		<div class="name">
			<input v-model="name" class="input" type="text" placeholder="起个好的名字让人更容易记住">
		</div>
		<button @click="submit" :disabled="disabled" class="btn">确定</button>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	data() {
		return {
			name: ''
		}
	},
	computed: {
		disabled() {
			if (this.name.length > 0 && this.name != this.account.userName) {
				return false
			}
			return true
		},
		...mapGetters(['account'])
	},
	mounted() {
		this.name = this.account.userName ? this.account.userName : ''
	},
	methods: {
		submit() {
			this.name = this.name.replace(/\s/g, '')
			if (!this.name) {
				toast('名字不能为空')
				return
			}
			if (this.name.length < 1 || this.name.length > 11) {
				toast('名字长度需要1-11位')
				return
			}
			if (this.name == this.account.userName) return
			let loading = this.$loading({ text: '正在请求…' })
			this.$http
				.post('/user/editNickName', { userNickName: this.name })
				.then(res => {
					if (res.code == '200') {
						toast('修改成功')
						this.$api.getUserInfo()
						this.$router.go(-1)
					} else {
						toast(res.msg)
					}
					loading.close()
				})
				.catch(err => {
					loading.close()
				})
		}
	}
}
</script>

<style lang="less" scoped>
.username_wrapper {
	min-height: 100%;
	box-sizing: border-box;
	padding-top: @app_head_height;
	background: #e5e5e5;

	.btn {
		width: 265px;
		height: 44px;
		background: @btn_color;
		font-size: 18px;
		color: rgba(255, 255, 255, 1);
		line-height: 44px;
		border: none;
		outline: none;
		box-sizing: border-box;
		border-radius: 22px;
		margin: 0 auto;
		display: block;
	}
	.btn:disabled {
		background: @btn_color_disabled;
	}
	.name {
		width: 345px;
		height: 51px;
		background: #fff;
		border-radius: 5px;
		margin: 21px auto 85px;
		overflow: hidden;
	}
	.input {
		-webkit-appearance: none;
		font-variant: tabular-nums;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		list-style: none;
		position: relative;
		display: inline-block;
		padding: 4px 11px;
		width: 100%;
		height: 32px;
		font-size: 14px;
		line-height: 1.5;
		color: rgba(0, 0, 0, 0.65);
		background-color: #fff;
		background-image: none;
		transition: all 0.3s;
		touch-action: manipulation;
		height: 51px;
		border: none;
		outline: none;
	}
	::placeholder {
		color: rgba(214, 214, 214, 1);
	}
}
</style>

