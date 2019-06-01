<template>
	<div>
		<ims-header title="个人资料" />
		<ul class="lists">
			<li @click="mofifyAvator" class="list">
				<span class="text">头像</span>
				<img class="img" :src="account.headPortrait">
				<span class="arrow_right"></span>
			</li>
			<li @click="mofifyName" class="list">
				<span class="text">昵称</span>
				<span class="name">{{account.userName}}</span>
				<span class="arrow_right"></span>
			</li>
			<li class="list">
				<span class="text">ID：</span>
				<span class="name">{{account.userId}}</span>
				<span class="arrow_right"></span>
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
.lists {
	width: 100%;
	padding: 0 11px;
	box-sizing: border-box;
	background: #fff;
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
		.arrow_right {
			width: 8px;
			height: 14px;
			background: url('../../assets/img/arrow_right.png') no-repeat;
			background-size: 8px 14px;
			margin-left: 12px;
		}
		.name {
			font-size: 16px;
			color: rgba(176, 176, 176, 1);
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

