<template>
	<div class="bet-wrapper display-flex flex-column">
		<div class="header-container">
			<div class="header-box">
				<ims-header title="投注记录" @onRightClick="onRightClick" :rightIcon="true">
				</ims-header>
			</div>
		</div>
		<div class="formTitle">
			<div class="flexBox display-flex">
				<div class="left flex-1 display-flex">
					<div class="name flex-1">
						<b>名称</b>
					</div>
					<div class="time flex-1"><b>时间</b></div>
				</div>
				<div class="right flex-1 display-flex">
					<div class="tz flex-1"><b>投注</b></div>
					<div class="profit flex-1"><b>盈亏</b></div>
				</div>
			</div>
		</div>
		<div class="main flex-1">
			<van-pull-refresh v-if="details.length > 0" v-model="isLoading" @refresh="onRefresh">
				<van-list v-model="Listloading" :finished="finished" finished-text="没有更多了" @load="loadMore">
					<div class="itemWrap">
						<div class="listItem display-flex" v-for="(item,index) in details" :key="index">
							<div class="left flex-1 display-flex">
								<div class="cp_type flex-1">
									<p>{{ item.platform }}</p>
									<p style="font-size:12px;">{{ item.gameName }}</p>
								</div>
								<div class="datebox flex-1">
									<p v-if="item.betTime">{{item.betTime.split(' ')[0]}}</p>
									<p v-if="item.betTime">{{item.betTime.split(' ')[1]}}</p>
								</div>
							</div>
							<div class="right flex-1 display-flex">
								<div class="status flex-1 display-flex">- {{item.betNumber}}</div>
								<div
									class="money flex-1 display-flex"
									:style="{color: item.netNumber >= 0 ? '#89C5A6' : '#E0877F'}"
								>{{item.netNumber >= 0?'+':''}}{{item.netNumber}}</div>
							</div>
						</div>
					</div>
				</van-list>
			</van-pull-refresh>
			<noData v-else></noData>
		</div>
		<div class="bottom-popup-container">
			<van-popup v-model="switchs.showPopup" position="bottom">
				<div v-for="(v,k) in popList" :key="k" class="popup-item ims--txt--midum" @click="searchData(v)">{{ v.date_text }}</div>
				<div class="popup-item cacle-txt" @click="switchs.showPopup = false">取消</div>
			</van-popup>
		</div>
	</div>
</template>

<script>
import { findUserRecord } from '../../js/network'
import noData from "../../components/noData/noData"
export default {
	data() {
		return {
			switchs: {
				showPopup: false
			},
			popList: [
				{ date_text: '全部', data_type: '' },
				{ date_text: '最近三天', data_type: '2' },
				{ date_text: '最近一周', data_type: '3' },
				{ date_text: '最近一月', data_type: '4' }
			],
			details: [],
			isDateShow: false,
			date_type_now: '', // 当前所显示数据的日期范围
			isLoading: false, //  下拉刷新loadding
			Listloading: false, //  上拉加载loadding
			finished: false,
			pageData: {
				page_no: '1',
				page_size: '20',
				data_type: '5'
			}
		}
	},
	created() {
		history.scrollRestoration = 'manual'
		this.$emit('showChoose')

		this.net_getData(0, this.pageData)
	},
	methods: {
		searchData(item) {
			if (item == undefined) {
				this.pageData.data_type = '5'
			} else {
				this.pageData.data_type = item.data_type
			}
			document.documentElement.scrollTop = 0
			this.switchs.showPopup = false //  关闭日期popup
			this.Listloading = false //
			this.finished = false

			this.pageData.page_no = '1'
			this.net_getData(0, this.pageData)
		},
		//  上拉加载
		loadMore() {
			this.pageData.page_no++
			this.net_getData(2, this.pageData)
		},
		//  下拉刷新
		onRefresh() {
			this.pageData.page_no = '1'
			this.finished = false
			this.net_getData(1, this.pageData)
		},
		showPopup() {
			this.isDateShow = true
		},
		net_getData(type, param) {
			/**
			 * type 控制初始化，下拉刷新   上拉加载三种状态
			 * type : 0   //  初始化， 下拉加载
			 * type : 1   //  下拉刷新
			 * type : 2   //  上拉加载
			 */
			return this.$http.post('/gameRecord/findUserRecord', param).then(res => {
				if (res.code == '200') {
					if (type == 0) {
						//  初始化数据不够20条时  不显示底部的‘没有更多了’的提示
						if (res.data.data.length < this.pageData.page_size) {
							this.Listloading = false
							this.finished = true
						}
					} else if (type == 1) {
						this.isLoading = false
					} else if (type == 2) {
						for (const item of res.data.data) {
							this.details.push(item)
						}
						this.Listloading = false
						if (res.data.data.length < this.pageData.page_size) {
							this.finished = true //  控制没有更多数据了的状态
						}
						return
					}
					this.details = res.data.data
				} else {
					toast(res.msg)
				}
			})
		},
		onRightClick() {
			this.switchs.showPopup = true
		}
	},
	components:{
		noData
	}
}
</script>

<style lang="less" scoped>
.bet-wrapper {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: @base_color;
	.header-container {
		.header-box {
			height: 49px;
		}
	}
	.formTitle {
		position: fixed;
		top: 50px;
		left: 0;
		right: 0;
		z-index: 899;
		color: #333;
		line-height: 30px;
		text-align: left;
		background: #ffffff;
		border-bottom: 1px solid #f2f2f2;
		.flexBox {
			padding: 0 12px;
			.tz,
			.profit {
				text-indent: 20px;
			}
		}
	}
	.main {
		padding-top: 30px;
		background-color: #fff;
		.van-pull-refresh {
			border-top: 1px solid #f2f2f2;
		}
		.itemWrap {
			.listItem {
				color: #333;
				font-size: 14px;
				padding: 20px 12px;
				border-bottom: 1px solid #f2f2f2;
				.left {
					align-items: center;
					.datebox {
						text-align: left;
						font-size: 12px;
					}
				}

				.right {
					align-items: center;
					.status {
						text-indent: 20px;
					}
					.money {
						text-indent: 20px;
					}
				}
			}
		}
		.loading-slot {
			.loading-img {
				height: 34px;
				width: 34px;
				margin-top: 6px;
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
<style lang="less">
.bet-wrapper {
	.van-pull-refresh__track {
		height: 100%;
	}
}
</style>

