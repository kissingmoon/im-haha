<template>
	<div class="bet-wrapper display-flex flex-column">
		<ims-header title="投注记录">
			<div slot="right" class="header-cottage" @click="onRightClick"></div>
		</ims-header>

		<div class="formTitle">
			<div class="flexBox display-flex">
				<div class="left flex-1 display-flex">
					<div class="name flex-1">
						<b>名称</b>
					</div>
					<div class="time flex-1">
						<b>时间</b>
					</div>
				</div>
				<div class="right flex-1 display-flex">
					<div class="tz flex-1">
						<b>投注</b>
					</div>
					<div class="profit flex-1">
						<b>盈亏</b>
					</div>
				</div>
			</div>
		</div>
		<div class="main_main flex-1">
			<van-pull-refresh v-if="details.length > 0" v-model="isLoading" @refresh="onRefresh">
				<van-list v-model="Listloading" :finished="finished" finished-text="没有更多了" @load="loadMore">
					<div class="itemWrap">
						<div class="listItem display-flex" v-for="(item,index) in details" :key="index">
							<div class="left flex-1 display-flex">
								<div class="cp_type" style="max-width:60%;word-break: break-word;flex-basis:50%;padding-right:5px;">
									<p>{{ item.platform }}</p>
									<p style="font-size:12px;">{{ item.gameName }}</p>
								</div>
								<div class="datebox flex-1">
									<p v-if="item.betTime">{{item.betTime.split(' ')[0]}}</p>
									<p v-if="item.betTime">{{item.betTime.split(' ')[1]}}</p>
								</div>
							</div>
							<div class="right flex-1 display-flex">
								<div class="status flex-1 display-flex">{{item.betNumber}}</div>
								<div
									class="money flex-1 display-flex"
									:style="{color: item.netNumber >= 0 ? '#89C5A6' : '#E0877F'}"
								>{{item.netNumber >= 0?'+':''}}{{item.netNumber}}</div>
							</div>
						</div>
					</div>
				</van-list>
			</van-pull-refresh>
			<noData class="no_data" v-else></noData>
		</div>
		<div class="bottom-popup-container">
			<van-popup v-model="switchs.showPopup" position="bottom">
				<div
					v-for="(v,k) in popList"
					:key="k"
					class="popup-item ims--txt--midum"
					@click="searchData(v)"
				>{{ v.date_text }}</div>
				<div class="popup-item cacle-txt" @click="switchs.showPopup = false">取消</div>
			</van-popup>
		</div>
	</div>
</template>

<script>
import { findUserRecord } from '../../js/network'
import noData from '../../components/noData/noData'
export default {
	data() {
		return {
			switchs: {
				showPopup: false
			},
			popList: [
				{ date_text: '全部', data_type: '5' },
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
	components: {
		noData
	}
}
</script>

<style lang="less">
.bet-wrapper {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	padding-top: @app_head_height;
	box-sizing: border-box;
	background: url('../../assets/page_bg_default.jpg') no-repeat;
	background-size: cover;
	background-attachment: fixed;
	.van-pull-refresh__track {
		height: 100%;
	}
	.header-cottage {
		width: 100%;
		height: @app_head_height;
		background: url('../../assets/time-ico.png') no-repeat;
		background-size: 22px;
		background-position: center right;
	}

	.formTitle {
		position: fixed;
		top: @app_head_height;
		left: 0;
		right: 0;
		z-index: 899;
		color: #333;
		line-height: 30px;
		text-align: left;
		background: rgba(255, 255, 255, 0.5);
		border-bottom: 1px solid #f2f2f2;
		.flexBox {
			padding: 0 12px;
			.tz,
			.profit {
				text-indent: 20px;
			}
		}
	}
	.main_main {
		padding-top: 30px;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
		/deep/.van-pull-refresh {
			min-height: 100%;
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


