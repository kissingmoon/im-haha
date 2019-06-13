<template>
	<div class="home_wrapper">
		<!-- <div class="head_title">
			<p class="p"><img class="head_title_img" src="../../assets/yg_logo@2x.png" ></p>
		</div>-->
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
		this.getHomeHeadData()
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
		background: url('../../assets/page_bg_default.jpg') no-repeat;
		background-size: 100% auto;
		text-align: center;
	}
	.head_title_img {
		display: inline-block;
		height: 24px;
		margin-top: 13px;
	}
}
.home_wrapper {
	min-height: 100%;
	box-sizing: border-box;
	padding-bottom: @app_footer_height;
	background: url('../../assets/page_bg_default.jpg') no-repeat;
	background-size: cover;
	background-attachment: fixed;
}
.home {
	padding-bottom: 12px;
}
.top {
	padding-top: 12px;
	margin-bottom: 12px;
}
</style>
