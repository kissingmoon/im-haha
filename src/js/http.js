import QS from 'qs'
import axios from 'axios'
import router from './../router'
import options from './../config/main-option.js'
import store from './../store.js'
import $api from './api.js'

let instance = axios.create({
  timeout: 10000,
  baseURL: options.baseUrl
})

instance.interceptors.request.use(
  config => {
    let user_token = store.getters.user_token
    let aesKey = user_token.substring(user_token.length - 16) || ''
    if (user_token) {
      config.headers.common['Authorization'] = 'Bearer_' + user_token
    }
    config.headers.common['domain'] = 'fwnix.cn'
    config.headers.common['template'] = 'ui_zhongbo'
    // 这里设置全局的参数格式，所有类型的请求都会走这个配置
    // 先对请求单独配置做判断，如果没有单独配置，就采用统一配置
    if (!config.headers['Content-Type']) {
      config.headers = {
        'Content-Type': 'application/json',
        domain: 'fwnix.cn',
        template: 'ui_zhongbo'
      }
    } else if (config.headers['Content-Type'] == 'application/x-www-form-urlencoded') {
      if (config.data) {
        if (aesKey) {
          config.data = QS.stringify({
            params: $api.Encry(JSON.stringify(config.data), aesKey, aesKey)
          })
        } else {
          config.data = QS.stringify({ params: $api.Encry(JSON.stringify(config.data)) })
        }
      } else {
        config.data = null
      }
    }
    // 鉴权参数设置
    if (config.method === 'get') {
      //get请求下 参数在params中，其他请求在data中
      config.params = config.params || {}
      //一些参数处理
    } else {
      // config.data = config.data || {};
      //一些参数处理
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  response => {
    store.commit('SET_NET_BTNCLICK', true)
    if (response.status === 200) {
      /*这里的code是200成功拿到后台参数之后,后台返回的数据带的code状态码，如果后台没有返回这种code码，忽略此步骤*/
      switch (response.data.code) {
        case '9001':
        case '9002': {
          $api.clearLocal()
          if (response.config.loginoutWarn) {
            //这边的提示可以通过config来做判断
            break
          }
          toast('登录信息失效,请重新登录')
          setTimeout(() => {
            router.push('/login')
          }, 1000)
          break
        }
        case '1003':
          toast('您的账号异常已被冻结，如有疑问请联系客服')
          $api.clearLocal()
          break
        case '10086':
          //您的帐号在其它地方登录，您已被迫下线，如果不是您本人操作，请及时修改密码
          Dialog.alert({
						message: '您的帐号在其它地方登录，您已被迫下线，如果不是您本人操作，请及时修改密码',
						confirmButtonText: '好的'
					}).then(() => {
            router.push('/login')
          });
          $api.clearLocal()
          break
        case '200':
        case '101':
        case '102':
        case '103':
        case '104':
        case '105':
        case '106':
        case '107':
        case '108':
        case '109':
        case '110':
        case '111':
        case '112':
        case '113':
        case '114':
        case '115':
        case '116': {
          break
        }
        default:
          response.data.msg && toast(response.data.msg)
      }
      return Promise.resolve(response.data)
      
    } else {
      /*这里的status是网络并没有以200状态成功返回数据，就会进入此分支并根据网络异常状态进行处理，会进入catch逻辑*/
      return Promise.reject(response)
    }
  },
  error => {
    store.commit('SET_NET_BTNCLICK', true)
    if (error.response) {
      /*这里的status是网络并没有以200状态成功返回数据，就会进入此分支并根据网络异常状态进行处理，会进入catch逻辑*/
      switch (error.response.status) {
        case 404:
          {
            toast('请求路径错误!')
          }
          break
        case 500:
          {
            toast('服务器开了小差！')
          }
          break
      }
    } else {
      // 处理断网的情况
      toast('网络连接错误！')
    }
    return Promise.reject(error)
  }
)
/**
 * 封装get方法
 * @param url
 * @param params
 * @returns {Promise}
 */

const $http = {
  get(url, params) {
    return instance.get(url, { params })
  },

  /**
   * 封装post请求
   * @param url
   * @param params
   * @returns {Promise}
   */

  post(url, params, postConfig) {
    //这里单独针对post请求进行配置，可以定义header和transformRequest等配置
    //x-www-form-urlencoded
    let dafaultConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    let config
    if (Object.prototype.toString.call(postConfig) === '[object Object]') {
      config = Object.assign(dafaultConfig, postConfig)
    } else {
      config = dafaultConfig
    }
    return instance.post(url, params, config)
  },

  /**
   * 封装patch请求
   * @param url
   * @param data
   * @returns {Promise}
   */
  patch(url, params) {
    return instance.patch(url, { params })
  },

  /**
   * 封装put请求
   * @param url
   * @param params
   * @returns {Promise}
   */

  put(url, params) {
    return instance.put(url, { params })
  },
  /**
   * 封装delete请求
   * @param url
   * @param params
   * @returns {Promise}
   */
  delete(url, params) {
    return instance.delete(url, { params })
  }
}
export default $http
