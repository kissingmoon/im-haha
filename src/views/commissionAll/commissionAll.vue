<template>
    <div class="agent headview_wrapper">
        <div class="header-container">
			<ims-header title="佣金总计">
                <div slot="right">
                    <img @click="datafun(0)" v-if="switchNum==0" style="width:25px;height:25px" src="./img/search.png" alt="">
                    <img @click="datafun(1)" style="width:25px;height:25px;marginLeft:5px" src="./img/search1.png" alt="">   
                </div>
            </ims-header> 
		</div>
        <div class="switchCards">
            <div :class="switchNum==index?'avtive':''" @click="switchfun(index)" v-for="(item,index) in switchingFields" :key="index" class="left">{{item}}</div>
        </div>
        <div class="centent">
            <van-list v-model="moreLoading" :finished="finished" :finished-text="finishedText" @load="onLoad" :offset="30">
                <div v-if="switchNum==0" class="contribution">
                    <div class="left">
                        <p class="contribution_p p1">￥{{performanceBonuses.totalCommission | filter}}</p>
                        <p class="contribution_p p3">昨日红利佣金</p>
                    </div>
                    <div class="right">
                        <p class="contribution_p p2">￥{{performanceBonuses.bonusMoney | filter}}</p>
                        <p class="contribution_p">红利佣金总计</p>
                    </div>
                </div>
                <div v-else class="contribution">
                    <div class="left">
                        <p class="contribution_p p1">{{totalPro.userNum}}人</p>
                        <p class="contribution_p p3">推荐人数总计</p>
                    </div>
                    <div class="right">
                        <p class="contribution_p p2">￥{{totalPro.userMoney | filter}}</p>
                        <p class="contribution_p">推荐佣金总计</p>
                    </div>
                </div>
                <div v-if="switchNum==0"  class="drop_down">
                        <div v-if="initFinish && recList.length<1" class="no-data-box display-flex justify-center align-end">暂无数据，快去推广赚佣金吧！</div>
                        <div @click='gotoDetails(v)' class="lists" v-for="(v, k) in recList" :key="k">
                            <div class="left">
                                <p class="left_p">{{v.settleTime}}</p>
                                <p class="left_p p1">{{v.type}}&nbsp;&nbsp;￥{{v.commisionMoney | filter}}</p>
                            </div>
                            <div class="lists_right">
                                <div class="midAvtive">{{v.leveName}}
                                    <!-- <span style="color:green" v-if="v.status==1">(已完成)</span>
                                    <span v-if="v.status!=1">(审核中)</span> -->
                                    <!-- <span style="color:red" v-if="v.status==3">(未通过)</span> -->
                                </div>                                
                            </div>   
                        </div>
                </div>
                <div  v-else  class="drop_down">
                        <div v-if="initFinish && recList.length<1" class="no-data-box display-flex justify-center align-end">暂无数据，快去推广赚佣金吧！</div>
                        <div class="lists" v-for="(v, k) in recList" :key="k">
                            <div class="left">
                                <p class="left_p">结算时间:{{v.createTime}}</p>
                                <p class="left_p p1">{{v.money==1?'上级用户ID':'推荐用户ID'}}：{{v.fromUserId}}</p>
                            </div>
                            <div class="lists_right">
                                <div class="mid">{{v.status=='1'?'已奖励':'未领取'}}</div>
                                <div class="right">￥{{v.money | filter}}</div>
                            </div>   
                        </div>
                </div>              
            </van-list>
        </div>
        <!-- :class="listNum==index ? 'liststyle' : ''" -->
        <div @click.stop="end" v-show="maskShow" class="mask">
            <div @click.stop :class="down_pop">
                <div               
                @click="listfun(index)" 
                class="item" 
                v-for="(item,index) in lists" 
                :key="index"
                >
                {{item}}
                </div>
                <div @click="cancel" class="item">取消</div>
            </div>
        </div>
    </div>
</template>


