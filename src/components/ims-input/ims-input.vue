<template>
	<div class="input-container display-flex">
		<div class="left-content display-flex flex-center" @click="leftIconClick">
			<slot name="leftIcon"></slot>
		</div>
		<div class="main-content flex-1 display-flex flex-column justify-end" @click="enter">
			<div class="place-box" :class="{ 'active': smallTXT }">{{ placeholder }}</div>
			<input
				ref="inputArea"
				class="input-box"
				:class="{ 'active': showInput }"
				:type="$attrs.type || 'text'"
				:value="value"
				:readonly="$attrs.readonly"
				:maxlength="$attrs.maxlength"
				@input="onInput"
				@focus="onFocus"
				@blur="afk"
				@compositionstart="beginType"
				@compositionend="endType"
			>
			<div class="right-content" @click="rightIconClick">
				<slot name="rightIcon"></slot>
			</div>
		</div>
		<div v-if="extra" class="display-flex flex-center right-Out__cont" @click="rightIconClick">
			<slot name="rightOuterIcon"></slot>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showInput: false,
			focusStatus: true,
			smallTXT: false,
			showPwd: false,
			inputLock: false,
			showCPwd: false
		}
	},
	props: {
		placeholder: {
			default: '请输入',
			type: String
		},
		value: {
			default: '',
			type: String
		},
		name: {
			default: '',
			type: String
		},
		valueType: {
			type: String,
			default: ''
		},
		extra: {
			type: Boolean,
			default: false
		}
	},
	created(){
		if(this.value){
			this.showInput = true
			this.smallTXT = true
		}
	},
	methods: {
		enter() {
			this.$nextTick(() => {
				this.$refs.inputArea.focus()
			})
			this.$emit('onInputFocus')
		},
		afk() {
			if (!this.$refs.inputArea.value) {
				this.showInput = false
				this.smallTXT = false
			}
			this.$emit('onInputBlur')
		},
		leftIconClick() {
			this.$emit('onleftClick')
		},
		rightIconClick() {
			if (this.name == 'userId') {
				this.$refs.inputArea.value = ''
				this.$emit('input', '')
			} else if (this.name == 'pwd') {
				this.showPwd = !this.showPwd
				this.$refs.inputArea.type = this.showPwd ? 'text' : 'password'
			} else if (this.name == 'confirmPwd') {
				this.showCPwd = !this.showCPwd
				this.$refs.inputArea.type = this.showCPwd ? 'text' : 'password'
			}
			this.$emit('onrightClick')
		},
		onInput(e) {
			if (!this.inputLock) {
				this.regInput(e.target)
				e.returnValue = false
				this.$emit('input', e.target.value)
			}
		},
		onFocus() {
			this.showInput = true
			this.smallTXT = true
			this.$emit('inputFocusFun')
		},
		regInput(inputElement) {
			if (this.valueType == 'lowLetterNum') {
				inputElement.value = inputElement.value.replace(/[^a-z0-9]/g, '')
			} else if (this.valueType == 'num') {
				inputElement.value = inputElement.value.replace(/\D/g, '')
			} else if (this.valueType == 'letterNum') {
				inputElement.value = inputElement.value.replace(/[^\w_]/g, '')
			}
		},
		beginType() {
			this.inputLock = true
		},
		endType(e) {
			this.inputLock = false
			
			this.onInput(e)
		}
	}
}
</script>

<style lang="less" scoped>
.input-container {
	height: 46px;
	background: rgba(37, 38, 42, 0.5);
	border-radius: 7px;
	.left-content {
		padding: 0 9px 0 15px;
	}
	.main-content {
		padding: 2px 0;
		position: relative;
		.place-box {
			font-size: 13px;
			font-weight: normal;
			color: rgba(255, 255, 255, 1);
			position: absolute;
			top: 50%;
			left: 0;
			transform: translate3d(0, -50%, 0);
			transition: all 0.1s ease-in-out;
			&.active {
				color: rgba(255, 255, 255, 0.5);
				top: 5px;
				font-size: 12px;
				transform: translate3d(0, 0, 0);
				transition: all 0.3s ease-in-out;
			}
		}
		.input-box {
			border: none;
			outline: none;
			height: 28px;
			background-color: transparent;
			color: aliceblue;
			transition: all 0.3s ease-in-out;
			max-width: 222px;
		}
		.right-content {
			padding: 0 10px 0 15px;
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
		}
	}
	.right-Out__cont{
		margin-right: 10px;
	}
}
</style>
