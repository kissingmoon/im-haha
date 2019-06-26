<template>
	<div class="noData display-flex align-center justify-center">
		<div class="con">
			<div class="bgPic"></div>
			<p>暂无数据</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	}
}
</script>

<style scoped lang="less">
.noData {
	height: 100%;
	.con {
		.bgPic {
			width: 120px;
			height: 114px;
			background: url('./noData.png') no-repeat;
			background-size: cover;
		}
		p {
			text-align: center;
			margin-top: 20px;
			font-size: 16px;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
			font-family: PingFangSC-Medium;
		}
	}
}
</style>
