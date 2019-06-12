<template>
	<div v-if="lists.length > 0" :style="{height:swiperH+'px'}" class="bottom">
		<ul class="bottom_indexs">
			<li
				v-for="(list,index) in lists"
				:key="index"
				class="index"
				ref="li"
				:class="{active:activeIndex==index}"
				@click="changeSwiper(index)"
			>
				<img class="img" :src="activeIndex==index ? list.iconImgOffUrl :list.iconImgOnUrl">
				<span class="text">{{list.gameTitleCn}}</span>
			</li>
		</ul>
		<swiper class="bottom_swiper" @slideChange="slideChange" :options="swiper" ref="bottomSwiper">
			<swiper-slide v-for="(item,i) in lists" :key="i" class="slide">
				<ims-image
					v-if="item.platformInfos.length == 1"
					class="slide_1"
					@click.native="open(item.platformInfos[0],item )"
					:src="item.platformInfos[0].gameImageUrl"
				>
					<img class="slide_1" slot="placeholder" src="../../../assets/banner_load1.png">
				</ims-image>
				<div v-if="item.platformInfos.length == 2" class="slide_2">
					<div class="img_box img_box0">
						<img
							class="img"
							:src="item.platformInfos[0].gameImageUrl"
							@click="open(item.platformInfos[0],item)"
						>
					</div>
					<div class="img_box img_box1">
						<img
							class="img"
							:src="item.platformInfos[1].gameImageUrl"
							@click="open(item.platformInfos[1],item)"
						>
					</div>
				</div>
				<div v-if="item.platformInfos.length == 3" class="slide_3">
					<div class="img_box img_box0">
						<img
							class="img"
							:src="item.platformInfos[0].gameImageUrl"
							@click="open(item.platformInfos[0],item)"
						>
					</div>
					<div class="img_box img_box1">
						<img
							class="img img1"
							:src="item.platformInfos[1].gameImageUrl"
							@click="open(item.platformInfos[1],item)"
						>
					</div>
					<div class="img_box img_box2">
						<img
							class="img img2"
							:src="item.platformInfos[2].gameImageUrl"
							@click="open(item.platformInfos[2],item)"
						>
					</div>
				</div>
				<div v-if="item.platformInfos.length == 4" class="slide_4">
					<div class="img_box img_box0">
						<img
							class="img"
							:src="item.platformInfos[0].gameImageUrl"
							@click="open(item.platformInfos[0],item)"
						>
					</div>
					<div class="img_box img_box1">
						<img
							class="img img1"
							:src="item.platformInfos[1].gameImageUrl"
							@click="open(item.platformInfos[1],item)"
						>
					</div>
					<div class="img_box2">
						<div class="img_box2_box img_box2_box0">
							<img
								class="img img2"
								:src="item.platformInfos[2].gameImageUrl"
								@click="open(item.platformInfos[2],item)"
							>
						</div>
						<div class="img_box2_box img_box2_box1">
							<img
								class="img img3"
								:src="item.platformInfos[3].gameImageUrl"
								@click="open(item.platformInfos[3],item)"
							>
						</div>
					</div>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import ImsImage from '@/components/ims-image.vue'
