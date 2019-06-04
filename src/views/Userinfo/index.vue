<template>
	<div class="userinfo_wrapper">
		<ims-header title="个人资料"/>
		<ul class="lists">
			<li @click="mofifyAvator" class="list">
				<span class="text">头像</span>
				<img class="img" :src="account.headPortrait">
				<svg class="svg_right">
					<use xlink:href="#right"></use>
				</svg>
			</li>
			<li @click="mofifyName" class="list">
				<span class="text">昵称</span>
				<span class="name">{{account.userName}}</span>
				<svg class="svg_right">
					<use xlink:href="#right"></use>
				</svg>
			</li>
			<li class="list">
				<span class="text">ID：</span>
				<span class="name">{{account.userId}}</span>
				<svg class="svg_right">
					<!-- <use xlink:href="#right"></use> -->
				</svg>
			</li>
		</ul>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	data() {
		return {}
	},
	mounted() {},
	computed: {
		...mapGetters(['account'])
	},
	methods: {
		mofifyAvator() {
			this.$router.push('/useravator')
		},
		mofifyName() {
			this.$router.push('/username')
		}
	}
}
</script>

<style lang="less" scoped>
.userinfo_wrapper {
	min-height: 100%;
	box-sizing: border-box;
	padding-top: @app_head_height;
	background: url('../../assets/page_bg_default2.jpg') no-repeat;
	background-size: 100%;
	background-attachment: fixed;
	/deep/.app_head {
		background: none;
	}
	/deep/.app_head .main {
		background: none;
		color: #fff;
	}
}
.lists {
	width: 100%;
	padding: 0 11px;
	box-sizing: border-box;
	background-color: rgba(255, 255, 255, 0.5);
	.list {
		.border-bottom-1px();
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 50px;
		.text {
			font-size: 16px;
			color: rgba(51, 51, 51, 1);
			line-height: 22px;
			flex: 1;
		}
		.img {
			width: 32px;
			height: 32px;
			border-radius: 50%;
			overflow: hidden;
		}
		.svg_right {
			width: 22px;
			height: 22px;
			fill: currentColor;
			color: #7e7e7e;
		}
		.name {
			font-size: 16px;
			color: #7e7e7e;
			line-height: 22px;
		}
	}
	.list:last-child {
		&::before {
			border: none;
		}
		.arrow_right {
			background: none;
		}
	}
}
</style>

