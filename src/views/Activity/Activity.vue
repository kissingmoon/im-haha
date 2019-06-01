<template>
	<div>
		<div class="head_title">
			<p class="p">
				<img class="head_title_img" src="../../assets/hd.png">
			</p>
		</div>
		<div v-if="isShow">
			<div class="tabs_com">
				<Tabs :tabs="tabs" @click="clickTab"/>
			</div>
			<Lists v-if="lists.length>0" :lists="lists"/>
			<div v-else class="empty">
				<img class="img" src="../../assets/img/emptu.png">
				<p class="p">暂无活动优惠</p>
			</div>
		</div>
	</div>
</template>
<script>
import Lists from './components/Lists.vue'
import Tabs from '../../components/tabs/tabs.vue'

export default {
	components: {
		Lists,
		Tabs
	},
	data() {
		return {
			isShow: false,
			lists: [],
			tabList: [],
			tabs: []
		}
	},
	async mounted() {
		let loading = this.$loading({ text: '正在加载…' })
		try {
			await Promise.all([this.getData(''), this.getTab()])
			this.isShow = true
			loading.close()
		} catch {
			loading.close()
		}
	},
	methods: {
		clickTab(index) {
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0
			this.getData(this.tabList[index].id)
		},
		getData(hd_type) {
			return this.$http.get('/gameActivity/list', { page_no: 1, page_size: 100, hd_type: hd_type }).then(res => {
				if (res.code == '200') {
					this.lists = res.data.data
				}
			})
		},
		getTab() {
			return this.$http.post('/home/getGameList').then(res => {
				if (res.code == '200') {
					this.tabList = [{ gameTitleCn: '全部优惠' }, ...res.data.tabList]
					this.tabs = this.tabList.map(item => {
						return item.gameTitleCn
					})
				}
			})
		}
	}
}
</script>

<style lang="less" scoped>
.empty {
	padding-top: 100px;
	.img {
		width: 200px;
		display: block;
		margin: 0 auto;
	}
	.p {
		font-size: 16px;
		color: rgba(51, 51, 51, 1);
		line-height: 22px;
		text-align: center;
	}
}
.head_title {
	height: 50px;
	.p {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		font-size: 0;
		color: rgba(51, 51, 51, 1);
		height: 50px;
		line-height: 50px;
		z-index: 1000;
		background-color: @base_color;
		text-align: center;
	}
	.head_title_img {
		display: inline-block;
		height: 24px;
		margin-top: 13px;
	}
}
.activities {
	width: 100%;
	padding: 44px 15px 30px 15px;
	box-sizing: border-box;
	.activity {
		background: transparent;
		border-radius: 5px;
		overflow: hidden;
		margin-top: 10px;
	}
	.img_placeholder {
		width: 100%;
		height: 100%;
		// background: url('../../assets/activity_load@2x.png') no-repeat;
		// background-size: cover;
		// background-position: center;
	}
	.img {
		display: block;
		width: 100%;
		height: 124px;
		overflow: hidden;
	}
	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-right: 8px;
		background: #fff;
	}
	.p {
		.line-camp(1);
		max-width: 330px;
		flex: 1;
		font-size: 14px;
		color: rgba(51, 51, 51, 1);
		line-height: 36px;
		padding: 0 8px;
	}
	.icon {
		width: 12px;
		height: 12px;
	}
}
.tabs_com {
	position: fixed;
	left: 0;
	top: 50px;
	width: 100%;
	height: 50px;
	background: @base_color;
	z-index: 1000;
}
</style>

