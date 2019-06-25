import CryptoJS from 'crypto-js/crypto-js'
import store from './../store.js'
import router from './../router'
import $http from './http.js'
// 默认的 KEY 与 iv 如果没有给
const KEY = CryptoJS.enc.Utf8.parse('1234567890123456')
const IV = CryptoJS.enc.Utf8.parse('1234567890123456')

export default {
  /*获取用户信息接口，根据返回结果判断用户的token是否失效*/
  getUserInfo(param = {}, option = {}) {
    let newParam = Object.assign({}, { transferOut: '0' }, param)
    if (option.special) {
      return $http.post('/user/userInfo', newParam)
    } else {
      $http
        .post('/user/userInfo', newParam)
        .then(res => {
          // store.commit('SET_Query_Third', false);
          if (res.code == '200') {
            this.handleUserinfo(res)
          } else {
            toast(res.msg)
            this.clearLocal()
          }
        })
        .catch(() => {
          toast('获取用户信息失败！')
          //this.clearLocal()
          router.replace('/login')
        })
    }
  },
  //无提示获取用户id
  getUserInfoNoWarn(param = {}) {
    param = Object.assign({}, { transferOut: '0' }, param)
    $http
      .post('/user/userInfo', param, { loginoutWarn: true })
      .then(res => {
        // store.commit('SET_Query_Third', false);
        if (res.code == '200') {
          this.handleUserinfo(res)
        } else {
          //this.clearLocal()
        }
      })
      .catch(() => {
        //this.clearLocal()
      })
  },
  handleUserinfo(res) {
    res.data.ownActivityStatus = '0'
    store.commit('SET_ACCOUNT', res.data)
    if (res.data.isReceive == '0') {
      store.commit('SET_ISGETCJ', true)
    } else {
      store.commit('SET_ISGETCJ', false)
    }
    if (res.data.dayNum > 5 || res.data.dayNum < 3) {
      store.commit('SET_FOOTREDDOT', false)
    } else if (res.data.threeReceive == '0') {
      store.commit('SET_FOOTREDDOT', true)
    } else {
      store.commit('SET_FOOTREDDOT', false)
    }
    if(res.data.ownActivityStatus == '1'){ //活动过期
      store.commit('SET_FOOTREDDOT', false)
    }
  },
  clearLocal() {

    localStorage.removeItem('U_TK')
    store.commit('SET_USER_TOKEN', '')
    store.commit('SET_ACCOUNT', {})
    // store.commit('SET_Query_Third', false);
  },
  quitAccount(msg) {
    $http
      .post('/user/signOut', {}, { showLoading: true })
      .then(res => {
        if (res.code == '200') {
          this.clearLocal()
        } else {
        }
      })
      .catch(err => {})
  },
  /**
   * AES加密 ：字符串 key iv  返回base64
   */
  Encry(word, keyStr, ivStr) {
    let key = KEY
    let iv = IV
    if (keyStr) {
      key = CryptoJS.enc.Utf8.parse(keyStr)
      iv = CryptoJS.enc.Utf8.parse(ivStr)
    }
    let srcs = CryptoJS.enc.Utf8.parse(word)
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    })
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
  },
  /**
   * AES 解密 ：字符串 key iv  返回base64
   *
   */
  Decry(word, keyStr, ivStr) {
    let key = KEY
    let iv = IV
    if (keyStr) {
      key = CryptoJS.enc.Utf8.parse(keyStr)
      iv = CryptoJS.enc.Utf8.parse(ivStr)
    }
    let base64 = CryptoJS.enc.Base64.parse(word)
    let src = CryptoJS.enc.Base64.stringify(base64)
    var decrypt = CryptoJS.AES.decrypt(src, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    })
    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
    return decryptedStr.toString()
  }
}
