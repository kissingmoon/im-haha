<template>
	<button @click="handleClick" :disabled="disabled" class="ims_btn">
		<span v-if="$slots.default">
			<slot></slot>
		</span>
	</button>
</template>
<script>
import { throttle } from 'lodash'
export default {
	name: 'imsBtn',
	props: {
		disabled: {
			type: Boolean,
			default: true
		},
		throttleTime: {
			type: Number, //多少时间触发一次click
			default: 0
		}
	},
	created() {
		this.handleClick = throttle(this.handleClick, this.throttleTime, { leading: true, trailing: false })
	},
	methods: {
		handleClick: function(evt) {
			this.$emit('click', evt)
		}
	}
}
</script>
<style lang="less" scoped>
.ims_btn {
	width: 200px;
	height: 44px;
	background: @btn_color;
	font-size: 18px;
	color: rgba(255, 255, 255, 1);
	line-height: 44px;
	border: none;
	outline: none;
	box-sizing: border-box;
	border-radius: 22px;
	margin: 0 auto;
	display: block;
}
.ims_btn:disabled {
	background: @btn_color_disabled;
}
</style>

