<template>
  <div class="reg-wrapper">
    <div class="main-container display-flex">
      <div class="submit-box display-flex flex-center flex-column"
           @click="goBefore">
        <div class="submit-box__btn--top"></div>
        <div class="submit-box__btn--bot">返回登录</div>
      </div>
      <div class="form-box flex-1">
        <div class="form-title">注册</div>
        <div class="form-input-content"
             id="regForm"
             v-if="showRegItem">
          <div class="form-input-item"
               v-for="(v, k) in formData"
               :key="k">
            <ims-input :name="k"
                       v-model="v.model"
                       :placeholder="v.placeholder"
                       :type="v.type"
                       :valueType="v.valueType"
                       :maxlength="v.maxlength"
                       :readonly="v.readonly"
                       :extra="v.extra"
                       @onInputFocus="inputFocusFun(v, k)"
                       @onInputBlur="inputBlurFun(v, k)"
                       @onleftClick="leftClickFun(v, k)"
                       @onrightClick="rightClickFun(v, k)">
              <div class="slot-icon--left"
                   :class="v.leftIconClass"
                   slot="leftIcon"></div>
              <div class="slot-icon--right"
                   :class="v.extra?'':v.rightIconClass"
                   slot="rightIcon">
                <img v-if="v.rightIconClass == 'right-icon__code'"
                     :src="codeSrc"
                     alt>

              </div>
              <div v-if="v.extra"
                   class="slot-icon--right"
                   :class="v.extra?'':v.rightIconClass"
                   slot="rightOuterIcon">
                <span ref="getCode"
                      :class="v.rightIconClass"
                      class="display-flex flex-center"
                      v-if="v.rightIconClass == 'right-icon__simcode'"
                      @click="startSend(k)">获取</span>
                <span class="display-flex flex-center right-icon__simcode"
                      v-if="v.rightIconClass == 'right-icon__waiting'">{{ countZero }}s</span>
              </div>
            </ims-input>
            <div class="input-tip">
              <span v-show="pointers.formData == k">{{ v.regTip }}</span>
            </div>
          </div>
        </div>
        <ims-btn class="form-submit-content display-flex flex-center"
                 :class="{ 'active': btnActive }"
                 :throttleTime="1000"
                 @click="register">注册</ims-btn>
        <div id="getCode"></div>
      </div>
    </div>
  </div>
</template>

<script>
import imsInput from '@/components/ims-input/ims-input'
import mainOptions from '@/config/main-option.js'
import { randomWord, generateUUID } from '@/js/tools.js'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import { net_register, net_sendSmsMsg, net_getShield, net_openGraph } from '@/js/network.js'

