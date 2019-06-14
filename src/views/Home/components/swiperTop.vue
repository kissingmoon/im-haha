<template>
	<swiper
		class="swiper"
		ref="topSwiper"
		:options="swipertop"
		@setTransition="setTransition"
		@progress="progress"
	>
		<swiper-slide v-for="(list,index) in lists" :key="index" class="swiper_slide">
			<!-- <img class="img" :src="list.homeImageUrl"> -->
			<img class="img swiper-lazy" :data-src="list.homeImageUrl">
			<div class="swiper-lazy-preloader"></div>
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>
<script>
export default {
	name: 'swiperTop',
	props: {
		lists: {
			type: Array,
			default: []
		}
	},
	data() {
		return {
			swipertop: {
				pagination: {
					el: '.swiper-pagination'
				},
				lazy: true,
				loop: true,
				autoplay: true,
				initialSlide: 0,
				spaceBetween: 5,
				slidesPerView: 1.07, //看到的滑块个数
				centeredSlides: true,
				watchSlidesProgress: true,
				on: {
					click: () => {
						let swiper = this.$refs.topSwiper.swiper
						let realIndex = swiper.realIndex
						this.open(this.lists[realIndex])
					}
				}
			}
		}
	},
	methods: {
		open(list) {
			//homeJumpType:  [0,1]  0:内部页面  1:外部页面
			if (list.homeJumpType == '0') {
				this.$router.push(`/activity-detail?id=${list.activityId}`)
			}
			if (list.homeJumpType == '1') {
				window.open(`/mpage?jumpLink=${list.homeJumpUrl}`)
			}
		},
		progress: function() {
			let swiper = this.$refs.topSwiper.swiper
			for (let i = 0; i < swiper.slides.length; i++) {
				let slide = swiper.slides[i]
				let progress = slide.progress
				let es = slide.querySelector('img').style
				let scale = 1 - Math.min(Math.abs(progress * 0.15), 1) //每个滑块的scale
				// es.opacity = 1 - Math.min(Math.abs(progress / 2), 1)
				//es.webkitTransform = es.transform = 'translate3d(0px,0,' + -Math.abs(progress * 450) + 'px)'
				es.webkitTransform = es.transform = 'scaleY(' + scale + ')'
			}
		},
		setTransition: function(speed) {
			let swiper = this.$refs.topSwiper.swiper
			for (let i = 0; i < swiper.slides.length; i++) {
				let es = swiper.slides[i].querySelector('img').style
				es.webkitTransitionDuration = es.transitionDuration = speed + 'ms'
			}
		}
	}
}
</script>
<style lang='less' scoped>
.swiper-pagination {
	/deep/ .swiper-pagination-bullet {
		width: 5px;
		height: 5px;
		border: 1px solid #fff;
		box-sizing: border-box;
		background: transparent;
		opacity: 1;
	}
	/deep/ .swiper-pagination-bullet-active {
		background: #fff;
	}
}
.swiper-lazy-preloader {
	width: 100%;
	height: 170px;
	animation: none;
	position: absolute;
	left: 0;
	top: 0;
	margin-left: 0;
	margin-top: 0;
	background: url('../../../assets/banner_load.png') no-repeat;
	background-size: 100%;
}
.swiper-lazy-preloader::after{
	display: none;
}
.swiper {
	width: 100%;
}
.swiper_slide {
	width: 355px;
	.img {
		display: block;
		width: 100%;
		border-radius: 5px;
		height: 170px;
	}
}
</style>
