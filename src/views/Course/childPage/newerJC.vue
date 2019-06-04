<template>
	<div class="newerJC display-flex flex-column">
		<ims-header title="新手教程"/>
		<div class="main flex-1">
			<div class="tabsWrap">
				<div class="tabs display-flex align-center">
					<div class="tab flex-1" :class="{'active':tabIndex == 0}" @click="tabChange(0,$event)">额度转换</div>
					<div class="tab flex-1" :class="{'active':tabIndex == 1}" @click="tabChange(1,$event)">活动申请</div>
					<div class="activeBg" :style="{left: pos +'px'}"></div>
				</div>
			</div>
			<div class="newerMain">
				<div class="eduWrap" v-if="tabIndex == 0">
					<p style="margin-bottom:0">账号余额有100元，玩游戏后，账号余额为0，为什么？</p>
					<p style="margin-top:6px">当您再次刷新余额，还是为0，请点击用户中心的额度转换功能。</p>
					<div class="ed1"></div>
					<p>查看您当前是否有开启自动转换功能，如未开启。</p>
					<div class="ed2"></div>
					<p>第一：请先将您的游戏余额、转出账号，转入到YG平台“现金余额”。</p>
					<div class="ed3"></div>
					<p>第二：点击开启额度自动转换</p>
					<div class="ed4"></div>
					<p>开启自动转换功能后，您再次游戏，返回后将会展示您当前最新的余额数。</p>
				</div>
				<div class="hdWrap" v-if="tabIndex == 1">
					<p>用户点击申请按钮，平台进行审核您是否达到了参与活动的条件。</p>
					<div class="hd1"></div>
					<p>如审核您已达到申请的条件，奖励则会在24小时内进行发放，如审核您未达到申请条件，您将接收不到该活动奖励，一般活动都到什么时候下线呢？活动时间平台都会标注在活动细则条例里，如没有下线日期，活动下线前会提前通知到所有用户。</p>
					<div class="hd2"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tabIndex: 0,
			pos: 2
		}
	},
	methods: {
		tabChange(i, e) {
			if (i == 0) {
				this.pos = e.currentTarget.offsetLeft + 0.5
			} else {
				this.pos = e.currentTarget.offsetLeft + 2
			}
			this.tabIndex = i
		},
		goBack() {
			this.$router.go(-1)
		}
	}
}
</script>

<style scoped lang="less">
.newerJC {
	min-height: 100%;
	box-sizing: border-box;
	padding-top: @app_head_height;
	background: url('../../../assets/page_bg_default.jpg') no-repeat;
	background-size: 100%;
	background-attachment: fixed;

	.main {
		padding: 0 0 50px;
		.tabsWrap {
			position: fixed;
			left: 0;
			right: 0;
			padding: 10px 0;
			.tabs {
				width: 184px;
				height: 36px;
				margin: 0 auto;
				padding: 2px;
				border-radius: 20px;
				position: relative;
				background: rgba(255, 255, 255, .5);
				.tab {
					text-align: center;
					z-index: 2;
					transition: all 0.1s linear;
				}
				.active{
					color:#fff;
				}
				.activeBg {
					position: absolute;
					top: 2px;
					left: 2px;
					width: 90px;
					height: 36px;
					z-index: 1;
					border-radius: 18px;
					background: @btn_color;
					transition: all 0.2s ease-in-out;
				}
			}
		}

		.newerMain {
			padding: 60px 12px 20px;
			> div > p {
				margin: 10px 0 20px;
				color: #ab843f;
			}
			.hdWrap {
				> div {
					width: 328px;
					height: 645px;
					margin: 0 auto;
				}
				.hd1 {
					background: url('../img/hd1.png') no-repeat;
					background-size: cover;
				}
				.hd2 {
					background: url('../img/hd2.png') no-repeat;
					background-size: cover;
				}
			}
			.eduWrap {
				.ed1 {
					width: 351px;
					height: 644px;
					margin-left: 10px;
					background: url('../img/ed1.png') no-repeat;
					background-size: cover;
				}
				.ed2,
				.ed3,
				.ed4 {
					width: 328px;
					height: 644px;
					margin: 0 auto;
				}
				.ed2 {
					background: url('../img/ed2.png') no-repeat;
					background-size: cover;
				}
				.ed3 {
					background: url('../img/ed3.png') no-repeat;
					background-size: cover;
				}
				.ed4 {
					background: url('../img/ed4.png') no-repeat;
					background-size: cover;
				}
			}
		}
	}
}
</style>
