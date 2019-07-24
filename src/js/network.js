import http from "./http.js"
export const bankList = (param, config) => http.post("/withdrawCash/bankList", param);
export const net_register = param => http.post("/user/register", param);
export const net_login = param => http.post("/user/login", param);
export const net_signOut = param => http.post("/user/signOut", param);
export const net_drawCash = param => http.post("/withdrawCash/withdrawCash", param);
export const net_bankList = param => http.post("/withdrawCash/bankList", param);
export const net_bindBank = param => http.post("/user/bindBank", param);
export const net_setDrawPwd = param => http.post("/user/setDrawingPassword", param);
export const net_editPassword = param => http.post("/user/editPassword", param);
export const net_getDrawCashRec = param => {
    return http.post("/withdrawCash/list", param)
};
export const net_getIncomList = param => http.post("/detailsFunds/income/list", param);
export const net_getPayRecList = param => http.post("/detailsFunds/pay/list", param);
/* ------------------ 额度转换api ----------------- */
export const getPlatformIconic = (param ={}) => http.post("/thirdGames/getPlatformIconic", param);
export const refreshAmount = (param ={}) => http.post("/thirdGames/refreshAmount", param);
// export const manualTransferPayment = (param ={}) => http.post("/thirdGames/manualTransferPayment", param);
export const updateAutoChange = (param ={}) => http.post("/thirdGames/updateAutoChange", param);
/* ------------------ 额度转换api ----------------- */

/* ------------------ 投注记录api ----------------- */
export const findUserRecord = (param ={}) => http.post("/gameRecord/findUserRecord", param);
/* ------------------ 投注记录api ----------------- */
/* ------------------ 站内信api ----------------- */
export const net_queryMsg = (param ={}) => http.post("/msg/queryMsg", param);
export const net_insertRead = (param ={}) => http.post("/msg/insertRead", param);
export const net_msgSave = (param ={}) => http.post("/msg/save", param);
export const net_msgDelete = (param ={}) => http.post("/msg/deleteAll", param);
/* ------------------ 公告消息弹窗 ----------------- */
export const net_getAlert = (param ={}) => http.post("/home/alert/getAlert", param);
export const net_alertRead = (param ={}) => http.post("/home/alert/insertRead", param);
/* ------------------ 注册接口 ----------------- */
export const net_sendSmsMsg = (param ={}) => http.post("/user/sendSmsMsg", param);
/* ------------------ 代理接口 ----------------- */
export const net_getUserPro = (param ={}) => http.post("/user/getUserShareMoney", param);
export const net_getUserProList = (param ={}) => http.post("/user/getUserPromotionList", param);
export const net_getUserProList1 = (param ={}) => http.post("/gameAgent/commision/list", param);
export const net_getUserShare = (param ={}) => http.post("/user/getUserShareMoney", param);
export const net_getTeamList = (param ={}) => http.post("/user/getTeamMembersList", param);
/* ------------------ 网易云盾 ----------------- */
export const net_getShield = (param) => http.get("/user/getShield", param);
export const net_openGraph = (param) => http.get("/user/openGraphValidate", param);