<template>
	<div class="head">
		<div class="main">
			<div class="left">
				<span class="icon__left" @click="goBack"></span>
				<slot v-if="leftShow" name="left">
					
				</slot>
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
        leftShow () {
            return this.$slots.left
		},
		rightShow () {
			return this.$slots.right
		}
    },
	methods: {
		goBack() {
			this.$router.go(-1)
		},
		rightClick() {
			this.$emit("onRightClick")
		}
	}
}
</script>

<style lang="less" scoped>
.head {
	height: 49px;
	background: rgba(229, 229, 229, 1);
}
.main {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background: rgba(229, 229, 229, 1);
	z-index: 888;
	border-bottom: 1px solid #dedede;
	height: 49px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.left {
		flex-basis: 6em;
		font-size: 14px;
		box-sizing: border-box;
		.icon__left {
			width: 50px;
			height: 49px;
			display: inline-block;
			background: url('./leftCorner.png') no-repeat;
			background-size: 8px 15px;
			background-position: left 15px center;
		}
	}
	.title {
		.line-camp(1);
		max-width: 225px;
		flex: 1;
		text-align: center;
		font-size: 18px;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);

	}
	.right {
		flex-basis: 6em;
		text-align: right;
		padding-right: 14px;
		font-size: 14px;
		color: rgba(0, 0, 0, 1);
		box-sizing: border-box;
		.icon__right{
			background: url("./time-ico.png") no-repeat;
			background-size: cover;
			width: 22px;
			height: 22px;
		}
	}
}
</style>

