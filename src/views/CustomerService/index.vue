<template>
	<div class="service">
		<ims-header title="客服"/>
		<div class="boxs">
			<a
				href="https://e19.entrychat.com/chat/chatClient/chatbox.jsp?companyID=1146765&configID=2564&jid=6346431126&s=1"
			>
				<div class="box">主线客服</div>
			</a>
			<a
				href="https://e19.entrychat.com/chat/chatClient/chatbox.jsp?companyID=1146765&configID=2564&jid=6346431126&s=1"
			>
				<div class="box">次线客服</div>
			</a>
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
	background: url('../../assets/service_bg.jpg') no-repeat;
	background-size: 100%;
	/deep/.app_head{
		background: none;
	}
	/deep/.app_head .main{
		background: none;
		// color: @text_color;
	}
	.boxs {
		position: absolute;
		top: 50%;
		width: 100%;
		margin-top: -60px;
	}
	.box {
		text-align: center;
		color: #4a4a4a;
		font-size: 16px;
		width: 356px;
		font-size: 16px;
		color: #4a4a4a;
		background-color: rgba(255, 255, 255, 0.3);
		border-radius: 4px;
		margin: 0 auto 10px;
		border-radius: 5px;
		padding: 16px 0;
	}
}
</style>

