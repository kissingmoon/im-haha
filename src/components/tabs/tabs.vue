<template>
	<div ref="nav" class="tabs_wrapper">
		<div class="tabs">
			<div class="linear" :style="lineStyle"></div>
			<div
				v-for="(tab,index) in tabs"
				ref="tabs"
				:key="index"
				@click="onClick(index)"
				:class="{
					tab:true,
					tab_active:curActive==index ? true : false
				}"
				class="tab"
			>{{tab}}</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		tabs: {
			type: Array,
			default: []
		}
	},
	data() {
		return {
			curActive: 0,
			lineStyle: {},
			duration: 0.2
		}
	},
	mounted() {
		this.setLine()
	},
	watch: {
		curActive() {
			this.scrollIntoView()
			this.setLine()
		}
	},
	methods: {
		onClick(index) {
			this.curActive = index
			this.$emit('click', index)
		},
		scrollIntoView() {
			var tabs = this.$refs.tabs
			var nav = this.$refs.nav
			var scrollLeft = nav.scrollLeft,
				navWidth = nav.offsetWidth
			var tab = tabs[this.curActive],
				offsetLeft = tab.offsetLeft,
				tabWidth = tab.offsetWidth
			this.scrollTo(nav, scrollLeft, offsetLeft - (navWidth - tabWidth) / 2)
		},
		scrollTo: function scrollTo(el, from, to) {
			var count = 0
			var frames = Math.round((this.duration * 1000) / 16)

			var animate = function() {
				el.scrollLeft += (to - from) / frames
				if (++count < frames) {
					requestAnimationFrame(animate)
				}
			}

			animate()
		},
		setLine() {
			let shouldAnimate = true
			let tabs = this.$refs.tabs
			let tab = tabs[this.curActive]
			let width = tab.offsetWidth
			let left = tab.offsetLeft + (tab.offsetWidth - width) / 2
			let lineStyle = {
				width: width + 'px',
				transform: 'translateX(' + left + 'px)'
			}
			if (shouldAnimate) {
				lineStyle.transitionDuration = '0.2s'
			}
			this.lineStyle = lineStyle
		}
	}
}
</script>
<style lang="less" scoped>
.tabs_wrapper {
	width: 100%;
	overflow: hidden;
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
	box-sizing: border-box;
	padding: 0 15px;
	z-index: 2;
	.tabs {
		height: 40px;
		position: relative;
		white-space: nowrap;
		width: auto;
		display: inline-block;
		border-radius: 20px;
		overflow: hidden;
		background: rgba(255, 255, 255, 0.6);
		padding: 0 2px;
	}
	.tab {
		display: inline-block;
		text-align: center;
		height: 100%;
		line-height: 40px;
		min-width: 60px;
		padding: 0 15px;
		font-size: 15px;
		z-index: 4;
		position: relative;
		transition: all 0.2s linear;
	}
	.tab_active {
		color: #fff;
	}
	.linear {
		z-index: 3;
		position: absolute;
		height: 36px;
		border-radius: 18px;
		background: red;
		background: #e5c88b;
		top: 2px;
		left: 0;
	}
}

::-webkit-scrollbar {
	display: none;
}
</style>
