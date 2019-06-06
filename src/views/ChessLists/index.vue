<template>
	<div class="chess_wrapper">
		<ims-header :title="title"/>
		<ul class="lists">
			<li
				class="list"
				v-for="(list,index) in lists"
				:key="index"
				@click="open(list)"
				:class="{margin:(index+1)%3 > 0}"
			>
				<div class="img_box">
					<ims-image class="img" lazy :src="list.gameImage"/>
				</div>
				<p class="text">{{list.gameNameCn}}</p>
			</li>
		</ul>
	</div>
</template>
<script>
import ImsImage from '@/components/ims-image.vue'
export default {
	components: {
		ImsImage
	},
	data() {
		return {
			title: '',
			lists: []
		}
	},
	mounted() {
		this.title = this.$route.query.title || '游戏'
		let id = this.$route.query.id
		this.$http.post('/home/getPtGamesList', { id: id }).then(res => {
			if (res.code == '200') {
				this.lists = res.data.ptGamesList
			}
		})
	},
	methods: {
		open(list) {
			window.open(`/mpage?jumpLink=${this.interfaces.forwardName}&goto=getThird&gameType=${list.gameUrl}`)
		}
	}
}
</script>

<style lang="less" scoped>
.chess_wrapper {
	padding-top: @app_head_height;
	min-height: 100%;
	box-sizing: border-box;
	background: url('../../assets/page_bg_default.jpg') no-repeat;
	background-size: cover;
	background-attachment: fixed;
}
.lists {
	width: 100%;
	padding: 21px 11px 0;
	box-sizing: border-box;
	.list {
		width: 100px;
		display: inline-block;
		margin-bottom: 20px;
		vertical-align: top;
	}
	.list.margin {
		margin-right: 26.5px;
	}
	.img_box {
		width: 100px;
		height: 100px;
		overflow: hidden;
	}
	.img {
		display: block;
		width: 100%;
	}
	.text {
		.line-camp(1);
		font-size: 16px;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 22px;
		height: 22px;
		text-align: center;
		margin-top: 8px;
	}
}
</style>

