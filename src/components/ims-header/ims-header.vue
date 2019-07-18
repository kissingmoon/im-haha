<template>
	<div v-if="isShow" class="app_head">
		<div class="main">
			<div class="left">
				<slot name="left">
					<span class="icon_left" @click="goBack">
						<svg class="svg_left">
							<use xlink:href="#left"></use>
						</svg>
					</span>
				</slot>
			</div>
			<div class="title">{{title}}</div>
			<div class="right">
				<slot name="right"></slot>
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
		}
	},
	data(){
		return{
			isShow:true
		}
	},
	mounted(){
		let query = this.$route.query
		if(query.appWeb){
			this.isShow = false
		}
	},
	methods: {
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

<style lang="less">
.app_head {
	.main {
		color: rgb(255, 255, 255);
		position: fixed;
		left: 0;
		right: 0;
		z-index: 888;
		height: @app_head_height;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: linear-gradient(to right, rgb(0, 213, 253), rgb(2, 136, 254)) 100% / 100%;
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
		}
	}
}
</style>