<script>
import {mapActions,mapGetters,mapMutations} from 'vuex';
import { net_getUserProList, net_getUserPro ,net_getUserProList1} from '@/js/network.js'

    export default {
        data(){
            return{
                switchingFields:["业绩红利佣金","分享推荐佣金"],
                switchNum:0,
                maskShow:false,
                down_pop:'',
                num:0,
                lists:[],
                listNum:0,
                queryParam: {
                    "page_no": "1",
                    "page_size": "10",
                    "date_type": "5" ,  //  5：全部数据    4：月数据   3：周数据   2：当前3天数据
                    'startTime': "",
                    "endTime" :"",
                    "gameId" : 0
                },
                loading: false,
                finished: true,
                offset:100,
                commissionObj:{},
                moreLoading: false,
                finished: false,
                initFinish: false,
                recList:[
                    // {
                    //    createTime:'12132' ,
                    //    money:'2',
                    //    status:'1',
                    // }
                ],
                totalPro:{},
                performanceBonuses:{},
                typeArr:[],
                count:-1,
                recListTotal: 0,
                finishedText: "",
                index:-1
                // agentList:[0]
            }
        },
        created(){
        },
        mounted(){
            let index=this.$route.query.index
            this.switchfun(index)
        },
        filters:{
            filter(data){
                if(data){
                    return data.toFixed(2)
                }else{
                    return '0.00'
                }     
            }
        },
        methods:{
            switchfun(index){
                this.index=index
                if(index==0){
                    this.init(0)
                }
                if(index==1){
                    this.init(1)
                }
            },
            cancel(){
                this.end()
            },
            datafun(s){
                this.num++
                this.count=s
                if(this.num%2==1){
                    this.maskShow=true
                    this.down_pop='bouncetop animated slideInUp'
                    if(s==0){ 
                        this.lists=this.typeArr
                    }
                    if(s==1){
                        this.lists=["全部记录","最近三天","近七天","一个月"]
                    }
                } 
            },
            end(){
                this.num++
                if(this.num%2==0){
                    this.down_pop='bouncebom animated slideInDown'
                    setTimeout(()=>{
                        this.maskShow=false
                    },500)
                }
            },
            //////////////////////////////////////////////////
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
            format(now){
                var y,m,d;
                y = now.getFullYear();
                m = now.getMonth() + 1;
                d = now.getDate();
                return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0,8);
            },
            beforeYouGet(n) {//获取之前时间
                var y,m,d;
            var curTime = new Date().getTime();
                var startDate = curTime - (n * 3600 * 24 * 1000);
                return this.format(new Date(startDate))		
            },
            beforMinutes(n){////获取之前月时间
                var dt = new Date();
                var Month= dt.setMonth( dt.getMonth()-n );
                return this.format(new Date(Month)) 	    
            },
            time(m){
                if(m==0){
                    this.queryParam.endTime=""
                    this.queryParam.startTime=""
                }
                if(m==1){
                    this.queryParam.endTime=this.getNowFormatDate()
                    this.queryParam.startTime=this.beforeYouGet(3)
                }
                if(m==2){
                    this.queryParam.endTime=this.getNowFormatDate()
                    this.queryParam.startTime=this.beforeYouGet(7)
                }
                if(m==3){
                    this.queryParam.endTime=this.getNowFormatDate()
                    this.queryParam.startTime=this.beforMinutes(1)
                }
                if(m==4){
                    this.queryParam.endTime=this.getNowFormatDate()
                    this.queryParam.startTime=this.beforMinutes(3)
                }
            },
        ///////////////////////////////////
            listfun(index){
                this.listNum=index
                this.end()
                this.queryParam.page_no=1
                if(this.switchNum==0){
                    if(this.count==0){
                        this.queryParam.gameId=index                       
                        this.getRecList(this.queryParam, "init",this.switchNum);
                    }
                    if(this.count==1){
                        this.time(index)
                        this.getRecList(this.queryParam, "init",this.switchNum);
                    }
                }
                if(this.switchNum==1){
                    this.time(index)
                    this.getRecList(this.queryParam, "init",this.switchNum);
                }
            },
            gotoDetails(v){
                this.$router.push({name:'commissionDetails',query:{'v':v}})
            },
            init(val){
                let queryParam = {
                    "page_no": "1"
                };
                let loading = this.$loading({ text: '正在加载…' })
                Object.assign(this.queryParam, queryParam)
                this.finished = false;
                this.initFinish = false;
                this.getUserPro(loading);
                this.getRecList(this.queryParam, "init",val);
            },
            goBack(){
                this.$router.go(-1)
            },
            async getUserPro(loading){
                try {
                    let res = await net_getUserPro()
                    this.totalPro = res.data
                    loading.close()
                } catch {
                    loading.close()
                }
            },
            async getRecList(param, type,val){
                let res = {};
                if(val==1){                    
                    res = await net_getUserProList(param);
                }
                if(val==0){
                    res = await net_getUserProList1(param)
                    this.performanceBonuses = res.data
                    this.typeArr=res.data.gameType
                }
                if(type == "ref"){
                    if(res.code == "200"){
                        this.recList = res.data.data;
                        this.refLoading = false;
                        if(this.recList.length < this.queryParam.page_size){
                            this.moreLoading = false;
                            this.finished = true;
                        }
                    }
                }else if(type == "more"){
                    if(res.code == "200"){
                        this.recList = this.recList.concat(res.data.result);
                        this.moreLoading = false;
                        // this.switchNum=this.index
                        if(res.data.result.length ==0){
                            this.finished = true;
                            this.finishedText = "已经到底了~"
                        }
                    }
                }else if(type == "init"){
                    this.recList = res.data.result;
                    this.recListTotal = res.data.count;
                    this.switchNum=this.index
                    // this.totalMoney = res.data.totalMoney;
                    this.initFinish = true;
                    if(this.recList.length>=10){
                        this.finished = false;
                    }
                    if(this.recList.length < parseInt(this.queryParam.page_size)){
                        this.moreLoading = false;
                        this.finished = true;                       
                        if(this.recList.length > 0){
                            this.finishedText = "没有更多了~"
                        }
                        
                    }
                }
            },
            onLoad(){
                if(this.initFinish){
                    if(this.recList.length >= this.recListTotal){
                        this.moreLoading = false;
                        this.finished = true;
                        return
                    }
                    this.queryParam.page_no ++;
                    this.getRecList(this.queryParam, "more",this.switchNum);
                }else{
                    this.moreLoading = false;
                }
            }
        }
    }