export default {
  data() {
    return {
      captchaIns: {},
      WatchMan: {},
      wmToken: '',
      hasCaptcha: true,
      showRegItem: false,
      formData: {
        userId: {
          model: '',
          placeholder: '请输入用户名',
          leftIconClass: 'left-icon__userId',
          rightIconClass: '',
          type: '',
          regTip: '请输入6-11位字母或数字',
          valueType: 'letterNum',
          maxlength: 11,
          extra: false
        },
        pwd: {
          model: '',
          placeholder: '请输入密码',
          leftIconClass: 'left-icon__pwd',
          rightIconClass: 'right-icon__eye',
          type: 'password',
          regTip: '请输入6-16位字母或数字',
          valueType: 'letterNum',
          maxlength: 16,
          extra: false
        },
        // confirmPwd: {
        // 	model: '',
        // 	placeholder: '确认密码',
        // 	leftIconClass: 'left-icon__pwd',
        // 	rightIconClass: 'right-icon__eye',
        // 	type: 'password',
        // 	regTip: '',
        // 	valueType: 'letterNum',
        // 	maxlength: 16,
        // 	extra: false
        // },
        phone: {
          model: '',
          placeholder: '手机号',
          leftIconClass: 'left-icon__phone',
          rightIconClass: '',
          rightIconClass: '',
          type: 'tel',
          regTip: '',
          imgSrc: true,
          valueType: 'num',
          maxlength: 11,
          extra: false
        },
        code: {},
        imgCode: {},
        inviteCode: {
          name: 'inviteCode',
          model: '',
          placeholder: '邀请码（选填）',
          leftIconClass: 'left-icon__inviteCode',
          rightIconClass: '',
          type: 'text',
          regTip: '',
          valueType: 'letterNum',
          maxlength: 8,
          extra: false,
          noNecessary: true,
          readonly: false
        }
        // code: {
        // 	model: '',
        // 	placeholder: '验证码',
        // 	leftIconClass: 'left-icon__code',
        // 	rightIconClass: 'right-icon__code',
        // 	rightIconClass: '',
        // 	type: '',
        // 	regTip: '',
        // 	imgSrc: true,
        // 	valueType: 'num',
        // 	maxlength: 4
        // }
      },
      pointers: {
        formData: -1
      },
      btnActive: false,
      code_id: '',
      codeSrc: '',
      timer: {},
      countZero: 60
    }
  },
  components: {
    imsInput
  },
  computed: {
    ...mapGetters(['net_btn_click', 'platformFlag', 'invite_code', 'agent_url'])
  },
  watch: {
    formData: {
      handler(newVal, oldVal) {
        var allRight = true
        for (let key in newVal) {
          if (!newVal[key].model && !newVal[key].noNecessary) {
            allRight = false
          } else if (key == 'userId') {
            this.formData.userId.rightIconClass = 'right-icon__clear'
          }
        }
        this.btnActive = allRight
      },
      deep: true
    }
  },
  created() {
    // this.setCode()
    this.checkInvite()
    this.getWmSwitch()
  },
  mounted() {
    // this.initGeetest();
    this.initNECaptcha()
    this.initWatchman()
  },
  methods: {
    ...mapMutations({
      setUserToken: 'SET_USER_TOKEN',
      setAccount: 'SET_ACCOUNT',
      setInviteCode: 'SET_INVITE_CODE',
      setNetBtnclick: 'SET_NET_BTNCLICK',
      setJuluShow: 'SET_JULY_SHOW'
    }),
    goBefore() {
      this.$emit('goBefore')
    },
    getWmSwitch() {
      let loading = this.$loading({ text: '正在加载…' })
      net_openGraph().then(res => {
        loading.close()
        if (res.data) {
          if (res.data.wangyiStatus == '1') {
            this.hasCaptcha = true
          } else {
            this.hasCaptcha = false
          }
          if (res.data.imgStatus == '1') {
            this.formData.imgCode = {
              model: '',
              placeholder: '验证码',
              leftIconClass: 'left-icon__code',
              rightIconClass: 'right-icon__code',
              type: '',
              regTip: '',
              imgSrc: true,
              valueType: 'num',
              maxlength: 4
            }
            this.formData = Object.assign({}, this.formData)
            this.setCode()
          } else {
            delete this.formData.imgCode
            this.formData = Object.assign({}, this.formData)
          }
          if (res.data.smsStatus == '1') {
            this.formData.code = {
              model: '',
              placeholder: '验证码',
              leftIconClass: 'left-icon__simcode',
              rightIconClass: 'right-icon__simcode',
              type: '',
              regTip: '',
              imgSrc: true,
              valueType: 'num',
              maxlength: 6,
              extra: true
            }
            this.formData = Object.assign({}, this.formData)
          } else {
            delete this.formData.code
            this.formData = Object.assign({}, this.formData)
          }
        }
        this.showRegItem = true
      })
    },
    // initGeetest() {
    // 	let config = {
    // 		// 以下配置参数来自服务端 SDK
    // 		gt: '6216680937717fdab947ed9e71a3aaa1',
    // 		challenge: 'e8382b9e08987b2f851e9468a596029b',
    // 		offline: false,
    // 		new_captcha: true,
    // 		timeout: '5000',
    // 		product: 'bind'
    // 	}
    // 	initGeetest(config, function (captchaObj) {
    // 			captchaObj.onReady(function(){
    // 						//your code
    // 					}).onSuccess(function(){
    // 						//your code
    // 					}).onError(function(){
    // 						//your code
    // 					})
    // 				document.getElementById("meme").addEventListener("click", ()=>{
    // 					captchaObj.verify();
    // 				})
    //     // 省略其他方法的调用
    // 	});
    // },
    initNECaptcha() {
      var _this = this
      initNECaptcha(
        {
          // config对象，参数配置
          captchaId: '4c925b0df7a04b0f859ec355e968b596',
          element: '#getCode',
          mode: 'popup',
          width: '320px',
          onVerify: function(err, data) {
            // 用户验证码验证成功后，进行实际的提交行为
            if (!err) {
              // _this.captchaIns.refresh()
              net_getShield({ NECaptchaValidate: data.validate }).then(res => {
                if (res.code == '200') {
                  _this.sendSIMCode({ NECaptchaValidate: data.validate })
                }
              })
              return
            }
          }
        },
        function onload(instance) {
          // 初始化成功后得到验证实例instance，可以调用实例的方法
          _this.captchaIns = instance
        },
        function onerror(err) {
          // 初始化失败后触发该函数，err对象描述当前错误信息
        }
      )
    },
    initWatchman() {
      var _this = this
      // 初始化SDK，只需初始化一次
      // auto使用默认值，即自动化模式
      initWatchman({
        productNumber: 'YD00881449707603',
        onload: function(instance) {
          _this.WatchMan = instance
          _this.submitReg()
        }
      })
    },
    submitReg() {
      this.WatchMan.getToken('7bc4946a64ce4412845ddf1a14a7bc79', token => {
        // 提交点赞业务请求
        this.wmToken = token
      })
    },
    checkInvite() {
      let inviteCode = this.$route.query.inviteCode
      if (!this.invite_code && inviteCode) {
        this.setInviteCode(inviteCode)
      }
      if (this.invite_code) {
        this.formData.inviteCode.model = this.invite_code
        this.formData.inviteCode.readonly = true
      }
    },
    startSend() {
      let val = this.formData.phone.model
      if (!/^1[1-9][0-9]{9}$/.test(val)) {
        this.$toast('手机号格式错误')
        return
      }
      if (!this.net_btn_click) {
        return
      }
      // this.captchaIns.popUp()
      if (this.hasCaptcha) {
        this.captchaIns.refresh()
        this.$nextTick(() => {
          this.captchaIns.popUp()
        })
      } else {
        this.sendSIMCode({ NECaptchaValidate: '' })
      }
    },
    sendSIMCode(param) {
      param.phone = this.formData.phone.model
      this.setNetBtnclick(false)
      net_sendSmsMsg(param).then(res => {
        if (res.code == '200') {
          this.$toast('验证码已发送')
          this.countTimer(this.countZero)
          this.formData.code.rightIconClass = 'right-icon__waiting'
        }
      })
    },
    countTimer(num) {
      if (this.countZero == 0) {
        this.formData.code.rightIconClass = 'right-icon__simcode'
        this.countZero = 60
        this.timer = null
      } else {
        this.countZero--
        this.timer = setTimeout(() => {
          this.countTimer(this.countZero)
        }, 1000)
      }
    },
    leftClickFun() {},
    rightClickFun(v, k) {
      if (k == 'imgCode') {
        this.formData.imgCode.model = ''
        this.setCode()
      }
      if (k == 'pwd') {
        if (this.formData.pwd.rightIconClass == 'right-icon__eye') {
          this.formData.pwd.rightIconClass = 'right-icon__eye0'
        } else {
          this.formData.pwd.rightIconClass = 'right-icon__eye'
        }
      }
      if (k == 'confirmPwd') {
        if (this.formData.confirmPwd.rightIconClass == 'right-icon__eye') {
          this.formData.confirmPwd.rightIconClass = 'right-icon__eye0'
        } else {
          this.formData.confirmPwd.rightIconClass = 'right-icon__eye'
        }
      }
    },
    inputFocusFun(v, k) {
      this.pointers.formData = k
    },
    inputBlurFun(v, k) {
      this.pointers.formData = -1
      if (k == 'userId') {
        this.formData.userId.rightIconClass = ''
      }
    },
    setCode() {
      this.code_id = 'H' + randomWord(false, 8, 10)
      this.codeSrc = `${mainOptions.generatorCode}?code_id=${this.code_id}`
    },
    checkForm(param) {
      let keys = Object.keys(param)
      for (let item of keys) {
        if (item == 'phone') {
          let val = param[item].model
          if (!/^1[1-9][0-9]{9}$/.test(val)) {
            this.$toast('手机号格式错误')
            return false
          }
        }
        if (item == 'userId') {
          if (param[item].model.length < 6) {
            this.$toast('用户名长度最少6位')
            return false
          }
        }
        if (item == ('pwd' || 'confirmPwd')) {
          // if (param['pwd'].model != param['confirmPwd'].model) {
          // 	this.$toast('两次密码输入不一致')
          // 	return false
          // }
          if (param[item].model.length < 6) {
            this.$toast('密码长度最少6位')
            return false
          }
        }
        if (item == 'code') {
          if (param[item].model.length != 6) {
            this.$toast('请输入6位数字验证码')
            return false
          }
        }
      }
      return true
    },
    setPlatformFlag() {
      let U_IDK = localStorage.getItem('U_IDK')
      if (!U_IDK || U_IDK == 'undefined') {
        U_IDK = generateUUID()
        localStorage.setItem('U_IDK', U_IDK)
      }
      return U_IDK
    },
    async register() {
      if (!this.btnActive) return
      let result = this.checkForm(this.formData)
      if (!result) return
      let param = {}
      param.phone = this.formData.phone.model
      param.inviteCode = this.formData.inviteCode.model
      param.codeId = this.code_id
      param.userId = this.formData.userId.model.toLowerCase()
      param.pwd = this.formData.pwd.model
      param.platformFlag = this.setPlatformFlag()
      param.agentUrl = location.host
      param.wmToken = this.wmToken
      if (this.formData.code && this.formData.code.model) {
        param.code = this.formData.code.model
      }
      if (this.formData.imgCode && this.formData.imgCode.model) {
        param.imgCode = this.formData.imgCode.model
      }
      if (this.agent_url) {
        param.agentUrl = this.agent_url
      }
      param.webUmidToken = sessionStorage.getItem('webUmidToken')
      param.uaToken = sessionStorage.getItem('uaToken')
      let loading = this.$loading({ text: '正在请求…' })
      try {
        let res = await net_register(param)
        loading.close()
        if (res.code == '200') {
          toast('注册成功！')
          this.setJuluShow(true)
          this.setUserToken(res.data.token)
          localStorage.setItem('U_TK', res.data.token)
          this.$api.getUserInfo()
          this.$router.push('/user')
        } else {
          this.formData.code.model = ''
          this.setCode()
          toast(res.msg)
        }
      } catch (error) {
        loading.close()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.reg-wrapper {
  width: 100%;
  height: 100%;
  padding: 0 12px 20px 0;
  flex-shrink: 0;
  box-sizing: border-box;
  .main-container {
    height: 100%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    box-sizing: border-box;
    .submit-box {
      width: 54px;
      background: rgba(0, 0, 0, 0.4);
      .submit-box__btn--top {
        width: 24px;
        height: 24px;
        background: url('./../img/renss.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 15px;
      }
      .submit-box__btn--bot {
        width: 15px;
        color: #ffffff;
        font-size: 14px;
      }
    }
    .form-box {
      background: rgba(255, 255, 255, 0.4);
      box-shadow: 0px 5px 20px 0px rgba(223, 223, 223, 0.1);
      padding: 0 15px 18px 15px;
      .form-title {
        padding: 20px 0;
        text-align: center;
        font-size: 18px;
        font-family: 'HiraginoSansGB-W3';
        font-weight: normal;
        color: #fff;
      }
      .form-input-content {
        .form-input-item {
          .input-tip {
            color: #ffffff;
            font-size: 12px;
            height: 18px;
          }
          .slot-icon--left {
            width: 20px;
            height: 20px;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            &.left-icon__userId {
              background-image: url('../img/dl_peo.png');
            }
            &.left-icon__pwd {
              background-image: url('../img/dl_password.png');
            }
            &.left-icon__code {
              background-image: url('../img/yanzhengma.png');
            }
            &.left-icon__simcode {
              background-image: url('../img/shoujiyzm.png');
            }
            &.left-icon__phone {
              background-image: url('../img/phone.png');
            }
            &.left-icon__inviteCode {
              background-image: url('../img/invite-code.png');
            }
          }
          .slot-icon--right {
            background-size: 100% 100%;
            background-repeat: no-repeat;
            &.right-icon__eye {
              width: 18px;
              height: 12px;
              background-image: url('../img/yanjing.png');
            }
            &.right-icon__eye0 {
              width: 18px;
              height: 12px;
              background-image: url('../img/yanjing0.png');
            }
            &.right-icon__clear {
              width: 17px;
              height: 17px;
              .bg-image('./../img/clear');
            }
            img {
              display: flex;
              width: 80px;
              height: 35px;
            }
            .right-icon__simcode {
              width: 46px;
              height: 29px;
              background: rgba(255, 255, 255, 0.7);
              border-radius: 4px;
            }
          }
        }
      }
      .form-submit-content {
        width: 100%;
        height: 42px;
        border-radius: 21px;
        font-size: 18px;
        font-family: 'HiraginoSansGB-W3';
        font-weight: normal;
        color: rgba(255, 255, 255, 1);
        background: rgba(155, 155, 155, 0.8);
        &.active {
          background: @btn_color;
        }
      }
    }
  }
}
</style>
