<template>
	<div>
		<ims-header title="头像修改" />
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
			<button @click="submit" class="btn">确定</button>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import ImsImage from '@/components/ims-image.vue'
export default {
	components: { ImsImage },
	data() {
		return {
			isShow: false,
			active: null,
			lists: []
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
.avator {
	padding-bottom: 50px;
}
.imgs {
	display: flex;
	flex-wrap: wrap;
	padding: 15px;
	justify-content: space-between;

	.img {
		width: 96px;
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
			border: 4px solid rgba(229, 200, 139, 1);
		}
	}
}
.btn {
	width: 265px;
	height: 44px;
	background: rgba(229, 200, 139, 1);
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
</style>

