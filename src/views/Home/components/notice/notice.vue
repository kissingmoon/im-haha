<template>
	<div class="notice">
		<div class="icon"></div>
		<div ref="wrap" class="wrap">
			<div
				ref="content"
				:class="['content',animationClass]"
				:style="contentStyle"
				@animationend="onAnimationEnd"
				@webkitAnimationEnd="onAnimationEnd"
			>
				<span
					v-for="(text,index) in texts"
					:style="{paddingRight:(index != texts.length-1) ? wrapWidth+'px' : '0px'}"
					:key="index"
					@click="diolag(text)"
					class="text"
				>{{text}}</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		texts: {
			type: Array,
			default: []
		},
		delay: {
			type: [String, Number],
			default: 1
		},
		speed: {
			type: Number,
			default: 50
		}
	},
	data() {
		return {
			wrapWidth: 0,
			firstRound: true,
			duration: 0,
			offsetWidth: 0,
			animationClass: '',
			contentStyle: {}
		}
	},
	watch: {
		texts: {
			handler() {
				this.$nextTick(() => {
					const { wrap } = this.$refs
					if (!wrap) {
						return
					}
					const wrapWidth = wrap.getBoundingClientRect().width
					this.wrapWidth = wrapWidth
					this.$nextTick(() => {
						const { content } = this.$refs
						if (!content) {
							return
						}
						const offsetWidth = content.getBoundingClientRect().width
						if (true) {
							this.offsetWidth = offsetWidth
							this.duration = offsetWidth / this.speed
							this.contentStyle = {
								animationDelay: (this.firstRound ? this.delay : 0) + 's',
								animationDuration: this.duration + 's'
							}
							this.animationClass = 'play'
						}
					})
				})
			},
			immediate: true
		}
	},
	activated() {
		this.$forceUpdate()
	},

	methods: {
		diolag(text) {
			if (text) {
				Dialog.alert({
					message: text,
					confirmButtonText: '好的'
				})
			}
		},
		onAnimationEnd() {
			this.firstRound = false
			this.$nextTick(() => {
				this.duration = (this.offsetWidth + this.wrapWidth) / this.speed
				this.contentStyle = {
					transform: 'translate3d(' + this.wrapWidth + 'px,0,0)',
					animationDelay: '0s',
					animationDuration: this.duration + 's'
				}
				this.animationClass = ''
				setTimeout(() => {
					this.animationClass = 'play'
				}, 100)
			})
		}
	}
}
</script>

<style lang="less" scoped>
.notice {
	display: flex;
	align-items: center;
	padding: 9px 20px 8px 17px;
}
.icon {
	width: 25px;
	height: 15px;
	background: url('./icon.png') no-repeat;
	background-size: 100%;
	margin-right: 7px;
}
.text {
	display: inline-block;
	color: #fff;
}
.wrap {
	height: 15px;
	line-height: 15px;
	overflow: hidden;
	position: relative;
	flex: 1;
	width: 200px;
	margin: 0 auto;
}
.content {
	position: absolute;
	white-space: nowrap;
}
.play {
	animation: play linear both;
}
@-webkit-keyframes play {
	to {
		transform: translate3d(-100%, 0, 0);
	}
}
@keyframes play {
	to {
		transform: translate3d(-100%, 0, 0);
	}
}
</style>
