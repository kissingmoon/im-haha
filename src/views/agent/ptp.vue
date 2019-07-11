<template>
  <div v-show="ptpShow" class="ptp">
    <div class="header-container">
			<ims-header title="推广赚钱">
      </ims-header> 
		</div>
    <div class="ptpCentent">
        <img style="width:100%;height:100%" src="./img/ptp.png" alt="">
        <div class="bottom">
            <div class="parent">
              <div ref="qrcode" class="qrcode">
                <img @click="showMask" class="img" :src="qrSrc">
              </div>
            </div>
            <div class="inviteCode">
              <div class="inviteCode_left">邀请码：{{result.inviteCode}}</div>
              <div :data-clipboard-text="result.inviteCode" @click="codefun('邀请码')" class="inviteCode_right copy">复制</div>
            </div>
            <p class="p">您已通过推荐好友，累计获得了 <span style="color:#FFE04D">￥{{result.inviteMoney=='null'?0:result.inviteMoney}}.00</span> 佣金</p>
            <p class="p p1">{{result.link}}</p>
            <div @click="linkfun('复制链接')" :data-clipboard-text="result.url" class="btn copy">
                复制链接
            </div>
            <p class="p2">说明：通过扫描二维码或者复制链接注册成功的用户即可成为您的下线</p>
        </div>
    </div>
    <transition name="fade">
			<div @click.stop="isShowMask = false" v-show="isShowMask" class="mask">
				<div class="mask_main">
					<div class="mask_qr">
						<div ref="mask_qr_img" class="mask_qr_img">
							<img class="img" :src="qrSrc">
						</div>
					</div>
					<p class="mask_p0">长按二维码点击进行保存</p>
					<p class="mask_p">保存后点击发送图片，小伙伴通过扫描二维码注册成功，立享佣金</p>
					<div @click="isShowMask = false" class="mask_close"></div>
				</div>
			</div>
		</transition>
  </div>
</template>

<script>
import QRCode from '@/js/qrcode.js'
import clipboard from 'clipboard'
export default {
  data(){
    return{
      qrSrc:'',
      result:{},
      txt:"",
      isShowMask:false,
      ptpShow:false
    }
  },
  mounted(){
    let loading = this.$loading({ text: '正在加载…' })
    this.getData(loading)
  },
  methods:{
    getData(loading){
        this.$http.post('/user/getUserPromotion').then(res=>{
          if (res.code == '200') {
            this.result = res.data
            this.ptpShow=true
            loading.close()
            this.result.url=window.location.origin+'/regist?'+'inviteCode='+this.result.inviteCode
            this.result.link=window.location.origin+'/regist?'+'inviteCode='+this.result.inviteCode
						if (this.result.inviteMoney <= 0 || this.result.inviteMoney == 'null') {
							this.result.url = this.result.url + '&我已经入驻YG娱乐平台，想邀请你来跟我一起免费赚佣金，快点来吧'
						} else {
							this.result.url =
								this.result.url +
								`&我已在YG娱乐平台赚到￥${this.result.inviteMoney}.00，想邀请你来跟我一起免费赚佣金，快点来吧`
						}
						this.$nextTick(() => {
							this.setQrcode(this.result.url)
							new clipboard('.copy').on('success', () => {
								if (this.txt == '复制链接') {
								} else {
									this.$toast('邀请码复制成功，快去通知好友吧')
								}
							})
						})
					}
        })
    },
    codefun(txt){
      this.txt=txt
    },
    linkfun(txt){
			this.txt=txt
			Dialog.alert({
				confirmButtonText:'好的',
				message: '推荐链接与文案复制成功，赶快跟好友分享吧，分享人数越多，获得的佣金越多。'
			}).then(() => {
				
			});
    },
    showMask(){
      this.isShowMask=true
    },
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
.mask {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.7);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
	.mask_main {
		width: 230px;
	}
	.mask_qr {
		background: #ffffff;
		width: 200px;
		height: 200px;
		margin: 0 auto;
		padding: 10px;
		box-sizing: border-box;
		.mask_qr_img {
			display: block;
			width: 100%;
			height: 100%;
			.img {
				display: block;
				width: 100%;
			}
		}
	}
	.mask_p0 {
		font-size: 14px;
		color: #f5a623;
		letter-spacing: 0;
		text-align: center;
		margin-top: 18px;
	}
	.mask_p {
		font-size: 12px;
		color: #ffffff;
		letter-spacing: 0;
		text-align: center;
		line-height: 21px;
		margin-top: 13px;
	}
	.mask_close {
		width: 22px;
		height: 22px;
		background: url('../../assets/icon1.png') no-repeat;
		background-size: 100%;
		margin: 30px auto 0;
	}
}
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
        .parent{
            width:138px;
            height:138px;
            margin: 0 auto;
            background: #fff;
            position: relative;
          .qrcode{
            width:130px;
            height:130px;
            position: absolute;
            right:0;
            bottom:0;
            left:0;
            top:0;
            margin: auto;
            .img{
              width:100%;
              height:100%
            }
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
          margin-top:20px;
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


