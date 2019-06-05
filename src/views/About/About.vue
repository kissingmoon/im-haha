<template>
	<div class="about-wrapper">
		<div class="header-container">
			<ims-header title="关于YG娱乐"></ims-header>
		</div>
		<div class="banner-container">
			<img src="./img/title-bg.png" alt>
		</div>
		<div class="text-container">
			<p>北京时间4月30日2:00，美东时间4月29日14:00，万众瞩目的博彩业巨头YG娱乐平台登上纽约时代广场纳斯达克大屏。</p>
			<p>纽约，世界重要金融经济中心；“时代广场”，纽约市中心，融汇文化与金融的世界级地标，至今已有100多年历史，其地点位于纽约市曼哈顿，因其世界位置与著名程度，又被称为“世界的十字路口”纳斯达克大屏幕，纽约时代广场的标志性建筑物，其屏幕面积之大及世界影响之广泛，被舆论评为“世界第一屏”。</p>
			<ul class="text-title">
				<li>何为纳斯达克</li>
			</ul>
			<p
				class="grey-text"
			>纳斯达克 （英语： NASDAQ） 全称：美国全国证券交易商协会自动报价表，创立于1971年，迄今已成为全球第二大的证券交易市场，世界最大的股票市场之一。</p>
			<p
				class="grey-text"
			>纳斯达克大屏于2000年1月揭幕启用，屏幕高达36.6米，该广告位花费纳斯达克每年至少200万美元，在广告市场纳斯达克大屏作为标杆和典范长期屹立在纽约时代广场。这块占地不到纽约市总面积0.1%的地方，创造了纽约10%的总产值，根据华尔街日报(wall street journal) 报道，时代广场的广告牌收入，甚至高出当地写字楼租金收入。</p>
			<div class="bottom-box grey-text">
				<div class="bottom-title">
					<span class="title-left">2019</span>
					<span class="title-txt">YG娱乐 目光所及 更显专业</span>
				</div>
				<p>YG娱乐经过20年沉淀，现拥有一流在线博彩技术及经验丰富的运营团队，并在全球范围内信誉卓著。</p>
				<p>现YG娱乐致力于为亚洲用户提供更高品质的在线体育服务及真人娱乐平台，力求给不同地区的用户带来别样、缤纷的极致体验！</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.about-wrapper {
	min-height: 100%;
	box-sizing: border-box;
	padding-top: @app_head_height;
	background: url('../../assets/page_bg_default.jpg') no-repeat;
	background-size: 100%;
	background-attachment: fixed;
	.grey-text {
		color: #6c6c6c;
	}
	.banner-container {
		img {
			width: 100%;
		}
	}
	.text-container {
		padding: 28px 15px;
		line-height: 16px;
		.text-title {
			padding: 10px 18px;
			list-style-type: square;
			color: #0088FF;
			font-size: 14px;
			font-weight: bold;
		}
		.bottom-box {
			box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.23);
			padding: 5px 2px;
			margin-top: 20px;
			.bottom-title {
				font-size: 14px;
				padding-bottom: 12px;
				font-weight: bold;
				.title-left {
					padding: 0 3px;
					background-color: #0088FF;
					color: #ffffff;
					border-bottom: 2px solid rgba(223, 195, 136, 1);
				}
				.title-txt {
					color: #0088FF;
					padding-left: 8px;
				}
			}
		}
	}
}
</style>
