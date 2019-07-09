<template>
	<div class="actv_detail headview_wrapper">
		<ims-header title="活动详情" />
		<div v-if="isShow" class="actv_main">
			<!-- 在这里绑定html -->
			<div v-if="!is_8888" v-html="html"></div>
			<div v-else>
				<!--活动 12 初次相遇 豪礼相赠   注册免费送88元彩金-->
				<div v-if="is_8888" style="padding-bottom:24px;">
					<div class="actv_h">初次相遇 豪礼相赠 注册免费送188元彩金</div>
					<p class="actv_p">
						活动时间：即日起
						<br />活动对象：YG娱乐全体人员
						<br />活动内容：即日起成功注册成为我司会员，即可获得免费赠送的188元的迎新豪礼！只需达到对应的条件即可领取相应的彩金，盈利到指定的金额即可申请提款，赠送人数无上限！尚未注册/存款的亲们强烈建议您注册/存款，超多优惠等着您噢！
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
							<div class="row1">6元</div>
							<div class="row1">8元</div>
							<div class="row1">48元</div>
							<div class="row1">58元</div>
							<div class="row1">68元</div>
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
					<div>
						<div class="actv_h5">
							<span class="actv_reat"></span>申请方式
						</div>
						<div class="actv_8888">
							<div class="actv_8888_t margin_bottom_2">
								<div class="flex_30">48元</div>
								<div class="flex_40">58元</div>
								<div class="flex_30">68元</div>
							</div>
							<img class="actv_8888_img" src="../../assets/actv_0.png" />
							<div class="actv_8888_t actv_font_0 margin_bottom_8">
								<div class="flex_30">第三天登录</div>
								<div class="flex_40">第四天登录</div>
								<div class="flex_30">第五天登录</div>
							</div>
							<div v-if="btns_8888.length > 0" class="actv_8888_t">
								<div v-for="(btn,index) in btns_8888" :key="index" class="flex_30">
									<button
										class="actv_8888_btn"
										:class="{btns_8888_disabled:btn.disabled ? true : false}"
										:disabled="btn.disabled"
										@click="getBonus(btn)"
									>{{btn.text}}</button>
								</div>
							</div>
						</div>
					</div>
					<div class="actv_h5">
						<span class="actv_reat"></span>活动细则
					</div>
					<p class="actv_p">
						1.所赠送的彩金需一倍流水方可提款；
						<br />2.活动期间，第一天和第二天系统自动派发，
						<br />第三天彩金领取，需要进行有效投注一次，当日充值金额满100元以上，即可领取赠送彩金48元
						<br />第四天彩金领取，当天有效投注达到500元以上，可领取58元彩金
						<br />第五天彩金领取，当天有效投注达到1000元以上，可领取第五天彩金68元
						<br />免费赠送彩金总计：188元；
						<br />3.申请的彩金必须有进行娱乐，才可以继续申请后续彩金；
						<br />4.参与该活动，领取彩金后如未登录或娱乐，间隔时间超出七天后，将无法再次参与活动；
						<br />5.所有优惠特为玩家而设，如发现任何团体或个人以不诚实方式套取红利或任何威胁，滥用公司优惠等行为，公司保留冻结，取消该团体或个人账户及账户结余的权利；
						<br />6.公司规定无风险注单不计算有效投注额，无风险注单包括：游戏中同时投注黑白、龙虎、庄闲、投注直注胜率不可超过70%,任何非法套取优惠行为将扣除产生的盈利。
					</p>
				</div>
			</div>

			<div v-if="id==98">
				<div class="actv_h">首次使用云闪付App入款，额外赠送10%，限时优惠</div>
				<p class="actv_p">
					活动时间：即日起
					<br />活动对象：YG娱乐全体人员
					<br />活动内容：即日起YG娱乐会员首次使用银联云闪付入款成功，即可申请赠送10%的彩金，仅限银联云闪付首次入款优惠。
				</p>
				<div class="actv_h5">
					<span class="actv_reat"></span>银联云闪付入款奖励规则
				</div>
				<p class="actv_p">
					1.首次使用银联云闪付入款，额外赠送10%，需手动申请；
					<br />2.二次往后充值，每次都可享受充值优惠1%的赠送彩金。
				</p>
				<div class="actv_h5">
					<span class="actv_reat"></span>活动细则
				</div>
				<p class="actv_p">
					1. 首次赠送彩金需进行活动申请，会员账号绑定的手机号需要与银联云闪付的账号一致，方可申请成功；
					<br />2. 使用银联云闪付第二次往后充值赠送1%的彩金优惠，入款成功立即赠送，无需审核；
					<br />3.彩金赠送10%只限当天领取有效，当天24:00后将不再享受赠送彩金，如账号没有领取过该彩金，再次充值后即可申请享受首次10%的赠送彩金；
					<br />4. 所赠送的彩金需达到一倍流水即可申请出款，且与其他优惠共享；
					<br />5. 所有优惠特为玩家而设，如发现任何团体或个人以不诚实方式套取红利或任何威胁，滥用公司优惠等行为，公司保留冻结，取消该团体或个人账户及账户结余的权利。
				</p>
				<div style="width:100%;height:40px;margin:30px 0;display: flex;justify-content:space-around;">
					<a
						target="_blank"
						style="display:block;width:132px;height:36px;"
						href="https://apps.apple.com/cn/app/%E4%BA%91%E9%97%AA%E4%BB%98-%E9%93%B6%E8%A1%8C%E4%B8%9A%E7%BB%9F%E4%B8%80%E7%A7%BB%E5%8A%A8%E6%94%AF%E4%BB%98app/id600273928"
					>
						<img style="width:100%;height:100%" src="./img/pingguo.png" alt />
					</a>
					<a
						target="_blank"
						style="display:block;width:132px;height:36px;"
						href="https://sj.qq.com/myapp/detail.htm?apkName=com.unionpay"
					>
						<img style="width:100%;height:100%" src="./img/anzuo.png" alt />
					</a>
				</div>
				<div class="lunbo">
					<van-swipe :show-indicators="flag" :autoplay="1800" indicator-color="#8A75FF">
						<van-swipe-item>
							<img src="./img/one.png" alt />
						</van-swipe-item>
						<van-swipe-item>
							<img src="./img/two.png" alt />
						</van-swipe-item>
						<van-swipe-item>
							<img src="./img/three.png" alt />
						</van-swipe-item>
						<van-swipe-item>
							<img src="./img/si.png" alt />
						</van-swipe-item>
						<van-swipe-item>
							<img src="./img/wu.png" alt />
						</van-swipe-item>
						<van-swipe-item>
							<img src="./img/liu.png" alt />
						</van-swipe-item>
					</van-swipe>
					<div class="left"></div>
					<div class="right"></div>
				</div>
			</div>
			<div v-if="id==107">
				<div class="actv_h">添加MT客服号，一对一服务，365*24h在线，首次使用还有18元彩金免费领</div>
				<p class="actv_p">
					活动时间：即日起
					<br />活动对象：YG娱乐全体人员
					<br />活动内容：成即日起YG娱乐所有会员成功添加客服MT，即可免费领取18元彩金。
					<br />
					<br />一对一的专线服务！您的问题，让我们处理的更专业，回复的更及时，一直在线，永不失联。
					<br />
					<br />【MT客服App】是一款即时通讯的社交软件，使用MT app 联系客服，我们一年365天，全年无休，一天24小时在线，只为您答疑解惑，提供更好、更专业的服务。
				</p>
				<div class="actv_h5">
					<span class="actv_reat"></span>奖励规则
				</div>
				<p class="actv_p">
					成功添加YG娱乐客服号，
					<span style="color:#FF33CB;">18元</span>彩金免费赠送，先到先得，限时优惠。
				</p>
				<div class="actv_h5">
					<span class="actv_reat"></span>活动细则
				</div>
				<p class="actv_p">
					1.添加MT客服号888888，即可领取免费彩金；
					<br />2.赠送彩金的领取方式：
				</p>
				<p class="actv_p" style="padding-left:1em;">
					a)下载并注册成功，在MT app添加我们的MT客服号，添加成功后，把您的YG娱乐账号发送给客服，即可在活动详情点击彩金申请啦；
					<br />b)完成以上操作，客服核对无误后，将会把赠送的彩金发送到您的YG娱乐账号；
				</p>
				<p class="actv_p">
					3.该彩金赠送仅限充值用户；
					<br />4.所赠送的彩金需达到一倍流水即可申请出款，且与其他优惠共享；
					<br />5.所有优惠特为玩家而设，如发现任何团体或个人以不诚实方式套取红利或任何威胁，滥用公司优惠等行为，公司保留冻结，取消该团体或个人账户及账户结余的权利。
				</p>
				<div style="color:#FF33CB;margin:20px auto 11px;text-align:center;cursor: pointer;">
					<span>MT客服号：888888</span>
					<span
						style="color:#0188FE;display:inline-block;padding:7px 10px;cursor: pointer;"
						onclick="void(0)"
						class="copy needsclick"
						:data-clipboard-text="888888"
					>复制</span>
				</div>
				<a class="needsclick" style="cursor: pointer;" href="http://42.51.34.59/">
					<img style="width:134px;height:52px;display:block;margin:0 auto;" src="./img/aaa.png" />
				</a>
				<p style="color:#838383;margin:8px auto 30px;text-align:center;">客服不断联，永远在线，只为您服务</p>
			</div>
			<div v-show="!is_8888 && !appWeb" class="actv_btn_box">
				<button v-if="show" class="actv_btn" @click="submit">立即申请</button>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import clipboard from 'clipboard'
