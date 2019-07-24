<template>
    <div v-if="agentShow" class="agent">
        <div class="header-container">
			<ims-header title="我的代理">
                <div slot="right" @click="goto('/agentInstructions')" >说明</div>
            </ims-header> 
		</div>
        <div class="Yesterday">
            <p class="Yesterday_p">昨日业绩</p>
            <p class="Yesterday_money"><em style="font-size:24px;fontWeight: 650">￥</em>{{Yesterday.yesterdayMoney | filter}}</p>
        </div>
        <div class="profit_commission">
            <div class="left">
                <p class="profit_commission_p p1">￥{{Yesterday.redbagCount | filter}}</p>
                <p class="profit_commission_p">昨日推荐佣金</p>
            </div>
            <div class="right">
                <p class="profit_commission_p p2">￥{{Yesterday.totalCommission | filter}}</p>
                <p class="profit_commission_p">昨日红利佣金</p>
            </div>
        </div>
        <div class="aesearchersAdd">
            <div @click="newMembers('1')" class="aesearchersAdd_div">
                <p class="aesearchersAdd_div_p p1">{{Yesterday.addNumber==null?'0':Yesterday.addNumber}}人</p>
                <p class="aesearchersAdd_div_p">今日新增</p>
            </div>
            <div @click="newMembers('2')" class="aesearchersAdd_div">
                <p class="aesearchersAdd_div_p p2">{{Yesterday.thisMonthNumber==null?'0':Yesterday.thisMonthNumber}}人</p>
                <p class="aesearchersAdd_div_p">本月新增</p>
            </div>
            <div @click="newMembers('0')" class="aesearchersAdd_div">
                <p class="aesearchersAdd_div_p p3">{{Yesterday.geamMembers==null?'0':Yesterday.geamMembers}}人</p>
                <p class="aesearchersAdd_div_p">团队成员</p>
            </div>
        </div>
        <div class="getCommission">
            分享推荐佣金：￥{{Yesterday.withdrawCommision | filter}}
            <div @click="toBalance" class="receive">转账余额</div>
        </div>
        <div class="getCommission">
            业绩红利佣金：￥{{Yesterday.wxSpreadCommission | filter}}
            <div @click="isShow" class="receive">立即领取</div>
        </div>
        <div @click="gotoCommission('/commissionAll')" class="getCommission">
            历史佣金总计：￥{{Yesterday.historyCommission | filter}}
            <div class="goto"></div>
        </div>
        <div @click="goto('/ptp')" class="promote">
            <p class="promote_p">推广赚钱</p>
            <!-- <p class="promote_p">分享累计已赚{{Yesterday.historyCommission==null?'0.00':Yesterday.historyCommission.toFixed(2)}}</p> -->
            <div class="promote_div">
                立即分享
                <div class="promote_div_goto">

                </div>
            </div>
        </div>
        <!-- <p class="currentLevel">当前推广等级：<span style="color:#000;fontWeight: 600">{{Yesterday.leveName}}</span></p> -->
    </div>
</template>


<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
    export default {
       data(){
           return{
               Yesterday:{},
               agentShow:false
           }
       } ,
       filters:{
            filter(data){
                if(data){
                    return data.toFixed(2)
                }else{
                    return '0.00'
                }     
            }
        },
       created(){
           let loading = this.$loading({ text: '正在加载…' })
           this.agent(loading)
       },
       computed:{
           ...mapGetters(['user_token'])
       },
       methods:{
            goto(path){
                this.$router.push(path)
            },
            agent(loading){
                if(!this.user_token){
                    this.$router.push('/login')
                    return
                }else{
                    this.yesterday(loading)
                }  
            },
            yesterday(loading){
                this.$http.post('/gameAgent/integrated-interface').then(res=>{                   
                    if(res.code=='200'){
                        this.Yesterday=res.data
                        this.agentShow=true
                        loading.close()
                    }
                })
            },
            toBalance(){
                if(this.Yesterday.withdrawCommision<=0){
                    this.$toast('分享推荐佣金为0，快去推广吧')
                }else{
                    Dialog.confirm({
                        message: '分享推荐佣金要转出至账户余额 ？'
                    }).then(() => {
                        // on confirm
                        this.Determine(0)
                    }).catch(() => {
                        // on cancel
                    });
                }
            },
            isShow(){
              this.$http.post('/gameAgent/commision/check',{}).then(res=>{
                  if(res.code==200){
                      this.receive(res.data)
                  }
              })
            },
            receive(data){               
                if(this.Yesterday.wxSpreadCommission<=0){
                    this.$toast('业绩红利佣金为0，快去推广吧')
                }else{ 
                    if(data==1){
                        this.$toast('您还有一笔申请，正在审核中')
                    }else{
                        Dialog.confirm({
                            message: '红利佣金领取审核后将会转入您的账户余额'
                        }).then(() => {
                            // on confirm
                            this.Determine(1)
                        }).catch(() => {
                            // on cancel
                        });
                    }                  
                        
                }
            },
            Determine(val){
                if(val==0){
                    this.$http.post('/gameAgent/withdraw',{
                        money:this.Yesterday.withdrawCommision,
                        type:'wxType'
                    }).then(res=>{   
                        if(res.code==200){
                            // this.$toast(res.msg)
                            this.Yesterday.withdrawCommision=0
                        }                
                    })
                }
                if(val==1){
                    this.$http.post('/gameAgent/withdraw',{
                        money:this.Yesterday.wxSpreadCommission,
                        type:'shoreType'
                    }).then(res=>{                   
                        if(res.code==200){                            
                            // this.$toast(res.msg)
                        }
                    })
                }
            },
            getNowFormatDate() {//获取当前时间
                var date = new Date();
                var seperator1 = "-";
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var strDate = date.getDate();
                var hours = date.getHours();
                var minutes =date.getMinutes();
                var seconds =date.getSeconds()
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                if(hours >=0 && hours<=9){
                    hours = "0" + hours;
                }
                if(minutes >=0 && minutes<=9){
                    minutes = "0" + minutes;
                }
                if(seconds >=0 && seconds<=9){
                    seconds = "0" + seconds;
                }
                var currentdate = year + seperator1 + month + seperator1 + strDate+' '+hours+':'+minutes+':'+seconds;
                return currentdate;
            },
            start(n){
                var date = new Date();
                var seperator1 = "-";
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var strDate = date.getDate();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                if(n==1){
                    var currentdate = year + seperator1 + month + seperator1 + strDate+' '+'00'+':'+'00'+':'+'00';
                    return currentdate;
                }
                if(n==2){
                    var currentdate = year + seperator1 + month + seperator1 + '01'+' '+'00'+':'+'00'+':'+'00';
                    return currentdate;
                }
            },
            newMembers(param){ 
                var startTime , endTime
                if(param==0){
                    startTime=""
                    endTime=""
                }
                if(param==1){
                    startTime = this.start(1)
                    endTime =this.getNowFormatDate()
                }
                if(param==2){
                    startTime = this.start(2)
                    endTime =this.getNowFormatDate()
                }
                this.$router.push({name:'team',query:{startTime,endTime}})
            },
            gotoCommission(path){
                this.$router.push({path,query:{index:0}})
            }
       }
    }
