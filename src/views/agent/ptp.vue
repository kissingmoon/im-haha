<template>
  <div class="ptp">
    <div class="header-container">
			<ims-header title="推广赚钱">
      </ims-header> 
		</div>
    <div class="ptpCentent">
        <img style="width:100%;height:100%" src="./img/ptp.png" alt="">
        <div class="bottom">
            <div ref="qrcode" class="qrcode">
              <img class="img" :src="qrSrc">
            </div>
            <div class="inviteCode">
              <div class="inviteCode_left">邀请码：zaq123456</div>
              <div class="inviteCode_right">复制</div>
            </div>
            <p class="p">您已通过推荐好友，累计获得了 <span style="color:#FFE04D">10000</span> 佣金</p>
            <p class="p p1">https://www.captainbi.com/amz_index.html?spread_code=0D9V</p>
            <div class="btn">
                复制链接
            </div>
            <p class="p2">说明：通过扫描二维码或者复制链接注册成功的用户即可成为您的下线</p>
        </div>
    </div>
  </div>
</template>

<script>
import QRCode from '@/js/qrcode.js'
export default {
  data(){
    return{
      qrSrc:''
    }
  },
  mounted(){

  },
  methods:{
    setQrcode(url) {
			if (!url) {
				return
			}
			let qrcodeEl = this.$refs.qrcode
			let qr = new QRCode(qrcodeEl, {
				text: url,
				width: qrcodeEl.offsetWidth,
				height: qrcodeEl.offsetHeight,
				correctLevel: QRCode.CorrectLevel.L
			})
			let qrcodeSrc = qr._oDrawing.srcData
			this.qrSrc = qrcodeSrc
		},
  }
}
</script>

<style lang="less" scoped> 
  .ptp{
    height: 100%;
    box-sizing: border-box;
    padding-top: @app_head_height;
    background: url('../../assets/page_bg_default.jpg') no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    .ptpCentent{
      margin-top:10px;
      padding: 0 3%;
      flex: 1;
      position: relative;
      .bottom{
        position: absolute;
        width:94%;
        bottom:0;
        left:3%;
        height:370px;
        .qrcode{
          width:130px;
          height:130px;
          margin: 0 auto;
          .img{
            width:100%;
            height:100%
          }
        }
        .inviteCode{
          height:28px;
          padding: 0 18%;
          margin-top:10px;
          .inviteCode_left{
            float: left;
            color:#fff;
            font-size: 16px;
            font-family: PingFangSC-Regular;
            line-height:28px; 
            color:rgba(250, 250, 250, 0.8);
          }
          .inviteCode_right{
            float: right;
            height:28px;
            width:52px;
            background: linear-gradient(to top right, #4990E2, #7EC1F0);
            color:#fff;
            border-radius: 4px;
            font-family: PingFangSC-Regular;
            font-size: 16px;
            text-align: center;line-height: 28px;
            color:rgba(250, 250, 250, 0.8);
          } 
        }
        .p{
          text-align: center;
          line-height: 20px;
          font-size: 14px;
          color:rgba(250, 250, 250, 0.8);
          width:305px;
          margin:0 auto;
          margin-top:10px;
        }
        .p1{
          margin-top:25px;
        }
        .btn{
          width:305px;
          height:44px;
          margin:10px auto;
          color:rgba(250, 250, 250, 0.8);
          font-size: 16px;
          background: linear-gradient(to top right, #4990E2, #7EC1F0);
          text-align: center;
          line-height: 44px;
          border-radius: 4px
        }
        .p2{
          line-height: 17px;
          font-size: 12px;
          width:305px;
          margin:0 auto;
          color:rgba(250, 250, 250, 0.6);
        }
      }
    }
  }
</style>


