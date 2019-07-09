<template>
	<div class="course_wrapper headview_wrapper">
		<ims-header class="about_head" title="教程"></ims-header>
		<div class="courses">
			<div v-for="(list,i) in lists" @click="openLink(list)" :key="i" class="course">
				<div class="c_l">
					<img class="c_img0" :src="list.img" />
					<p class="c_p">
						<span class="c_p_0">{{list.title}}</span>
						<span class="c_p_1">{{list.desc}}</span>
					</p>
				</div>
				<div class="c_r">
					<img class="c_img1" src="./icon/entry.png" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'course',
	data() {
		return {
			lists: [
				{ img: require('./icon/deposit.png'), title: '存款教程', desc: '存款急速到账', link: '/course-ck' },
				{ img: require('./icon/withdraw.png'), title: '取款教程', desc: '急速提款仅需30秒', link: '/course-qk' },
				{ img: require('./icon/noviceGuide.png'), title: '新手教程', desc: '新手学习的教程', link: '/course-newerJc' },
				{ img: require('./icon/techSupport.png'), title: '技术支持', desc: '提供全面技术支持', link: '/course-jszc' },
				{ img: require('./icon/howtoplay.png'), title: '玩法教程', desc: '真人体育彩票玩法', link: '/course-wfjc' },
				{ img: require('./icon/contactUs.png'), title: '联系我们', desc: '为您提供全天服务', link: '/course-contact' },
				{ img: require('./icon/aboutUs.png'), title: 'YG娱乐', desc: '责任隐私策略', link: '/course-privacy' }
			]
		}
	},
	created() {},
	methods: {
		openLink(list) {
			this.$router.push(list.link)
		}
	}
}
</script>
<style lang="less" scoped>
.course_wrapper {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	padding-top: @app_head_height;
	box-sizing: border-box;
	background: url('../../assets/page_bg_default.jpg') no-repeat;
	background-size: cover;
	background-attachment: fixed;
	.courses {
		padding: 21px 10px;
	}
	.course {
		width: 100%;
		height: 60px;
		box-sizing: border-box;
		border-radius: 5px;
		background: rgba(255, 255, 255, 0.3);
		margin-bottom: 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 15px;
		.c_l {
			display: flex;
			align-items: center;
			.c_p_0 {
				font-size: 18px;
				color: #444;
				padding: 0 10px;
				font-weight: bold;
			}
			.c_p_1 {
				font-size: 12px;
				color: #666;
			}
			.c_img0 {
				width: 36px;
				height: 36px;
			}
		}
		.c_r {
			width: 36px;
			height: 36px;
			.c_img1 {
				width: 100%;
				display: block;
			}
		}
	}
}
</style>

