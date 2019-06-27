<template>
	<div class="useravator_wrapper headview_wrapper">
		<ims-header title="头像修改"/>
		<div v-show="isShow" class="avator">
			<div class="imgs">
				<ims-image
					class="img"
					v-for="(list,index) in lists"
					:class="{active:index==active?true:false}"
					@click.native="selectImg(index)"
					:key="index"
					:src="list.imageUrl"
				/>
			</div>
			<ims-btn @click="submit" throttleTime="500" :disabled="disabled" class="btn">确定</ims-btn>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	data() {
		return {
			isShow: false,
			active: -1,
			lists: [],
			disabled: true
		}
	},
	computed: {
		...mapGetters(['account'])
	},
	mounted() {
		var loading = this.$loading()
		this.$http
			.post('/user/getListPhoto')
			.then(res => {
				loading.close()
				if (res.code == '200') {
					this.lists = res.data
					this.isShow = true
				} else {
				}
			})
			.catch(err => {
				loading.close()
			})
	},
	methods: {
		selectImg(index) {
			this.active = index
			this.disabled = false
		},
		submit() {
			this.$http.post('/user/editUserImage', { imageId: this.lists[this.active].id }).then(res => {
				if (res.code == '200') {
					toast('修改成功')
					this.$api.getUserInfo()
					this.$router.go(-1)
				} else {
					toast(res.msg)
				}
			})
		}
	}
}
</script>

<style lang="less" scoped>
.useravator_wrapper {
	min-height: 100%;
	box-sizing: border-box;
	padding-top: @app_head_height;
	.avator {
		padding-bottom: 50px;
	}
	.imgs {
		display: flex;
		flex-wrap: wrap;
		padding: 15px;
		justify-content: space-between;
	}
	.img {
		width: 96px;
		height: 96px;
		border-radius: 50%;
		margin-bottom: 15px;
		transition: all 0.2s linear;
		/deep/.image__inner {
			border-radius: 50%;
			border: 4px solid rgb(160, 160, 160);
		}
	}
	.img.active {
		/deep/.image__inner {
			border: 4px solid #46a8fe;
		}
	}
	.btn{
		width: 264px;
	}
}
</style>

