<template>
	<div class="home_wrapper view_wrapper">
		<div v-if="isShow" class="home">
			<div class="top">
				<swiper-top :lists="swiperTopData"/>
				<notice :texts="notice"/>
				<user-data/>
			</div>
			<swiper-bottom ref='bottomSwiper' :lists="swiperBottomData"/>
		</div>
		<!-- <div @click.stop v-if="JulyShow" class="JulyActivities">
				<div class="centent">
					<div class="centent_head">
						<p class="centent_head_p1">八月送好礼</p>
						<p class="centent_head_p1">真人视讯：百家乐，龙虎斗</p>
						<p class="centent_head_p1">一整月彩金送不停</p>
					</div>
					<div class="table_div">
						<div class="actv_table12">
								<div class="col3 col3_0">
									<div class="row1">当日打码量</div>
									<div class="row1">1000元+</div>
									<div class="row1">3000元+</div>
									<div class="row1">5000元+</div>
									<div class="row1">10000元+</div>
									<div class="row1">30000元+</div>
									<div class="row1">50000元+</div>
									<div class="row1">100000元+</div>
									<div class="row1">300000元+</div>
									<div class="row1">500000元+</div>
									<div class="row1">1000000元+</div>
								</div>
								<div class="col2 ">
									<div class="row2 row2_1">赠送彩金</div>
									<div class="row2 row2_1">8元</div>
									<div class="row2 row2_1">18元</div>
									<div class="row2 row2_1">28元</div>
									<div class="row2 row2_1">38元</div>
									<div class="row2 row2_1">58元</div>
									<div class="row2 row2_1">88元</div>
									<div class="row2 row2_1">188元</div>
									<div class="row2 row2_1">388元</div>
									<div class="row2 row2_1">588元</div>
									<div class="row2 row2_1">888元</div>
								</div>
								<div class="col2">
									<div class="row2 row2_0">游戏限制</div>
									<div class="row2 row2_1">
									<p>AG真人视讯百家乐，龙虎斗</p>
									<p style="margin-top:10px">BG真人视讯百家乐，龙虎斗</p>
									</div>
								</div>
							</div>	
					</div>
					<div @click="gotogame" class="btn">
              去游戏
          </div>
					<div @click.stop="downJuly" class="Shutdown">

          </div>
				</div>			
		</div> -->
		<div v-if="hongbaoShow" class="mask">
			<div class="mask_div">
				<img @click.stop="hongbaoShow=false" class="img" src="./img/close.png" alt="">
				<img @click="topage" src="./img/hongbao.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import userData from './components/userData.vue'
