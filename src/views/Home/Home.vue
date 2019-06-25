<template>
	<div class="home_wrapper view_wrapper">
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
			isError: false,
			swiperTopData: [],
			notice: [],
			swiperBottomData: []
		}
	},
	mounted() {
		this.init()
	},
	activated() {
		if (this.isError) {
			this.init()
		} else {
			this.$api.getUserInfoNoWarn({ transferOut: '1' })
		}
	},
	methods: {
		async init() {
			let loading = this.$loading({ text: '正在加载…' })
			try {
				await Promise.all([this.getHomeHeadData(), this.getHomeGameData()])
				loading.close()
				this.isShow = true
				this.isError = false
			} catch {
				this.isError = true
				loading.close()
			}
		},
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
<style lang='less'>
.home_wrapper {
	.top {
		margin-bottom: 12px;
	}
	.home {
		padding: 12px 0;
	}
}
</style>
