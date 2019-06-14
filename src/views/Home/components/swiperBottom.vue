<template>
	<div v-if="lists.length > 0" class="bottom">
		<ul class="bottom_indexs">
			<li
				v-for="(list,index) in lists"
				:key="index"
				class="index"
				:class="{active:activeIndex==index}"
				@click="changeSwiper(list,index)"
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
					<img
						class="img img0"
						:src="item.platformInfos[0].gameImageUrl"
						@click="open(item.platformInfos[0],item)"
					>
					<img
						class="img img1"
						:src="item.platformInfos[1].gameImageUrl"
						@click="open(item.platformInfos[1],item)"
					>
				</div>
				<div v-if="item.platformInfos.length == 3" class="slide_3">
					<img
						class="img img0"
						:src="item.platformInfos[0].gameImageUrl"
						@click="open(item.platformInfos[0],item)"
					>
					<img
						class="img img1"
						:src="item.platformInfos[1].gameImageUrl"
						@click="open(item.platformInfos[1],item)"
					>
					<img
						class="img img2"
						:src="item.platformInfos[2].gameImageUrl"
						@click="open(item.platformInfos[2],item)"
					>
				</div>
				<div v-if="item.platformInfos.length == 4" class="slide_4">
					<img
						class="img img0"
						:src="item.platformInfos[0].gameImageUrl"
						@click="open(item.platformInfos[0],item)"
					>
					<img
						class="img img1"
						:src="item.platformInfos[1].gameImageUrl"
						@click="open(item.platformInfos[1],item)"
					>
					<div class="img_2">
						<img
							class="img img2"
							:src="item.platformInfos[2].gameImageUrl"
							@click="open(item.platformInfos[2],item)"
						>
						<img
							class="img img3"
							:src="item.platformInfos[3].gameImageUrl"
							@click="open(item.platformInfos[3],item)"
						>
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
				lazy:true,
				direction: 'vertical'
			}
		}
	},
	computed: {
		...mapGetters(['account']),
		isLogin() {
			return !!this.account.userId
		}
	},
	methods: {
		open(platformInfos, item) {
			let gameJumpUrl = platformInfos.gameJumpUrl

			const ismjb = this.ismjb || localStorage.getItem('ismjb')
			if(platformInfos.gameStatus==2){
				this.$toast(platformInfos.alertMsg)
				return
			}
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
		changeSwiper(list,index) {
			console.log(list,index)
			this.$refs.bottomSwiper.swiper.slideTo(index)
		}
	}
}
</script>
<style lang='less' scoped>
.slide_2{
		.img {
		display: block;
		width: 100%;
	}
	.img0 {
		height: 147px;
		border-radius: 5px;
		margin-bottom: 6px;
	}
	.img1 {
		height: 147px;
		border-radius: 5px;
	}
}
.slide_3{
	.img {
		display: block;
		width: 100%;
	}
	.img0 {
		height: 95px;
		border-radius: 5px;
		margin-bottom: 6px;
	}
	.img1 {
		height: 95px;
		border-radius: 5px;
	}
	.img2 {
		height: 95px;
		border-radius: 5px;
	}
}
.slide_4 {
	.img {
		display: block;
		width: 100%;
	}
	.img0 {
		height: 95px;
		border-radius: 5px;
		margin-bottom: 6px;
	}
	.img1 {
		height: 95px;
		border-radius: 5px;
		margin-bottom: 6px;
	}
	.img_2 {
		display: flex;
		align-items: center;
		justify-content: space-between;
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
}
.bottom {
	display: flex;
	justify-content: space-between;
	height: 300px;
	width: 345px;
	margin: 0 auto;
	.bottom_indexs {
		width: 99px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.index {
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
	}
	.index.active {
		background: url('../../../assets/tab_golden_active.png') no-repeat;
		background-size: 100%;
		color: #fff;
	}
	.bottom_swiper {
		height: 100%;
		width: 239px;
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
		}
	}
}
</style>