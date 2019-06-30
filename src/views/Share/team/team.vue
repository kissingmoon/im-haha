<style lang="less" scoped>
.team_wrapper {
	min-height: 100%;
	box-sizing: border-box;
	background: url('../../../assets/page_bg_default.jpg') no-repeat;
	background-size: cover;
	background-attachment: fixed;
	padding-top: @app_head_height;
	.team_main {
		height: 100%;
		display: flex;
		flex-direction: column;
		padding: 0 11px;
		.search{
			height:32px;
			width:90%;
			margin-top:12px;
			background: rgba(255, 255, 255, 0.5);
			border-radius:16px;
			padding: 0 5%;
			position: relative;
			.ipt{
				outline:none;
				width:100%;
				height:32px
			}
			.removeipt{
				position: absolute;
				right:5%;
				top:6px;
				width:20px;
				height:20px;
				border-radius: 10px;
			}
		}
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
		background: rgba(255, 255, 255, 0.9);
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
			position: relative;
			.reverseOrder{
				position: absolute;
        top:3px;
        right:7px;
        border-style: solid;
        border-width: 4px 4px 7px 4px;
        border-color: transparent transparent #6D6D6D transparent;
        width: 0px;
        height: 0px;
			}
			.order{
				position: absolute;
        bottom:3px;
        right:7px;
        border-style: solid;
        border-width: 7px 4px 4px 4px;
        border-color: #6D6D6D transparent transparent transparent;
        width: 0px;
				height: 0px;
			}
			.sortingtop{
				border-color: transparent transparent #0077FF transparent;
			}
			.sortingbot{
				border-color: #0077FF transparent transparent transparent;
			}
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
.mask{
		position: fixed;
		width:100%;height:100%;
		left:0;bottom:0;
		background: rgba(0, 0, 0, 0.3);
		z-index: 999;
		.bouncetop{
				position: absolute;
				bottom:0;
				width:100%;
				height:302px;
				animation-duration: 0.5s;
				/* animation-delay: 2s; */
				animation-iteration-count: 1;
				overflow-y:scroll;
				background: #fff ;
		};
		.bouncebom{
				position: absolute;
				bottom:-302px;
				width:100%;
				height:302px;
				animation-duration: 0.5s;
				/* animation-delay: 2s; */
				animation-iteration-count: 1;
				background: #fff ;
		}
		.item{
				height:50px;
				width:94%;
				border-bottom:1px solid  #f0f0f0 ;
				margin-left:3%;
				text-align: center;
				line-height: 50px;
				color:#4A4A4A;
		}
		.liststyle{
				color:#0077FF
		}
		
}
</style>
<template>
	<div class="team_wrapper headview_wrapper">
		<ims-header title="团队成员">
			<div slot="right">
					<img @click="datafun" style="width:25px;height:25px;marginLeft:5px" src="./img/search1.png" alt="">   
			</div>
		</ims-header>
		
		<div v-if="isShow" class="team_main">
			<div class="search">
					<input @input="searchfun" class="ipt" v-model="ipt" type="text" >
					<div @click="kong" v-show="remove" class="removeipt">
						<img style="width:100%;height:100%" src="./img/shutdown.png" alt="">
					</div>
			</div>
			<div class="team_dash display-flex">
				<div class="team_dash_l flex-1">
					<div class="team_dash--box">
						<p class="p0">{{info.peopleNum}}人</p>
						<p class="p1">团队成员总计</p>
					</div>
				</div>
				<div class="team_dash_l flex-1">
					<div class="team_dash--box">
						<p class="p0">¥{{info.inviteMoney=='null' ? '0' : info.inviteMoney}}.00</p>
						<p class="p1">推荐佣金总计</p>
					</div>
				</div>
			</div>
			<div class="lists_box">
				<div class="lists_top">
					<div class="lists_t">旗下成员账号</div>
					<div class="lists_t">用户等级</div>
					<div class="lists_t">用户总业绩
						<div :class="sorting=='top'?'sortingtop':''" @click="sortingfun('top')" class="reverseOrder"></div>
						<div :class="sorting=='bot'?'sortingbot':''" @click="sortingfun('bot')" class="order"></div>
					</div>
				</div>
				<div v-if="lists.length>0" class="lists">
					<div v-for="(list,index) in lists" :key="index" class="list">
						<div class="list_l">
							<!-- <span class="list_l_img">
								<img class="img" src>
							</span> -->
							<span class="list_l_name">{{list.userId}}</span>
						</div>
						<div class="list_m">{{list.userLevel}}</div>
						<div class="list_m">{{list.bet}}</div>
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
		<div @click.stop="end" v-show="maskShow" class="mask">
				<div @click.stop :class="down_pop">
						<div :class="listNum==index?'liststyle':''" @click="listfun(item,index)" class="item" v-for="(item,index) in datePopup" :key="index">{{item.date_text}}</div>
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
		this.page = 0
		this.scrollFn = null
		return {
			// param:0,
			// interval:0,

			isShow: false,
			info: {},
			lists: [],
			loadMoreText: '加载中...',
			isDateShow: false,
			date_type_now: '',
			datePopup: [
				{ date_text: '全部记录', data_type: 0 },
				{ date_text: '最近三天', data_type: 1 },
				{ date_text: '最近七天', data_type: 2 },
				{ date_text: '一个月', data_type: 3},
				{ date_text: '三个月', data_type: 4 },
				{ date_text: '取消', data_type: 5 }
			],

			down_pop:"",
			maskShow:false,
			num:0,
			listNum:0,
			sorting:'',
			startTime:"",
			endTime:"",
			ipt:'',
			remove:false
		}
	},
	async mounted() {
		this.startTime=this.$route.query.startTime
		this.endTime=this.$route.query.endTime
		let loading = this.$loading({ text: '正在加载…' })
		try {
			let [res1, res2] = await Promise.all([this.getInfo(), this.getLists()])
			loading.close()
			if (res1.code == '200' && res2.code == '200') {
				if (res2.data.data.length < this.page_size) {
					this.hasgetAll = true
					this.loadMoreText = '没有更多了~'
				}
				this.info = res1.data
				this.lists = res2.data.data
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
		datafun(){
				this.num++
				if(this.num%2==1){
						this.maskShow=true
						this.down_pop='bouncetop animated slideInUp'
				} 
		},
		end(){
				this.num++
				if(this.num%2==0){
						this.down_pop='bouncebom animated slideInDown'
						setTimeout(()=>{
								this.maskShow=false
						},500)
				}
		},
		searchfun(){
			if(this.ipt){
				this.remove=true
				this.searchTime()
			}else{
				this.remove=false
				this.searchTime()
			}	
		},
		searchTime(){
			this.$http.post('/gameAgent/group/list/userId', {
				cuserId:this.ipt,
			}).then(res=>{
				this.lists=res.data.data
				this.orderfun()
			})
		},
		kong(){
			this.ipt=''
			this.remove=false
			this.searchTime()
		},
		getNowFormatDate() {//获取当前时间
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
				var strDate = date.getDate();
				var hours = date.getHours();
				var minutes =date.getMinutes();
				var seconds =date.getSeconds()
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
				}
				if(hours >=0 && hours<=9){
						hours = "0" + hours;
				}
				if(minutes >=0 && minutes<=9){
						minutes = "0" + minutes;
				}
				if(seconds >=0 && seconds<=9){
						seconds = "0" + seconds;
				}
        var currentdate = year + seperator1 + month + seperator1 + strDate+' '+hours+':'+minutes+':'+seconds;
        return currentdate;
		},
		format(now){
				var y,m,d;
				y = now.getFullYear();
				m = now.getMonth() + 1;
				d = now.getDate();
			 	return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0,8);
		},
		beforeYouGet(n) {//获取之前时间
				var y,m,d;
        var curTime = new Date().getTime();
				var startDate = curTime - (n * 3600 * 24 * 1000);
				return this.format(new Date(startDate))		
		},
		beforMinutes(n){////获取之前月时间
			var dt = new Date();
			var Month= dt.setMonth( dt.getMonth()-n );
			return this.format(new Date(Month)) 	
			
		},
		listfun(item,index){
			if(item.data_type==5){
				this.end()
				return
			}
			if(item.data_type==0){
				this.startTime=""
				this.endTime = ""
			}
			if(item.data_type==1){
				this.startTime =this.beforeYouGet(3)
				this.endTime =this.getNowFormatDate()
			}
			if(item.data_type==2){
				this.startTime =this.beforeYouGet(7)
				this.endTime =this.getNowFormatDate()
			}
			if(item.data_type==3){
				this.startTime =this.beforMinutes(1)
				this.endTime =this.getNowFormatDate()
			}
			if(item.data_type==4){
				this.startTime =this.beforMinutes(3)
				this.endTime =this.getNowFormatDate()
			}
			this.listNum=index
			this.page=0
			this.param=0
			this.end()
			this.lists=[]
			this.hasgetAll = false
			this.getMore()
		},
		sortingfun(val){
			this.sorting=val
			this.orderfun()
		},
		orderfun(){
			if(this.sorting=='top'){
				this.lists=this.lists.sort((a,b)=>{
					return a.bet-b.bet
				})
			}
			if(this.sorting=='bot'){
				this.lists=this.lists.sort((a,b)=>{
					return b.bet-a.bet
				})
			}
		},
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
		getInfo() {
			return this.$http.post('/user/getUserPromotion', {})
		},
		// user/getTeamMembersList
		getLists() {			
			this.page += 1
			return this.$http.post('/gameAgent/group/list', {
				page_no: this.page,
				page_size: this.page_size,
				startTime:this.startTime,
				endTime:this.endTime
			})
		},
		getMore() {
			this.page += 1
			this.isgetMore = true
			this.$http
				.post('/gameAgent/group/list', {
					page_no: this.page,
					page_size: this.page_size,
					startTime:this.startTime,
					endTime:this.endTime
				})
				.then(res => {
					if (res.code == '200') {
						this.lists = this.lists.concat(res.data.data)
						if (res.data.data.length < this.page_size) {
							this.hasgetAll = true
							this.loadMoreText = '已经到底了~'
						}
						this.orderfun()
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


