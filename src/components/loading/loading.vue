<template>
	<transition name="loading-fade" @after-leave="handleAfterLeave">
		<div
			v-show="visible"
			class="loading-mask"
			:style="{ backgroundColor: background || '' }"
			:class="[customClass, { 'is-fullscreen': fullscreen }]"
		>
			<div class="loading-spinner">
				<img class="img" src="./icon.svg" alt>
				<p v-if="text" class="loading-text">{{ text }}</p>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	data() {
		return {
			text: null,
			background: null,
			fullscreen: true,
			visible: false,
			customClass: ''
		}
	},

	methods: {
		handleAfterLeave() {
			this.$emit('after-leave')
		},
		setText(text) {
			this.text = text
		}
	}
}
</script>
<style lang="less" scoped>
.loading-mask {
	position: absolute;
	z-index: 2000;
	background-color: transparent;
	margin: 0;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	transition: opacity 0.3s;
	display: flex;
	align-items: center;
	justify-content: center;
}
.loading-mask.is-fullscreen{
	position: fixed;
}
.loading-spinner {
	background-color: rgba(0, 0, 0, 0.4);
	width: 160px;
	height: 110px;
  background: rgba(0, 0, 0, 0.74);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  border-radius: 4px;

}
.img {
	width: 45px;
	height: 45px;
  animation: loading-rotate 2s linear infinite;
  margin-bottom: 13px;
}
.loading-text {
	color: #fff;
	letter-spacing: 1px;
	font-size: 14px;
}
@keyframes loading-rotate {
	100% {
		transform: rotate(360deg);
	}
}
</style>

