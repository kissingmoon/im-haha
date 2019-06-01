<template>
	<div class="mpage"></div>
</template>
<script>
export default {
	created() {
		const gameJumpUrl = this.$route.query.jumpLink
		const goto = this.$route.query.goto
		const gameType = this.$route.query.gameType
		if (goto == 'pay') {
			this.$http.post(gameJumpUrl, this.$route.query).then(res => {
				if (res.code == 200) {
					location.href = res.data.url
				}
			})
		} else if (goto == 'getThird') {
			let param = {}
			if (gameType) {
				param.gameType = gameType
			}
			this.$http.post(gameJumpUrl, param).then(res => {
				if (res.code == 200) {
					location.href = res.data
				}
			})
		} else {
			location.href = gameJumpUrl
		}
	},
	methods: {
		getQueryString() {
			const url = location.search //获取url中"?"符后的字串
			const theRequest = new Object()
			if (url.indexOf('?') != -1) {
				const str = url.substr(1),
					strs = str.split('&')
				for (let i = 0; i < strs.length; i++) {
					theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
				}
			}
			return theRequest
		}
	}
}
</script>

<style scoped lang="less">
.mpage {
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	.gameProxy {
		overflow: hidden;
	}
}
</style>
