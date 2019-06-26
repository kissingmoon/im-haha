<template>
	<div>
		<slot v-if="loading" name="placeholder"></slot>
		<slot v-if="error" name="error"></slot>
		<transition name="fade">
			<img
				v-if="!loading && !error"
				class="image__inner"
				:src="src"
				:alt="alt"
				:style="{ 'object-fit': fit }"
			>
		</transition>
	</div>
</template>

<script>
import { throttle } from 'lodash'
import { isString, isHtmlElement } from '../utils/types'
import { on, off, getScrollContainer, isInContainer } from '../utils/dom.js'
export default {
	name: 'CImage',
	props: {
		src: String,
		fit: String,
		lazy: Boolean,
		scrollContainer: {},
		alt: String
	},
	data() {
		return {
			loading: true,
			error: false,
			show: !this.lazy
		}
	},
	watch: {
		src: {
			handler(val) {
				this.show && this.loadImage(val)
			},
			immediate: true
		},
		show(val) {
			val && this.loadImage(this.src)
		}
	},
	mounted() {
		this.lazy && this.addLazyLoadListener()
	},
	beforeDestroy() {
		this.lazy && this.removeLazyLoadListener()
	},
	methods: {
		loadImage(val) {
			// reset status
			this.loading = true
			this.error = false

			const img = new Image()
			img.onload = this.handleLoad.bind(this)
			img.onerror = this.handleError.bind(this)
			img.src = val
		},
		handleLoad(e) {
			this.loading = false
			this.$emit('load', e)
		},
		handleError(e) {
			this.loading = false
			this.error = true
			this.$emit('error', e)
		},
		handleLazyLoad() {
			if (isInContainer(this.$el, this._scrollContainer)) {
				this.show = true
				this.removeLazyLoadListener()
			}
		},
		addLazyLoadListener() {
			if (this.$isServer) return

			const { scrollContainer } = this
			let _scrollContainer = null

			if (isHtmlElement(scrollContainer)) {
				_scrollContainer = scrollContainer
			} else if (isString(scrollContainer)) {
				_scrollContainer = document.querySelector(scrollContainer)
			} else {
				_scrollContainer = getScrollContainer(this.$el)
			}

			if (_scrollContainer) {
				this._scrollContainer = _scrollContainer
				this._lazyLoadHandler = throttle(this.handleLazyLoad, 200)
				on(_scrollContainer, 'scroll', this._lazyLoadHandler)
				this.handleLazyLoad()
			}
		},
		removeLazyLoadListener() {
			const { _scrollContainer, _lazyLoadHandler } = this

			if (this.$isServer || !_scrollContainer || !_lazyLoadHandler) return

			off(_scrollContainer, 'scroll', _lazyLoadHandler)
			this._scrollContainer = null
			this._lazyLoadHandler = null
		}
	}
}
</script>
<style>
.image__inner {
	display: block;
	width: 100%;
}
.fade-enter-active {
	transition: opacity 0.4s ease-in-out;
}
.fade-enter-to {
	opacity: 1;
}
.fade-enter {
	opacity: 0;
}
</style>
