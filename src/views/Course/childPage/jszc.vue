<template>
	<div class="jszc display-flex flex-column">
		<ims-header title="技术支持"/>
		<div class="main flex-1">
			<div class="item-box">
				<TitleBar
					content="如何避免账户被盗用"
					@click="openDetail(0)"
					:upupShow="pointers.telCourseList == 0?true:false"
				/>
				<div class="item-content__body" v-show="pointers.telCourseList == 0">
					<pre class="item-txt__wrap">
1. 盗用者通常以一些所谓「紧急」的电子邮件作为吸引客户的手法来骗取账户资料。
YG电竞不会要求客户在电邮上提供您的私人密码以及帐户资料，即使您认为是真的，请不要立即回复
——而是立即联系我们网站上的在线客服进行确认。

2. 直接以网址登入网站
登入YG电竞时，请尽量在浏览器上直接输入
https://www.sport989.com方式登录，请尽量不要使用其它网站上的超链接登录，以防登录盗用者的木马站点，造成个人资料或资金财产等不必要的损失

3. 经常查证用户账号
经常登录账号后查核结存以及提款银行户口
如果怀疑有人经常使用您的账号，请立即更改个人密码以及联络我们的客服，
经常检查您的交易记录，如果发现任何疑问，请立即联络我们的客服进行帮助。

4. 点击网站时受到严密的保护
当您在YG电竞进行投注或资金交易时，您的个人资料以及交易记录将受到最安全的保密程序所保障。
a) 查询浏览器上网址写入的位置，如果您登入的网站上需要有安全的保密 ，必须打上「https：//」(“S”代表安全)，而不是平时的「http://」。
b) 另外，在浏览器上增加一些加密显示，这样能令您随时清楚加密的安全性。注意：即使某些网站上需要显示加密程式都不一定是合法的，因为加密只是通知您的资料被提交而已。

5. 经常提高警觉性
如果当您怀疑一些电子邮件的可信性，或者收到一些电子邮件通知表明因为YG电竞网站被停用而建议使用的后备网址时，请通过我们的在线客服进行咨询。
               </pre>
				</div>
			</div>
			<div class="item-box">
				<TitleBar
					content="有关保护帐户资料的提示"
					@click="openDetail(1)"
					:upupShow="pointers.telCourseList == 1?true:false"
				/>
				<div class="item-content__body" v-show="pointers.telCourseList == 1">
					<pre class="item-txt__wrap">
1. 小心处理电子邮件
尽量避免打开或回复一些不明来历的电子邮件，因为当您回复时已经给他们确认这是真正的电邮地址。无论 如何，对于有怀疑的电子邮件时，都需要小心电邮的附件以及内容的文字链接。
2. 小心留意个人资料
必须将个人资料保密 ，不应随便向任何人透露。另外，不应所有帐户都使用同一组密码。
3. 个人电脑的保护
一些盗用者的电子邮件中，可能会附有一些能查出您的电脑曾经浏览的网站内容以及个人资料的电 脑病毒(例如：木马程式)。安装反病毒软件以及经常更新程式，使盗用者不能侦测到您的个人电脑内的资 料。安装防火墙是十分重要的，特别是宽频的网上用户，因为这样能确保你的电脑资料不受电脑病毒侵入 。
4. 交易后登出 帐户以及个人电脑保护
在YG娱乐完成投注或资金交易后，请 谨记要登出用户帐号。尽量不要在登陆的状态时离开您的电脑，即使离开时间只有一分钟，也必须使用Ctrl + L来锁定电脑桌面。
5. 清除浏览记录
浏览器上将会储存你曾浏览的网址，为了不让盗用者查到您曾到过的网站，应时常清除浏览记录。
使用 Microsoft Internet Explorer 10
• 选择「工具」 中的「互联网选项」
• 点击「删除Cookie」
• 点击「确定」注意：如果不选择「删除Cookie」，那么所有浏览的记录都会在电脑上「Cookie 」的档案内。在点击「删除Cookie」后出现的对话格中点击「确认」。
6. 避免使用公众地方的电脑
尽量避免在公众场合，如「网吧」等地方登入YG娱乐进行交易，如果必须使用时，请确保电脑上没有任何病毒以及在交易结束时登出帐号和清除记录。
7. 更新浏览器和电脑软件
经常保持浏览器为最新版本，如发现浏览器不是最新版本，可在有关官方网 站上下载。应该保证你的电脑是以128bit SSL加密或更高保密性的作业系统。
360极速浏览器
IE11或以上版本
谷歌Chrome
火狐Firefox
我们最希望能令每位客户在最安全而且最有保障的平台下，尽情享受每一次在YG娱乐的投注经历。
               </pre>
				</div>
			</div>
			<div class="item-box">
				<TitleBar
					content="备用网址"
					:upupShow="pointers.telCourseList == 2?true:false"
					@click="openDetail(2)"
				/>
				<div class="item-content__body" v-show="pointers.telCourseList == 2">
					<pre class="item-txt__wrap">
