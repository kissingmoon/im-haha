<template>
   <div class="edu">
      <div class="head">
         <div class="leftCorner display-flex align-center justify-center" @click="goBack">
            <span></span>
         </div>
         <p>额度转换</p>
      </div>
      <div class="autoChange">
         <switch-cell v-model="checked" :loading="switchLoading" active-color="#4CD964" title="自动额度转换" @change="eduChange" />
         <p v-if="checked">您目前处于<span>自动额度转换</span>状态,无需转换额度即可直接进入游戏。</p>
         <p v-else>切换到<span>自动额度转换</span>前，清先将额度转移到现金余额。</p>
      </div>
      <div class="main" v-if="!checked">
         <div class="balance">
            <cell :value="Number(userBalance.totalBalance).toFixed(2)" value-class="money">
               <span slot="title">总余额</span>
            </cell>
            <cell :value="Number(userBalance.balance).toFixed(2)" value-class="money">
               <span slot="title">现金金额</span>
            </cell>            
            <collapse v-model="activeName" accordion>
               <collapse-item title="其他平台余额" name="1">
                  <cell-group>
                     <cell class="display-flex align-center" v-for="item in platFormBalance" :key="item.pfmFlag" :value="Number(item.pfmBalance).toFixed(2)" value-class="money">
                        <template slot="title">
                           <span class="custom-text">{{item.pfmName}}</span>                        
                        </template>
                        <span slot="right-icon" class="icon_refresh" :class="{'on': activeFlag == item.pfmFlag}" @click="refreshMoney(item)"></span>
                     </cell>
                  </cell-group>
               </collapse-item>            
            </collapse>
         </div>
         <div class="account">
            <p>转出账户</p>
            <div class="inputBox display-flex align-center" @click="showAccounts('out')">
               <span class="text flex-1">{{choosed_outAccoundObj.game_title_cn}}</span>
               <icon class="rightCorner" name="arrow" />
            </div>

            <p>转入账户</p>
            <div class="inputBox display-flex align-center" @click="showAccounts('in')">
               <span class="text flex-1">{{choosed_inAccoundObj.game_title_cn}}</span>
               <icon class="rightCorner" name="arrow" />
            </div>

            <p>金额</p>
            <div class="inputBox display-flex align-center">
               <input v-model="money" type="tel" name="" class="inputMoney" maxlength="11" placeholder="请输入金额">
            </div>
         </div>

         <div class="btnBox">
            <button class="confirm" :class="{'on': disabled}" @click="disabled && confirm()">确定</button>
         </div>
      </div>
      
      <popup class="popup" v-model="show" position="bottom" :overlay="true" :lock-scroll="true">
         <div class="main display-flex flex-coloum">
            <div class="top" @click='selectHide'>
               <div class="botIconBox display-flex align-center justify-center">
                  <icon name="arrow-down"/>
               </div>
            </div>
            <div class="gunBox flex-1">
               <div class="selectBox" key="selectBox" :botBar_status='false'>
                  <div class="listWrap">
                     <div v-for="(item,index) in otherPlatFormBlance" :key="item.platform_iconic">
                        <div class="item display-flex justify-between" @click="accountChoose(item,index)">
                           <div>{{item.game_title_cn}}</div>
                           <div class="icon" :class="{'on':item.platform_iconic == choosedAccoundObj.platform_iconic}"></div>
                        </div>
                     </div>
                  </div>
               </div> 
            </div>                        
         </div>
      </popup>
   </div>
</template>

