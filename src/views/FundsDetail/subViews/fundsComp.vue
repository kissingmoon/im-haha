<template>
	<div class="list-box">
		<no-data v-if="initFinish && recList.length==0"></no-data>
		<van-pull-refresh v-if="initFinish && recList.length>0" v-model="refLoading" @refresh="onRefresh">
			<van-list
				v-model="moreLoading"
				:finished="finished"
				finished-text="没有更多了"
				@load="onLoad"
				:offset="30"
			>
				<div class="list-content">
					<div class="list-title--block display-flex flex-column flex-center">
						<div v-if="activeTab == 0" class="list-title--txt">总收入</div>
						<div v-if="activeTab == 1" class="list-title--txt">总支出</div>
						<div
							class="list-title__num"
							:class="{'txt-color__income': activeTab == 0,'txt-color__out':activeTab == 1}"
						>
							<span style="font-size:20px">￥</span>
							<span v-show="initFinish">{{ totalMoney }}</span>
						</div>
					</div>
					<div class="list-data--block">
						<div class="data-item display-flex align-center" v-for="(v,k) in recList" :key="k">
							<div class="item-col__left">
								<div>{{ v.type }}</div>
								<div v-if="v.type != '活动奖励'">{{v.source }}</div>
							</div>
							<div class="item-col__middle">
								<div>{{ v.time.split(' ')[0] }}</div>
								<div>{{ v.time.split(' ')[1] }}</div>
							</div>
							<div
								class="item-col__right flex-1"
								:class="{'txt-color__income': activeTab == 0,'txt-color__out':activeTab == 1}"
							>{{ activeTab == 0?"+":"-"}}{{ v.money }}</div>
						</div>
					</div>
				</div>
			</van-list>
		</van-pull-refresh>
	</div>
</template>

<script>
import { net_getIncomList, net_getPayRecList } from '@/js/network.js'
import noData from '../../../components/noData/noData'

export default {
	data() {
		return {
			queryParam: {
				page_no: '1',
				page_size: '20',
				date_type: '5' //  5：全部数据    4：月数据   3：周数据   2：当前3天数据
			},
			refLoading: false,
			moreLoading: false,
			finished: false,
			recList: [],
			recListTotal: 0,
			initFinish: false,
			totalMoney: ''
		}
	},
	props: {
		activeTab: {
			type: Number,
			default: 0
		},
		dateType: {
			type: String,
			default: '5'
		}
	},
	watch: {
		activeTab(newVal, oldVal) {
			this.init()
		},
		dateType(newVal, oldVal) {
			this.queryParam.date_type = newVal
			this.init()
		}
	},
	created() {
		this.init()
	},
	components: {
		noData
	},
	methods: {
		init() {
			let queryParam = {
				page_no: '1'
			}
			Object.assign(this.queryParam, queryParam)
			this.finished = false
			this.recList = []
			this.initFinish = false
			this.getRecList(this.queryParam, 'init')
		},
		async getRecList(param, type) {
			let res = {}
			if (this.activeTab == 0) {
				res = await net_getIncomList(param)
			} else if (this.activeTab == 1) {
				res = await net_getPayRecList(param)
			}
			if (type == 'ref') {
				if (res.code == '200') {
					this.recList = res.data.data
					this.refLoading = false
					if (this.recList.length < this.queryParam.page_size) {
						this.moreLoading = false
						this.finished = true
					}
				}
			} else if (type == 'more') {
				if (res.code == '200') {
					this.recList = this.recList.concat(res.data.data)
					this.moreLoading = false
					if (this.recList.length >= this.recListTotal) {
						this.finished = true
					}
				}
			} else if (type == 'init') {
				this.recList = res.data.data
				this.recListTotal = res.data.totalCount
				this.totalMoney = res.data.totalMoney
				this.initFinish = true
				if (this.recList.length < parseInt(this.queryParam.page_size)) {
					this.moreLoading = false
					this.finished = true
				}
			}
		},
		onLoad() {
			if (this.initFinish) {
				if (this.recList.length >= this.recListTotal) {
					this.moreLoading = false
					this.finished = true
					return
				}
				this.queryParam.page_no++
				this.getRecList(this.queryParam, 'more')
			} else {
				this.moreLoading = false
			}
		},
		onRefresh() {
			console.log('开始刷新')
			this.queryParam.page_no = '1'
			this.finished = false
			this.getRecList(this.queryParam, 'ref')
		}
	}
}
</script>

<style lang="less" scoped>
.list-box {
	height: 100%;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
	/deep/.van-pull-refresh {
		min-height: 100%;
	}
	.list-content {
		.list-title--block {
			height: 125px;
			background-color: rgba(255, 255, 255, 0.5);
			margin-bottom: 10px;
			.list-title__num {
				margin-top: 5px;
				font-size: 24px;
				font-weight: bold;
			}
		}
		.list-data--block {
			background-color: rgba(255, 255, 255, 0.5);
			padding: 0 15px;
			.data-item {
				padding: 0 9px;
				height: 50px;
				border-bottom: 1px solid @base_color;
				&:last-child {
					border: none;
				}
				.item-col__left {
					width: 100px;
				}
				.item-col__middle {
					width: 108px;
					text-align: right;
				}
				.item-col__right {
					text-align: right;
					font-size: 14px;
				}
			}
		}
		.txt-color__income {
			color: #e0877f;
		}
		.txt-color__out {
			color: #89c5a6;
		}
	}
}
</style>
