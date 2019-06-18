<template>
	<div class="actv_detail headview_wrapper">
		<ims-header title="活动详情"/>
		<div v-if="isShow" class="actv_main">
			<!-- 在这里绑定html -->
			<div v-if="!is_8888" v-html="html">
			<!-- <div v-if="true"> -->
				<!-- 活动1  周周有礼，周周送 -->
				<!-- <div style="padding-bottom:24px;">
					<div class="actv_h">周周有礼，周周送</div>
					<p class="actv_p">
						活动时间：即日起
						<br>活动对象：YG娱乐全体人员
						<br>活动内容：即日起【YG娱乐】新老会员投注体育赛事，计算一周在“体育”博彩的有效投注总额，符合以下条件即可申请相应的奖金；天天投注“体育”，周周领取全勤奖金。
					</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>奖励规则
					</div>
					<div class="actv_table">
						<div class="row">
							<div class="col fb-5">周有效投注</div>
							<div class="col">1万+</div>
							<div class="col">5万+</div>
							<div class="col">10万+</div>
							<div class="col">20万+</div>
							<div class="col">50万+</div>
							<div class="col">100万+</div>
							<div class="col">1000万+</div>
						</div>
						<div class="row">
							<div class="col fb-5">周有效投注</div>
							<div class="col">1万+</div>
							<div class="col">5万+</div>
							<div class="col">10万+</div>
							<div class="col">20万+</div>
							<div class="col">50万+</div>
							<div class="col">100万+</div>
							<div class="col">1000万+</div>
						</div>
					</div>
					<div class="actv_h5">
						<span class="actv_reat"></span>申请方式
					</div>
					<p class="actv_p">请符合条件的会员点击申请，审核通过后部门会将相应的彩金添加到您的钱包余额，逾期视为自动弃权。</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>活动细则
					</div>
					<p class="actv_p">
						1.符合申请条件的会员必须在“每周一12点”后24小时内申请上周优惠奖金，否则视为自动放弃此优惠，不得争议。
						<br>2.此优惠获得的奖金仅需1倍打码即可申请提款。
						<br>3.体育博彩投注额仅计算：（欧盘）1.5赔率以上盘口，（香港盘）0.5赔率以上盘口，所有（平局、无效、被取消）或注单不被计算在返水有效投注内。
					</p>
				</div>-->
				<!-- 活动2 新人专属福利，首充即送8888元-->
				<!-- <div style="padding-bottom:24px;">
					<div class="actv_h">新人专属福利，首充即送 8888 元</div>
					<p class="actv_p">
						活动时间：即日起
						<br>活动对象：YG娱乐全体人员
						<br>活动内容：加入[YG娱乐]，只要您首次存款100元以上，最高可获贈8888元首存礼金，一倍流水可提款！快告诉您的好友一起来领取吧！
					</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>奖励规则
					</div>
					<div class="actv_table2">
						<div class="col1">
							<div class="row1">首次存款</div>
							<div class="row1">100+</div>
							<div class="row1">500+</div>
							<div class="row1">1000+</div>
							<div class="row1">5000+</div>
							<div class="row1">10000+</div>
							<div class="row1">50000+</div>
							<div class="row1">100000+</div>
						</div>
						<div class="col1">
							<div class="row1">赠送彩金</div>
							<div class="row1">18元</div>
							<div class="row1">38元</div>
							<div class="row1">68元</div>
							<div class="row1">88元</div>
							<div class="row1">188元</div>
							<div class="row1">388元</div>
							<div class="row1">888元</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">流水限制</div>
							<div class="row2 row2_1">一倍流水</div>
						</div>
					</div>
					<div class="actv_h5">
						<span class="actv_reat"></span>申请方式
					</div>
					<p class="actv_p">请符合条件的会员点击申请，审核通过后部门会将相应的彩金添加到您的钱包余额，逾期视为自动弃权。</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>活动细则
					</div>
					<p class="actv_p">
						1. 所获得奖金需一倍流水方可申请提款；
						<br>2.每位会员，仅限申请一次，请在成功注册后24小时内进行申请，逾期视为无效。如出现同姓名、手机号码、IP，则视为同一个人，公司有权拒绝派送彩金；
						<br>3.如出现对打、套利等违反常态游戏规则的行为（例：同时押庄闲、大小、单双、红黑、轮盘下注24个以上号码等），公司有权收回彩金及彩金产生的盈利；
						<br>4.参与该优惠，即表示您同意《优惠规则条例》，具体活动截止时间以我司通知为准，平台保留最终解释权。
					</p>
				</div>-->
				<!-- 活动3 每日累积存款  送豪礼，高达188888元-->
				<!-- <div style="padding-bottom:24px;">
					<div class="actv_h">每日累积存款 送豪礼，高达188888元</div>
					<p class="actv_p">
						活动时间：即日起
						<br>活动对象：YG娱乐全体人员
						<br>活动内容：YG娱乐无极限，坚持可超越，每日存送超值红利助您火力加倍！即日起，会员每日累积存款金额199+，次日即可领取最高达188888红利，YG娱乐助您旗开得胜，一路连赢！
					</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>奖励规则
					</div>
					<div class="actv_table3">
						<div class="col3 col3_0">
							<div class="row1">每日累计存送金额</div>
							<div class="row1">200+</div>
							<div class="row1">820+</div>
							<div class="row1">2019+</div>
							<div class="row1">8200+</div>
							<div class="row1">20009+</div>
							<div class="row1">43000+</div>
							<div class="row1">82000+</div>
							<div class="row1">130000+</div>
							<div class="row1">200009+</div>
							<div class="row1">430000+</div>
							<div class="row1">820000+</div>
							<div class="row1">1300000+</div>
							<div class="row1">5200000+</div>
							<div class="row1">13000000+</div>
						</div>
						<div class="col3 col3_1">
							<div class="row1">红利</div>
							<div class="row1">8元</div>
							<div class="row1">18元</div>
							<div class="row1">38元</div>
							<div class="row1">88元</div>
							<div class="row1">388元</div>
							<div class="row1">888元</div>
							<div class="row1">1888元</div>
							<div class="row1">3188元</div>
							<div class="row1">5188元</div>
							<div class="row1">11888元</div>
							<div class="row1">22888元</div>
							<div class="row1">35888元</div>
							<div class="row1">88888元</div>
							<div class="row1">188888元</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">流水要求</div>
							<div class="row2 row2_1">一倍流水</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">游戏限制</div>
							<div class="row2 row2_1">不限</div>
						</div>
					</div>
					<div class="actv_h5">
						<span class="actv_reat"></span>申请方式
					</div>
					<p class="actv_p">请符合条件的会员点击申请，审核通过后部门会将相应的彩金添加到您的钱包余额，逾期视为自动弃权。</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>活动细则
					</div>
					<p class="actv_p">
						1. 该活动请在次日申请，每位会员每日仅限申请一次，逾期视为放弃；
						<br>2.每位会员，仅限一个账号参与该活动；
						<br>3.如出现无风险投注、对打、套利等违规投注行为（例如：同时押庄闲、大小、黑白等）我司有权利收回彩金及彩金所产生的一切盈利；
						<br>4.此优惠活动不与首存优惠共享；
						<br>5.参与该优惠，即表示您同意《规则条例》，具体活动截止时间以我司知为准，平台保留最终解释仅。
					</p>
				</div>-->
				<!-- 活动4 投注1元起，返水2.5% 无上限-->
				<!-- <div style="padding-bottom:24px;">
					<div class="actv_h">投注1元起，返水2.5% 无上限</div>
					<p class="actv_p">
						活动时间：即日起
						<br>活动对象：YG娱乐全体人员
						<br>活动内容：即日起YG娱乐超级返水火热进行中，投注1元起，不计输赢，天天洗码返水，高达1.5%无上限。无需申请，系统自动派发。
					</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>奖励规则
					</div>
					<div class="actv_table4">
						<div class="row">
							<div class="col">有效投注</div>
							<div class="col">电子游艺</div>
							<div class="col">真人视讯</div>
							<div class="col">体育投注</div>
							<div class="col">棋牌</div>
							<div class="col">电竞</div>
						</div>
						<div class="row">
							<div class="col">1元+</div>
							<div class="col">1.0%</div>
							<div class="col">1.0%</div>
							<div class="col">0.8%</div>
							<div class="col">0.8%</div>
							<div class="col">0.5%</div>
						</div>
						<div class="row">
							<div class="col">200万+</div>
							<div class="col">1.5%</div>
							<div class="col">1.0%</div>
							<div class="col">0.9%</div>
							<div class="col">1.0%</div>
							<div class="col">0.8%</div>
						</div>
					</div>
					<div class="actv_h5">
						<span class="actv_reat"></span>优惠规则
					</div>
					<p class="actv_p">
						1.每日返水优惠可直接提出。
						<br>2.开户礼金优惠产生的有效投注不参与计算每日返水。
						<br>3.本优惠无需申请领取，系统于北京时间11:00-12:00期间结算并且发放前一日的奖励至相对应地账户上。
						<br>4.参与该优惠，即表示您同意《优惠规则与条款》
					</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>活动细则
					</div>
					<p class="actv_p">
						1.所有优惠以人民币（CNY）为结算金额；
						<br>2.每位玩家、每户、每一住址、每一电子邮箱地址、每一电话号码，相同支付方式及相同的IP地址只能享有一次优惠。若会员有重复申请账号行为，公司保留取消或收回会员优惠彩金的权利；
						<br>3.YG娱乐所有优惠特为玩家而设，任何团队或个人以不诚实的方式进行套取红利的行为，公司有权保留冻结、取消该团队或个人账户及账户余额的权利。若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，YG娱乐有权要求会员向我们提供充足有效的文件，用以确认是否享有该优惠的资质；
						<br>4.当参与优惠会员未能完全遵守、或违反、或滥用任何有关公司优惠或推广的条款，又或我们有任何证据有任何团体或个人投下一连串的关联赌注，籍以造成无论赛果怎样都可以确保可以从该存款红利或其他推广活动提供的优惠获利，YG娱乐保留权利向此团队或个人停止、取消优惠或索回已支付的全部优惠红利。此外，公司亦保留权利向这些客户扣取相当于优惠红利价值的行政费用，以补偿我们的行政成本；
						<br>5.YG娱乐保留对活动的最终解释权，以及在无通知的情况下修改、终止活动的权利，适用于所有优惠。
					</p>
				</div>-->
				<!-- 活动5  -->
				<!-- <div style="padding-bottom:24px;">
					<div class="actv_h">百家乐8输9 即送转运金18888</div>
					<p class="actv_p">
						活动时间：即日起
						<br>活动对象：YG娱乐全体人员
						<br>活动内容：即日起所有会员于真人视讯游戏中庄闲开牌8点和9点，会员在该场投注总不幸压了8点输，即可申请“百家乐8输9转运金”。
					</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>奖励规则
					</div>
					<div class="actv_table5">
						<div class="col3 col3_0">
							<div class="row1">下注金额</div>
							<div class="row1">100+</div>
							<div class="row1">10000+</div>
							<div class="row1">50000+</div>
							<div class="row1">100000+</div>
						</div>
						<div class="col3 col3_1">
							<div class="row1">转运金比例</div>
							<div class="row1">3%</div>
							<div class="row1">5%</div>
							<div class="row1">10%</div>
							<div class="row1">15%</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">彩金上限</div>
							<div class="row2 row2_1">18888元</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">流水要求</div>
							<div class="row2 row2_1">一倍流水</div>
						</div>
					</div>
					<p class="actv_p margin_top_9">例如：会员在百家乐游戏中投注庄10000，庄开8点，闲开9点，闲以9点绝杀庄8点。即可获得“百家乐8输9转运金”500彩金。</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>申请方式
					</div>
					<p class="actv_p">请符合条件的会员点击申请，审核通过后活动部门会将相应的彩金添加到您的钱包余额，逾期视为自动弃权。</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>活动细则
					</div>
					<p class="actv_p">
						1.所赠送的彩金需达到一倍流水即可申请出款，且与其他优惠共享；
						<br>2.注单只限当日有效，每位会员每天仅限申请一次，每个注单仅限申请一次；
						<br>3.所中奖的注单需在24小时内申请，逾期视为自动放弃优惠；
						<br>4.所有优惠特为玩家而设，如发现任何团体或个人以不诚实方式套取红利或任何威胁，滥用公司优惠等行为，公司保留冻结，取消该团体或个人账户及账户结余的权利。
					</p>
				</div>-->
				<!-- 活动6 真人视讯转运金  最高可获得8888元-->
				<!-- <div style="padding-bottom:24px;">
					<div class="actv_h">真人视讯转运金 最高可获得8888元</div>
					<p class="actv_p">
						活动时间：即日起
						<br>活动对象：YG娱乐全体人员
						<br>活动内容：即日起所有会员投注真人视讯，周亏损达到3000以上，即可额外获得高达8888元的转运金。
					</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>奖励规则
					</div>
					<div class="actv_table6">
						<div class="col1">
							<div class="row1">周负盈利</div>
							<div class="row1">3000+</div>
							<div class="row1">10000+</div>
							<div class="row1">50000+</div>
							<div class="row1">100000+</div>
							<div class="row1">300000+</div>
							<div class="row1">500000+</div>
							<div class="row1">1000000+</div>
						</div>
						<div class="col1">
							<div class="row1">赠送彩金</div>
							<div class="row1">38元</div>
							<div class="row1">88元</div>
							<div class="row1">188元</div>
							<div class="row1">888元</div>
							<div class="row1">1888元</div>
							<div class="row1">3888元</div>
							<div class="row1">8888元</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">流水限制</div>
							<div class="row2 row2_1">一倍流水</div>
						</div>
					</div>
					<div class="actv_h5">
						<span class="actv_reat"></span>申请方式
					</div>
					<p class="actv_p">请符合条件的会员点击申请，审核通过后活动部门会将相应的彩金添加到您的钱包余额，逾期视为自动弃权。</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>活动细则
					</div>
					<p class="actv_p">
						1. 结算周期为每周一到周日；
						<br>2.所获得彩金需一倍流水即可申请提款；
						<br>3.会员应扣除返点以及优惠金额后的实际亏损金额来计算标准；
						<br>4.会员本周仅限申请上周转运金，逾期视为无效和自动放弃此优惠；
						<br>5.真人视讯连赢彩金24小时内限制申请一次；
						<br>6.所有优惠特为玩家而设，如发现任何团体或个人以不诚实方式套取红利或任何威胁，滥用公司优惠等行为，公司保留冻结，取消该团体或个人账户及账户结余的权利。
					</p>
				</div>-->
				<!-- 活动7 IM 救援金 祝您东山再起-->
				<!-- <div style="padding-bottom:24px;">
					<div class="actv_h">IM 救援金 祝您东山再起</div>
					<p class="actv_p">
						活动时间：即日起
						<br>活动对象：YG娱乐全体人员
						<br>活动内容：即日起YG娱乐所有新老会员在电子游戏中投注娱乐，当日亏损达到500元以上，次日即可申请救援金，助您东山再起！
					</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>奖励规则
					</div>
					<div class="actv_table3">
						<div class="col3 col3_0">
							<div class="row1">当日累计有效投注</div>
							<div class="row1">500+</div>
							<div class="row1">5000+</div>
							<div class="row1">10000+</div>
							<div class="row1">50000+</div>
						</div>
						<div class="col3 col3_1">
							<div class="row1">救援金</div>
							<div class="row1">亏损金额2%</div>
							<div class="row1">亏损金额3%</div>
							<div class="row1">亏损金额4%</div>
							<div class="row1">亏损金额5%</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">彩金上限</div>
							<div class="row2 row2_1">一倍流水</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">流水要求</div>
							<div class="row2 row2_1">8888元</div>
						</div>
					</div>
					<div class="actv_h5">
						<span class="actv_reat"></span>申请方式
					</div>
					<p class="actv_p">请符合条件的会员点击申请，审核通过后活动部门会将相应的彩金添加到您的钱包余额，逾期视为自动弃权。</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>活动细则
					</div>
					<p class="actv_p">
						1.此优惠以人民币（CNY）为结算金额，当日亏损金额以YG娱乐系统报表为准；
						<br>2.范例：
						<br>当日在电子游戏中实际亏损2000元，次日可申请救援金为：2000*2％=40元
						<br>当日在电子游戏中实际亏损16000元，次日可申请救援金为：16000*4％=640元
						<br>3.仅限娱乐电子游艺、所有桌面游戏、视频扑克类游戏的亏损都不可参与次活动；
						<br>4.该活动每个会员、每天仅限申请一次，次日系统返水后24小时内申请有效；
						<br>5.捕鱼游戏不参与该优惠；
						<br>6.活动长期有效，如有停止，提前发布公告通知。
					</p>
				</div>-->
				<!--活动8 电子游戏 奖上加奖-->
				<!-- <div style="padding-bottom:24px;">
					<div class="actv_h">电子游戏 奖上加奖</div>
					<p class="actv_p">
						活动时间：即日起
						<br>活动对象：YG娱乐全体人员
						<br>活动内容：为了给会员朋友更多欢乐与惊喜，YG娱乐电子老虎机游戏即可参与奖上加奖，单局中奖金额超过500元即可获得额外奖励，最高8888元，奖金更超值，等您来拿！
					</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>奖励规则
					</div>
					<div class="actv_table8">
						<div class="col1">
							<div class="row1">首次存款</div>
							<div class="row1">500+</div>
							<div class="row1">1000+</div>
							<div class="row1">5000+</div>
							<div class="row1">10000+</div>
							<div class="row1">50000+</div>
							<div class="row1">100000+</div>
							<div class="row1">500000+</div>
							<div class="row1">1000000+</div>
						</div>
						<div class="col1">
							<div class="row1">赠送彩金</div>
							<div class="row1">18元</div>
							<div class="row1">58元</div>
							<div class="row1">88元</div>
							<div class="row1">188元</div>
							<div class="row1">888元</div>
							<div class="row1">3888元</div>
							<div class="row1">5888元</div>
							<div class="row1">8888元</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">流水要求</div>
							<div class="row2 row2_1">一倍流水</div>
						</div>
					</div>
					<div class="actv_h5">
						<span class="actv_reat"></span>申请方式
					</div>
					<p class="actv_p">请符合条件的会员点击申请，审核通过后活动部门会将相应的彩金添加到您的钱包余额，逾期视为自动弃权。</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>活动细则
					</div>
					<p class="actv_p">
						1.此优惠以人民币（CNY）为结算金额；
						<br>2.该活动每个会员、每个注单、每天仅限申请一次，中奖后24小时内申请有效；
						<br>3.所有电子游艺的桌面游戏、视频扑克类游戏注单都不可参与活动；
						<br>4.免费旋转中奖的注单不享有参加与此活动的资格；
						<br>5.捕鱼游戏不参与该优惠；
						<br>6.活动长期有效，如有停止，提前发布公告通知。
					</p>
				</div>-->
				<!--活动9 电子游艺  七天乐  RMB3888  周周派送-->
				<!-- <div style="padding-bottom:24px;">
					<div class="actv_h">电子游艺 七天乐 RMB3888 周周派送</div>
					<p class="actv_p">
						活动时间：即日起
						<br>活动对象：YG娱乐全体人员
						<br>活动内容：即日起所有进行电子游艺投注的会员，不计输赢．只要周达到2万元的有效投注，即可获得YG娱乐派送的额外彩金，最高8888元；电子游艺激情7天乐，您还在等什么呢！
					</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>奖励规则
					</div>
					<div class="actv_table9">
						<div class="col1">
							<div class="row1">周有效投注</div>
							<div class="row1">2万+</div>
							<div class="row1">5万+</div>
							<div class="row1">10万+</div>
							<div class="row1">30万+</div>
							<div class="row1">50万+</div>
							<div class="row1">100万+</div>
							<div class="row1">300万+</div>
							<div class="row1">500万+</div>
							<div class="row1">800万+</div>
							<div class="row1">1500万+</div>
						</div>
						<div class="col1">
							<div class="row1">可获彩金</div>
							<div class="row1">8元</div>
							<div class="row1">18元</div>
							<div class="row1">38元</div>
							<div class="row1">88元</div>
							<div class="row1">188元</div>
							<div class="row1">588元</div>
							<div class="row1">888元</div>
							<div class="row1">1888元</div>
							<div class="row1">3888元</div>
							<div class="row1">8888元</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">流水要求</div>
							<div class="row2 row2_1">一倍流水</div>
						</div>
					</div>
					<div class="actv_h5">
						<span class="actv_reat"></span>申请方式
					</div>
					<p class="actv_p">请符合条件的会员点击申请，审核通过后活动部门会将相应的彩金添加到您的钱包余额，逾期视为自动弃权。</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>活动细则
					</div>
					<p class="actv_p">
						1.此优惠以 币（CNY）为结算金额；
						<br>2.会员本周仅限申请上周转运金，逾期视为无效和自动放弃此优惠；
						<br>3.周有效投注必须大于周存款总额的2倍以上才符合申请；
						<br>4.免费旋转中奖的注单不享有参加与此活动的资格；
					</p>
				</div>-->
				<!--活动10 体育助力：你亏损我买单，祝您天天逆转-->
				<!-- <div style="padding-bottom:24px;">
					<div class="actv_h">体育助力：你亏损我买单，祝您天天逆转</div>
					<p class="actv_p">
						活动时间：即日起
						<br>活动对象：YG娱乐全体人员
						<br>活动内容：玩家于【YG娱乐】体育投注中，计算当天负盈利1000元或以上，即可申请【YG娱乐】赠送给您的负盈利救援彩金，最高可达3666元。
					</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>奖励规则
					</div>
					<div class="actv_table10">
						<div class="col3 col3_0">
							<div class="row1">亏损金额</div>
							<div class="row1">1000+</div>
							<div class="row1">5000+</div>
							<div class="row1">10000+</div>
						</div>
						<div class="col3 col3_1">
							<div class="row1">可获救援金</div>
							<div class="row1">2%</div>
							<div class="row1">3%</div>
							<div class="row1">4%</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">彩金上限</div>
							<div class="row2 row2_1">一倍流水</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">流水要求</div>
							<div class="row2 row2_1">8888元</div>
						</div>
					</div>
					<p class="actv_p margin_top_9">
						例:
						<br>1.当日在体育中负盈利3000元，即可申请获得的彩金为3000*2%=60元。
						<br>2.当日在体育中负盈利8000元，即可申请获得的彩金为8000*3%=240元。
						<br>3.当日在体育中负盈利20000元，即可申请获得的彩金为20000*4%=800元。
					</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>申请方式
					</div>
					<p class="actv_p">请符合条件的会员点击申请，审核通过后活动部门会将相应的彩金添加到您的钱包余额，逾期视为自动弃权。</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>活动细则
					</div>
					<p class="actv_p">
						1.所获彩金仅限投注【体育】，1倍流水即可申请提款;
						<br>2.每位玩家每天仅限申请一次，天数按照北京时间计算;
						<br>3.符合申请条件的玩家，请在次日的24小时内至：24小时在线客服申请，逾期视为自动放弃此优惠;
						<br>4.任何出现对打、对冲；任何低于欧洲盘1.7 赔率、香港与马来盘0.7赔率的所有投注，将不参与此优惠;
						<br>5.参与该优惠，即表示您同意《活动条款》。
					</p>
				</div>-->
				<!--活动 11 棋牌救援金   祝您扭转乾坤-->
				<!-- <div style="padding-bottom:24px;">
					<div class="actv_h">棋牌救援金   祝您扭转乾坤</div>
					<p class="actv_p">
						活动时间：即日起
						<br>活动对象：YG娱乐全体人员
						<br>活动内容：即日起所有新老会员进行【棋牌游戏】投注，当日亏损达到100元或以上，次日即可获得棋牌亏损救援彩金，最高可达8888元。
					</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>奖励规则
					</div>
					<div class="actv_table11">
						<div class="col3 col3_0">
							<div class="row1">亏损金额</div>
							<div class="row1">100+</div>
							<div class="row1">1000+</div>
							<div class="row1">5000+</div>
							<div class="row1">10000+</div>
							<div class="row1">100000+</div>
						</div>
						<div class="col3 col3_1">
							<div class="row1">转运金比例</div>
							<div class="row1">1%</div>
							<div class="row1">2%</div>
							<div class="row1">3%</div>
							<div class="row1">5%</div>
							<div class="row1">7%</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">彩金上限</div>
							<div class="row2 row2_1">一倍</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">流水要求</div>
							<div class="row2 row2_1">8888元</div>
						</div>
					</div>
					<div class="actv_h5">
						<span class="actv_reat"></span>申请方式
					</div>
					<p class="actv_p">请符合条件的会员点击申请，审核通过后活动部门会将相应的彩金添加到您的钱包余额，逾期视为自动弃权。</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>活动细则
					</div>
					<p class="actv_p">
						1.所有优惠以人民币（CNY）为结算金额；
						<br>2.每位玩家、每户、每一住址、每一电子邮箱地址、每一电话号码，相同支付方式及相同的IP地址只能享有一次优惠。若会员有重复申请账号行为，公司保留取消或收回会员优惠彩金的权利；
						<br>3.YG娱乐所有优惠特为玩家而设，任何团队或个人以不诚实的方式进行套取红利的行为，公司有权保留冻结、取消该团队或个人账户及账户余额的权利。若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，YG娱乐有权要求会员向我们提供充足有效的文件，用以确认是否享有该优惠的资质；
						<br>4.当参与优惠会员未能完全遵守、或违反、或滥用任何有关公司优惠或推广的条款，又或我们有任何证据有任何团体或个人投下一连串的关联赌注，籍以造成无论赛果怎样都可以确保可以从该存款红利或其他推广活动提供的优惠获利，YG娱乐保留权利向此团队或个人停止、取消优惠或索回已支付的全部优惠红利。此外，公司亦保留权利向这些客户扣取相当于优惠红利价值的行政费用，以补偿我们的行政成本;
						<br>5.YG娱乐保留对活动的最终解释权，以及在无通知的情况下修改、终止活动的权利，适用于所有优惠。
					</p>
				</div>-->
				<!--活动 12 闯关彩金  棋牌投注  闯关彩金  棋牌投注  关关有奖 -->
				<!-- <div style="padding-bottom:24px;">
					<div class="actv_h">闯关彩金 棋牌投注 关关有奖</div>
					<p class="actv_p">
						活动时间：即日起
						<br>活动对象：YG娱乐全体人员
						<br>活动内容：本站全体会员凡在活动期间每日投注VG棋牌 ，累积有效投注达到以下关卡门槛，即可参与棋牌日闯关活动，天天领到奖，达到通关，可累计抱回28018元！尚未注册/存款的宝宝们，强烈建议您注册/存款，超多优惠等着您喔！
					</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>奖励规则
					</div>
					<div class="actv_table12">
						<div class="col3 col3_0">
							<div class="row1">关卡</div>
							<div class="row1">第一关</div>
							<div class="row1">第二关</div>
							<div class="row1">第三关</div>
							<div class="row1">第四关</div>
							<div class="row1">第五关</div>
							<div class="row1">第六关</div>
							<div class="row1">第七关</div>
							<div class="row1">第八关</div>
							<div class="row1">第九关</div>
							<div class="row1">第十关</div>
							<div class="row1">第十一关</div>
							<div class="row1">第十二关</div>
						</div>
						<div class="col3 col3_0">
							<div class="row1">累计有效投注</div>
							<div class="row1">2千+</div>
							<div class="row1">5千+</div>
							<div class="row1">1万+</div>
							<div class="row1">3万+</div>
							<div class="row1">10万+</div>
							<div class="row1">30万+</div>
							<div class="row1">50万+</div>
							<div class="row1">100万+</div>
							<div class="row1">300万+</div>
							<div class="row1">600万+</div>
							<div class="row1">1000万+</div>
							<div class="row1">2000万+</div>
						</div>
						<div class="col3 col3_1">
							<div class="row1">可获奖金</div>
							<div class="row1">5元</div>
							<div class="row1">13元</div>
							<div class="row1">20元</div>
							<div class="row1">50元</div>
							<div class="row1">130元</div>
							<div class="row1">300元</div>
							<div class="row1">600元</div>
							<div class="row1">900元</div>
							<div class="row1">2000元</div>
							<div class="row1">4000元</div>
							<div class="row1">7000元</div>
							<div class="row1">13000元</div>
						</div>
						<div class="col3 col3_1">
							<div class="row1">累计可获奖金</div>
							<div class="row1">5元</div>
							<div class="row1">18元</div>
							<div class="row1">38元</div>
							<div class="row1">88元</div>
							<div class="row1">218元</div>
							<div class="row1">518元</div>
							<div class="row1">1118元</div>
							<div class="row1">2018元</div>
							<div class="row1">4018元</div>
							<div class="row1">8018元</div>
							<div class="row1">15018元</div>
							<div class="row1">28018元</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">流水要求</div>
							<div class="row2 row2_1">一倍流水</div>
						</div>
					</div>
					<p class="actv_p margin_top_9">
						一：每关奖金只可申请一次，通关可获得十二关全部奖金，累积奖金28018元，会员可一次性申请多个关卡奖金！
						<br>例：有效投注达到五关，可一次性申请“第一关至第五关”的奖金！
						<br>二：会员累积有效投注达到100万（第八关）即可获得累积金5+13+20+50+130+330+600+900=2018元！以此类推！！！
						<br>三：达到更高关卡可再次申请，最高可获得十二关奖金，抱得28018元大奖，本期申请时间结束后即停止申请本期冲关奖金，下期重新开始计算！
						<br>四：仅限棋牌游戏才可申请此优惠活动
					</p>

					<div class="actv_h5">
						<span class="actv_reat"></span>申请方式
					</div>
					<p class="actv_p">请符合条件的会员点击申请，审核通过后活动部门会将相应的彩金添加到您的钱包余额，逾期视为自动弃权。</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>活动细则
					</div>
					<p class="actv_p">
						1.所有优惠以人民币（CNY）为结算金额；
						<br>2.每位玩家、每户、每一住址、每一电子邮箱地址、每一电话号码，相同支付方式及相同的IP地址只能享有一次优惠。若会员有重复申请账号行为，公司保留取消或收回会员优惠彩金的权利；
						<br>3.YG娱乐所有优惠特为玩家而设，任何团队或个人以不诚实的方式进行套取红利的行为，公司有权保留冻结、取消该团队或个人账户及账户余额的权利。若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，YG娱乐有权要求会员向我们提供充足有效的文件，用以确认是否享有该优惠的资质；
						<br>4.当参与优惠会员未能完全遵守、或违反、或滥用任何有关公司优惠或推广的条款，又或我们有任何证据有任何团体或个人投下一连串的关联赌注，籍以造成无论赛果怎样都可以确保可以从该存款红利或其他推广活动提供的优惠获利，YG娱乐保留权利向此团队或个人停止、取消优惠或索回已支付的全部优惠红利。此外，公司亦保留权利向这些客户扣取相当于优惠红利价值的行政费用，以补偿我们的行政成本；
						<br>５.YG娱乐保留对活动的最终解释权，以及在无通知的情况下修改、终止活动的权利，适用于所有优惠。
					</p>
				</div>-->
				<!--活动 13 投注1元起，返水1.7% 无上限-->
				<!-- <div style="padding-bottom:24px;">
					<div class="actv_h">投注1元起，返水1.7% 无上限</div>
					<p class="actv_p">
						活动时间：即日起
						<br>活动对象：YG娱乐全体人员
						<br>活动内容：即日起YG娱乐超级返水火热进行中，投注1元起，不计输赢，天天洗码返水，高达1.5%无上限。无需申请，系统自动派发。
					</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>奖励规则
					</div>
					<div class="actv_table13">
						<div class="col3 col3_0">
							<div class="row1">有效投注</div>
							<div class="row1">1元+</div>
							<div class="row1">300万+</div>
							<div class="row1">800万+</div>
						</div>
						<div class="col3 col3_0">
							<div class="row1">电子游艺</div>
							<div class="row1">1.0%</div>
							<div class="row1">1.5%</div>
							<div class="row1">1.7%</div>
						</div>
						<div class="col3 col3_1">
							<div class="row1">真人视讯</div>
							<div class="row1">1.0%</div>
							<div class="row1">1.0%</div>
							<div class="row1">1.0%</div>
						</div>
						<div class="col3 col3_1">
							<div class="row1">体育投注</div>
							<div class="row1">0.8%</div>
							<div class="row1">0.9%</div>
							<div class="row1">1.0%</div>
						</div>
						<div class="col3 col3_1">
							<div class="row1">棋牌</div>
							<div class="row1">0.8%</div>
							<div class="row1">1.0%</div>
							<div class="row1">1.2%</div>
						</div>
						<div class="col3 col3_1">
							<div class="row1">电竞</div>
							<div class="row1">0.5%</div>
							<div class="row1">0.8%</div>
							<div class="row1">1.0%</div>
						</div>
					</div>
					<p class="actv_p margin_top_9 margin_bottom_9">返点优惠无需申请，结算发放时间如下</p>
					<div class="actv_table13_0">
						<div class="col3 col3_0">
							<div class="row1">有效投注</div>
							<div class="row1">返水结算时间</div>
							<div class="row1">返水发放时间</div>
						</div>
						<div class="col3 col3_0">
							<div class="row1">美东时间</div>
							<div class="row1">当日0:00-23:59</div>
							<div class="row1">次日04:00-05:00</div>
						</div>
						<div class="col3 col3_1">
							<div class="row1">北京时间</div>
							<div class="row1">当日12:00-至次日11:59</div>
							<div class="row1">次日16:00-17:00</div>
						</div>
					</div>
					<div class="actv_h5">
						<span class="actv_reat"></span>优惠规则
					</div>
					<p class="actv_p">
						1.每日返水优惠可直接提出。
						<br>2.开户礼金优惠产生的有效投注不参与计算每日返水。
						<br>3.本优惠无需申请领取，系统于北京时间11:00-12:00期间结算并且发放前一日的奖励至相对应地账户上。
						<br>4.参与该优惠，即表示您同意《优惠规则与条款》
					</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>活动细则
					</div>
					<p class="actv_p">
						1.所有优惠以人民币（CNY）为结算金额；
						<br>2.每位玩家、每户、每一住址、每一电子邮箱地址、每一电话号码，相同支付方式及相同的IP地址只能享有一次优惠。若会员有重复申请账号行为，公司保留取消或收回会员优惠彩金的权利；
						<br>3.YG娱乐所有优惠特为玩家而设，任何团队或个人以不诚实的方式进行套取红利的行为，公司有权保留冻结、取消该团队或个人账户及账户余额的权利。若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，YG娱乐有权要求会员向我们提供充足有效的文件，用以确认是否享有该优惠的资质；
						<br>4.当参与优惠会员未能完全遵守、或违反、或滥用任何有关公司优惠或推广的条款，又或我们有任何证据有任何团体或个人投下一连串的关联赌注，籍以造成无论赛果怎样都可以确保可以从该存款红利或其他推广活动提供的优惠获利，YG娱乐保留权利向此团队或个人停止、取消优惠或索回已支付的全部优惠红利。此外，公司亦保留权利向这些客户扣取相当于优惠红利价值的行政费用，以补偿我们的行政成本；
						<br>5.YG娱乐保留对活动的最终解释权，以及在无通知的情况下修改、终止活动的权利，适用于所有优惠。
					</p>
				</div>-->

				<!--活动 14 充值粽享55元彩金，端午节，一起来狂欢-->
				<!-- <div style="padding-bottom:24px;">
					<div class="actv_h">充值粽享55元彩金，端午节，一起来狂欢</div>
					<p class="actv_p">
						活动时间：即日起
						<br>活动对象：YG娱乐全体会员
						<br>活动内容：即日起【YG娱乐会员】每日充值金额达到550元以上，即可获得充值赠送彩金！
					</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>奖励规则
					</div>
					<div class="actv_table14">
						<div class="col3 col3_0">
							<div class="row1">活动人员</div>
							<div class="row1">YG娱乐会员</div>
						</div>
						<div class="col3 col3_0">
							<div class="row1">充值金额</div>
							<div class="row1">≧550元</div>
						</div>
						<div class="col3 col3_1">
							<div class="row1">赠送金额</div>
							<div class="row1">55元</div>
						</div>
						<div class="col3 col3_1">
							<div class="row1">提现要求</div>
							<div class="row1">一倍流水</div>
						</div>
					</div>
					<p class="actv_p margin_top_9 margin_bottom_9">端午活动期间，充值金额较高者，更有神秘好礼等你哦！</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>优惠规则
					</div>
					<p class="actv_p">
						请符合条件的会员点击申请，审核通过后活动部门会将相应的彩金添加到您的钱包余额，逾期视为自动弃权。
					</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>申请方式
					</div>
					<p class="actv_p">
						1.充值赠送彩金需一倍流水方可提款；
						<br>2.活动期间每天每个会员只限领取一次；
						<br>3.每位玩家、相同IP地址、相同银行户名/卡号、相同手机设备均视为同一个人，若会员有重复申请账号行为，公司保留取消或收回现金红包的权利；
						<br>4.所有优惠特为玩家而设，如发现任何团体或个人以不诚实方式套取红利或任何威胁，滥用公司优惠等行为，公司保留冻结，取消该团体或个人账户及账户结余的权利；
						<br>5.公司规定无风险注单不计算有效投注额，无风险注单包括：游戏中同时投注黑白、龙虎、庄闲、投注直注胜率不可超过70%,任何非法套取优惠行为将扣除产生的盈利。
					</p>
				</div>-->

				<!--活动 15 浓情端午节，温情相伴，投注送好礼-->
				<!-- <div style="padding-bottom:24px;">
					<div class="actv_h">浓情端午节，温情相伴，投注送好礼</div>
					<p class="actv_p">
						活动时间：2019年6月7日-2019年6月9日
						<br>活动对象：YG娱乐全体会员
						<br>活动内容：即日起【YG娱乐会员】每日有效投注金额达到对应条件，即可获得充值好礼，一倍流水即可提现！赠送人数无上限！
					</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>奖励规则
					</div>
					<div class="actv_table15">
						<div class="col2">
							<div class="row2 row2_0">活动人员</div>
							<div class="row2 row2_1">YG娱乐会员</div>
						</div>
						<div class="col3 col3_0">
							<div class="row1">日有效投注量</div>
							<div class="row1">1千+</div>
							<div class="row1">5千+</div>
							<div class="row1">1万+</div>
							<div class="row1">10万+</div>
							<div class="row1">50万+</div>
							<div class="row1">100万+</div>
							<div class="row1">500万+</div>
							<div class="row1">1000万+</div>
							<div class="row1">5000万+</div>
							<div class="row1">1亿+</div>
						</div>
						<div class="col3 col3_1">
							<div class="row1">赠送金额</div>
							<div class="row1">18元</div>
							<div class="row1">38元</div>
							<div class="row1">58元</div>
							<div class="row1">88元</div>
							<div class="row1">128元</div>
							<div class="row1">888元</div>
							<div class="row1">1688元</div>
							<div class="row1">2888元</div>
							<div class="row1">6888元</div>
							<div class="row1">8888元</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">提现要求</div>
							<div class="row2 row2_1">一倍流水</div>
						</div>
					</div>
					<p class="actv_p margin_top_9 margin_bottom_9">端午活动期间，累积有效投注38888元以上，立即赠送1000元现金，无流水要求即可提现。</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>优惠规则
					</div>
					<p class="actv_p">请符合条件的会员点击申请，审核通过后活动部门会将相应的彩金添加到您的钱包余额，逾期视为自动弃权。</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>申请方式
					</div>
					<p class="actv_p">
						1.有效投注量赠送彩金需一倍流水方可提款；
						<br>2.活动期间累积赠送彩金和日投注量赠送彩金不可叠加享受该优惠；
						<br>3.每位玩家、相同IP地址、相同银行户名/卡号、相同手机设备均视为同一个人，若会员有重复申请账号行为，公司保留取消或收回现金红包的权利；
						<br>4.所有优惠特为玩家而设，如发现任何团体或个人以不诚实方式套取红利或任何威胁，滥用公司优惠等行为，公司保留冻结，取消该团体或个人账户及账户结余的权利；
						<br>5.公司规定无风险注单不计算有效投注额，无风险注单包括：游戏中同时投注黑白、龙虎、庄闲、投注直注胜率不可超过70%,任何非法套取优惠行为将扣除产生的盈利。
					</p>
				</div>-->

				<!--活动 16 公司入款三大豪礼-->
				<!-- <div style="padding-bottom:24px;">
					<div class="actv_h">公司入款三大豪礼</div>
					<p class="actv_p">
						一．公司入款即送1%存款额。
						<br>二．公司入款单笔10000元以上加赠0.2%存款额，即单笔入款10000元以上赠送1.2%存款额。
						<br>三．公司入款单笔50000元以上加赠0.5%存款额，即单笔入款50000元以上赠送1.5%存款额。
						限！
					</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>活动细则
					</div>
					<p class="actv_p">
						1. 无游戏类型限制，按照北京时间计算。
						<br>2. 如出现恶意套利等违规现象，『YG娱乐』有权取消该会员优惠资格。
						<br>3. 『YG娱乐』保留对活动的最终解释权，以及在无通知的情况下修改，终止活动的权力，适用于所以优惠。
					</p>
				</div>-->
				<!--活动 16 越挫越勇-->
				<!-- <div style="padding-bottom:24px;">
					<div class="actv_h">越挫越勇</div>
					<p class="actv_p">活一时的失败，不是永远的失败，『中博体育』助力彩金，助您强力翻本。</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>奖励规则
					</div>
					<div class="actv_table15">
						<div class="col3 col3_0">
							<div class="row1">当日实际负盈利</div>
							<div class="row1">1000元+</div>
							<div class="row1">5000元+</div>
							<div class="row1">1万元+</div>
							<div class="row1">5万元+</div>
							<div class="row1">10万元+</div>
							<div class="row1">20万元+</div>
							<div class="row1">50万元+</div>
							<div class="row1">100万元+</div>
						</div>
						<div class="col3 col3_0">
							<div class="row1">助力彩金</div>
							<div class="row1">58元</div>
							<div class="row1">288元</div>
							<div class="row1">588元</div>
							<div class="row1">1888元</div>
							<div class="row1">3888元</div>
							<div class="row1">8888元</div>
							<div class="row1">18888元</div>
							<div class="row1">负盈利总额5%</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">负盈利区间</div>
							<div class="row2 row2_1">以美东时间计算（北京时间中午12时至次日中午12时）</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">提款要求</div>
							<div class="row2 row2_1">一倍打码即可提款</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">申请时间</div>
							<div class="row2 row2_1">以每日中午12时至18时，如无申请视为自动放弃</div>
						</div>
					</div>
					<div class="actv_h5">
						<span class="actv_reat"></span>活动细则
					</div>
					<p class="actv_p">
						1. 本活动只针对体育板块，其他游戏 不参与负盈利计算。
						<br>2. 本活动所得助力彩金可在所有游戏板块完成一倍打码即可提款。
						<br>3. 『中博体育』保留对活动的最终解释权，以及在无通知的情况下修改，终止活动的权力，适用于所以优惠。
					</p>
				</div>-->
				<!--活动 17 进球盛宴-->
				<!-- <div style="padding-bottom:24px;">
					<div class="actv_h">进球盛宴</div>
					<p class="actv_p">进球盛宴让您享受视觉的冲击，心灵的满足，『中博体育』为您添能加油，最高奖励可领3888元！</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>奖励规则
					</div>
					<div class="actv_table15">
						<div class="col3 col3_0">
							<div class="row1">最低下注金额</div>
							<div class="row1">100元</div>
							<div class="row1">100元</div>
							<div class="row1">100元</div>
							<div class="row1">100元</div>
						</div>
						<div class="col2" style="flex-basis:25%;">
							<div class="row1">赢球数</div>
							<div class="row1">3个</div>
							<div class="row1">5个</div>
							<div class="row1">6个</div>
							<div class="row1">7个</div>
						</div>
						<div class="col2">
							<div class="row1">奖励比例</div>
							<div class="row1">10%</div>
							<div class="row1">20%</div>
							<div class="row1">30%</div>
							<div class="row1">50%</div>
						</div>
						<div class="col2">
							<div class="row1">最高奖励</div>
							<div class="row1">3888元</div>
							<div class="row1">3888元</div>
							<div class="row1">3888元</div>
							<div class="row1">3888元</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">申请方式</div>
							<div class="row2 row2_1">联系在线客服</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">提款要求</div>
							<div class="row2 row2_1">一倍打码即可提款</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">申请时间</div>
							<div class="row2 row2_1">以每日中午12时至18时，如无申请视为自动放弃</div>
						</div>
					</div>
					<p
						class="actv_p margin_top_9"
					>例：在赛事开赛前投注100元主队独赢，最终赛事比分为主队4：1客队，那么主队赢客队3个球（投注的球队进球数减去对方的进球数）则可获得100*10%=10元的额外奖励</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>活动细则
					</div>
					<p class="actv_p">
						1. 凡是投注娱乐体育赛事，以美洲杯，欧洲杯，亚洲杯，五大联赛“英超，西甲，德甲，法甲，意甲”及欧冠等足球赛事，只要全额盈利并达到以下的活动要求即可获得由『中博体育』赠送的额外奖励。
						<br>2. 本活动每天每位会员仅限申请一次，活动按照北京时间计算，当赛事完赛后于当日凭赛事单号或者局号联系24小时在线客服申请当日中奖赛事，逾期视为自动放弃。
						<br>3. 『中博体育』保留对活动最终解释权；以及在无通知的情况下修改，终止活动的权利，适用于所有优惠。
					</p>
				</div>-->
				<!--活动 18 玩转棋牌 加持奖励 让您大杀四方-->
				<!-- <div style="padding-bottom:24px;">
					<div class="actv_h">玩转棋牌 加持奖励 让您大杀四方</div>
					<p class="actv_p">凡是投注VG、KY、FG、LY棋牌类游戏隔天即可获得8元加持奖励！（如只用加持奖励的彩金投注则次日不再派送加持奖励）</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>奖励规则
					</div>
					<div class="actv_table15">
						<div class="col2">
							<div class="row2 row2_0">指定游戏</div>
							<div class="row2 row2_1">
								VG 棋牌
								<br>KY 棋牌
								<br>FG 棋牌
								<br>LY 棋牌
							</div>
						</div>
						<div class="col3 col3_0">
							<div class="row1">总有效投注</div>
							<div class="row1">2000+</div>
							<div class="row1">5000+</div>
							<div class="row1">1万+</div>
							<div class="row1">5万+</div>
							<div class="row1">10万+</div>
							<div class="row1">50万+</div>
							<div class="row1">100万+</div>
							<div class="row1">200万+</div>
							<div class="row1">500万+</div>
							<div class="row1">1千万+</div>
						</div>
						<div class="col2" style="flex-basis:25%;">
							<div class="row1">加持奖励</div>
							<div class="row1">18元</div>
							<div class="row1">38元</div>
							<div class="row1">88元</div>
							<div class="row1">188元</div>
							<div class="row1">388元</div>
							<div class="row1">888元</div>
							<div class="row1">3888元</div>
							<div class="row1">5888元</div>
							<div class="row1">8888元</div>
							<div class="row1">18888元</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">申请方式</div>
							<div class="row2 row2_1">无需申请，次日自动派送</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">打码截止时间</div>
							<div class="row2 row2_1">当日中午12时至次日中午12时</div>
						</div>
					</div>
					<div class="actv_h5">
						<span class="actv_reat"></span>活动细则
					</div>
					<p class="actv_p">
						1. 本活动只针对棋牌板块，其他游戏板块不参与有效投注计算！
						<br>2. 本活动以美东时间计算（北京时间：中午12时至次日中午12时）
						<br>3. 『中博』保留对活动最终解释权；以及在无通知的情况下修改，终止活动的权利，适用于所有优惠。
					</p>
				</div>-->
				<!--活动 19 玩转棋牌 助力彩金-->
				<!-- <div style="padding-bottom:24px;">
					<div class="actv_h">玩转棋牌 助力彩金</div>
					<p class="actv_p">凡是投注VG、KY、FG、LY棋牌类游戏当日实际负盈利1000+即可获得助力彩金。</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>奖励规则
					</div>
					<div class="actv_table15">
						<div class="col2">
							<div class="row2 row2_0">指定游戏</div>
							<div class="row2 row2_1">
								VG 棋牌
								<br>KY 棋牌
								<br>FG 棋牌
								<br>LY 棋牌
							</div>
						</div>
						<div class="col3 col3_0">
							<div class="row1">当日实际负盈利</div>
							<div class="row1">1000+</div>
							<div class="row1">5000+</div>
							<div class="row1">1万+</div>
							<div class="row1">5万+</div>
							<div class="row1">10万+</div>
							<div class="row1">20万+</div>
							<div class="row1">50万+</div>
							<div class="row1">100万+</div>
						</div>
						<div class="col2">
							<div class="row1">助力彩金</div>
							<div class="row1">88元</div>
							<div class="row1">288元</div>
							<div class="row1">588元</div>
							<div class="row1">1888元</div>
							<div class="row1">3888元</div>
							<div class="row1">8888元</div>
							<div class="row1">18888元</div>
							<div class="row1">负盈利总额5%</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">申请方式</div>
							<div class="row2 row2_1">联系在线客服</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">提款要求</div>
							<div class="row2 row2_1">所有板块游戏完成一倍打码即可</div>
						</div>
					</div>
					<div class="actv_h5">
						<span class="actv_reat"></span>活动细则
					</div>
					<p class="actv_p">
						1. 本活动只针对棋牌板块，其他游戏板块不参与负盈利计算！
						<br>2. 本活动以美东时间计算（北京时间：中午12时至次日中午12时）
						<br>3. 本活动由每日中午12时至18时期间进行申请，如无申请视为会员自动放弃。
						<br>4. 『中博』保留对活动最终解释权；以及在无通知的情况下修改，终止活动的权利，适用于所有优惠。
					</p>
				</div>-->
				<!--活动 20 投注一元起， 即享1.0%无限返水，高达1.7%无上限-->
				<!-- <div style="padding-bottom:24px;">
					<div class="actv_h">投注一元起， 即享1.0%无限返水，高达1.7%无上限</div>
					<div class="actv_h5">
						<span class="actv_reat"></span>活动详情
					</div>
					<p class="actv_p margin_bottom_9 margin_top_9">『中博』超级返水火热进行中，投注1元起，不计输赢，天天洗码返水，无上限。</p>
					<div class="actv_table15">
						<div class="col3_0">
							<div class="row1">有效投注</div>
							<div class="row1">1元以上</div>
							<div class="row1">200万元以上</div>
							<div class="row1">800万元以上</div>
						</div>
						<div class="col2">
							<div class="row1">电竞</div>
							<div class="row1">0.5%</div>
							<div class="row1">0.8%</div>
							<div class="row1">1.0%</div>
						</div>
						<div class="col2">
							<div class="row1">体育投注</div>
							<div class="row1">1.0%</div>
							<div class="row1">1.1%</div>
							<div class="row1">1.2%</div>
						</div>
						<div class="col2">
							<div class="row1">真人娱乐</div>
							<div class="row1">0.6%</div>
							<div class="row1">0.7%</div>
							<div class="row1">0.8%</div>
						</div>
						<div class="col2">
							<div class="row1">电子游艺</div>
							<div class="row1">1.0%</div>
							<div class="row1">1.5%</div>
							<div class="row1">1.7%</div>
						</div>
						<div class="col2">
							<div class="row1">棋牌</div>
							<div class="row1">0.8%</div>
							<div class="row1">1.0%</div>
							<div class="row1">1.2%</div>
						</div>
					</div>
					<p class="actv_p margin_bottom_9 margin_top_9">返水优惠无需申请，结算和发放时间如下</p>
					<div class="actv_table15">
						<div class="col2">
							<div class="row1"></div>
							<div class="row1">返水结算时间</div>
							<div class="row1">返水发放时间</div>
						</div>
						<div class="col2" style="flex-basis:40%;">
							<div class="row1">美东时间</div>
							<div class="row1">当日00：00-23：59</div>
							<div class="row1">次日04：00-06：00</div>
						</div>
						<div class="col2" style="flex-basis:40%;">
							<div class="row1">北京时间</div>
							<div class="row1">当日12：00-次日11：59</div>
							<div class="row1">次日16：00-18：00</div>
						</div>
					</div>
					<div class="actv_h5">
						<span class="actv_reat"></span>活动细则
					</div>
					<p class="actv_p">
						1．所有返水优惠，一倍打码即可提出。
						<br>2．会员无须提出申请，优惠额度将在北京时间每日下午18:00左右自动加入会员账号。
						<br>3．新老会员日投注1元起，皆可享受：体育赛事，视讯直播，电子游艺最高无上限返水回馈。
						<br>4．投注在体育赛事，对冲或对打投注不计，未接受注单/赛果为平时的注单不计。在真人娱乐/电子游艺/对战/彩票游戏投注，无风险投注不计。无风险投注包括在百家乐同时下注庄家、闲家，轮盘同时下注黑色、红色，单、双。大、小，任何取消注单赛事或局数不计。
						<br>5．『中博』保留对活动最终解释权；以及在无通知的情况下修改，终止活动的权利，适用于所有优惠。
					</p>
				</div> -->
			</div>
			<div v-else>
				<!--活动 12 初次相遇 豪礼相赠   注册免费送88元彩金-->
				<div v-if="is_8888" style="padding-bottom:24px;">
					<div class="actv_h">初次相遇 豪礼相赠 注册免费送88元彩金</div>
					<p class="actv_p">
						活动时间：即日起
						<br>活动对象：YG娱乐全体人员
						<br>活动内容：即日起成功注册成为我司会员，即可获得免费赠送的88元的迎新豪礼！只需达到对应的条件即可领取相应的彩金，盈利到指定的金额即可申请提款，赠送人数无上限！尚未注册/存款的亲们强烈建议您注册/存款，超多优惠等着您噢！
					</p>
					<div class="actv_h5">
						<span class="actv_reat"></span>奖励规则
					</div>
					<div class="actv_table12">
						<div class="col2">
							<div class="row2 row2_0">活动对象</div>
							<div class="row2 row2_1">新注册会员</div>
						</div>
						<div class="col3 col3_0">
							<div class="row1">领取条件</div>
							<div class="row1">第一天登录</div>
							<div class="row1">第二天登录</div>
							<div class="row1">第三天登录</div>
							<div class="row1">第四天登录</div>
							<div class="row1">第五天登录</div>
						</div>
						<div class="col3 col3_1">
							<div class="row1">彩金金额</div>
							<div class="row1">5元</div>
							<div class="row1">8元</div>
							<div class="row1">15元</div>
							<div class="row1">25元</div>
							<div class="row1">35元</div>
						</div>
						<div class="col2">
							<div class="row2 row2_0">提款要求</div>
							<div class="row2 row2_1">满100元</div>
						</div>
						<div class="col3 col3_1">
							<div class="row1">领取方式</div>
							<div class="row1">自动派发</div>
							<div class="row1">自动派发</div>
							<div class="row1">手动领取</div>
							<div class="row1">手动领取</div>
							<div class="row1">手动领取</div>
						</div>
					</div>
					<div class="actv_h5">
						<span class="actv_reat"></span>申请方式
					</div>
					<div class="actv_8888">
						<div class="actv_8888_t margin_bottom_2">
							<div class="flex_30">15元</div>
							<div class="flex_40">25元</div>
							<div class="flex_30">35元</div>
						</div>
						<img class="actv_8888_img" src="../../assets/actv_0.png">
						<div class="actv_8888_t actv_font_0 margin_bottom_8">
							<div class="flex_30">第三天登录</div>
							<div class="flex_40">第四天登录</div>
							<div class="flex_30">第五天登录</div>
						</div>
						<div class="actv_8888_t">
							<div v-for="(btn,index) in btns_8888" :key="index" class="flex_30">
								<button
									class="actv_8888_btn"
									:class="{btns_8888_disabled:btn.disabled ? true : false}"
									@click="getBonus(btn)"
								>{{btn.text}}</button>
							</div>
						</div>
					</div>
					<div class="actv_h5">
						<span class="actv_reat"></span>活动细则
					</div>
					<p class="actv_p">
						1.所赠送的彩金需一倍流水方可提款；
						<br>2.登录期间第二天领取彩金后，要有一次充值记录，才可领取第三天赠送的彩金，第三天领取后要有充值记录，才可领取第四天的，以此类推，方可领取88元全部彩金；
						<br>3.彩金不可累积申请后下注，必须在每次申请后进行娱乐或提现，申请彩金时账户额度不能大于5元；
						<br>4.所有优惠特为玩家而设，如发现任何团体或个人以不诚实方式套取红利或任何威胁，滥用公司优惠等行为，公司保留冻结，取消该团体或个人账户及账户结余的权利；
						<br>5.公司规定无风险注单不计算有效投注额，无风险注单包括：游戏中同时投注黑白、龙虎、庄闲、投注直注胜率不可超过70%,任何非法套取优惠行为将扣除产生的盈利。
					</p>
				</div>
			</div>
			
			<div v-if="id==98">
				<div class="actv_h">首次使用云闪付App入款，额外赠送10%，限时优惠</div>
				<p class="actv_p">
					活动时间：即日起
					<br>活动对象：YG娱乐全体人员
					<br>活动内容：即日起YG娱乐会员首次使用银联云闪付入款成功，即可申请赠送10%的彩金，仅限银联云闪付首次入款优惠。
				</p>
				<div class="actv_h5">
					<span class="actv_reat"></span>银联云闪付入款奖励规则
				</div>
				<p class="actv_p">
					1.首次使用银联云闪付入款，额外赠送10%，需手动申请；
					<br>2.二次往后充值，每次都可享受充值优惠1%的赠送彩金。
				</p>
				<div class="actv_h5">
					<span class="actv_reat"></span>活动细则
				</div>
				<p class="actv_p">
					1. 首次赠送彩金需进行活动申请，会员账号绑定的手机号需要与银联云闪付的账号一致，方可申请成功；
					<br>2. 使用银联云闪付第二次往后充值赠送1%的彩金优惠，入款成功立即赠送，无需审核； 
					<br>3.彩金赠送10%只限当天领取有效，当天24:00后将不再享受赠送彩金，如账号没有领取过该彩金，再次充值后即可申请享受首次10%的赠送彩金； 
					<br>4. 所赠送的彩金需达到一倍流水即可申请出款，且与其他优惠共享； 
						5. 所有优惠特为玩家而设，如发现任何团体或个人以不诚实方式套取红利或任何威胁，滥用公司优惠等行为，公司保留冻结，取消该团体或个人账户及账户结余的权利。
				</p>
				<div style="width:100%;height:40px;margin:30px 0;display: flex;justify-content:space-around;">
					<a target="_blank" style="display:block;width:132px;height:36px;" href="https://apps.apple.com/cn/app/%E4%BA%91%E9%97%AA%E4%BB%98-%E9%93%B6%E8%A1%8C%E4%B8%9A%E7%BB%9F%E4%B8%80%E7%A7%BB%E5%8A%A8%E6%94%AF%E4%BB%98app/id600273928">
						<img style="width:100%;height:100%" src="./img/pingguo.png" alt="">
					</a>
					<a target="_blank" style="display:block;width:132px;height:36px;" href="https://sj.qq.com/myapp/detail.htm?apkName=com.unionpay">
						<img style="width:100%;height:100%" src="./img/anzuo.png" alt="">
					</a>
				</div>
				<div class="lunbo">
					<van-swipe :show-indicators="flag" :autoplay="1800"  indicator-color="#8A75FF">
						<van-swipe-item><img src="./img/one.png" alt=""></van-swipe-item>
						<van-swipe-item><img src="./img/two.png" alt=""></van-swipe-item>
						<van-swipe-item><img src="./img/three.png" alt=""></van-swipe-item>
						<van-swipe-item><img src="./img/si.png" alt=""></van-swipe-item>
						<van-swipe-item><img src="./img/wu.png" alt=""></van-swipe-item>
						<van-swipe-item><img src="./img/liu.png" alt=""></van-swipe-item>
					</van-swipe>
					<div class="left"></div>
					<div class="right"></div>
				</div>
			</div>



			<div v-show="!is_8888" class="actv_btn_box">
				<button class="actv_btn" @click="submit">立即申请</button>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	data() {
		return {
			isShow: false,
			id: '',
			html: '',
			is_8888: false,
			btns_8888: [],
			flag:false
		}
	},
	computed: {
		...mapGetters(['platformFlag', 'user_token', 'account'])
	},
	async mounted() {
		this.id = this.$route.query.id
		if (!this.id) {
			toast('无效的链接')
			return
		}
		this.getData('')
	},
	methods: {
		submit() {
			if (!this.user_token) {
				toast('暂未登录，请先登录')
				this.$router.push('/login')
				return
			}
			let id = this.list.id
			let loading = this.$loading({ text: '正在申请' })
			this.$http
				.post('/gameActivity/apply/' + id, { platformFlag: this.platformFlag })
				.then(res => {
					if (res.code == 200) {
						loading.close()
						toast('您已申请成功，请耐心等候！')
					} else {
						loading.close()
						toast(res.msg)
					}
				})
				.catch(_ => {
					loading.close()
				})
		},
		getData(hd_type) {
			let loading = this.$loading({ text: '正在加载…' })
			this.$http
				.get('/gameActivity/list', { page_no: 1, page_size: 100, hd_type: hd_type })
				.then(res => {
					if (res.code == '200') {
						let lists = res.data.data
						lists.forEach(list => {
							if (this.id == list.id) {
								this.list = list
								let html = list.detailDemo
								if (list.id == '53') {
									this.set_8888()
								} else {
									if(list.isShowApply == 0){
										this.flag=false
									}
									this.html = html
								}
								this.isShow = true
							}
						})
					} else {
						res.msg && toast(res.msg)
					}
					loading.close()
				})
				.catch(() => {
					loading.close()
				})
		},
		getBonus(btn) {
			if (!this.account.userId) {
				toast('暂未登录，请先登录')
				this.$router.push('/login')
				return
			}
			this.$http.post('/user/freeGetMoney', {}).then(res => {
				if (res.code == 200) {
					Dialog.alert({
						message: '彩金领取成功，已经发放到您的账户，快去查看吧！',
						confirmButtonText: '好的'
					})
					this.$api.getUserInfo()
				} else {
					toast(res.msg)
				}
			})
		},
		set_8888() {
			this.btns_8888 = []
			let account = this.account
			let day3 = {
				disabled: true,
				text: '等待领取',
				day: 3
			}
			let day4 = {
				disabled: true,
				text: '等待领取',
				day: 4
			}
			let day5 = {
				disabled: true,
				text: '等待领取',
				day: 5
			}

			if (account.dayNum == '3') {
				if (account.threeReceive == '0') {
					day3.text = '领取'
					day3.disabled = false
				}
				if (account.threeReceive == '1') {
					day3.text = '已领取'
				}
			}
			if (account.dayNum == '4') {
				if (account.threeReceive == '0') {
					day4.text = '领取'
					day4.disabled = false
				}
				if (account.threeReceive == '1') {
					day4.text = '已领取'
				}
			}
			if (account.dayNum == '5') {
				if (account.threeReceive == '0') {
					day5.text = '领取'
					day5.disabled = false
				}
				if (account.threeReceive == '1') {
					day5.text = '已领取'
				}
			}
			if (account.dayNum > 3) {
				day3.text = '已领取'
			}
			if (account.dayNum > 4) {
				day4.text = '已领取'
			}
			if (account.dayNum > 5) {
				day5.text = '已领取'
			}
			this.btns_8888.push(day3)
			this.btns_8888.push(day4)
			this.btns_8888.push(day5)
			this.is_8888 = true
		}
	}
}
</script>
<style lang="less">
@table_border_color: #333;

