<template>
	<div class="record-wrapper">
		<div class="header-container">
			<div class="header-box">
				<ims-header title="资金明细"/>
			</div>
		</div>
		<div class="main-container" @showChoose="showChoose">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		showChoose() {
			conosle.log('触犯了')
		}
	}
}
</script>

<style lang="less" scoped>
.record-wrapper {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: @base_color;
	.header-container {
		.header-box {
			height: 49px;
		}
	}
}
</style>
