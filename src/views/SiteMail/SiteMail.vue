<template>
	<div class="siteMail-wrapper display-flex flex-column headview_wrapper">
		<ims-header title="站内消息"></ims-header>
		<div class="main-container flex-1 display-flex flex-column">
			<div class="main-header">
				<Tabs @click="tabClick" color="#46a8fe">
					<Tab :title="'收件箱'"></Tab>
					<Tab :title="'写站内信'"></Tab>
				</Tabs>
			</div>
			<div class="main-content flex-1">
				<div v-if="pointers.tabList == 0" class="sub-wrap">
					<data-list ref="dataList"></data-list>
				</div>
				<div v-if="pointers.tabList == 1" class="sub-wrap">
					<write-mail></write-mail>
				</div>
			</div>
		</div>
		<div class="footer-container display-flex" v-show="pointers.tabList == 0">
			<div class="footer-item flex-1 display-flex flex-center flex-column" @click="allRead">
				<div class="read-msg item-bg"></div>
				<div class>全部已读</div>
			</div>
			<div class="footer-item flex-1 display-flex flex-center flex-column" @click="allDelete">
				<div class="delete-msg item-bg"></div>
				<div class>全部删除</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Tab, Tabs } from 'vant'
import dataList from './subCompts/data-list'
import writeMail from './subCompts/write-mail'
import { net_insertRead, net_msgDelete } from '@/js/network.js'

export default {
	data() {
		return {
			pointers: {
				tabList: 0
			}
		}
	},
	components: {
		Tab,
		Tabs,
		dataList,
		writeMail
	},
	methods: {
		tabClick(index, title) {
			this.pointers.tabList = index
		},
		allRead() {
			let param = {}
			param.id = ''
			param.type = 1
			net_insertRead(param).then(res => {
				this.$refs.dataList.init()
			})
		},
		allDelete() {
			if (this.$refs.dataList.msgList.length <= 0) {
				return
			}
			Dialog.confirm({
				title: '确认删除',
				message: '此操作将永久删除您的信件是否继续？'
			})
				.then(() => {
					net_msgDelete().then(res => {
						if (res.code == '200') {
							toast('删除成功')
							this.$refs.dataList.init()
						}
					})
				})
				.catch(() => {
					// on cancel
				})
		}
	}
}
</script>

<style lang="less" scoped>
.siteMail-wrapper {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: url('../../assets/page_bg_default.jpg') no-repeat;
	background-size: cover;
	box-sizing: border-box;
	padding-top: @app_head_height;
	/deep/.van-tabs__nav {
		background-color: rgba(255, 255, 255, 0.5);
	}
	/deep/.van-hairline--top-bottom::after {
		border: none;
	}
	.main-container {
		.main-header {
			height: 50px;
		}
		.main-content {
			overflow: auto;
		}
	}
	.footer-container {
		height: 50px;
		background-color: rgba(255, 255, 255, 0.5);
		border-top: 1px solid #d7e2e9;
		color: #7e7e7e;
		.footer-item {
			border-right: 1px solid #d7e2e9;
			&:last-child {
				border-right: 0px;
			}
			.item-bg {
				width: 28px;
				height: 28px;
				background-size: 100% 100%;
			}
			.delete-msg {
				background: url('./img/deleted_msg.png') no-repeat;
				background-size: 100% 100%;
			}
			.read-msg {
				background: url('./img/active_all_msg.png') no-repeat;
				background-size: 100% 100%;
			}
		}
	}
}
</style>