<script>
import { SwitchCell, Cell, CellGroup,Collapse, CollapseItem, Popup,Icon } from 'vant';
import { getPlatformIconic,refreshAmount,manualTransferPayment,updateAutoChange } from "../../js/network"
import { mapGetters, mapMutations } from 'vuex';
export default {
   data() {
      return {   
         switchLoading:false,
         checked: Boolean,
         activeName: '0',
         userBalance:{
            totalBalance:'',
            balance:''
         },         
         platFormBalance:[],
         show: false,
         otherPlatFormBlance:[],
         choosedAccoundObj:{},                       //  下拉框列表选中的对象
         choosed_outAccoundObj:{},             //  选中的转出账户对象，包括账户名，账户id，和选中的账户下标
         choosed_inAccoundObj:{},              //  选中的转入账户对象，包括账户名，账户id，和选中的账户下标
         datas:{},                             //  初始化时获得的全部数据，用于转入转出时切换功能
         money:'',
         activeFlag:'',
      }
   },
   computed:{
         disabled(){
               return this.money.length > 0 ? true : false
         },
         ...mapGetters([
            'net_btn_click'
         ])
    },
   created() {
      this.getDatas()
   },
   methods: {
      ...mapMutations({
         setNetBtnclick: 'SET_NET_BTNCLICK'
      }),
      async refreshMoney(item){
         this.activeFlag = item.pfmFlag
         let refreshAmountData = await refreshAmount({platformFlag:item.pfmFlag})
         this.activeFlag = '';
         if(refreshAmountData.code == 200){
            this.userBalance.balance = refreshAmountData.data.balance
            this.userBalance.totalBalance = refreshAmountData.data.totalBalance
            for(const it of this.platFormBalance){
               if(item.pfmFlag == it.pfmFlag){
                  it.pfmBalance = refreshAmountData.data.platformBalance;
               }
            }
         }
      },
      //  获取页面初始化数据
      async getDatas(){
         let dataObj = await getPlatformIconic()
         if(dataObj.code == '200'){
            this.checked = dataObj.data.creditSwitch == '0' ? false : true
         }
         if( dataObj.data.creditSwitch == '0' ){
            this.datas = dataObj.data
            this.userBalance = this.datas.userBalance;
            this.platFormBalance = this.datas.userPlatFormBalance
            this.otherPlatFormBlance = this.datas.platformIconic

            this.choosed_outAccoundObj =  this.datas.platformIconic[this.datas.platformIconic.length-1]
            this.choosed_outAccoundObj.index =  this.datas.platformIconic.length-1
            this.choosed_inAccoundObj =  this.datas.platformIconic[0]
            this.choosed_inAccoundObj.index = 0
         }         
      },
      selectHide(){
         this.show = false
      },
      accountChoose(item,index){
         let obj = {
            game_title_cn: item.game_title_cn,
            platform_iconic: item.platform_iconic,
            index: index
         };
         if( this.accoundType == 'in' ){
            this.choosed_inAccoundObj = obj
            if(item.platform_iconic == 'xjye'){
               this.choosed_outAccoundObj = this.datas.platformIconic[0]
            }else{
               this.choosed_outAccoundObj = this.datas.platformIconic[this.datas.platformIconic.length - 1]
            }
         }else{
            this.choosed_outAccoundObj = obj
            if(item.platform_iconic == 'xjye'){
               this.choosed_inAccoundObj = this.datas.platformIconic[0]
            }else{
               this.choosed_inAccoundObj = this.datas.platformIconic[this.datas.platformIconic.length - 1]
            }
         }
         this.selectHide()
      },
      showAccounts(id){         
         this.accoundType = id;
         if(id == 'out'){
            this.choosedAccoundObj = this.choosed_outAccoundObj;
         }else{
            this.choosedAccoundObj = this.choosed_inAccoundObj;
         }
         this.show = true
      },
      async confirm(){
         if(!this.net_btn_click){
                return
         }
         let param = {
            platformIN: this.choosed_inAccoundObj.platform_iconic,
            platformOUT: this.choosed_outAccoundObj.platform_iconic,
            money: this.money
         }         
         this.$http.post("/thirdGames/manualTransferPayment",param).then( res => {
            this.money = ''
            this.choosed_outAccoundObj = this.datas.platformIconic[this.datas.platformIconic.length-1]
            this.choosed_inAccoundObj = this.datas.platformIconic[0];
            if( res.code == 200 ){
               toast('提交成功！')   
               this.getDatas()
            }else{            
               toast(res.msg)               
            }             
         }).catch(err => {
            this.money = ''
            this.choosed_outAccoundObj = this.datas.platformIconic[this.datas.platformIconic.length-1]
            this.choosed_inAccoundObj = this.datas.platformIconic[0];
         })  
         this.setNetBtnclick(false);    
      },
      async eduChange(i){         
         this.switchLoading = true
         if( i ){
            Dialog.alert({
               title: '温馨提示',
               message: '切换到自动额度转换前，请先通过手动转换把额度转移到现金金额。',
               confirmButtonText:'好的'
            })
         }
         // let result = await updateAutoChange({automaticSwitch: i ? '1' : '0'})
         this.$http.post("/thirdGames/updateAutoChange", {automaticSwitch: i ? '1' : '0'}).then( res => {
            if( !res.code == 200 ){
               toast(res.msg) 
            }else{
               //  关闭自动转换调取数据 
               if( !i ){
                  this.getDatas()     
               }
            }
         }).catch( err => {
            toast(err.msg) 
         })
         this.checked = i
         this.switchLoading = false                
      },
      goBack(){
         this.$router.go(-1)
      }
   },
   destroyed(){
      this.show = false
   },
   components: {
      SwitchCell,Cell, CellGroup, Collapse, CollapseItem,Popup,Icon
   }
}
</script>

