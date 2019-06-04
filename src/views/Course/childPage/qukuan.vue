<template>
	<div class="qk display-flex flex-column">
		<ims-header title="取款教程"/>
		<div class="main flex-1">
			<div class="title">
				<span class="titleNum title1"></span>
				<em>点击取款提现</em>
			</div>
			<div class="qu1"></div>
			<div class="title">
				<span class="titleNum title2"></span>
				<em>设置提款密码，提高提款安全性</em>
			</div>
			<div class="qu2"></div>
			<div class="title">
				<span class="titleNum title3"></span>
				<em>设置提款密码，提高提款安全性</em>
			</div>
			<div class="qu3"></div>
			<div class="title">
				<span class="titleNum title4"></span>
				<em>填写信息</em>
			</div>
			<div class="qu4 display-flex">
				<div class="item">
					<div class="num">
						<span>1</span>
					</div>
					<p>输入金额</p>
				</div>
				<div class="item">
					<div class="num">
						<span>2</span>
					</div>
					<p>确认密码</p>
				</div>
				<div class="item">
					<div class="num">
						<span>3</span>
					</div>
					<p>立即提款</p>
				</div>
				<div class="hdbar"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	created() {},
	methods: {
		goBack() {
			this.$router.go(-1)
		}
	},
	components: {}
}
</script>

<style scoped lang="less">
.qk {
	min-height: 100%;
	box-sizing: border-box;
	padding-top: @app_head_height;
	background: url('../../../assets/page_bg_default.jpg') no-repeat;
	background-size: 100%;
	background-attachment: fixed;
	.headBox {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 50px;
		.leftCorner {
			position: absolute;
			left: 15px;
			top: 0;
			bottom: 0;
			padding-right: 50px;
			.van-icon {
				font-size: 20px;
			}
		}
		p {
			color: #000;
			font-size: 18px;
			line-height: 50px;
			text-align: center;
		}
	}
	.main {
		padding: 0 0 50px;
		> .title {
			text-align: center;
			margin: 10px 0 25px;
			.titleNum {
				display: inline-block;
				width: 41px;
				height: 40px;
				vertical-align: middle;
				&.title1 {
					background: url('../img/title1.png') no-repeat;
					background-size: 100% 100%;
				}
				&.title2 {
					background: url('../img/title2.png') no-repeat;
					background-size: 100% 100%;
				}
				&.title3 {
					background: url('../img/title3.png') no-repeat;
					background-size: 100% 100%;
				}
				&.title4 {
					background: url('../img/title4.png') no-repeat;
					background-size: 100% 100%;
				}
			}
			em {
				font-size: 18px;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				vertical-align: middle;
				background: linear-gradient(180deg, rgba(106, 78, 61, 1) 0.4150390625%, rgba(140, 110, 100, 1) 99.5849609375%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
		}
		.qu1 {
			width: 340px;
			height: 645px;
			margin: 0 auto;
			background: url('../img/qk1.png') no-repeat;
			background-size: cover;
		}
		.qu2,
		.qu3 {
			width: 328px;
			height: 645px;
			margin: 0 auto;
		}
		.qu2 {
			background: url('../img/qk2.png') no-repeat;
			background-size: cover;
		}
		.qu3 {
			background: url('../img/qk3.png') no-repeat;
			background-size: cover;
		}
		.qu4 {
			width: 285px;
			margin: 0 auto;
			position: relative;
			.item {
				flex: auto;
				text-align: center;
				z-index: 2;
				.num {
					width: 17px;
					height: 17px;
					padding: 1px;
					margin: 0 auto 10px;
					border-radius: 50%;
					background: linear-gradient(0deg, rgba(167, 122, 58, 1), rgba(244, 210, 138, 1));
					box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.3);
					span {
						display: block;
						font-size: 14px;
						height: 100%;
						color: #ab843f;
						line-height: 1.25em;
						border-radius: 50%;
						background-color: #fff;
					}
				}
				> p {
					color: #ab843f;
				}
			}
			.hdbar {
				position: absolute;
				left: 0;
				top: 8px;
				width: 100%;
				height: 2px;
				z-index: 1;
				background: linear-gradient(0deg, rgba(167, 122, 58, 1), rgba(244, 210, 138, 1));
			}
		}
	}
}
</style>
