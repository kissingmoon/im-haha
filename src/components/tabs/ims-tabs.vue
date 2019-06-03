<template>
	<tabs class="tabs" :line-width="82" v-model="active" :ellipsis="false" @click="tabClick">
		<tab v-for="(v, k) in swiperList" :key="k" :title="swiperList[k][0].title">
			<swiper class="cunkuan_swiper" @slideChange="slideChange" :options="swiperOption" :ref="'swp'+k">
				<swiper-slide v-for="(v1, k1) in swiperList[k]" :key="k1">
					<img :src="v1.imgSrc" alt>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</tab>
	</tabs>
</template>

<script>
import { Tab, Tabs, List } from 'vant'
export default {
	data() {
		return {
			swiperOption: {
				pagination: {
					el: '.swiper-pagination'
					// bulletActiveClass: 'cunkuan-bullet-active'
				}
			},
			active: 0
		}
	},
	created() {},
	props: {
		swiperList: {
			type: Array,
			default: []
		}
	},
	methods: {
		tabClick(index, title) {
			if (this.$refs['swp' + index]) {
				this.$refs['swp' + index][0].swiper.slideTo(0)
			}
			this.$emit('onTabClick', index)
		},
		slideChange() {}
	},
	components: {
		Tab,
		Tabs
	}
}
</script>

<style scoped lang="less">
.tabs {
	// position: fixed;
	// left: 0;
	// top: 50px;
	// z-index: 1000;
	width: 100%;
	padding-top: 40px;
	/deep/ .van-tabs__wrap {
		margin-left: 36px;
		height: 40px;
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
	}
	/deep/ .van-tab {
		width: 82px;
		margin: 0 5px;
		transition: all 0.2s linear;
		line-height: 40px;
		color: #000000;
	}
	/deep/ .van-tab--active {
		color: #fff;
	}
	/deep/ .van-tabs__nav--line {
		padding-bottom: 0;
		background-color: #eaeaea;
	}
	/deep/ .van-tabs__line {
		height: 40px;
		background: #e5c88b;
		z-index: 0;
		border-radius: 20px;
		top: 0;
	}
	.cunkuan_swiper {
		height: 100%;
		padding-top: 20px;
		img {
			display: flex;
			width: 100%;
		}
	}
}
.swiper-pagination {
	/deep/ .swiper-pagination-bullet {
		box-sizing: border-box;
		background: #dedede;
		opacity: 1;
		width: 13px;
		height: 13px;
	}
	/deep/ .swiper-pagination-bullet-active {
		background: #e5c88b;
	}
}
</style>
