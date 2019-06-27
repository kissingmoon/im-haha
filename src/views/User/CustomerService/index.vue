<template>
	<div v-if="isShow" class="service">
		<ims-header title="客服"/>
		<div class="boxs">
			<a :href="serviceUrl">
				<div class="box">主线客服</div>
			</a>
			<a :href="serviceUrl">
				<div class="box">次线客服</div>
			</a>
		</div>
	</div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
	data() {
		return {
			isShow: false,
			serviceUrl: ''
		}
	},
	mounted() {
		this.serviceUrl = this.$store.state.serviceUrl
		if (this.serviceUrl) {
			this.isShow = true
		} else {
			let loading = this.$loading({ text: '正在加载…' })
			this.$http
				.post('/home/getServiceUrl')
				.then(res => {
					if (res.code == '200') {
						let serviceUrl = res.data.serviceUrl
						this.serviceUrl = res.data.serviceUrl
						this.setServiceUrl(serviceUrl)
						this.isShow = true
					} else {
						toast('获取客服链接失败')
					}
					loading.close()
				})
				.catch(err => {
					loading.close()
					toast('获取客服链接失败')
				})
		}
	},
	methods: {
		...mapMutations({
			setServiceUrl: 'SET_SERVICE_URL'
		})
	}
}
</script>

<style lang="less" scoped>
.service {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: url('../../../assets/page_bg_default.jpg') no-repeat;
	background-size: cover;
	/deep/.app_head {
		background: none;
	}
	/deep/.app_head .main {
		background: none;
		// color: @text_color;
	}
	.boxs {
		position: absolute;
		top: 50%;
		width: 100%;
		margin-top: -60px;
	}
	.box {
		text-align: center;
		color: #4a4a4a;
		font-size: 16px;
		width: 356px;
		font-size: 16px;
		color: #4a4a4a;
		background-color: rgba(255, 255, 255, 0.3);
		border-radius: 4px;
		margin: 0 auto 10px;
		border-radius: 5px;
		padding: 16px 0;
	}
}
</style>

