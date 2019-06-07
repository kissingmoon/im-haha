<template>
	<div class="wfjc display-flex flex-column">
		<ims-header title="玩法教程"/>
		<div class="wfjc_tabs">
			<Tabs :tabs="tabs" @click="onClick"/>
		</div>
		<div class="main flex-1">
			<ty v-if="active == 0"/>
			<zr v-if="active == 1"/>
			<cp v-if="active == 2"/>
			<dj v-if="active == 3"/>
			<others v-if="active == 4"/>
		</div>
	</div>
</template>

<script>
import Tabs from '../../../components/tabs/tabs.vue'
import ty from './components/ty'
import zr from './components/zr'
import cp from './components/cp'
import dj from './components/dj'
import others from './components/others'
export default {
	data() {
		return {
			active: 0,
			tabs: ['体育问题', '真人问题', '彩票问题', '电子竞技', '其他问题']
		}
	},
	created() {},
	methods: {
		onClick(i) {
			this.active = i
		},
		goBack() {
			this.$router.go(-1)
		}
	},
	components: {
		Tabs,
		ty,
		zr,
		cp,
		dj,
		others
	}
}
</script>

<style scoped lang="less">
.wfjc {
	min-height: 100%;
	box-sizing: border-box;
	padding-top: @app_head_height;
	background: url('../../../assets/page_bg_default.jpg') no-repeat;
	background-size: cover;
	background-attachment: fixed;
	.wfjc_tabs {
		padding: 12px 0;
		position: fixed;
		left: 0;
		width: 100%;
		top: @app_head_height;
		background: url('../../../assets/page_bg_default.jpg') no-repeat;
		background-size: 100% auto;
		z-index: 1;
	}
	.main {
		padding: 66px 0;
		.van-tabs {
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
				background: @color_deep_blue;
				z-index: 0;
				border-radius: 20px;
				top: 0;
				border: 2px solid #eaeaea;
				box-sizing: border-box;
			}
		}
	}
}
</style>

