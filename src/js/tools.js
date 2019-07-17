/*给数据编码*/
export function encodeObj(obj) {
  let newObj = {}
  for (var key in obj) {
    newObj[key] = encodeURIComponent(obj[key])
  }
  return newObj
}
//生成随机值
/*
 ** randomWord 产生任意长度随机字母数字组合
 ** randomFlag-是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
 */

export function randomWord(randomFlag, min, max) {
  let str = '',
    range = min,
    arr = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z'
    ]

  // 随机产生
  if (randomFlag) {
    range = Math.round(Math.random() * (max - min)) + min
  }
  for (var i = 0; i < range; i++) {
    let pos = Math.round(Math.random() * (arr.length - 1))
    str += arr[pos]
  }
  return str
}
/*重置所有的对象的值 */
export function resetObj(obj) {
  for (let k of Object.keys(obj)) {
    if (Object.prototype.toString.call(obj[k]) === '[object Object]') {
      resetObj(obj[k])
    } else if (Object.prototype.toString.call(obj[k]) === '[object Array]') {
      obj[k] = []
    } else if (typeof obj[k] == 'string') {
      obj[k] = ''
    } else if (typeof obj[k] == 'number') {
      obj[k] = 0
    }
  }
}
export function generateUUID() {
  var d = new Date().getTime()
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
  return uuid
}
export function getGreeting() {
  let hour = new Date().getHours()
  let str = ''
  if (hour < 6) {
    str = '早晨好'
  } else if (hour < 11) {
    str = '上午好'
  } else if (hour < 13) {
    str = '中午好'
  } else if (hour < 18) {
    str = '下午好'
  } else if (hour < 24) {
    str = '晚上好'
  }
  return str
}
export function openLink(url, deviceType){
  if(deviceType == "ios"){
      router.push(`/mpage?jumpLink=${url}`);
  }else{
      window.open(url);
  }
}
export function crKKuu(){
  let a = crIpp();
  let XX = crJJox();
  let boob = crZYZZ();
  return "JUg8"+a+XX+boob
}
export function crIpp(){
  return "+11%"
}
export function crJJox(){
  return "H_32"
}
export function crZYZZ(){
  return "s=OL"
}