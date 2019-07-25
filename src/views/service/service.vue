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
      <a :href="serviceUrl" class="btn">联系在线客服</a>
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
        <div :data-clipboard-text="OBJ.QQ1" class="btn copy" @click="openWx('97880762')">复制账号并打开</div>
      </div>
      <div v-if="item==1" class="right">
        <div class="img">
          <img style="width:100%;height:100%" src="./img/qq.png" alt="">
        </div>
        <p class="p">{{OBJ.QQ2}}</p>
        <p class="p">QQ客服2</p>
        <div :data-clipboard-text="OBJ.QQ2" class="btn copy" @click="openWx('97880763')">复制账号并打开</div>
      </div>

      <div v-if="item==2" class="left">
        <div class="img">
          <img style="width:100%;height:100%" src="./img/MT.png" alt="">
        </div>
        <p class="p">{{OBJ.MT1}}</p>
        <p class="p">MT客服1</p>
        <div :data-clipboard-text="OBJ.MT1" class="btn copy" @click="openMT('888888')">复制账号并打开</div>
      </div>
      <div v-if="item==2" class="right">
        <div class="img">
          <img style="width:100%;height:100%" src="./img/MT.png" alt="">
        </div>
        <p class="p">{{OBJ.MT2}}</p>
        <p class="p">MT客服2</p>
        <div :data-clipboard-text="OBJ.MT2" class="btn copy" @click="openMT('999999')">复制账号并打开</div>
      </div>
    </div>

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
      tabs:["在线客服","QQ客服","MT"],
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
    openWx (num) {
      window.open ('mqqwpa://im/chat?chat_type=wpa&uin='+num+'&version=1&src_type=web&web_src=oicqzone.com') 
    },
    openMT(num){
      window.open ('mtmessenger://localhost?id='+num) 
    }
  },
  mounted(){
    this.$nextTick(() => {
      new clipboard('.copy').on('success', () => {
          // this.$toast('复制成功')
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
  }
</style>