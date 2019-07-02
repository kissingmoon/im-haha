<template>
	<div class="actv_detail headview_wrapper">
		<ims-header title="活动详情"/>
		<div v-if="isShow" class="actv_main">
			<!-- 在这里绑定html -->
			<div v-if="!is_8888" v-html="html">
				<!-- <div v-if="true"> -->
			</div>
			<div v-else>
				<!--活动 12 初次相遇 豪礼相赠   注册免费送88元彩金-->
				<div v-if="is_8888" style="padding-bottom:24px;">
					<div class="actv_h">初次相遇 豪礼相赠 注册免费送88元彩金</div>
					<p class="actv_p">
						活动时间：即日起
						<br>活动对象：YG娱乐全体人员
						<br>活动内容：即日起成功注册成为我司会员，即可获得免费赠送的88元的迎新豪礼！只需达到对应的条件即可领取相应的彩金，盈利到指定的金额即可申请提款，赠送人数无上限！尚未注册/存款的亲们强烈建议您注册/存款，超多优惠等着您噢！
					</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>奖励规则
					</div>
					<div class="actv_table12">
						<div class="col2">
							<div class="row2 row2_0">活动对象</div>
							<div class="row2 row2_1">新注册会员</div>
						</div>
						<div class="col3 col3_0">
							<div class="row1">领取条件</div>
							<div class="row1">第一天登录</div>
							<div class="row1">第二天登录</div>
							<div class="row1">第三天登录</div>
							<div class="row1">第四天登录</div>
							<div class="row1">第五天登录</div>
						</div>
						<div class="col3 col3_1">
							<div class="row1">彩金金额</div>
							<div class="row1">5元</div>
							<div class="row1">8元</div>
							<div class="row1">15元</div>
							<div class="row1">25元</div>
							<div class="row1">35元</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">提款要求</div>
							<div class="row2 row2_1">满100元</div>
						</div>
						<div class="col3 col3_1">
							<div class="row1">领取方式</div>
							<div class="row1">自动派发</div>
							<div class="row1">自动派发</div>
							<div class="row1">手动领取</div>
							<div class="row1">手动领取</div>
							<div class="row1">手动领取</div>
						</div>
					</div>
					<div class="actv_h5">
						<span class="actv_reat"></span>申请方式
					</div>
					<div class="actv_8888">
						<div class="actv_8888_t margin_bottom_2">
							<div class="flex_30">15元</div>
							<div class="flex_40">25元</div>
							<div class="flex_30">35元</div>
						</div>
						<img class="actv_8888_img" src="../../assets/actv_0.png">
						<div class="actv_8888_t actv_font_0 margin_bottom_8">
							<div class="flex_30">第三天登录</div>
							<div class="flex_40">第四天登录</div>
							<div class="flex_30">第五天登录</div>
						</div>
						<div class="actv_8888_t">
							<div v-for="(btn,index) in btns_8888" :key="index" class="flex_30">
								<button
									class="actv_8888_btn"
									:class="{btns_8888_disabled:btn.disabled ? true : false}"
									@click="getBonus(btn)"
								>{{btn.text}}</button>
							</div>
						</div>
					</div>
					<div class="actv_h5">
						<span class="actv_reat"></span>活动细则
					</div>
					<p class="actv_p">
						1.所赠送的彩金需一倍流水方可提款；
						<br>2.登录期间第二天领取彩金后，要有一次充值记录，才可领取第三天赠送的彩金，第三天领取后要有充值记录，才可领取第四天的，以此类推，方可领取88元全部彩金；
						<br>3.彩金不可累积申请后下注，必须在每次申请后进行娱乐或提现，申请彩金时账户额度不能大于5元；
						<br>4.所有优惠特为玩家而设，如发现任何团体或个人以不诚实方式套取红利或任何威胁，滥用公司优惠等行为，公司保留冻结，取消该团体或个人账户及账户结余的权利；
						<br>5.公司规定无风险注单不计算有效投注额，无风险注单包括：游戏中同时投注黑白、龙虎、庄闲、投注直注胜率不可超过70%,任何非法套取优惠行为将扣除产生的盈利。
					</p>
				</div>
				<!-- <div >
					<div class="actv_h">云闪付充值优惠3天乐，极速入款，秒到账</div>
					<p class="actv_p">
						活动时间：2019年06月21日至2019年06月23日<br>
						活动对象：YG娱乐全体会员<br>
						活动内容：今日起YG娱乐会员凡是在活动期间使用云闪付充值入款，充值金额达到指定条件，即可申请云闪付充值奖励。
					</p>
					<p  style="height:15px"></p>
					<p class="actv_p ">
						云闪付活动期间充值奖励与每笔充值<sapn style="color:#333">赠送1%的彩金可共享</sapn>，活动期间充值越多优惠越多哦！
					</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>奖励规则
					</div>
					<div class="actv_table12">
						<div class="col3 col3_0">
							<div class="row1">云闪付入款金额</div>
							<div class="row1">500元+</div>
							<div class="row1">1000元+</div>
							<div class="row1">3000元+</div>
							<div class="row1">4999元+</div>
						</div>
						<div class="col2 ">
							<div class="row2 row2_1">赠送彩金</div>
							<div class="row2 row2_1">15元</div>
							<div class="row2 row2_1">35元</div>
							<div class="row2 row2_1">55元</div>
							<div class="row2 row2_1">68元</div>
						</div>

						<div class="col2">
							<div class="row2 row2_0">流水要求</div>
							<div class="row2 row2_1">一倍流水</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">游戏限制</div>
							<div class="row2 row2_1">不限</div>

						</div>
					</div>
					<div class="actv_h5">
						<span class="actv_reat"></span>活动细则
					</div>
					<p class="actv_p">
						1.活动期间充值奖励与首次使用云闪付赠送10%彩金不可共享；
						<br>如：A用户使用云闪付充值入款一笔后，在首次使用云闪付活动里进行申请并获得了10%的首次使用赠送彩金，再次点击该充值赠送彩金活动的申请，则无效。
						<br>2.活动期间的充值奖励与云闪付每笔充值赠送1%的彩金可共享；
						<br>3.所赠送的彩金需达到一倍流水即可申请出款，不再与其他优惠共享；
						<br>4.所有优惠特为玩家而设，如发现任何团体或个人以不诚实方式套取红利或任何威胁，滥用公司优惠等行为，公司保留冻结，取消该团体或个人账户及账户结余的权利。
					</p>
				</div> -->
			</div>

			<div v-if="id==98">
				<div class="actv_h">首次使用云闪付App入款，额外赠送10%，限时优惠</div>
				<p class="actv_p">
					活动时间：即日起
					<br>活动对象：YG娱乐全体人员
					<br>活动内容：即日起YG娱乐会员首次使用银联云闪付入款成功，即可申请赠送10%的彩金，仅限银联云闪付首次入款优惠。
				</p>
				<div class="actv_h5">
					<span class="actv_reat"></span>银联云闪付入款奖励规则
				</div>
				<p class="actv_p">
					1.首次使用银联云闪付入款，额外赠送10%，需手动申请；
					<br>2.二次往后充值，每次都可享受充值优惠1%的赠送彩金。
				</p>
				<div class="actv_h5">
					<span class="actv_reat"></span>活动细则
				</div>
				<p class="actv_p">
					1. 首次赠送彩金需进行活动申请，会员账号绑定的手机号需要与银联云闪付的账号一致，方可申请成功；
					<br>2. 使用银联云闪付第二次往后充值赠送1%的彩金优惠，入款成功立即赠送，无需审核；
					<br>3.彩金赠送10%只限当天领取有效，当天24:00后将不再享受赠送彩金，如账号没有领取过该彩金，再次充值后即可申请享受首次10%的赠送彩金；
					<br>4. 所赠送的彩金需达到一倍流水即可申请出款，且与其他优惠共享；
					<br>5. 所有优惠特为玩家而设，如发现任何团体或个人以不诚实方式套取红利或任何威胁，滥用公司优惠等行为，公司保留冻结，取消该团体或个人账户及账户结余的权利。
				</p>
				<div style="width:100%;height:40px;margin:30px 0;display: flex;justify-content:space-around;">
					<a
						target="_blank"
						style="display:block;width:132px;height:36px;"
						href="https://apps.apple.com/cn/app/%E4%BA%91%E9%97%AA%E4%BB%98-%E9%93%B6%E8%A1%8C%E4%B8%9A%E7%BB%9F%E4%B8%80%E7%A7%BB%E5%8A%A8%E6%94%AF%E4%BB%98app/id600273928"
					>
						<img style="width:100%;height:100%" src="./img/pingguo.png" alt>
					</a>
					<a
						target="_blank"
						style="display:block;width:132px;height:36px;"
						href="https://sj.qq.com/myapp/detail.htm?apkName=com.unionpay"
					>
						<img style="width:100%;height:100%" src="./img/anzuo.png" alt>
					</a>
				</div>
				<div class="lunbo">
					<van-swipe :show-indicators="flag" :autoplay="1800" indicator-color="#8A75FF">
						<van-swipe-item>
							<img src="./img/one.png" alt>
						</van-swipe-item>
						<van-swipe-item>
							<img src="./img/two.png" alt>
						</van-swipe-item>
						<van-swipe-item>
							<img src="./img/three.png" alt>
						</van-swipe-item>
						<van-swipe-item>
							<img src="./img/si.png" alt>
						</van-swipe-item>
						<van-swipe-item>
							<img src="./img/wu.png" alt>
						</van-swipe-item>
						<van-swipe-item>
							<img src="./img/liu.png" alt>
						</van-swipe-item>
					</van-swipe>
					<div class="left"></div>
					<div class="right"></div>
				</div>
			</div>

			<div v-show="!is_8888" class="actv_btn_box">
				<button v-if="show" class="actv_btn" @click="submit">立即申请</button>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	data() {
		return {
			isShow: false,
			id: '',
			html: '',
			is_8888: false,
			btns_8888: [],
			flag: false,
			show:true,
		}
	},
	computed: {
		...mapGetters(['platformFlag', 'user_token', 'account'])
	},
	async mounted() {
		this.id = this.$route.query.id
		console.log(this.id)
		if (!this.id) {
			toast('无效的链接')
			return
		}
		this.getData('')
	},
	methods: {
		submit() {
			if (!this.user_token) {
				toast('暂未登录，请先登录')
				this.$router.push('/login')
				return
			}
			let id = this.list.id
			let loading = this.$loading({ text: '正在申请' })
			this.$http
				.post('/gameActivity/apply/' + id, { platformFlag: this.platformFlag })
				.then(res => {
					if (res.code == 200) {
						loading.close()
						toast('您已申请成功，请耐心等候！')
					} else {
						loading.close()
						toast(res.msg)
					}
				})
				.catch(_ => {
					loading.close()
				})
		},
		getData(hd_type) {
			let loading = this.$loading({ text: '正在加载…' })
			this.$http
				.get('/gameActivity/list', { page_no: 1, page_size: 100, hd_type: hd_type })
				.then(res => {
					if (res.code == '200') {
						let lists = res.data.data
						console.log(lists)
						lists.forEach(list => {
							if (this.id == list.id) {
								this.list = list
								let html = list.detailDemo
								if (list.id == '53') {
									this.set_8888()
								} else {
									if (list.isShowApply == 0) {
										// this.flag = false
										debugger
										this.is_8888=true
									}
									this.html = html
								}
								this.isShow = true
							}
						})
					} else {
						res.msg && toast(res.msg)
					}
					loading.close()
				})
				.catch(() => {
					loading.close()
				})
		},
		getBonus(btn) {
			if (!this.account.userId) {
				toast('暂未登录，请先登录')
				this.$router.push('/login')
				return
			}
			this.$http.post('/user/freeGetMoney', {}).then(res => {
				if (res.code == 200) {
					Dialog.alert({
						message: '彩金领取成功，已经发放到您的账户，快去查看吧！',
						confirmButtonText: '好的'
					})
					this.$api.getUserInfo()
				} else {
					toast(res.msg)
				}
			})
		},
		set_8888() {
			this.btns_8888 = []
			let account = this.account
			let day3 = {
				disabled: true,
				text: '等待领取',
				day: 3
			}
			let day4 = {
				disabled: true,
				text: '等待领取',
				day: 4
			}
			let day5 = {
				disabled: true,
				text: '等待领取',
				day: 5
			}

			if (account.dayNum == '3') {
				if (account.threeReceive == '0') {
					day3.text = '领取'
					day3.disabled = false
				}
				if (account.threeReceive == '1') {
					day3.text = '已领取'
				}
			}
			if (account.dayNum == '4') {
				if (account.threeReceive == '0') {
					day4.text = '领取'
					day4.disabled = false
				}
				if (account.threeReceive == '1') {
					day4.text = '已领取'
				}
			}
			if (account.dayNum == '5') {
				if (account.threeReceive == '0') {
					day5.text = '领取'
					day5.disabled = false
				}
				if (account.threeReceive == '1') {
					day5.text = '已领取'
				}
			}
			if (account.dayNum > 3) {
				day3.text = '已领取'
			}
			if (account.dayNum > 4) {
				day4.text = '已领取'
			}
			if (account.dayNum > 5) {
				day5.text = '已领取'
			}
			this.btns_8888.push(day3)
			this.btns_8888.push(day4)
			this.btns_8888.push(day5)
			this.is_8888 = true
		}
	}
}
</script>
<style lang="less">
@table_border_color: #333;

