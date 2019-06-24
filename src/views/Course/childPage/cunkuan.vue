<template>
	<div class="ck headview_wrapper">
		<ims-header title="存款教程"/>
		<Tabs class="ck_tabs" :tabs="tabs" @click="clickTabs"/>
		<swiper :options="swiperOption">
			<swiper-slide v-for="(item,index) in curSwipers" :key="index">
				<img class="img" :src="item.imgSrc">
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
import Tabs from '../../../components/tabs/tabs.vue'
export default {
	components: {
		Tabs
	},
	data() {
		return {
			swiperOption: {
				pagination: {
					el: '.swiper-pagination'
				}
			},
			tabs: ['网银转账', '银联扫码', '银联快捷', '支付宝支付', '微信支付'],
			swiperList: [
				[
					{
						imgSrc: require('../img/cunkuan-001.png')
					},
					{
						imgSrc: require('../img/cunkuan-002.png')
					},
					{
						imgSrc: require('../img/cunkuan-003.png')
					},
					{
						imgSrc: require('../img/cunkuan-004.png')
					},
					{
						imgSrc: require('../img/cunkuan-005.png')
					},
					{
						imgSrc: require('../img/cunkuan-006.png')
					}
				],
				[
					{
						imgSrc: require('../img/ylsm-001.png')
					},
					{
						imgSrc: require('../img/ylsm-002.png')
					},
					{
						imgSrc: require('../img/ylsm-003.png')
					},
					{
						imgSrc: require('../img/ylsm-004.png')
					}
				],
				[
					{
						imgSrc: require('../img/ylkj-001.png')
					},
					{
						imgSrc: require('../img/ylkj-002.png')
					},
					{
						imgSrc: require('../img/ylkj-003.png')
					}
				],
				[
					{
						imgSrc: require('../img/zfb-001.png')
					},
					{
						imgSrc: require('../img/zfb-002.png')
					},
					{
						imgSrc: require('../img/zfb-003.png')
					}
				],
				[
					{
						imgSrc: require('../img/wxzf-001.png')
					},
					{
						imgSrc: require('../img/wxzf-002.png')
					},
					{
						imgSrc: require('../img/wxzf-003.png')
					},
					{
						imgSrc: require('../img/wxzf-004.png')
					}
				]
			],
			curSwipers: []
		}
	},
	mounted() {
		this.curSwipers = this.swiperList[0]
	},
	methods: {
		clickTabs(index) {
			this.curSwipers = this.swiperList[index]
		}
	}
}
</script>

<style scoped lang="less">
.ck {
	min-height: 100%;
	box-sizing: border-box;
	padding-top: @app_head_height;
	background: url('../../../assets/page_bg_default.jpg') no-repeat;
	background-size: cover;
	background-attachment: fixed;

	/deep/ .swiper-container{
	background: url('../img/cunkuan-bg.png') no-repeat;
	background-size: 100% auto;
	background-position: bottom;
	}
	.ck_tabs{
		margin-top: 10px;
	}
	.img {
		display: block;
		width: 100%;
	}
	.swiper-pagination {
		/deep/ .swiper-pagination-bullet {
			box-sizing: border-box;
			background: #fff;
			opacity: 1;
			width: 10px;
			height: 10px;
		}
		/deep/ .swiper-pagination-bullet-active {
			background: #46a8fe;
		}
	}
}
</style>
<style lang="less">
</style>