</script>


<style lang="less" scoped>
    .mask{
        position: fixed;
        width:100%;height:100%;
        left:0;bottom:0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 999;
        .bouncetop{
            position: absolute;
            bottom:0;
            width:100%;
            height:302px;
            animation-duration: 0.5s;
            /* animation-delay: 2s; */
            animation-iteration-count: 1;
            overflow-y:scroll;
            background: #fff ;
        };
        .bouncebom{
            position: absolute;
            bottom:-302px;
            width:100%;
            height:302px;
            animation-duration: 0.5s;
            /* animation-delay: 2s; */
            animation-iteration-count: 1;
            background: #fff ;
        }
        .item{
            height:50px;
            width:94%;
            border-bottom:1px solid  #f0f0f0 ;
            margin-left:3%;
            text-align: center;
            line-height: 50px;
            color:#4A4A4A;
        }
        .liststyle{
            color:#0077FF
        }
    }

    .agent{
        min-height: 100%;
        box-sizing: border-box;
        padding-top: @app_head_height;
        background: url('../../assets/page_bg_default.jpg') no-repeat;
        background-size: cover;
        background-attachment: fixed;
        position: fixed;
        width:100%;
        height:100%;
        top:0;
        display: flex;
        flex-direction:column;
        .switchCards{
            width:94%;
            height:44px;
            background:rgba(255,255,255,0.5);
            margin-left:3%;
            margin-top:17px;
            border-radius: 5px 5px 0 0 ;
            border-bottom:1px solid #BABABA;  
            display: flex;
            justify-content:space-around;         
            .left{
                height:100%; 
                font-size: 14px;
                color: #4A4A4A ; 
                line-height: 44px;
            }
            .avtive{
                border-bottom:3px solid  #0077FF ;
                color: #0077FF ; 
                box-sizing: border-box;              
            }
        }
        .centent{
            flex:1;
            overflow-y:scroll;
            .contribution{
                width:100%;
                height:76px;
                margin-bottom:17px;              
                .left{
                    width:47%;
                    height:48px;
                    background: #262626;
                    padding: 14px 0;
                    float: left;
                    margin-left:3%;
                    background:rgba(255,255,255,0.5);
                    border-radius: 0 0 0 5px;
                    .p1{
                        font-size: 16px;
                        color: #0077FF;
                        border-right:1px solid #BABABA
                    }
                    .p3{
                        border-right:1px solid #BABABA
                    }
                }
                .right{
                    width:47%;
                    height:48px;
                    background: #262626;
                    padding: 14px 0;
                    float: right;
                    margin-right:3%;
                    background:rgba(255,255,255,0.5);
                    border-radius:0 0 5px 0;
                    .p2{
                        font-size: 16px;
                        color: #0077FF
                    }
                }
                .contribution_p{
                    text-align: center;
                    height:24px;
                    line-height: 20px;
                    color:#4A4A4A;
                    font-size: 14px;
                }
            }
            .drop_down{
                width:100%;
                min-height:60px;
                .no-data-box{
                    height: 300px;
                    width: 200px;
                    margin: auto;
                    background: url('./img/no-data.png') no-repeat;
                    background-position: center;
                }
                .lists{
                    height:55px;
                    width: 94%;
                    margin: 0 auto;
                    margin-left:3%;
                    display: flex;
                    justify-content: space-between;
                    background:rgba(255,255,255,0.5);
                    border-radius: 5px;
                    padding-top:5px;
                    margin-bottom: 10px;
                    .left{
                        width:60%;
                        height:60px;
                        padding-left:5%;
                        .left_p{
                            font-size: 12px;
                            height:25px;
                            color:#4A4A4A;
                            line-height: 30px;
                            opacity: 0.5;
                        }
                        .p1{
                           font-size: 14px; 
                           color:#4A4A4A;
                           opacity: 1;
                        }
                    }
                    .lists_right{
                        width:35%;
                        height:46px;
                        .mid{
                            width:100%;
                            height:25px;
                            text-align: center;
                            line-height: 30px;
                            color:#828080 ;
                            font-size: 12px;
                            opacity: 0.5;
                        }
                        .midAvtive{
                            width:100%;
                            height:46px;
                            text-align: center;
                            line-height: 46px;
                            color:#828080 ;
                            font-size: 12px;
                        }
                        .right{
                            width:100%;
                            height:30px;
                            text-align: center;
                            line-height: 30px;
                            color:#E65858;
                            font-size: 14px
                        }
                    }
                    
                }
            }
                
            
        }
    }
</style>