.lunbo {
	width: 100%;
	height: 380px;
	position: relative;
	.van-swipe {
		width: 171px;
		height: 346px;
		margin: auto;
		.van-swipe-item {
			width: 100%;
			height: 100%;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	// .van-swipe__indicators{
	// 	position: absolute;
	// 	bottom:-5px
	// }
	.left {
		width: 20px;
		height: 58px;
		position: absolute;
		top: 163px;
		left: 0;
		background: url('./img/zuo.png') no-repeat;
		background-size: 100% 100%;
	}
	.right {
		width: 20px;
		height: 58px;
		position: absolute;
		top: 163px;
		right: 0;
		background: url('./img/you.png') no-repeat;
		background-size: 100% 100%;
	}
}

.actv_detail {
	background: #fff;
	min-height: 100%;
	box-sizing: border-box;
	padding-top: @app_head_height;
	width: 100%;
}
.van-dialog {
	width: 76%;
	border-radius: 6px;
}
.actv_btn_box {
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	padding: 20px 0;
}
.actv_btn {
	display: block;
	width: 173px;
	height: 42px;
	background: linear-gradient(180deg, @color_shallow_blue 0%, @color_deep_blue 100%);
	box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.5), 0px 2px 0px 0px rgba(97, 51, 34, 1),
		0px 1px 0px 0px rgba(255, 234, 152, 1);
	font-size: 17px;
	color: rgba(255, 255, 255, 1);
	line-height: 42px;
	border-radius: 21px;
	transition: all 0.1s linear;
	margin: 0 auto;
}
.actv_btn:active {
	box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5), 0px 1px 0px 0px rgba(97, 51, 34, 1),
		0px 1px 0px 0px rgba(255, 234, 152, 1);
}
.actv_main {
	padding: 0 13px 60px;
	background: #fff;
}
.actv_h {
	font-size: 18px;
	font-weight: bold;
	color: rgba(51, 51, 51, 1);
	line-height: 25px;
	padding: 24px 0 10px;
}
.actv_p {
	font-size: 13px;
	color: rgba(116, 116, 116, 1);
	line-height: 19px;
}
.p1{
	margin-top:15px
}
.actv_h5 {
	padding: 24px 0 10px;
	font-size: 16px;
	font-weight: 500;
	color: @color_deep_blue;
	line-height: 22px;
	display: flex;
	align-items: center;
}
.actv_reat {
	display: inline-block;
	width: 8px;
	height: 8px;
	background: @color_deep_blue;
	transform: rotate(45deg);
	margin-right: 9px;
}
.margin_top_9 {
	margin-top: 9px;
}
.margin_bottom_9 {
	margin-bottom: 9px;
}
</style>
<style lang="less">
// 活动1
.actv_table {
	border-bottom: 1px solid @actv_table_border_color;
	.row {
		display: flex;
		border-left: 1px solid @actv_table_border_color;
		border-top: 1px solid @actv_table_border_color;
	}
	.col {
		flex: 1;
		font-size: 10px;
		color: rgba(51, 51, 51, 1);
		line-height: 14px;
		min-width: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-right: 1px solid @actv_table_border_color;
		padding: 5px 0;
	}
	.col.fb-5 {
		flex-basis: 5em;
	}
}
</style>
<style lang="less">
//活动2
.actv_table2 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
	.col1 {
		flex: 1;
	}
	.col2 {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.row1 {
		padding: 5px 0;
		height: 24px;
		box-sizing: border-box;
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
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
	}
}
</style>
<style lang="less">
//活动3
.actv_table3 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
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
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
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
	}
}
</style>
<style lang="less">
// 活动4
.actv_table4 {
	border-bottom: 1px solid @actv_table_border_color;
	.row {
		display: flex;
		border-left: 1px solid @actv_table_border_color;
		border-top: 1px solid @actv_table_border_color;
	}
	.col {
		flex: 1;
		font-size: 10px;
		color: rgba(51, 51, 51, 1);
		line-height: 14px;
		min-width: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-right: 1px solid @actv_table_border_color;
		padding: 5px 0;
	}
	.col.fb-5 {
		flex-basis: 5em;
	}
}
</style>
<style lang="less">
//活动5
.actv_table5 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
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
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
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
	}
}
</style>
<style lang="less">
//活动6
.actv_table6 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
	.col1 {
		flex: 1;
	}
	.col2 {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.row1 {
		padding: 5px 0;
		height: 24px;
		box-sizing: border-box;
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
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
	}
}
</style>
<style lang="less">
//活动8
.actv_table8 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
	.col1 {
		flex: 1;
	}
	.col2 {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.row1 {
		padding: 5px 0;
		height: 24px;
		box-sizing: border-box;
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
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
	}
}
</style>
<style lang="less">
//活动9
.actv_table9 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
	.col1 {
		flex: 1;
	}
	.col2 {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.row1 {
		padding: 5px 0;
		height: 24px;
		box-sizing: border-box;
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
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
	}
}
</style>
<style lang="less">
//活动10
.actv_table10 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
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
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
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
	}
}
</style>
<style lang="less">
//活动11
.actv_table11 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
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
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
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
	}
}
</style>
<style lang="less">
//活动12
.actv_table12 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
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
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
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
	}
}
</style>
<style lang="less">
//活动13
.actv_table13 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
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
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
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
	}
}
.actv_table13_0 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
	.col3_0 {
		flex: 30%;
	}
	.col3_1 {
		flex-basis: 38%;
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
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
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
	}
}
</style>
<style lang="less" >
//活动 8888
.flex_30 {
	flex-basis: 30%;
}
.flex_40 {
	flex-basis: 40%;
}
.margin_bottom_2 {
	margin-bottom: 2px;
}
.margin_bottom_4 {
	margin-bottom: 4px;
}
.margin_bottom_8 {
	margin-bottom: 8px;
}
.actv_8888 {
	.actv_8888_t {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 16px;
		font-weight: bold;
		color: #ff50a0;
		line-height: 22px;
		text-align: center;
	}
	.actv_font_0 {
		font-size: 10px;
		color: rgba(51, 51, 51, 1);
		line-height: 14px;
	}
	.actv_8888_btn {
		display: block;
		width: 72px;
		height: 24px;
		background: linear-gradient(180deg, @color_shallow_blue 0%, @color_deep_blue 100%);
		box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.5), 0px 2px 0px 0px rgba(97, 51, 34, 1),
			0px 1px 0px 0px rgba(255, 234, 152, 1);
		font-size: 12px;
		color: rgba(255, 255, 255, 1);
		line-height: 24px;
		border-radius: 12px;
		transition: all 0.1s linear;
		margin: 0 auto;
		letter-spacing: 1px;
	}
	.actv_8888_btn:active {
		box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5), 0px 1px 0px 0px rgba(97, 51, 34, 1),
			0px 1px 0px 0px rgba(255, 234, 152, 1);
	}
	.actv_8888_btn.btns_8888_disabled {
		color: rgba(113, 113, 113, 1);
		background: linear-gradient(180deg, rgba(214, 214, 214, 1) 0%, rgba(162, 162, 162, 1) 100%);
		box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.5), 0px 2px 0px 0px rgba(91, 91, 91, 1),
			0px 1px 0px 0px rgba(255, 255, 255, 1);
	}
	.actv_8888_img {
		display: block;
		width: 100%;
		margin-bottom: 9px;
	}
}
.actv_table12 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
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
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
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
	}
}
</style>
<style lang="less">
//活动14
.actv_table14 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
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
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
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
	}
}
.actv_table13_0 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
	.col3_0 {
		flex: 30%;
	}
	.col3_1 {
		flex-basis: 38%;
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
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
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
	}
}
</style>
<style lang="less">
//活动15
.actv_table15 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
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
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
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
	}
}
</style>