如果您在浏览和体验YG娱乐过程中发现无法登陆我们的某个域名，请您尝试使用我们的备用域名进行登陆。我们强烈建议您使用“Ctrl+D”将YG娱乐保存至浏览器收藏夹，以便我们为您提供更加优质的服务。
我们建议您关注我们的官方微博或公众微信，以便在网站登陆出现问题时第一时间收到我们最新的网址通知。
               </pre>
				</div>
			</div>
			<div class="item-box">
				<TitleBar
					content="为什么使用版本较低的浏览器会导致投注体验下降和 账号不安全"
					font-size="fontSize13"
					@click="openDetail(3)"
					:upupShow="pointers.telCourseList == 3?true:false"
				/>
				<div class="item-content__body" v-show="pointers.telCourseList == 3">
					<pre class="item-txt__wrap">
首先 ，IE6或其他低版本浏览器效率极低，很多比较新颖和动画效果都无法实现加载，导致用户阅读和游戏时 效果极差；其次，低版本浏览器安全性较低，黑客很容易利用其进行病毒或木马植入，从而导致 你的投注体验和资金受到极大威胁。
因此，我们强烈建议您将浏览器升级到最新版本，以此来获得YG娱乐带来最好的游戏体验和优质服务。
               </pre>
				</div>
			</div>
			<div class="item-box">
				<TitleBar
					content="选择什么样的浏览器才能获得YG娱乐最佳的投注体验"
					font-size="fontSize13"
					@click="openDetail(4)"
					:upupShow="pointers.telCourseList == 4?true:false"
				/>
				<div class="item-content__body" v-show="pointers.telCourseList == 4">
					<pre class="item-txt__wrap">
360极速浏览器
（使用Chrome内核，支持国内银行转账）
IE11 或以上版本
谷歌Chrome
火狐Firefox
如果您使用的是手持移动设备，我们强烈建议您通过手机自带浏览器进行访问。
如果您使用的并非以上浏览器且在访问YG娱乐遇到问题，我们建议您点击以上 链接安装最新版本的浏览器。如果还由于浏览器访问出现问题，请您联系我们24*7在线客服获取帮助。
               </pre>
				</div>
			</div>
			<div class="item-box">
				<TitleBar
					content="我是否需要更改任何浏览器配置"
					@click="openDetail(5)"
					:upupShow="pointers.telCourseList == 5?true:false"
				/>
				<div class="item-content__body" v-show="pointers.telCourseList == 5">
					<pre class="item-txt__wrap">
为了访问我们网站的全部功能，您需要启用JavaScript和在您的浏览器设置接受Cookies。如果您已经禁用JavaScript和coo--kies，将会无法进行投注或受到严重限制。如果您的浏览器使用浏览器的默认设置，您应该是可以正常进行投注。

Cookies是当你浏览某网站时 ，由网站服务器置于你硬盘上的一个非常小的文本文件，它可以记录你的网站设置、投注选项和浏览过的网页等信息。Cookies记录的只是关于您浏览器中的信息，并不是关于您个人的信息。

JavaScript使网站更具互动性的一种网页浏览器编程语言，几乎所有浏览器都支持。启用JavaScrip是相当安全的，他只是在您的浏览器上运行，不会在您的电脑操作系统上运行。
然而在某些情况下，调整您浏览 器的隐私或安全级别过高也会影响您的请求。这理是浏览器如何启用JavaScript和接受Cookies的方法：
启用JavaScript：
微软IE:
1) 在浏览器的任务菜单中选择“工 具”然后选择“Internet选项”再选择“安全”标签。
2) 2) 点击“Internet”图标
3) 3) 点击“默认级别”然后点击“确定”进行关闭“Internet选项”页面。

火狐Firefox:
1) 在浏览器的任务菜单中选择“工具”然后选择“选项”再选择“内容”。
2) 2) 在“启用JavaScript” 选项中打勾。
3) 3) 点击“确定”进行关闭选项页面。

苹果Safari:
1) 选择Safari工具 菜单中的“偏好设置”，然后选择“安全”标签。
2) 2) 在“启用JavaScript”选项中打勾。
3) 3) 点击窗口右上方的“X”按钮设置会默认应用。

谷歌Chrome:
1) 选择Chrome工具菜单中的 “选项”。
2) 2) 选择“高级选项”标签。
3) 3) 在“隐私权”区域点击“内容设置”。
4) 4) 选 择“JAVASCRIPT”标签。
5) 5) 点击选择“允许所有网站运行JAVASCRIPT（推荐）”
6) 6) 点击“关 闭”进行应用您的设置。

接受Cookies:
微软IE:
1) 在浏览器 的任务菜单中选择“工具”然后选择“Internet选项”。
2) 2) 选择“隐私”标签。
3) 3) 将安全系 数滚动条设置为中、低或接受所有Cookies。
4) 4) 点击“确定”进行关闭“Internet选项”页面。

