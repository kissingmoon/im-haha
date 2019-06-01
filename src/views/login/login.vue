<template>
	<div class="login-wrapper">
		<div class="header-container display-flex flex-center" @click="goBack">
			<div class="back-content"></div>
		</div>
		<div class="top-container">
			<div class="up-content display-flex justify-center align-end">
				<img src="./img/zb-logo.png" alt srcset>
			</div>
			<div class="tip-content display-flex flex-center">
				<span class="tip-line tip-line__left"></span>
				&nbsp;&nbsp;热门游戏&nbsp;&nbsp;
				<span class="tip-line tip-line__right"></span>
			</div>
			<div class="down-content display-flex">
				<div
					class="item-content flex-1 display-flex flex-column flex-center"
					v-for="(v, k) in iconList"
					:key="k"
				>
					<img :src="v.imgSrc" alt>
					<div>{{ v.name }}</div>
				</div>
			</div>
		</div>
		<div
			class="main-container display-flex"
			:class="{ 
                'marquee-left': scrollTo == 'left',
                'marquee-right': scrollTo == 'right'
            }"
		>
			<login-component @goNext="goNextFun"></login-component>
			<register-component @goBefore="goBeforeFun"></register-component>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import loginComponent from './subViews/login-component'
import registerComponent from './subViews/register-component'

export default {
	data() {
		return {
			scrollTo: '',
			iconList: [
				{
					imgSrc: require('./img/dl1.png'),
					name: '棋牌游戏'
				},
				{
					imgSrc: require('./img/dl2.png'),
					name: '彩票投注'
				},
				{
					imgSrc: require('./img/dl3.png'),
					name: '真人娱乐'
				},
				{
					imgSrc: require('./img/dl4.png'),
					name: '亚太体育'
				}
			]
		}
	},
	components: {
		loginComponent,
		registerComponent
	},
	computed: {},
	methods: {
		...mapMutations({
			setUserToken: 'SET_USER_TOKEN',
			setAccount: 'SET_ACCOUNT'
		}),
		goNextFun() {
			this.scrollTo = 'left'
		},
		goBeforeFun() {
			this.scrollTo = 'right'
		},
		goBack() {
			this.$router.go(-1)
		}
	}
}
</script>

<style lang="less" scoped>
.login-wrapper {
	background: url('./img/login-bg.jpg') no-repeat;
	background-size: 100% auto;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	overflow-x: hidden;
	.header-container {
		position: absolute;
		top: 0;
		left: 0;
		height: 50px;
		width: 50px;
		.back-content {
			width: 16px;
			height: 16px;
			background: url('./img/back-white.png') no-repeat;
			background-size: auto 100%;
		}
	}
	.top-container {
		.up-content {
			height: 110px;
			img {
				height: 55px;
				width: 154px;
			}
		}
		.tip-content {
			margin-top: 25px;
			font-size: 12px;
			text-align: center;
			color: @color_txt_yellow;
			.tip-line {
				width: 73px;
				height: 1px;
				&.tip-line__left {
					background: url('./img/left-line.png') no-repeat;
				}
				&.tip-line__right {
					background: url('./img/right-line.png') no-repeat;
				}
			}
		}
		.down-content {
			.item-content {
				height: 110px;
				font-size: 12px;
				color: @color_txt_yellow;
				img {
					height: 48px;
					width: 48px;
					margin-bottom: 10px;
				}
			}
		}
	}
	.main-container {
		// padding-bottom: 50px;
	}
}
.marquee-left {
	transform: translate3d(-100%, 0, 0);
	animation: marquee-left 0.2s linear;
}
@keyframes marquee-left {
	0% {
		transform: translate3d(0, 0, 0);
	}
	100% {
		transform: translate3d(-100%, 0, 0);
	}
}
.marquee-right {
	transform: translate3d(0, 0, 0);
	animation: marquee-right 0.2s linear;
}
@keyframes marquee-right {
	0% {
		transform: translate3d(-100%, 0, 0);
	}
	100% {
		transform: translate3d(0, 0, 0);
	}
}
</style>
