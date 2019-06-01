<template>
	<div class="course">
		<div class="head_title">
			<p class="p">
				<img class="head_title_img" src="../../assets/jc.png">
			</p>
		</div>

		<div class="items">
			<div
				class="item display-flex"
				v-for="(item,index) in lists"
				:key="index"
				@click="goPage(item.jumpUrl)"
			>
				<div class="iconBox">
					<span class="icon" :class="item.iconClass"></span>
				</div>
				<div class="contentWrap flex-1">
					<p class="tit">{{item.title}}</p>
					<p class="desc">{{item.desc}}</p>
				</div>
				<div class="cornerBox display-flex align-center">
					<span class="corner"></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			lists: [
				{ iconClass: 'icon_ck', title: '存款教程', desc: '存款急速到账', jumpUrl: '/course/ck' },
				{ iconClass: 'icon_qk', title: '取款教程', desc: '急速提款仅需30秒', jumpUrl: '/course/qk' },
				{ iconClass: 'icon_newer', title: '新手教程', desc: '新手学习的教程', jumpUrl: '/course/newerJc' },
				{ iconClass: 'icon_js', title: '技术支持', desc: '提供全面技术支持', jumpUrl: '/course/jszc' },
				{ iconClass: 'icon_wfjc', title: '玩法教程', desc: '真人体育彩票玩法', jumpUrl: '/course/wfjc' },
				{ iconClass: 'icon_contact', title: '联系我们', desc: '为您提供全天服务', jumpUrl: '/course/contact' },
				{ iconClass: 'icon_about', title: '关于中博', desc: '责任隐私策略', jumpUrl: '/course/privacy' }
			]
		}
	},
	created() {},
	methods: {
		goPage(url) {
			this.$router.push(url)
		}
	}
}
</script>

<style lang="less" scoped>
.head_title {
	height: 50px;
	.p {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		font-size: 0;
		color: rgba(51, 51, 51, 1);
		height: 50px;
		line-height: 50px;
		z-index: 1000;
		background-color: @base_color;
		text-align: center;
	}
	.head_title_img {
		display: inline-block;
		height: 24px;
		margin-top: 13px;
	}
}
.course {
	padding: 0 15px;
	.head {
		line-height: 50px;
		font-size: 22px;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
	}
	.items {
		.item {
			padding: 18px 22px;
			border-radius: 5px;
			margin-bottom: 11px;
			background-color: #fff;
			.iconBox {
				width: 35px;
				span {
					width: 36px;
					height: 35px;
					display: inline-block;
					background: url('./img/icons.png');
					background-size: 156px 75px;
					&.icon_ck {
						background-position: 0 0;
					}
					&.icon_qk {
						background-position: -40px 0;
					}
					&.icon_newer {
						background-position: -80px 0;
					}
					&.icon_js {
						background-position: -120px 0;
					}
					&.icon_wfjc {
						background-position: 0 -40px;
					}
					&.icon_contact {
						background-position: -40px -40px;
					}
					&.icon_about {
						background-position: -80px -40px;
					}
				}
			}
			.contentWrap {
				padding-left: 10px;
				.tit {
					font-size: 16px;
					margin-bottom: 4px;
					font-family: PingFang-SC-Heavy;
					font-weight: 800;
					color: rgba(35, 35, 35, 1);
				}
				.desc {
					font-size: 14px;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					color: rgba(141, 141, 141, 1);
				}
			}
			.cornerBox {
				width: 11px;
				.corner {
					display: inline-block;
					width: 12px;
					height: 21px;
					background: url('../../assets/img/corner.png') no-repeat;
					background-size: 100% 100%;
				}
			}
		}
	}
}
</style>

