<template>
    <div class="agent">
        <div class="header-container">
			<ims-header title="我的代理">
                <!-- <div slot="right" >说明</div> -->
            </ims-header> 
		</div>
        <div class="centent">
            <van-list v-model="moreLoading" :finished="finished" :finished-text="finishedText" @load="onLoad" :offset="30">
                <div class="contribution">
                    <div class="left">
                        <p class="contribution_p p1">{{totalPro.peopleNum}}人</p>
                        <p class="contribution_p p3">团队成员总计</p>
                    </div>
                    <div class="right">
                        <p class="contribution_p p2">￥{{totalPro.inviteMoney}}</p>
                        <p class="contribution_p">推荐佣金总计</p>
                    </div>
                </div>
                <div class="drop_down">
                        <div class="list-head display-flex">
                            <div class="flex-1">旗下成员账号</div>
                            <div class="flex-1">用户等级</div>
                            <div class="flex-1">用户总业绩</div>
                        </div>
                        <div v-if="initFinish && recList.length<1" class="no-data-box display-flex justify-center align-end">暂无数据，快去召唤小伙伴吧！</div>
                        <div class="lists" v-for="(v, k) in recList" :key="k">
                            <div class="left">
                                <p class="left_p">结算时间:{{v.createTime}}</p>
                                <p class="left_p p1">推荐用户ID：{{v.userId}}</p>
                            </div>
                            <div class="lists_right">
                                <div class="mid">{{v.status=='1'?'已奖励':'未领取'}}</div>
                                <div class="right">{{v.money}}</div>
                            </div>   
                        </div>
                </div>
            </van-list>
        </div>
    </div>
</template>


<script>
    import {mapActions,mapGetters,mapMutations} from 'vuex';
import { setTimeout } from 'timers';
import { net_getUserProList, net_getUserPro } from '@/js/network.js'

    export default {
        data(){
            return{
                queryParam: {
                    "page_no": "1",
                    "page_size": "10",
                    "date_type": "5"   //  5：全部数据    4：月数据   3：周数据   2：当前3天数据
                },
                loading: false,
                finished: true,
                offset:100,
                commissionObj:{},
                moreLoading: false,
                finished: false,
                initFinish: false,
                recList:[],
                totalPro:{},
                recListTotal: 0,
                finishedText: ""
                // agentList:[0]
            }
        },
        created(){
        },
        mounted(){
            this.init()
        },
        methods:{
            init(){
                let queryParam = {
                    "page_no": "1"
                };
                Object.assign(this.queryParam, queryParam)
                this.finished = false;
                this.initFinish = false;
                this.getUserPro();
                this.getRecList(this.queryParam, "init");
            },
            goBack(){
                this.$router.go(-1)
            },
            async getUserPro(){
                let res = await net_getUserPro()
                this.totalPro = res.data
            },
            async getRecList(param, type){
                let res = {};
                // if(this.activeTab==0){
                //     res = await net_getUserProList(param);
                // }else if(this.activeTab == 1){
                //     res = await net_getUserProList(param);
                // }
                res = await net_getUserProList(param);
                if(type == "ref"){
                    if(res.code == "200"){
                        this.recList = res.data.data;
                        console.log(this.recList)
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
                        if(this.recList.length >= this.recListTotal){
                            this.finished = true;
                            this.finishedText = "没有更多了~"
                        }
                    }
                }else if(type == "init"){
                    this.recList = res.data.result;
                    this.recListTotal = res.data.count;
                    // this.totalMoney = res.data.totalMoney;
                    this.initFinish = true;
                    if(this.recList.length < parseInt(this.queryParam.page_size)){
                        this.moreLoading = false;
                        this.finished = true;
                    }
                }
            },
            onLoad(){
                console.log("触发了加载")
                if(this.initFinish){
                    console.log("触发了请求")
                    if(this.recList.length >= this.recListTotal){
                        this.moreLoading = false;
                        this.finished = true;
                        return
                    }
                    this.queryParam.page_no ++;
                    this.getRecList(this.queryParam, "more");
                }else{
                    this.moreLoading = false;
                }
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
        position: fixed;
        width:100%;
        height:100%;
        top:0;
        display: flex;
        flex-direction:column;
        .centent{
            flex:1;
            overflow-y:scroll;
            padding: 0 18px;
            box-sizing: border-box;
            .contribution{
                width:100%;
                height:76px;
                margin: 17px 0; 
                display: flex;              
                .left{
                    // width:47%;
                    height:48px;
                    background: #262626;
                    padding: 14px 0;
                    float: left;
                    // margin-left:3%;
                    flex:1;
                    background:rgba(255,255,255,0.5);
                    border-radius: 5px 0 0 5px;
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
                    // width:47%;
                    flex:1;
                    height:40px;
                    background: #262626;
                    padding: 18px 0;
                    float: right;
                    // margin-right:3%;
                    background:rgba(255,255,255,0.5);
                    border-radius:0 5px 5px 0;
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
                height: 120vh;
                background:rgba(255,255,255,0.5);
                margin-bottom: 20px;
                .list-head{
                    z-index: 1000;
                    position: sticky;
                    top: 0;
                    height: 30px;
                    background: red;
                }
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