export default {
	data() {
		return {
			isShow: false,
			id: '',
			html: '',
			is_8888: false,
			btns_8888: [],
			flag: false,
			appWeb: false,
			show: true
		}
	},
	computed: {
		...mapGetters(['platformFlag', 'user_token', 'account'])
	},
	watch: {
		account: {
			handler(val, old) {
				if (val && this.id == '53') {
					this.set_8888()
				}
			},
			deep: true,
			immediate: true
		}
	},
	async mounted() {
		let query = this.$route.query
		this.id = query.id
		this.appWeb = query.appWeb == 'true' ? true : false
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
						toast('您已申请成功，请耐心等候！')
					} else {
						toast(res.msg)
					}
					loading.close()
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
						lists.forEach(list => {
							if (this.id == list.id) {
								this.list = list
								if (list.id == '53') {
									this.set_8888()
								} else {
									if (list.isShowApply == 0) {
										this.show = false
										// this.is_8888=true
									}
									this.html = list.detailDemo
								}
								this.isShow = true
								if (list.id == '107') {
									this.$nextTick(() => {
										new clipboard('.copy').on('success', () => {
											toast('MT客服号已经复制成功，快去添加吧')
										})
									})
								}
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
					if (res.code == '2037') {
						toast({
							duration: 3000,
							message: res.msg
						})
					} else {
						toast(res.msg)
					}
				}
			})
		},
		set_8888() {
			this.btns_8888 = []
			let account = this.account || {}
			if (account.ownActivityStatus == '1') {
				this.is_8888 = true
				return
			}
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
			return this.btns_8888
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
.p1 {
	margin-top: 15px;
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
