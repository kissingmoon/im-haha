<template>
	<footer class="footer">
		<div class="navs">
			<div
				class="nav"
				v-for="(v,k) in navList"
				:class="{active:v.active}"
				:key="k"
				@click="goToPage(v)"
			>
				<div class="img_box">
					<span v-if="k==1 && footRedDot" class="dot"></span>
					<img class="img" :src="v.active ? v.activeIcon : v.icon">
				</div>
				<p>{{ v.name }}</p>
			</div>
		</div>
	</footer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters(['footRedDot'])
	},
	data() {
		return {
			navList: [
				{
					name: '首页',
					active: false,
					icon: require('./img/home.png'),
					activeIcon: require('./img/home_active.png'),
					path: '/'
				},
				{
					name: '活动',
					active: false,
					icon: require('./img/sponsor.png'),
					activeIcon: require('./img/sponsor_active.png'),
					path: '/activity'
				},
				{
					name: '教程',
					active: false,
					icon: require('./img/guide.png'),
					activeIcon: require('./img/guide_active.png'),
					path: '/course'
				},
				{
					name: '我的',
					active: false,
					icon: require('./img/profile.png'),
					activeIcon: require('./img/profile_active.png'),
					path: '/user'
				}
			]
		}
	},
	mounted() {
		this.$watch(
			'$route',
			() => {
				this.navList = this.navList.map(item => {
					item.active = false
					if (item.path == this.$route.path) {
						item.active = true
					}
					return item
				})
			},
			{
				immediate: true
			}
		)
	},
	methods: {
		goToPage(v) {
			this.$router.push(v.path)
		}
	}
}
</script>

<style lang="less" scoped>
.footer {
	// height: @app_footer_height;
	width: 100%;
	.navs {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		height: @app_footer_height;
		background-color: rgba(255, 255, 255, 0.8);
		z-index: 999;
	}
	.nav {
		flex: 1;
		text-align: center;
		font-size: 10px;
		font-weight: bold;
		color: #666;
	}
	.nav.active {
		color: @text_color_navs;
	}
	.img_box {
		width: 23px;
		height: 23px;
		margin: 0 auto 2px;
		position: relative;
		.dot {
			width: 6px;
			height: 6px;
			border-radius: 4px;
			background: #ff3e37;
			position: absolute;
			right: 0;
			top: 0;
		}
		.img {
			display: block;
			width: 100%;
		}
	}
}
</style>