export default {
	components: {
		ImsImage
	},
	props: {
		lists: {
			type: Array,
			default: []
		}
	},
	data() {
		return {
			activeIndex: 0,
			swiper: {
				lazy: true,
				direction: 'vertical'
			},
			swiperH: 300
		}
	},
	computed: {
		...mapGetters(['account']),
		isLogin() {
			return !!this.account.userId
		}
	},
	watch: {
		lists: {
			handler(val, oldVal) {
				if (val && val.length > 0) {
					this.$nextTick(() => {
						let lis = this.$refs.li
						let listH = lis[0].offsetHeight
						let h = getComputedStyle(lis[0]).marginBottom.replace(/[a-z]/g, '')
						let swiperH = listH * lis.length + h * (lis.length - 1)
						this.swiperH = swiperH
						this.$nextTick(() => {
							this.$refs.bottomSwiper.swiper.update()
						})
					})
				}
			},
			immediate: true
		}
	},
	methods: {
		open(platformInfos, item) {
			let gameJumpUrl = platformInfos.gameJumpUrl

			const ismjb = this.ismjb || localStorage.getItem('ismjb')

			if (!this.isLogin) {
				if (platformInfos.noLoginJumpUrl) {
					gameJumpUrl = platformInfos.noLoginJumpUrl
					if (ismjb == 'ios') {
						this.$router.push(`/mpage?jumpLink=${gameJumpUrl}`)
					} else {
						window.open(`/mpage?jumpLink=${gameJumpUrl}`)
					}
				} else {
					this.$toast('暂未登录，请先登录')
					setTimeout(() => {
						this.$router.push({ path: '/login' })
					}, 1000)
				}
				return
			}
			if (!gameJumpUrl) {
				this.$router.push(`/chess-lists?title=${platformInfos.gameTitleCn}&id=${platformInfos.id}`)
			} else {
				if (ismjb == 'ios') {
					this.$router.push(`/mpage?jumpLink=${gameJumpUrl}&goto=getThird`)
				} else {
					window.open(`/mpage?jumpLink=${gameJumpUrl}&goto=getThird`)
				}
			}
		},
		slideChange() {
			this.activeIndex = this.$refs.bottomSwiper.swiper.activeIndex
		},
		changeSwiper(index) {
			this.$refs.bottomSwiper.swiper.slideTo(index)
		}
	}
}
</script>
<style lang='less' scoped>
.bottom {
	display: flex;
	justify-content: space-between;
	height: 300px;
	width: 94.666%;
	margin: 0 auto;
	.bottom_indexs {
		width: 105px;
		.index {
			margin-bottom: 5px;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 45px;
			background: rgba(255, 255, 255, 0.66);
			border-radius: 5px;
			font-size: 12px;
			font-weight: 500;
			color: rgb(102, 102, 102);
			transition: all 0.2s ease;
			.img {
				width: 22px;
				height: 22px;
				margin-right: 7px;
			}
			.text{
				min-width: 4em;
				text-align: center;
			}
		}
		.index:last-child {
			margin-bottom: 0;
		}
		.index.active {
			background: url('../../../assets/tab_golden_active.png') no-repeat;
			background-size: 100%;
			color: #fff;
		}
	}

	.bottom_swiper {
		height: 100%;
		width: 245px;
		margin: 0;
		border-radius: 5px;
	}
	.slide {
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		.slide_1 {
			width: 100%;
			height: 100%;
		}
	}
}
.slide_2 {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	.img_box {
		border-radius: 5px;
		overflow: hidden;
		flex: 1;
		margin-bottom: 6px;
	}
	.img_box1 {
		margin-bottom: 0px;
	}
	.img {
		display: block;
		width: 100%;
	}
}
.slide_3 {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	.img_box {
		width: 100%;
		border-radius: 5px;
		margin-bottom: 6px;
		overflow: hidden;
		flex: 1;
	}
	.img_box2 {
		margin-bottom: 0;
	}
	.img {
		display: block;
		width: 100%;
	}
}
.slide_4 {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	.img_box {
		width: 100%;
		border-radius: 5px;
		margin-bottom: 6px;
		overflow: hidden;
		flex: 1;
	}

	.img_box2 {
		margin-bottom: 0;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.img_box2_box {
			width: 100%;
			height: 100%;
			flex: 1;
			margin-right: 6px;
			overflow: hidden;
		}
		.img_box2_box1 {
			margin-right: 0;
		}
	}
	.img2 {
		width: 116px;
		height: 95px;
		border-radius: 5px;
	}
	.img3 {
		width: 116px;
		height: 95px;
		border-radius: 5px;
	}
	.img {
		display: block;
		width: 100%;
	}
}
</style>