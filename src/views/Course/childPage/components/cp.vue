<template>
	<div class="cp">
		<div class="title">
			<span></span>什么是快乐彩?
		</div>
		<p>快乐彩传统玩法是玩家从号码01到80任意选择1到10个不等的号码,快乐彩系统会从80个号码中随机抽出20个开奖号码。然后玩家挑选的数字与系统官方开奖结果号码比对是否获奖。</p>
		<div class="title">
			<span></span>快乐彩有哪些常见的投注类型?
		</div>
		<p>
			1.大小/总数810: 开奖结果20个号码总和大于810的数值(大), 开奖结果20个号码总和小于810的数值(小) 或等于810 (总和810)。
			<br>
			<br>2.单双: 开奖结果20个号码总和的最后一个数字是奇数还是偶数。
			<br>
			<br>3.奇,偶,和: 开奖结果20个号码中, 如果有超过10个单数则为奇数, 投注奇为赢; 如果开奖结果20个号码中, 有超过10个双数则为偶数, 投注偶为赢。如果开奖结果的20个号码中, 刚好有10个单数及10个偶数, 投注和为赢。
			<br>
			<br>4.大小和单双连串: 例如, 大/单是指开奖结果20个号码的总额大于810同时总和的最后一个数字是单数. 其他组合您可以投注大/双、小/单、小/双。
			<br>
			<br>5.上,下,和: 开奖结果的20个号码,其中有超过10个数字范围落在01到40(上) 或41到80(下), 刚好有10个数字范围落在01到40以及10个数字范围落在41到80(和)。
			<br>
			<br>6.五行: 预测开奖结果20个号码的总和范围在指定的范围名称。一共有5个不同的范围名称可以投注: 210-695 (金), 696-763 (木),764-855 (水), 856-923 (火) 和 924-1410 (土)。
			<br>
			<br>7.珠仔: 玩家可以从01到80个号码中选择1到5个号码. 快乐彩官方系统会从01到80个号码中开出20个号码. 派彩方式是按照玩家选择的号码跟开奖结果符合个数计算, 号码顺序排列并无限制。
		</p>
		<div class="title">
			<span></span>六合彩的开奖时间?
		</div>
		<p>六合彩的开奖时间为每周2，周4，周6，21:30进行开奖。</p>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.cp {
	width: 345px;
	margin: 0 auto;
	.title {
		display: flex;
		align-items: center;
		font-size: 14px;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		margin-top: 10px;
		margin-bottom: 2px;
		line-height: 20px;
		color: #0088FF;
		span {
			flex: 8px 8px;
			width: 8px;
			height: 8px;
			margin-right: 4px;
			background-color: #0088FF;
			transform: rotate(45deg);
		}
	}
	p {
		line-height: 16px;
	}
}
</style>
