<template>
  <div class="service">
    <ims-header title="客服">
        
    </ims-header> 
    <div class="tabs_com">
      <Tabs class="actv_tabs" :tabs="tabs" @click="clickTab"/>
    </div>
    <div v-if="item==0" class="online">
      <div class="img">
      </div>
      <p class="p">有问题，找客服</p>
      <a :href="serviceUrl" target="_blank" class="btn needsclick">联系在线客服</a>
    </div>
    <div v-else class="serviceTab">    
      <!-- <div v-if="item==1" class="left">
        <div class="img">
          <img style="width:100%;height:100%" src="./img/weixin.png" alt="">
        </div>
        <p class="p">dhis5ghah</p>
        <p class="p">微信客服1</p>
        <div class="btn">复制账号并打开</div>
      </div>
      <div v-if="item==1" class="right">
        <div class="img">
          <img style="width:100%;height:100%" src="./img/weixin.png" alt="">
        </div>
        <p class="p">dhis5ghah</p>
        <p class="p">微信客服2</p>
        <div class="btn">复制账号并打开</div>
      </div> -->
      <div v-if="item==1" class="left">
        <div class="img">
          <img style="width:100%;height:100%" src="./img/qq.png" alt="">
        </div>
        <p class="p">{{OBJ.QQ1}}</p>
        <p class="p">QQ客服1</p>
        <a href="mqqwpa://im/chat?chat_type=wpa&uin=97880762&version=1&src_type=web&web_src=oicqzone.com" 
        target="_blank" class="btn copy needsclick" 
        :data-clipboard-text="OBJ.QQ1"
        >复制账号并打开</a>
      </div>
      <div v-if="item==1" class="right">
        <div class="img">
          <img style="width:100%;height:100%" src="./img/qq.png" alt="">
        </div>
        <p class="p">{{OBJ.QQ2}}</p>
        <p class="p">QQ客服2</p>
        <a href="mqqwpa://im/chat?chat_type=wpa&uin=97880763&version=1&src_type=web&web_src=oicqzone.com" 
        target="_blank"  class="btn copy needsclick" 
        :data-clipboard-text="OBJ.QQ2"
        >复制账号并打开</a>
      </div>

      <div v-if="item==2" class="left">
        <div class="img">
          <img style="width:100%;height:100%" src="./img/MT.png" alt="">
        </div>
        <p class="p">{{OBJ.MT1}}</p>
        <p class="p">MT客服1</p>
        <a  href="mtmessenger://localhost?id=888888" target="_blank" 
        class="btn copy needsclick"
        :data-clipboard-text="OBJ.MT1" 
        >复制账号并打开</a>
      </div>
      <div v-if="item==2" class="right">
        <div class="img">
          <img style="width:100%;height:100%" src="./img/MT.png" alt="">
        </div>
        <p class="p">{{OBJ.MT2}}</p>
        <p class="p">MT客服2</p>
        <a href="mtmessenger://localhost?id=999999" target="_blank"
         class="btn copy needsclick" 
         :data-clipboard-text="OBJ.MT2" 
         >复制账号并打开</a>
      </div>
    </div>
    <p v-if="item!=0" class="tost">
      亲爱的用户，如您在联系客服的时候，没有顺利打开客服会话窗口，请手动复制账号，在MT即时通讯软件上进行添加，我们客服365*24h在线，为您答疑。
    </p>

  </div>
</template>


<script>
import CallApp from "callapp-lib";
import { mapGetters, mapMutations, mapActions } from 'vuex'
import clipboard from 'clipboard'
import Tabs from '../../components/tabs/tabs.vue'
export default {
  data(){
    return{
      tabs:["在线客服","QQ客服","MT客服"],
      item:0,
      OBJ:{
        QQ1:'97880762',
        QQ2:'97880763',
        MT1:'888888',
        MT2:'999999'
      }
    }
  },
  components:{
    Tabs
  },
  computed:{
		...mapGetters([
      'serviceUrl'
    ]),
	},
  methods:{
    clickTab(index){
      this.item=index
    },
    // openWx (num) {
    //   window.open('mqqwpa://im/chat?chat_type=wpa&uin='+num+'&version=1&src_type=web&web_src=oicqzone.com') 
    // },
    // openMT(num){
    //   window.open ('mtmessenger://localhost?id='+num) 
    // }
  },
  mounted(){
    this.$nextTick(() => {
      new clipboard('.copy').on('success', () => {
        this.$toast('复制成功')
      })
    })
  }
}
</script>


<style lang='less' scoped>
  .service{
    min-height: 100%;
    box-sizing: border-box;
    padding-top: @app_head_height;
    background: url('../../assets/page_bg_default.jpg') no-repeat;
    background-size: cover;
    background-attachment: fixed;
    .tabs_com {
      position: absolute;
      left: 0;
      top: 54px;
      width: 100%;
      height: 40px;
      z-index: 1000;
      .actv_tabs {
        /deep/ .tabs {
          background: rgba(255, 255, 255, 0.8);
        }
      }
    }
    .online{
      width:355px;
      height:240px;
      margin: 64px  auto 0;
      background:rgba(255,255,255,0.5);
      padding-top:20px;
      .img{
        width:108px;
        height:108px;
        margin: 0 auto 0;
        background: url('./img/zaixian.png') no-repeat;
        background-size: 100% 100%
      }
      .p{
        text-align: center;
        line-height: 20px;
        font-size: 14px;
        margin: 20px auto 0;
        color: #4A4A4A 
      }
      .btn{
        display: block;
        width:124px;
        height:36px;
        border-radius: 18px;
        margin: 20px auto 0;
        text-align: center;
        line-height: 36px;
        color:#FFFFFF;
        font-size: 14px;
        background: linear-gradient(to right, #4990E2 0%,#7EC1F0 100%);
      }
    }
    .serviceTab{
      width:355px;
      height:194px;
      margin: 64px  auto 0;      
      .left{
        width:173px;
        float: left;
        height:170px;
        background:rgba(255,255,255,0.5);
        padding-top:24px;
      }
      .right{
        width:173px;
        float: right;
        height:170px;
        background:rgba(255,255,255,0.5);
        padding-top:24px;
      } 
      .img{
        width:44px;
        height:44px;
        margin: 0 auto
      } 
      .p{
        color:#4A4A4A;
        line-height: 20px;
        text-align: center;
        margin-top:8px;
      }
      .btn{
        display: block;
        width:124px;
        height:36px;
        border-radius: 18px;
        margin: 20px auto 0;
        text-align: center;
        line-height: 36px;
        color:#FFFFFF;
        font-size: 14px;
        background: linear-gradient(to right, #4990E2 0%,#7EC1F0 100%);
      }   
    }
    .tost{
      color:#626262;
      font-size: 14px;
      line-height: 20px;
      margin: 150px auto;
      padding: 0 10px;
      text-align: center;
      opacity: 0.8;
    }
  }
</style>