火狐Firefox:
1) 在浏览器的任务菜单中选择“工具”然后选择“选项”。
2) 2) 选择 “隐私”标签。
3) 3) FIREFOX将会：“使用自定义历史记录设置”
4) 4) 在“接受站点的COOKIE” 选项中打勾。
5) 5) 点击“确定”进行关闭选项页面。

苹果Safari:
1) 选择Safari工具菜单 中的“偏好设置”。
2) 2) 选择“安全”标签。
3) 3) 在“接受cookies”选项中选择“总是”或“ 仅从您浏览的站点”。
4) 4) 点击窗口右上方的“X”按钮设置会默认应用。

谷歌Chrome:
1) 选择Chrome工具菜单中的“选项”。
2) 2) 选择“高级选项”标签。
3) 3) 在“ 隐私权”区域点击“内容设置”。
4) 4) 选择“Cookies”标签。
5) 5) 确保您已经选择了“允许设 置本地数据（推荐）”。
6) 6) 点击“关闭”进行应用您的设置。
               </pre>
				</div>
			</div>
			<div class="item-box">
				<TitleBar
					content="什么是推荐的显示分辨率"
					@click="openDetail(6)"
					:upupShow="pointers.telCourseList == 6?true:false"
				/>
				<div class="item-content__body" v-show="pointers.telCourseList == 6">
					<pre class="item-txt__wrap">
对于一个良好的视觉体验，我们建议至少为1024x768像素的图像分辨率。同样 我们建议您使用最低的32位颜色深度。
               </pre>
				</div>
			</div>
			<div class="item-box">
				<TitleBar
					content="我是否需要任何程式或浏览器插件来运行网站"
					font-size="fontSize13"
					@click="openDetail(7)"
					:upupShow="pointers.telCourseList == 7?true:false"
				/>
				<div class="item-content__body" v-show="pointers.telCourseList == 7">
					<pre class="item-txt__wrap">
我们网站是不需要通过额外插件进行浏览。不过，一些互动的信息和帮助，例如我们的 娱乐场和真人荷官可能需要Flash播放器才能正常显示。点击这里安装Flash播放器
插件：浏览器插件是一个添加在浏览器中句有特定功能或服务的软件。一些常见的插件有 Java、Flash播放器、Adobe Acrobat、QuickTime和Microsoft Silverlight。
               </pre>
				</div>
			</div>
			<div class="item-box">
				<TitleBar
					content="如果我已经使用网站更新和正确配置网站浏览器，仍然遇到问题，我应该怎么做？"
					font-size="fontSize13"
					@click="openDetail(8)"
					:upupShow="pointers.telCourseList == 8?true:false"
				/>
				<div class="item-content__body" v-show="pointers.telCourseList == 8">
					<pre class="item-txt__wrap">
请您通过我们的在线客服反馈您的问题。提供您所使用的网页浏览器版本，以及您的操作系统，网络接入类型和其他相关信息，以便我们更快为您找出问题。
例如:
用哪种浏览器：微软IE9
所用操作系统：Windows 10
网络接入类 型：10M宽带
所遇到的问题：登陆的时候网络延迟。
               </pre>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import TitleBar from './components/titleBar'
import jsjcComp from './components/jsjc-comp'
export default {
	data() {
		return {
			telCourseList: [],
			pointers: {
				telCourseList: 0
			}
		}
	},
	created() {},
	methods: {
		openDetail(k) {
			if (this.pointers.telCourseList == k) {
				this.pointers.telCourseList = -1
				return
			}
			this.pointers.telCourseList = -1
			this.pointers.telCourseList = k
		},
		goBack() {
			this.$router.go(-1)
		}
	},
	components: {
		TitleBar,
		jsjcComp
	}
}
</script>

<style scoped lang="less">
.jszc {
	min-height: 100%;
	box-sizing: border-box;
	padding-top: @app_head_height;
	background: url('../../../assets/page_bg_default.jpg') no-repeat;
	background-size: cover;
	background-attachment: fixed;

	.headBox {
		position: relative;
		.leftCorner {
			position: absolute;
			left: 15px;
			top: 0;
			bottom: 0;
			padding-right: 50px;
			.van-icon {
				font-size: 20px;
			}
		}
		p {
			color: #000;
			font-size: 18px;
			line-height: 50px;
			text-align: center;
		}
	}
	.main {
		padding: 15px 15px;
		.item-box {
			margin-top: 10px;
			margin-bottom: 10px;
			.item-content__body {
				border: 1px solid #E5E5E5;
				font-size: 12px;
				padding: 0 8px;
				color: #6C6C6C;
				line-height: 15px;
				margin-top: 10px;
				margin-bottom: 10px;
				.item-txt__wrap {
					white-space: pre-wrap;
					word-wrap: break-word;
					margin: 8px 0 0 0;
				}
			}
		}
	}
}
</style>