</script>

<style lang="less" scoped>
    .agent{
        min-height: 100%;
        box-sizing: border-box;
        padding-top: @app_head_height;
        background: url('../../assets/page_bg_default.jpg') no-repeat;
        background-size: cover;
        background-attachment: fixed;
        .Yesterday{
            width:94.67%;
            height:120px;
            background:rgba(255,255,255,0.5);
            margin:0 auto;
            border-radius: 5px 5px 0 0;
            border-bottom: 1px solid #ccc;
            margin-top:10px;
            padding-top:10px;           
            .Yesterday_p{
                font-size: 14px;
                color:#4A4A4A;
                text-align: left;
                height:34px;
                line-height: 34px;
                padding:0 15px;
            }
            .Yesterday_money{
                font-size: 48px;
                text-align: left;
                color:#0077FF;
                height:86px;
                line-height: 86px;
                padding:0 10px
            }
            // background: rgba(red, green, blue, alpha)
        }
        .profit_commission{
            width:94.67%;
            height:68px;
            border-radius: 0 0 5px 5px;
            background:rgba(255,255,255,0.5);
            margin:0 auto;
            border-top:1px solid #ccc;
            .left{
                width:50%;
                height:100%;
                box-sizing: border-box;
                border-right:1px solid #ccc;
                float: left;
                .p1{
                    color:#0077FF
                }
            }
            .right{
                width:50%;
                height:100%;
                box-sizing: border-box;
                border-left:1px solid #ccc;
                float: right;
                .p2{
                    color:#0077FF
                }
            }
            .profit_commission_p{
                text-align: center;
                font-size: 14px;
                color: #4A4A4A ;
                height:34px;
                line-height: 34px
            }
        }
        .aesearchersAdd{
            width:94.67%;
            height:80px;
            display: flex;
            background:rgba(255,255,255,0.5);
            margin: 0 auto;
            margin-top:10px;
            justify-content: space-between;
            border-radius: 5px;
            .aesearchersAdd_div{
                width:33%;
                height:60px;
                padding-top:20px;
                .aesearchersAdd_div_p{
                    text-align: center;
                    font-size: 14px;
                    color: #4A4A4A ;
                    height:20px;
                }
                .p1,.p2,.p3{
                    font-weight: 550
                }
            }
        }
        .getCommission{
            width:84.67%;
            height:50px;
            margin: 0 auto;
            margin-top:10px;
            background:rgba(255,255,255,0.5);
            line-height: 50px;
            font-size: 14px;
            color: #4A4A4A ;
            padding: 0 5%;
            position: relative;
            border-radius: 5px;
            .receive{
                width:74px;
                height:30px;
                position: absolute;
                right:5%;
                top:10px;
                border-radius: 5px;
                background: #4990E2;
                text-align: center;
                line-height: 30px;
                color:#fff;
                font-size: 14px
            }
            .goto{
                width:9px;
                height:16px;
                position: absolute;
                right:5%;
                top:17px;
                line-height: 16px;
                background: url('./img/goto.png') no-repeat;
                background-size: 100% 100%
            }
        }
        .promote{
            width:84.67%;
            // height:60px;三期改动
            height:30px;
            border-radius: 5px;
            margin:0 auto;
            margin-top:10px;
            background:rgba(255,255,255,0.5);
            padding: 10px 5%;
            position: relative;
            .promote_p{
                font-size: 14px;
                color:#4A4A4A;
                text-align: left;
                height:30px;
                line-height: 30px
            }
            .promote_div{
                position: absolute;
                width:86px;
                height:20px;
                right:5%;
                top:15px;
                // top:30px;三期改动
                line-height: 20px;
                font-size: 14px;
                color:#4A4A4A;
                .promote_div_goto{
                    width:9px;height:16px;
                    float: right;
                    margin-top:2px;
                    background: url('./img/goto.png') no-repeat;
                    background-size: 100% 100%
                }
            }
        }
        .currentLevel{
            width:84.67%;
            line-height: 20px;
            color:#4A4A4A;
            text-align: left;
            font-size: 14px;
            margin: 0 auto;
            margin-top:12px;            
        }
    }
</style>


