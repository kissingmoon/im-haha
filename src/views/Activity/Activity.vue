<template>
	<div class="activity_wrapper view_wrapper">
		<div v-if="isShow">
			<div class="tabs_com">
				<Tabs class="actv_tabs" :tabs="tabs" @click="clickTab"/>
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
	name: 'activity',
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
	activated() {
		if (!this.isShow) {
			this.getData('')
			this.getTab()
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
					this.lists = []
					this.$nextTick(()=>{
						this.lists = res.data.data
					})
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
<style lang="less">
.activity_wrapper {
	position: absolute;
	top: 0;
	bottom: @app_footer_height;
	left: 0;
	right: 0;
	overflow-y: hidden;
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
	.tabs_com {
		position: absolute;
		left: 0;
		top: 12px;
		width: 100%;
		height: 40px;
		z-index: 1000;
	}
	.actv_tabs {
		/deep/ .tabs {
			background: rgba(255, 255, 255, 0.8);
		}
	}
}
</style>


