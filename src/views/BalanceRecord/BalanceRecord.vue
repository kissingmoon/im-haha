<template>
	<div class="bet-wrapper display-flex flex-column headview_wrapper">
		<ims-header title="提现记录"/>
		<div class="main-container">
			<no-data v-if="initFinish && drawRecList.length==0"></no-data>
			<van-pull-refresh
				v-if="initFinish && drawRecList.length>0"
				v-model="refLoading"
				@refresh="onRefresh"
			>
				<van-list
					v-model="moreLoading"
					:finished="finished"
					finished-text="没有更多了"
					@load="onLoad"
					:offset="30"
				>
					<div class="list-content">
						<div
							v-for="(v,k) in drawRecList"
							:key="k"
							class="data-item display-flex align-center justify-between"
						>
							<div class="item-col__left">
								<div>{{ v.timeCreated.split(' ')[0] }}</div>
								<div>{{ v.timeCreated.split(' ')[1] }}</div>
							</div>
							<div class="item-col__right">
								<p class="col--num">{{v.changeCoin}}</p>
								<p class="ims--txt--small" v-if="v.flag == '1'" style="color:#00e698">提现成功</p>
								<p class="ims--txt--small" v-else-if="v.flag == '3'" style="color:#A076FF">审核中...</p>
								<p class="ims--txt--small" v-else-if="v.flag == '2'" style="color:#e60012">提现失败</p>
							</div>
						</div>
					</div>
				</van-list>
			</van-pull-refresh>
		</div>
		<div class="bottom-popup-container">
			<van-popup v-model="switchs.showPopup" position="bottom">
				<div v-for="(v,k) in popList" :key="k" class="popup-item ims--txt--midum">{{ v.name }}</div>
				<div class="popup-item cacle-txt" @click="switchs.showPopup = false">取消</div>
			</van-popup>
		</div>
	</div>
</template>

<script>
import { net_getDrawCashRec } from '@/js/network.js'
import noData from '../../components/noData/noData'

export default {
	data() {
		return {
			activeTab: 0,
			refLoading: false,
			moreLoading: false,
			finished: false,
			switchs: {
				showPopup: false
			},
			initFinish: false,
			popList: [
				{
					name: '全部'
				},
				{
					name: '最近三天'
				},
				{
					name: '最近一周'
				},
				{
					name: '最近一月'
				}
			],
			drawRecList: [],
			drawParam: {
				page_no: '1',
				page_size: '20',
				date_type: '5'
			}
		}
	},
	components: {
		noData
	},
	created() {
		history.scrollRestoration = 'manual'
		this.getRecList()
	},
	methods: {
		onLoad() {
			if (this.initFinish) {
				if (this.drawRecList.length < parseInt(this.drawParam.page_no) * parseInt(this.drawParam.page_size)) {
					this.moreLoading = false
					this.finished = true
					return
				}
				this.drawParam.page_no++
				net_getDrawCashRec(this.drawParam).then(res => {
					if (res.code == '200') {
						this.drawRecList = this.drawRecList.concat(res.data)
						this.moreLoading = false
					}
				})
			} else {
				this.moreLoading = false
			}
		},
		onRefresh() {
			this.drawParam.page_no = 1
			this.finished = false
			net_getDrawCashRec(this.drawParam).then(res => {
				if (res.code == '200') {
					this.drawRecList = res.data
					this.refLoading = false
					toast('刷新成功')
				}
			})
		},
		async getRecList() {
			let res = await net_getDrawCashRec(this.drawParam)
			this.initFinish = true
			this.drawRecList = res.data
			if (this.drawRecList.length < parseInt(this.drawParam.page_no) * parseInt(this.drawParam.page_size)) {
				this.moreLoading = false
				this.finished = true
			}
		}
	}
}
</script>

<style lang="less" scoped>
.bet-wrapper {
	position: relative;
	min-height: 100%;
	padding-top: @app_head_height;
	box-sizing: border-box;

	background-color: @base_color;
	/deep/ .van-pull-refresh {
		height: calc(100vh - @app_head_height);
	}
	.main-container {
		.list-content {
			background-color: #ffffff;
			background-color: #ffffff;
			padding: 0 15px;
			.data-item {
				padding: 0 9px;
				height: 50px;
				border-bottom: 1px solid @base_color;
				.item-col__left {
					width: 80px;
				}
				.item-col__middle {
					width: 108px;
					text-align: right;
				}
				.item-col__right {
					text-align: right;
					color: @color_txt_lightRed;
					font-size: 14px;
					.col--num {
						font-size: 15px;
						color: @color_txt_yellow;
					}
				}
			}
		}
	}
	.bottom-popup-container {
		.popup-item {
			height: 50px;
			text-align: center;
			line-height: 50px;
			border-top: 1px solid rgba(222, 222, 222, 1);
			&:first-child {
				border-top: none;
			}
		}
		.cacle-txt {
			font-size: 14px;
			color: @color_txt_blue;
		}
	}
}
</style>
