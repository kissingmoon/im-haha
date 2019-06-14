<template>
	<div class="funds-wrapper display-flex flex-column headview_wrapper">
		<ims-header title="资金明细">
			<div slot="right" class="header-cottage" @click="onRightClick"></div>
		</ims-header>
		<div class="tab-container">
			<div class="tab-content display-flex">
				<div
					class="tab-item flex-1 display-flex flex-center"
					:class="{ 'active': activeTab == 0 }"
					@click="chooseTab(0)"
				>收入</div>
				<div
					class="tab-item flex-1 display-flex flex-center"
					:class="{ 'active': activeTab == 1 }"
					@click="chooseTab(1)"
				>支出</div>
			</div>
		</div>
		<div class="main-container flex-1 display-flex flex-column">
			<fundsComp :activeTab="activeTab" :dateType="dateType"></fundsComp>
		</div>
		<div class="bottom-popup-container">
			<van-popup v-model="switchs.showPopup" position="bottom">
				<div
					v-for="(v,k) in popList"
					:key="k"
					@click="popClick(v,k)"
					class="popup-item ims--txt--midum"
				>{{ v.name }}</div>
				<div class="popup-item cacle-txt" @click="switchs.showPopup = false">取消</div>
			</van-popup>
		</div>
	</div>
</template>

<script>
import income from './subViews/income'
import out from './subViews/out'
import fundsComp from './subViews/fundsComp'
import noData from '../../components/noData/noData'

export default {
	data() {
		return {
			activeTab: 0,
			isLoading: false,
			loading: false,
			finished: false,
			switchs: {
				showPopup: false
			},
			popList: [
				{
					name: '全部',
					date_type: '5'
				},
				{
					name: '最近三天',
					date_type: '2'
				},
				{
					name: '最近一周',
					date_type: '3'
				},
				{
					name: '最近一月',
					date_type: '4'
				}
			],
			dateType: ''
		}
	},
	components: {
		income,
		out,
		fundsComp
	},
	created() {
		history.scrollRestoration = 'manual'
		this.$emit('showChoose')
	},
	methods: {
		chooseTab(k) {
			this.activeTab = k
			if (k == 0) {
			}
		},
		onLoad() {
			console.log('触发底部加载')
			setTimeout(() => {
				// this.loading = false;
			}, 3000)
		},
		onRefresh() {},
		popClick(v, k) {
			this.dateType = v.date_type
			this.switchs.showPopup = false
		},
		onRightClick() {
			this.switchs.showPopup = true
		}
	}
}
</script>

<style lang="less" scoped>
.funds-wrapper {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	padding-top: @app_head_height;
	box-sizing: border-box;
	background: url('../../assets/page_bg_default.jpg') no-repeat;
	background-size: cover;
	background-attachment: fixed;
	
	.header-cottage {
		width:100%;
		height: @app_head_height;
		background: url('../../assets/time-ico.png') no-repeat;
		background-size: 22px;
		background-position: center right;
	}
	.tab-container {
		height: 64px;
		.tab-content {
			padding: 10px 15px;
			z-index: 888;
			position: fixed;
			left: 0;
			right: 0;
			.tab-item {
				height: 44px;
				background-color: rgba(255,255,255,.5);
				font-size: 15px;
				color: #848484;
				&:first-child {
					border-radius: 5px 0 0 5px;
				}
				&:last-child {
					border-radius: 0 5px 5px 0;
				}
				&.active {
					background: @btn_color;
					color: #ffffff;
				}
			}
		}
	}
	.bottom-popup-container {
		.popup-item {
			height: 50px;
			text-align: center;
			line-height: 50px;
			border-top: 1px solid rgba(222, 222, 222, 1);
			&:first-child {
				border-top: none;
			}
		}
		.cacle-txt {
			font-size: 14px;
			color: @color_txt_blue;
		}
	}
}
</style>
