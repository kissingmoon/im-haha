<template>
	<div class="contact display-flex flex-column headview_wrapper">
		<ims-header title="联系我们"/>
		<div class="main flex-1">
			<div class="logo"></div>
			<div class="con">
				<div class="pic"></div>
				<p>我们将为您提供7*24小时的服务，您可以通过联系客服的方式与我们取得联系，我们会尽快帮您解决所有问题。</p>
			</div>
			<div class="ways">
				<div class="waysWrap display-flex">
					<div class="phone"></div>
					<div class="emails flex-1">
						<p>QQ：6708899</p>
						<p>邮箱：younggame999@gmail.com</p>
					</div>
				</div>
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
.contact {
	min-height: 100%;
	box-sizing: border-box;
	padding-top: @app_head_height;
	background: url('../../../assets/page_bg_default.jpg') no-repeat;
	background-size: cover;
	background-attachment: fixed;
	.main {
		padding: 0 15px;
		.logo {
			width: 162px;
			height: 36px;
			margin: 31px auto 28px;
			background: url('../img/logo.png') no-repeat;
			background-size: 162px 36px;
		}
		.con {
			background-color: #8C6E64;
			.pic {
				height: 211px;
				background: url('../img/contactPic.png') no-repeat;
				background-size: cover;
			}
			p {
				text-indent: 20px;
				padding: 12px 6px;
				font-size: 14px;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(255, 255, 255, 1);
				line-height: 18px;
			}
		}
		.ways {
			text-align: center;
			padding: 64px 0 20px;
			.waysWrap {
				display: inline-block;
				> div {
					display: inline-block;
					vertical-align: top;
				}
				.phone {
					width: 43px;
					height: 43px;
					background: url('../img/phone.png') no-repeat;
					background-size: cover;
				}
				.emails {
					padding-left: 16px;
					p {
						font-size: 16px;
						font-family: Adobe Heiti Std R;
						font-weight: normal;
						color: rgba(51, 51, 51, 1);
						line-height: 17px;
						text-align: left;
						&:first-child {
							margin-bottom: 9px;
						}
					}
				}
			}
		}
	}
}
</style>
