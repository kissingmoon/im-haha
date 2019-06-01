<template>
	<div class="service">
		<ims-header title="客服"/>
		<div class="boxs">
			<a href="https://e19.entrychat.com/chat/chatClient/chatbox.jsp?companyID=1146765&configID=2564&jid=6346431126&s=1"><div class="box box0">主线客服</div></a>
			<a href="https://e19.entrychat.com/chat/chatClient/chatbox.jsp?companyID=1146765&configID=2564&jid=6346431126&s=1"><div class="box box1">次线客服</div></a>
		</div>
	</div>
</template>
<style lang="less" scoped>
.service {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: url('./img/bg@2x.png') no-repeat;
	background-position: 12px bottom;
	background-size: 352px 281px;
	.boxs {
		padding: 40px 24px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: center;
		color: #fff;
		font-size: 16px;
	}
	.box {
		width: 155px;
		height: 88px;
		line-height: 88px;
		border-radius: 5px;
		color: #fff;
	}
	.box0 {
		background: rgba(211, 55, 145, 1);
		box-shadow: 0px 0px 15px 0px rgba(44, 49, 140, 0.11);
	}
	.box1 {
		background: rgba(88, 175, 252, 1);
		box-shadow: 0px 0px 8px 0px rgba(44, 49, 140, 0.11);
	}
}
</style>

