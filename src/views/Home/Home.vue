<template>
	<div>
		<div class="head_title">
			<p class="p"><img class="head_title_img" src="../../assets/zb.png" ></p>
		</div>
		<div v-if="isShow" class="home">
			<div class="top">
				<swiper-top :lists="swiperTopData"/>
				<notice :texts="notice"/>
				<user-data/>
			</div>
			<swiper-bottom :lists="swiperBottomData"/>
		</div>
	</div>
</template>

<script>
import userData from './components/userData.vue'
import notice from './components/notice/notice.vue'
import swiperTop from './components/swiperTop.vue'
import swiperBottom from './components/swiperBottom.vue'
export default {
	name: 'home',
	components: {
		swiperTop,
		swiperBottom,
		userData,
		notice
	},
	data() {
		return {
			isShow: false,
			swiperTopData: [],
			notice: [],
			swiperBottomData: []
		}
	},
	async mounted() {
		let loading = this.$loading({ text: '正在加载…' })
		try {
			await Promise.all([this.getHomeHeadData(), this.getHomeGameData()])
			loading.close()
			this.isShow = true
		} catch {
			loading.close()
		}
	},
	activated() {
		if (!this.isShow) return
		this.getHomeHeadData()
		this.$api.getUserInfoNoWarn({ transferOut: '1' })
	},
	methods: {
		getHomeHeadData() {
			return this.$http.post('/home/getHomeHeadData').then(res => {
				if (res.code == '200') {
					this.swiperTopData = res.data.image
					this.notice = res.data.notice.map(n => {
						return n.content
					})
				}
			})
		},
		getHomeGameData() {
			return this.$http.post('/home/getGameList').then(res => {
				if (res.code == '200') {
					if (res.data.gameList && res.data.main) {
						res.data.gameList.unshift(res.data.main)
						this.swiperBottomData = res.data.gameList
					}
				}
			})
		}
	}
}
</script>
<style lang='less' scoped>
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
	.head_title_img{
		display: inline-block;
		height: 24px;
		margin-top: 13px;
	}
}
.home {
	background: #e5e5e5;
	padding-bottom: 20px;
}
.top {
	margin-bottom: 12px;
}
</style>
