<template>
	<div v-if="lists.length>0" class="activities">
		<transition-group tag="ul" name="fade">
			<li
				v-for="list in lists"
				:key="list.id"
				@click="openActivity(list)"
				class="activity"
			>
				<!-- <ims-image
					class="img"
					lazy
					:src="list.id=='53' ? 'https://cqyyjaaheyaea.com/tupian/das.jpg' : list.imageUrl "
				> -->
				<ims-image
					class="img"
					lazy
					:src="list.imageUrl "
				>
					<div class="img_placeholder" slot="placeholder"></div>
				</ims-image>
				<div class="title">
					<p class="p">{{list.title}}</p>
					<img class="icon" src="../../../assets/icon_right.png">
				</div>
				<div v-if="list.id == '53' && footRedDot" class="actv_8888"></div>
			</li>
		</transition-group>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters(['footRedDot'])
	},
	props: {
		lists: {
			type: Array,
			default: []
		}
	},
	methods: {
		openActivity(list) {
			this.$router.push('/activity-detail?id=' + list.id)
			localStorage.setItem('activity-detail', JSON.stringify(list))
		}
	}
}
</script>
<style lang="less" scoped>
.activities {
	position: absolute;
	top: 52px;
	bottom: 0;
	left: 0;
	right: 0;
	overflow-y: auto;
	-webkit-overflow-scrolling: touch;
	width: 100%;
	padding: 0 15px;
	box-sizing: border-box;
	.activity {
		background: transparent;
		border-radius: 5px;
		overflow: hidden;
		margin-bottom: 10px;
		position: relative;
	}
	.activity:first-child {
		margin-top: 10px;
	}
	.actv_8888 {
		position: absolute;
		right: 0;
		top: 0;
		width: 100px;
		height: 100px;
		background: url('../../../assets/88_88.png') no-repeat;
		background-size: 100%;
	}
	.img_placeholder {
		width: 100%;
		height: 100%;
		background: url('../../../assets/activity_load@2x.png') no-repeat;
		background-size: cover;
		background-position: center;
	}
	.img {
		display: block;
		width: 100%;
		height: 124px;
		overflow: hidden;
	}
	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-right: 8px;
		background: rgba(255, 255, 255, 0.5);
	}
	.p {
		.line-camp(1);
		max-width: 330px;
		flex: 1;
		font-size: 14px;
		color: rgba(51, 51, 51, 1);
		line-height: 36px;
		padding: 0 8px;
	}
	.icon {
		width: 16px;
		height: 16px;
	}
}
</style>


