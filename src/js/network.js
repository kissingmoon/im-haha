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
