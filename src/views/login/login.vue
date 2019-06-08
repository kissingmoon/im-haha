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
				&nbsp;&nbsp;
					  权威机构认证  
					&nbsp;&nbsp;
				<span class="tip-line tip-line__right"></span>
			</div>
			<p class="tip_p">拥有多国官方监管机构颁发的合法执照</p>
			<div class="down-content display-flex">
				<div
					class="item-content flex-1 display-flex flex-column flex-center"
					v-for="(v, k) in iconList"
					:key="k"
				>
					<img :src="v.imgSrc" alt>
					<div class="item-content_p">{{ v.name }}</div>
					<div class="item-content_p">{{v.dec}}</div>
				</div>
			</div>
		</div>
		<div
			class="main-container display-flex"
		>
		<swiper :options="swiperOption" ref="swp">
			<swiper-slide>
				<login-component @goNext="goNextFun"></login-component>
			</swiper-slide>
			<swiper-slide>
				<register-component @goBefore="goBeforeFun"></register-component>
			</swiper-slide>
		</swiper>
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
			swiperOption: {},
			iconList: [
				{
					imgSrc: require('./img/dl1.png'),
					name: '马尔他博彩牌照',
					dec: '(MGA)认证'
				},
				{
					imgSrc: require('./img/dl2.png'),
					name: '英属维尔京群岛',
					dec: '(BVI)认证'
				},
				{
					imgSrc: require('./img/dl3.png'),
					name: '菲律宾(PAGCOR)',
					dec: '监督博彩牌照'
				},
				{
					imgSrc: require('./img/dl4.png'),
					name: '英国GC',
					dec: '监督委员会'
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
			this.$refs.swp.swiper.slideTo(1);
		},
		goBeforeFun() {
			this.$refs.swp.swiper.slideTo(0);
		},
		goBack() {
			if (history.length <= 1) {
				this.$router.push('/')
			} else {
				this.$router.go(-1)
			}
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
			height: 90px;
			img {
				height: 55px;
				width: 154px;
			}
		}
		.tip_p{
			color: #fff;
			text-align: center;
			margin-top:5px; 
		}
		.tip-content {
			margin-top: 20px;
			font-size: 18px;
			text-align: center;
			color: #fff;
			font-weight: bold;

			.tip-line {
				width: 73px;
				height: 1px;
				&.tip-line__left {
					background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
				}
				&.tip-line__right {
					background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
				}
			}
		}
		.down-content {
			.item-content {
				height: 110px;
				font-size: 12px;
				color: #fff;
				.item-content_p{
					font-size: 11px;
					white-space:nowrap;
				}
				img {
					height: 48px;
					width: 48px;
					margin-bottom: 9px;
				}
			}
		}
	}
	.main-container {
		
	}
}
</style>
