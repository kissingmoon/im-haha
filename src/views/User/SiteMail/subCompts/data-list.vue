<template>
	<div class="data-wrapper">
		<van-list v-model="moreLoading" :finished="finished" finished-text="没有更多了" @load="loadMore">
			<div class="data-content">
				<div
					class="item-msg display-flex align-center justify-between"
					:class="{'txt-black':v.isRead, 'txt-gray':v.isRead}"
					v-for="(v, k) in msgList"
					:key="k"
					@click="onMsgClick(v, k)"
				>
					<div>{{ v.title }}</div>
					<div>{{ v.createTime }}</div>
				</div>
			</div>
		</van-list>
	</div>
</template>

<script>
import { net_queryMsg, net_insertRead } from '@/js/network.js'

export default {
	data() {
		return {
			moreLoading: false,
			finished: false,
			initFinish: false,
			msgList: [],
			msgListTotal: 5,
			queryParam: {
				page_no: 1,
				page_size: 20
			}
		}
	},
	created() {
		this.init()
	},
	methods: {
		loadMore() {
			if (!this.initFinish) {
				this.moreLoading = false
				return
			}
			if (this.msgList.length >= this.recListTotal) {
				this.moreLoading = false
				this.finished = true
				return
			}
			this.queryMsg(this.queryParam, 'load')
		},
		init() {
			this.queryParam.page_no = 1
			this.queryMsg(this.queryParam, 'init')
		},
		async queryMsg(param, type) {
			let res = await net_queryMsg(param)
			if (res.code == '200') {
				this.queryParam.page_no++
				if (type == 'init') {
					this.msgList = res.data.result
					this.initFinish = true
					this.msgListTotal = res.data.count
					if (this.msgList.length < this.queryParam.page_size) {
						this.moreLoading = false
						this.finished = true
					}
				}
				if (type == 'ref') {
					this.msgList = res.data.result
				} else if (type == 'load') {
					this.msgList = this.msgList.concat(res.data.result)
					this.moreLoading = false
					if (this.msgList.length >= this.msgListTotal) {
						this.finished = true
					}
				}
			}
		},
		onMsgClick(v, k) {
			console.log(v)

			let param = {}
			param.id = v.id
			param.type = 0
			net_insertRead(param).then(res => {
				if (res.code == '200') {
					v.isRead = true
				}
			})
			Dialog.confirm({
				title: v.title,
				message: v.content,
				confirmButtonColor: '#e5c88b',
				className: 'ss'
			})
				.then(() => {
					// on confirm
				})
				.catch(() => {
					// on cancel
				})
		}
	}
}
</script>

<style lang="less" scoped>
.data-wrapper {
	.data-content {
		padding: 0 20px;
		.item-msg {
			height: 50px;
			background: rgba(255, 255, 255, 0.5);
			margin-top: 10px;
			padding: 0 15px;
			box-shadow: 0 4px 8px 0 rgba(2, 145, 254, 0.1);
		}
		.txt-black {
			color: #000000;
		}
		.txt-gray {
			color: #999999;
		}
	}
}
</style>