<style scoped lang="less">
.edu{
   .head{
      position: relative;
      .leftCorner{
         position: absolute;
         left: 15px;
         top: 0;
         bottom: 0;
         padding-right: 50px;
         span{
            display: inline-block;
            width: 7px;
            height: 12px;
            background: url("./img/leftCorner.png") no-repeat;
            background-size: cover;
         }
      }
      p{
         color: #000;
         font-size: 18px;
         line-height: 50px;
         text-align: center;
      }
   }
   .autoChange{
      >p{
         color: #333;
         padding: 8px 15px;
         >span{
            color: #FF5E50;
         }
      }
   }
   .balance{
      .money{
         color: #E5C88B;
         font-size: 16px;
      }
      .van-cell{
         border-bottom: 1px solid #F2F2F2;
      }
      .van-collapse{
         .icon_refresh{
            display: inline-block;
            width: 14px;
            height: 14px;
            margin-left: 6px;
            background: url("./img/refresh.png") no-repeat;
            background-size: cover; 
            &.on{
               transform: rotate(360deg);
               animation: rotation 1s linear infinite;
            }
         }
         @keyframes rotation {
            from {-webkit-transform: rotate(0deg);}
            to {-webkit-transform: rotate(360deg);}
         }
      }
   }
   .account{
      padding: 10px 15px;
      margin-top: 16px;
      background-color: #fff;
      p{
         font-size:13px;
         font-family:PingFangSC-Regular;
         font-weight:400;
         color:rgba(51,51,51,1);
         line-height:34px;
      }
      .inputBox{
         width:325px;
         height:44px;
         padding: 0 10px;
         margin-bottom: 10px;
         border-radius: 6px;
         background:rgba(229,229,229,1);
         .rightCorner{
            width: 16px;
            height: 16px;
            font-size: 16px;
            color: #A0A0A0;
         }
         .inputMoney{
            height: 100%;
            width: 100%;
            &::placeholder{
               color: #A0A0A0
            }
         }
      }
   }
   .btnBox{
      padding: 24px 0 10px;
      text-align: center;
      .confirm{
         width:265px;
         height:44px;
         font-size:18px;
         touch-action: none;
         font-family:PingFangSC-Regular;
         font-weight:400;
         color:rgba(255,255,255,1);
         text-align: center;
         line-height: 44px;
         border-radius: 22px;
         background:rgba(178,178,178,1);
         &.on{
            background-color: #E5C88B
         }
      }
   }
   .popup{
        top:0;
        background-color:transparent;
        .main{
            height:100%;
            position:relative;
            .top{
                width:100%;
                display:flex;
                justify-content:center;
                align-items:center;
                height:50px;            
                color: #fff;
                .botIcon{
                    width:21px;
                    height:21px;
                    background:url("./img/down.png") no-repeat;
                    background-size:cover;
                }
                .botIconBox{
                  width:20px;
                  height:20px;
                  border: 1px solid #fff;
                  border-radius: 50%;
                }
            }
            .gunBox{
                position: absolute;
                top:50px;
                left: 0;
                right: 0;
                bottom: 0;
                background-color:#fff;
                .selectBox{
                    height: 100%;
                    overflow-y: hidden;
                    .listWrap{
                        height:100%;
                        padding: 0 12px;
                        overflow-y:scroll;
                        -webkit-overflow-scrolling: touch;
                        .item{
                            line-height:25px;
                            padding: 18px 12px;
                            border-bottom: 1px solid #F2F2F2;
                            >div:first-child{
                                color: #333;
                                font-size: 15px;                            
                            }
                            .icon{
                                width: 25px;
                                height: 25px;
                                background: url('./img/choose.png') no-repeat;
                                background-size: cover;
                                &.on{
                                    background: url('./img/choosed.png') no-repeat;
                                    background-size: cover;
                                }
                            }
                        }
                    }
                }
            }
        } 
    }
}
</style>
<style lang="less">
.edu{
   .van-switch-cell{
      padding: 12px 15px !important;
   }
   .van-cell__title{
      font-size:16px;
      color: #333333;
      font-family:PingFangSC-Regular;
   }
   .van-cell{
      padding: 13px 15px;      
   }
   .van-cell:not(:last-child)::after{
      border-bottom:none
   }

   .van-collapse-item__content{
      padding: 0;
   }
   .balance{
      .van-hairline--top-bottom::after{
         border-width: 0;
      }
      .van-collapse{
         .van-collapse-item{
            .van-cell{
               border-bottom: 1px solid #F2F2F2;
            }
         }
      }
      .van-collapse-item__wrapper{
         background-color: #f8f8f8;
         .van-collapse-item__content{
            background: transparent;
         }
         .van-cell-group{
            background: transparent;
         }
         .van-cell{
            background: transparent;
         }
      }
   }
}
</style>