import notice from './components/notice/notice.vue'
import swiperTop from './components/swiperTop.vue'
import swiperBottom from './components/swiperBottom.vue'
export default {
	name: 'home',
	components: {
		swiperTop,
		swiperBottom,
		userData,
		notice,		
	},
	data() {
		return {
			hongbaoShow:false,
			JulyShow:false,
			isShow: false,
			isError: false,
			swiperTopData: [],
			notice: [],
			swiperBottomData: [],
			Julygame:{
				gameJumpUrl:'/thirdGames/forward?platformEN=ag_platform',
				gameStatus:1
			},
		}
	},
	mounted() {
		this.cookieInit()		
		this.init()
	},
	activated() {
		this.cookieInit()	
		this.Julyfun()
		// this.init()
		if (this.isError) {
			this.init()
		} else {
			if(this.user_token){
				this.$api.getUserInfoNoWarn({ transferOut: '1' })
			}
		}
	},
	computed:{
		...mapGetters([
			'July',
			'user_token'
    ]),
	},
	methods: {
		cookieInit(){
			let getCookie=this.getCookie('zzp')
			if(!getCookie){
				this.hongbaoShow=true
				this.setCookie('zzp','123',1)
			}
		},
		getCookie(cname){
			var name = cname + "=";
			var ca = document.cookie.split(';');
			for(var i=0; i<ca.length; i++) 
			{
				var c = ca[i].trim();
				if (c.indexOf(name)==0) return c.substring(name.length,c.length);
			}
			return "";
		},
		setCookie(name,value,days){//设置cookie
			var curDate = new Date();
			var curTamp = curDate.getTime();
			var curWeeHours = new Date(curDate.toLocaleDateString()).getTime() - 1;
			var passedTamp = curTamp - curWeeHours;
			var leftTamp = 24 * 60 * 60 * 1000 - passedTamp;
			var leftTime = new Date();
			leftTime.setTime(leftTamp + curTamp);
			document.cookie = name + "=" + escape(value) + ";expires=" + leftTime.toGMTString(); 
		},
		topage(){
			this.$router.push('/share')
			this.hongbaoShow=false
		},
		...mapMutations({
			setJuluShow:'SET_JULY_SHOW'
		}),
		downJuly(){
			this.JulyShow=false
			this.setJuluShow(false)
		},
		Julyfun(){
			if(this.July){
				setTimeout(()=>{
          this.JulyShow=true
        },500)
			}
		},
		gotogame(){
			this.JulyShow=false
			this.setJuluShow(false)
			this.$refs.bottomSwiper.open(this.Julygame)
		},
		async init() {
			let loading = this.$loading({ text: '正在加载…' })
			try {
				await Promise.all([this.getHomeHeadData(), this.getHomeGameData()])
				loading.close()
				this.isShow = true
				this.isError = false
			} catch {
				this.isError = true
				loading.close()
			}
		},
		getHomeHeadData() {
			return this.$http.post('/home/getHomeHeadData').then(res => {
				if (res.code == '200') {
					this.swiperTopData = res.data.image
					this.notice = res.data.notice.map(n => {
						return n.content
					})
				}
			})
		},
		getHomeGameData() {
			return this.$http.post('/home/getGameList').then(res => {
				if (res.code == '200') {
					if (res.data.gameList && res.data.main) {
						res.data.gameList.unshift(res.data.main)
						this.swiperBottomData = res.data.gameList
					}
				}
			})
		}
	}
}
</script>
<style lang='less'>
.mask{
	position: fixed;
	left:0;
	top:0;
	width:100%;
	height:100%;
	background: rgba(0, 0, 0, 0.7);
	z-index: 999;
	.mask_div{
		width:290px;
		height:336px;
		position: absolute;
		left:0;
		top:0;right:0;bottom:0;
		margin: auto;
		img{
			width:100%;
			height:100%
		}
		.img{
			width:21px;
			height:21px;
			position: absolute;
			right:0px;
			top:-50px;
		}
	}
}
.JulyActivities{
	position: fixed;
  width:100%;height:100%;
  left:0;bottom:0;
  background: rgba(0, 0, 0, 0.5);
	z-index:999999;
	.centent{
		width:315px;
		height:448px;
		margin: 0 auto;
		margin-top:86px;
		background: #fff;
		border-radius: 4px;
		position: relative;
		.centent_head{
			width:315px;
			height:84px;
			background: url('./img/03July.png') no-repeat;
			background-size: 100% 100%;
			padding-top:15px;
			.centent_head_p1{
				line-height: 25px;
				font-size: 16px;
				color: #333333;
				padding: 0 21px;
				font-weight: bold;
				text-align: center;
			}	
			.centent_head_p2{
				line-height: 18px;
				font-size: 13px;
				color:#747474;
				margin-top:12px;
				padding: 0 21px
			}		
		}
		.table_div{
			width:273px;
			padding:  8px 21px;
      .actv_table12 {
        display: flex;
        align-items: stretch;
        border-top: 1px solid #6C6C6C;
        border-right: 1px solid #6C6C6C;
        font-size: 10px;
        line-height: 14px;
        text-align: center;
        color:#333333;
        .col3_0 {
          flex: 38%;
        }
        .col3_1 {
          flex-basis: 30%;
        }
        .col2 {
          flex-basis: 30%;
          display: flex;
          flex-direction: column;
        }
        .row1 {
          padding: 5px 0;
          height: 24px;
          box-sizing: border-box;
          border-left: 1px solid #6C6C6C;
          border-bottom: 1px solid #6C6C6C;
        }
        .row2 {
          border-left: 1px solid #6C6C6C;
          border-bottom: 1px solid #6C6C6C;
        }
        .row2_0 {
          padding: 5px 0;
        }
        .row2_1 {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          justify-content: center;
          flex-direction: column;
          letter-spacing: 2px;
          p{
            text-align: left;
            margin-left:5px;
            line-height: 18px;
          }
        }
      }
		}
		.btn{
      width:168px;
      height:40px;
      font-size: 13px;
      color: #fff;
      margin: 12px auto;
      text-align: center;
			line-height: 40px;
			border-radius: 4px;
			background: linear-gradient(to right, #4990E2 0%,#7EC1F0 100%);
		}
		.Shutdown{
      position: absolute;
      width:21px;
      height:21px;
      bottom:-40px;
      left:150px;
      background: url('./img/Shutdown.png') no-repeat;
      background-size: 100% 100%
    }
	}
}
.home_wrapper {
	.top {
		margin-bottom: 12px;
	}
	.home {
		padding: 12px 0;
	}
}
</style>