.lunbo{
	width:100%;
	height:380px;
	position: relative;
	.van-swipe{
		width:171px;
		height:346px;
		margin:auto;
		.van-swipe-item{
		width:100%;
		height:100%;
		img{
			width:100%;
			height:100%
		}
		}
	}
	// .van-swipe__indicators{
	// 	position: absolute;
	// 	bottom:-5px
	// }
	.left{
	  width:20px;
	  height:58px;
	  position: absolute;
	  top:163px;
	  left:0;
	  background: url('./img/zuo.png') no-repeat;
	  background-size: 100% 100%
	}
	.right{
	  width:20px;
	  height:58px;
	  position: absolute;
	  top:163px;
	  right:0;
	  background: url('./img/you.png') no-repeat;
	  background-size: 100% 100%
	}
	}

.actv_detail {
	background: #fff;
	min-height: 100%;
	box-sizing: border-box;
	padding-top: @app_head_height;
	width: 100%;
}
.van-dialog {
	width: 76%;
	border-radius: 6px;
}
.actv_btn_box {
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	padding: 20px 0;
}
.actv_btn {
	display: block;
	width: 173px;
	height: 42px;
	background: linear-gradient(180deg, @color_shallow_blue 0%, @color_deep_blue 100%);
	box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.5), 0px 2px 0px 0px rgba(97, 51, 34, 1),
		0px 1px 0px 0px rgba(255, 234, 152, 1);
	font-size: 17px;
	color: rgba(255, 255, 255, 1);
	line-height: 42px;
	border-radius: 21px;
	transition: all 0.1s linear;
	margin: 0 auto;
}
.actv_btn:active {
	box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5), 0px 1px 0px 0px rgba(97, 51, 34, 1),
		0px 1px 0px 0px rgba(255, 234, 152, 1);
}
.actv_main {
	padding: 0 13px 60px;
	background: #fff;
}
.actv_h {
	font-size: 18px;
	font-weight: bold;
	color: rgba(51, 51, 51, 1);
	line-height: 25px;
	padding: 24px 0 10px;
}
.actv_p {
	font-size: 13px;
	color: rgba(116, 116, 116, 1);
	line-height: 19px;
}
.actv_h5 {
	padding: 24px 0 10px;
	font-size: 16px;
	font-weight: 500;
	color: @color_deep_blue;
	line-height: 22px;
	display: flex;
	align-items: center;
}
.actv_reat {
	display: inline-block;
	width: 8px;
	height: 8px;
	background: @color_deep_blue;
	transform: rotate(45deg);
	margin-right: 9px;
}
.margin_top_9 {
	margin-top: 9px;
}
.margin_bottom_9 {
	margin-bottom: 9px;
}
</style>
<style lang="less">
// 活动1
.actv_table {
	border-bottom: 1px solid @actv_table_border_color;
	.row {
		display: flex;
		border-left: 1px solid @actv_table_border_color;
		border-top: 1px solid @actv_table_border_color;
	}
	.col {
		flex: 1;
		font-size: 10px;
		color: rgba(51, 51, 51, 1);
		line-height: 14px;
		min-width: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-right: 1px solid @actv_table_border_color;
		padding: 5px 0;
	}
	.col.fb-5 {
		flex-basis: 5em;
	}
}
</style>
<style lang="less">
//活动2
.actv_table2 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
	.col1 {
		flex: 1;
	}
	.col2 {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.row1 {
		padding: 5px 0;
		height: 24px;
		box-sizing: border-box;
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2_0 {
		padding: 5px 0;
	}
	.row2_1 {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		justify-content: center;
	}
}
</style>
<style lang="less">
//活动3
.actv_table3 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
	.col3_0 {
		flex: 38%;
	}
	.col3_1 {
		flex-basis: 30%;
	}
	.col2 {
		flex-basis: 30%;
		display: flex;
		flex-direction: column;
	}
	.row1 {
		padding: 5px 0;
		height: 24px;
		box-sizing: border-box;
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2_0 {
		padding: 5px 0;
	}
	.row2_1 {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		justify-content: center;
	}
}
</style>
<style lang="less">
// 活动4
.actv_table4 {
	border-bottom: 1px solid @actv_table_border_color;
	.row {
		display: flex;
		border-left: 1px solid @actv_table_border_color;
		border-top: 1px solid @actv_table_border_color;
	}
	.col {
		flex: 1;
		font-size: 10px;
		color: rgba(51, 51, 51, 1);
		line-height: 14px;
		min-width: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-right: 1px solid @actv_table_border_color;
		padding: 5px 0;
	}
	.col.fb-5 {
		flex-basis: 5em;
	}
}
</style>
<style lang="less">
//活动5
.actv_table5 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
	.col3_0 {
		flex: 38%;
	}
	.col3_1 {
		flex-basis: 30%;
	}
	.col2 {
		flex-basis: 30%;
		display: flex;
		flex-direction: column;
	}
	.row1 {
		padding: 5px 0;
		height: 24px;
		box-sizing: border-box;
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2_0 {
		padding: 5px 0;
	}
	.row2_1 {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		justify-content: center;
	}
}
</style>
<style lang="less">
//活动6
.actv_table6 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
	.col1 {
		flex: 1;
	}
	.col2 {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.row1 {
		padding: 5px 0;
		height: 24px;
		box-sizing: border-box;
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2_0 {
		padding: 5px 0;
	}
	.row2_1 {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		justify-content: center;
	}
}
</style>
<style lang="less">
//活动8
.actv_table8 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
	.col1 {
		flex: 1;
	}
	.col2 {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.row1 {
		padding: 5px 0;
		height: 24px;
		box-sizing: border-box;
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2_0 {
		padding: 5px 0;
	}
	.row2_1 {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		justify-content: center;
	}
}
</style>
<style lang="less">
//活动9
.actv_table9 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
	.col1 {
		flex: 1;
	}
	.col2 {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.row1 {
		padding: 5px 0;
		height: 24px;
		box-sizing: border-box;
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2_0 {
		padding: 5px 0;
	}
	.row2_1 {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		justify-content: center;
	}
}
</style>
<style lang="less">
//活动10
.actv_table10 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
	.col3_0 {
		flex: 38%;
	}
	.col3_1 {
		flex-basis: 30%;
	}
	.col2 {
		flex-basis: 30%;
		display: flex;
		flex-direction: column;
	}
	.row1 {
		padding: 5px 0;
		height: 24px;
		box-sizing: border-box;
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2_0 {
		padding: 5px 0;
	}
	.row2_1 {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		justify-content: center;
	}
}
</style>
<style lang="less">
//活动11
.actv_table11 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
	.col3_0 {
		flex: 38%;
	}
	.col3_1 {
		flex-basis: 30%;
	}
	.col2 {
		flex-basis: 30%;
		display: flex;
		flex-direction: column;
	}
	.row1 {
		padding: 5px 0;
		height: 24px;
		box-sizing: border-box;
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2_0 {
		padding: 5px 0;
	}
	.row2_1 {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		justify-content: center;
	}
}
</style>
<style lang="less">
//活动12
.actv_table12 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
	.col3_0 {
		flex: 38%;
	}
	.col3_1 {
		flex-basis: 30%;
	}
	.col2 {
		flex-basis: 30%;
		display: flex;
		flex-direction: column;
	}
	.row1 {
		padding: 5px 0;
		height: 24px;
		box-sizing: border-box;
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2_0 {
		padding: 5px 0;
	}
	.row2_1 {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		justify-content: center;
	}
}
</style>
<style lang="less">
//活动13
.actv_table13 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
	.col3_0 {
		flex: 38%;
	}
	.col3_1 {
		flex-basis: 30%;
	}
	.col2 {
		flex-basis: 30%;
		display: flex;
		flex-direction: column;
	}
	.row1 {
		padding: 5px 0;
		height: 24px;
		box-sizing: border-box;
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2_0 {
		padding: 5px 0;
	}
	.row2_1 {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		justify-content: center;
	}
}
.actv_table13_0 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
	.col3_0 {
		flex: 30%;
	}
	.col3_1 {
		flex-basis: 38%;
	}
	.col2 {
		flex-basis: 30%;
		display: flex;
		flex-direction: column;
	}
	.row1 {
		padding: 5px 0;
		height: 24px;
		box-sizing: border-box;
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2_0 {
		padding: 5px 0;
	}
	.row2_1 {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		justify-content: center;
	}
}
</style>
<style lang="less" >
//活动 8888
.flex_30 {
	flex-basis: 30%;
}
.flex_40 {
	flex-basis: 40%;
}
.margin_bottom_2 {
	margin-bottom: 2px;
}
.margin_bottom_4 {
	margin-bottom: 4px;
}
.margin_bottom_8 {
	margin-bottom: 8px;
}
.actv_8888 {
	.actv_8888_t {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 16px;
		font-weight: bold;
		color: #ff50a0;
		line-height: 22px;
		text-align: center;
	}
	.actv_font_0 {
		font-size: 10px;
		color: rgba(51, 51, 51, 1);
		line-height: 14px;
	}
	.actv_8888_btn {
		display: block;
		width: 72px;
		height: 24px;
		background: linear-gradient(180deg, @color_shallow_blue 0%, @color_deep_blue 100%);
		box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.5), 0px 2px 0px 0px rgba(97, 51, 34, 1),
			0px 1px 0px 0px rgba(255, 234, 152, 1);
		font-size: 12px;
		color: rgba(255, 255, 255, 1);
		line-height: 24px;
		border-radius: 12px;
		transition: all 0.1s linear;
		margin: 0 auto;
		letter-spacing: 1px;
	}
	.actv_8888_btn:active {
		box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5), 0px 1px 0px 0px rgba(97, 51, 34, 1),
			0px 1px 0px 0px rgba(255, 234, 152, 1);
	}
	.actv_8888_btn.btns_8888_disabled {
		color: rgba(113, 113, 113, 1);
		background: linear-gradient(180deg, rgba(214, 214, 214, 1) 0%, rgba(162, 162, 162, 1) 100%);
		box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.5), 0px 2px 0px 0px rgba(91, 91, 91, 1),
			0px 1px 0px 0px rgba(255, 255, 255, 1);
	}
	.actv_8888_img {
		display: block;
		width: 100%;
		margin-bottom: 9px;
	}
}
.actv_table12 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
	.col3_0 {
		flex: 38%;
	}
	.col3_1 {
		flex-basis: 30%;
	}
	.col2 {
		flex-basis: 30%;
		display: flex;
		flex-direction: column;
	}
	.row1 {
		padding: 5px 0;
		height: 24px;
		box-sizing: border-box;
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2_0 {
		padding: 5px 0;
	}
	.row2_1 {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		justify-content: center;
	}
}
</style>
<style lang="less">
//活动14
.actv_table14 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
	.col3_0 {
		flex: 38%;
	}
	.col3_1 {
		flex-basis: 30%;
	}
	.col2 {
		flex-basis: 30%;
		display: flex;
		flex-direction: column;
	}
	.row1 {
		padding: 5px 0;
		height: 24px;
		box-sizing: border-box;
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2_0 {
		padding: 5px 0;
	}
	.row2_1 {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		justify-content: center;
	}
}
.actv_table13_0 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
	.col3_0 {
		flex: 30%;
	}
	.col3_1 {
		flex-basis: 38%;
	}
	.col2 {
		flex-basis: 30%;
		display: flex;
		flex-direction: column;
	}
	.row1 {
		padding: 5px 0;
		height: 24px;
		box-sizing: border-box;
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2_0 {
		padding: 5px 0;
	}
	.row2_1 {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		justify-content: center;
	}
}
</style>
<style lang="less">
//活动15
.actv_table15 {
	display: flex;
	align-items: stretch;
	border-top: 1px solid @actv_table_border_color;
	border-right: 1px solid @actv_table_border_color;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: rgba(51, 51, 51, 1);
	.col3_0 {
		flex: 38%;
	}
	.col3_1 {
		flex-basis: 30%;
	}
	.col2 {
		flex-basis: 30%;
		display: flex;
		flex-direction: column;
	}
	.row1 {
		padding: 5px 0;
		height: 24px;
		box-sizing: border-box;
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2 {
		border-left: 1px solid @actv_table_border_color;
		border-bottom: 1px solid @actv_table_border_color;
	}
	.row2_0 {
		padding: 5px 0;
	}
	.row2_1 {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		justify-content: center;
	}
}
</style>
