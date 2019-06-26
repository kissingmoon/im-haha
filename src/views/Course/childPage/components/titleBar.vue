<template>
	<div class="titleBar" @click="barClick">
		<div class="dotWrap display-flex align-center justify-center">
			<span class="dot"></span>
		</div>
		<div class="textCon display-flex align-center" :class="fontSize">{{content}}</div>
		<div class="doubleCorner display-flex align-center justify-center">
			<div class="arrow-content display-flex align-center" :class="{'upup':upupShow}">
				<van-icon class="arrow" name="arrow"></van-icon>
				<van-icon name="arrow"></van-icon>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			flag: false
		}
	},
	props: {
		content: {
			type: String,
			default: ''
		},
		fontSize: {
			type: String,
			default: 'fontSize15'
		},
		upupShow: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		barClick() {
			this.flag = !this.flag
			this.$emit('click', this.flag)
		}
	}
}
</script>

<style scoped lang="less">
.titleBar {
	display: inline-block;
	font-size: 15px;
	color: #fff;
	height: 40px;
	background: @btn_color;
	border-radius: 0px 20px 20px 1px;
	position: relative;
	.dotWrap {
		position: absolute;
		left: 0;
		top: 0;
		width: 20px;
		height: 100%;
		.dot {
			display: inline-block;
			width: 5px;
			height: 5px;
			border-radius: 50%;
			background-color: #fff;
			vertical-align: top;
		}
	}
	.textCon {
		height: 100%;
		padding: 0 36px 0 20px;
	}
	.fontSize15 {
		font-size: 15px;
	}
	.fontSize12 {
		font-size: 12px;
	}
	.fontSize13 {
		font-size: 13px;
	}
	.doubleCorner {
		vertical-align: middle;
		position: absolute;
		right: 15px;
		top: 0;
		height: 100%;
		.arrow-content {
			height: 15px;
			width: 20px;
			position: relative;
			&.upup {
				transform: rotate(-90deg);
				animation: rotate 0.2s linear;
			}
			.arrow {
				position: absolute;
				right: 0;
			}
			.van-icon {
				font-size: 14px;
			}
		}
	}
	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(-90deg);
		}
	}
}
</style>
