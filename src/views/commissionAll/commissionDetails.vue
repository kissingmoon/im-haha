<style lang="less" scoped>
.team_wrapper {
	min-height: 100%;
	box-sizing: border-box;
	background: url('../../assets/page_bg_default.jpg') no-repeat;
	background-size: cover;
	background-attachment: fixed;
	padding-top: @app_head_height;
	.team_main {
		height: 100%;
		display: flex;
		flex-direction: column;
		padding: 0 11px;
	}
	.team_dash {
		padding: 12px 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 104px;
		box-sizing: border-box;
		.team_dash_l {
			// width: 162px;
			height: 76px;
			background: rgba(255, 255, 255, 0.5);
			// box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.6);
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			&:first-child {
				border-radius: 5px 0 0 5px;
			}
			&:last-child {
				border-radius: 0 5px 5px 0;
			}
			.team_dash--box {
				width: 100%;
				&:first-child {
					border-right: 1px solid #bababa;
				}
			}
			.p0 {
				font-size: 17px;
				font-weight: bold;
				color: #0077ff;
				line-height: 24px;
				margin-bottom: 5px;
				text-align: center;
			}
			.p1 {
				font-size: 12px;
				font-weight: bold;
				color: #4a4a4a;
				line-height: 17px;
				text-align: center;
			}
		}
	}
	.lists_box {
		flex: 1;
		background: rgba(255, 255, 255, 0.5);
		min-height: calc(100vh - 104px - @app_head_height);
		border-radius: 5px;
		.lists_null {
			min-height: calc(100vh - 300px);
			display: flex;
			align-items: center;
			justify-content: center;
			.img {
				width: 110px;
				height: 100px;
				display: block;
				margin: 0 auto;
			}
			.p {
				font-size: 12px;
				font-weight: 500;
				color: #4a4a4a;
				line-height: 17px;
				margin-top: 15px;
			}
		}
	}
	.lists_top {
		z-index: 1000;
		position: sticky;
		top: 45px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.5);
		border-bottom: 1px solid rgba(190, 184, 181, 1);
		border-radius: 5px 5px 0 0;
		padding: 0 12px;
		.lists_t {
			flex: 1;
			font-size: 14px;
			font-weight: 500;
			color: rgba(108, 108, 108, 1);
			line-height: 30px;
			text-align: center;
		}
	}
	.lists {
		padding: 0 12px;
		background: rgba(255, 255, 255, 0.5);
		border-radius: 0 0 5px 5px;
		.list {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 50px;
			text-align: center;
			color: #4a4a4a;
			border-bottom: 1px dashed rgba(190, 184, 181, 1);
			.list_l {
				flex-basis: 33.33%;
				display: flex;
				align-items: center;
				justify-content: center;
				line-height: 15px;
			}
			.list_l_img {
				width: 15px;
				height: 15px;
				border-radius: 50%;
				overflow: hidden;
				box-sizing: border-box;
				margin-right: 10px;
				background: linear-gradient(to right, #23f8f8 0%, #8a75ff 100%);
				.img {
					display: block;
					width: 13px;
					height: 13px;
					margin: 1px 0 0 1px;
					background: rgba(38, 38, 38, 1);
					border-radius: 50%;
					overflow: hidden;
				}
			}
			.list_m {
				flex-basis: 33.33%;
				font-size: 12px;
				font-weight: 500;
			}
		}
		.list:last-child {
			border-bottom: none;
		}
		.list_more {
			font-size: 12px;
			font-weight: 500;
			color: rgba(108, 108, 108, 1);
			line-height: 60px;
			text-align: center;
		}
	}
}
</style>
<template>
	<div class="team_wrapper headview_wrapper">
		<ims-header title="红利佣金贡献详情"/>
		<div v-if="isShow" class="team_main">
			<div class="team_dash display-flex">
				<div class="team_dash_l flex-1">
					<div class="team_dash--box">
						<p class="p0">{{info.sumCount}}人</p>
						<p class="p1">贡献人数总计</p>
					</div>
				</div>
				<div class="team_dash_l flex-1">
					<div class="team_dash--box">
						<p class="p0">¥{{info.sumMoney=='null' ? '0' : info.sumMoney}}.00</p>
						<p class="p1">打码量总计</p>
					</div>
				</div>
			</div>
			<div class="lists_box">
				<div class="lists_top">
					<div class="lists_t">排名</div>
					<div class="lists_t">成员账号</div>
					<div class="lists_t">打码量</div>
				</div>
				<div v-if="lists.length>0" class="lists">
					<div v-for="(list,index) in lists" :key="index" class="list">
						<div class="list_l">
							<!-- <span class="list_l_name">{{list.userId}}</span> -->
							<span class="list_l_name">{{index+1}}</span> 
						</div>
						<!-- <div class="list_m">￥{{list.teamDml}}.00</div> -->
						<div class="list_m">{{list.playerId}}</div>
						<!-- <div class="list_m">{{list.newTime}}</div> -->
						<div class="list_m">￥{{list.dml}}.00</div>
					</div>
					<p class="list_more">{{loadMoreText}}</p>
				</div>
				<div v-else class="lists_null">
					<div>
						<img class="img" src="./img/e.png">
						<p class="p">暂无团队成员，快去召唤小伙伴吧！</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { throttle } from 'lodash'
