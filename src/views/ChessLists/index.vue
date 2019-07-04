<template>
	<div class="chess_wrapper headview_wrapper">
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
export default {
	data() {
		return {
			title: '',
			lists: []
		}
	},
	mounted() {
		this.title = this.$route.query.title || '游戏'
		let id = this.$route.query.id
		if (!id) {
			this.$router.replace('/')
			return
		}
		this.$http.post('/home/getPtGamesList', { id: id }).then(res => {
			if (res.code == '200') {				
				this.lists = res.data.ptGamesList
			}
		})
	},
	methods: {
		open(list) {
			this.$router.push(`/mpage?jumpLink=${this.interfaces.forwardName}&goto=getThird&gameType=${list.gameUrl}`)
		}
	}
}
</script>

<style lang="less" scoped>
.chess_wrapper {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	padding-top: @app_head_height;
	min-height: 100%;
	box-sizing: border-box;
	background: url('../../assets/page_bg_default.jpg') no-repeat;
	background-size: cover;
	overflow: hidden;
}
.lists {
	width: 100%;
	height: 100%;
	padding: 21px 11px 0;
	box-sizing: border-box;
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
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

