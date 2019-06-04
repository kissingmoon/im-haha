<template>
	<div class="app_head">
		<div class="main">
			<div class="left">
				<span class="icon_left" @click="goBack">
					<svg class="svg_left">
						<use xlink:href="#left"></use>
					</svg>
				</span>
				<slot v-if="leftShow" name="left"></slot>
			</div>
			<div class="title">{{title}}</div>
			<div class="right display-flex justify-end">
				<slot v-if="rightShow" name="right"></slot>
				<span v-if="!rightShow&&rightIcon" class="icon__right" @click="rightClick"></span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		title: {
			type: String,
			default: ''
		},
		rightIcon: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		leftShow() {
			return this.$slots.left
		},
		rightShow() {
			return this.$slots.right
		}
	},
	methods: {
		goBack() {
			this.$router.go(-1)
		},
		rightClick() {
			this.$emit('onRightClick')
		}
	}
}
</script>

<style lang="less">
.app_head {
	.main {
		background: linear-gradient(to right, rgb(0, 213, 253), rgb(2, 136, 254)) 100% / 100%;
		color: rgb(255, 255, 255);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 888;
		height: @app_head_height;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.left {
			flex-basis: 6em;
			font-size: 14px;
			box-sizing: border-box;
		}
		.icon_left {
			width: @app_head_height;
			height: @app_head_height;
			display: inline-block;
		}
		.svg_left {
			width: 22px;
			height: 22px;
			fill: currentColor;
			margin: 12.5px 0 0 15px;
		}
		.title {
			.line-camp(1);
			max-width: 225px;
			flex: 1;
			text-align: center;
			font-size: 17px;
			font-weight: bold;
		}
		.right {
			flex-basis: 6em;
			text-align: right;
			padding-right: 14px;
			font-size: 14px;
			box-sizing: border-box;
			.icon__right {
				background: url('./time-ico.png') no-repeat;
				background-size: cover;
				width: 22px;
				height: 22px;
			}
		}
	}
}
</style>