export default {
	data() {
		this.lastscrollTop = 0
		this.isgetMore = false
		this.hasgetAll = false
		this.page_size = 10
		this.page = 1
		this.scrollFn = null
		return {
			isShow: false,
			info: {},
			lists: [],
			loadMoreText: '加载中...',
			isDateShow: false,
		}
	},
	async mounted() {
		let v = this.$route.query.v || {userId:'',settleTime:'',gameTypeCode:''}
		let loading = this.$loading({ text: '正在加载…' })
		try {
			let  [res] = await Promise.all([this.getLists(v)])
			loading.close()		
			if (res.code == '200') {
				if (res.data.gameCommisionList.length < this.page_size) {
					this.hasgetAll = true
					this.loadMoreText = '没有更多了~'
				}
				this.info=res.data
				this.lists = res.data.gameCommisionList
				this.orderfun()
				this.isShow = true
				this.scrollFn = throttle(this.scroll, 300)
				window.addEventListener('scroll', this.scrollFn)
			} else {
			}
		} catch {
			loading.close()
		}
	},
	destroyed() {
		window.removeEventListener('scroll', this.scrollFn)
	},
	methods: {
		scroll(e) {
			if (this.isgetMore || this.hasgetAll) {
				return
			}
			let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
			if (scrollTop < this.lastscrollTop) {
				//向上滚
				return
			}
			this.lastscrollTop = scrollTop
			if (document.body.scrollHeight - scrollTop - window.innerHeight <= 40) {
				this.getMore()
			}
		},
		orderfun(){
				this.lists=this.lists.sort((a,b)=>{
					return b.dml-a.dml
				})
		},
		getLists(v) {
			return this.$http.post('/gameAgent/commision/info', {
				page_no: 1,
				page_size: this.page_size,
				userId:v.userId,
				time:v.settleTime,
				gameTypeCode:v.gameTypeCode
			})
		},
		getMore() {
			this.page += 1
			this.isgetMore = true
			this.$http
				.post('/gameAgent/commision/info', {
					page_no: this.page,
					page_size: this.page_size,
					userId:v.userId,
					time:v.settleTime,
					gameTypeCode:v.gameTypeCode
				})
				.then(res => {
					if (res.code == '200') {
						this.lists = this.lists.concat(res.data.gameCommisionList)
						this.orderfun()
						if (res.data.gameCommisionList.length < this.page_size) {
							this.hasgetAll = true
							this.loadMoreText = '已经到底了~'
						}
					} else {
						this.loadMoreText = res.msg
						this.page -= 1
					}
					this.isgetMore = false
				})
				.catch(err => {
					this.isgetMore = false
					this.page -= 1
				})
		},
		showPopup() {
			this.isDateShow = true
		},
		goBack() {
			this.$router.go(-1)
		}
	}
}
</script>


