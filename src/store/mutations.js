export default {
    SET_USER_TOKEN(state, param) {
        state.user_token = param;
    },
    SET_ACCOUNT(state, param) {
        state.account = param;
    },
    SET_MJB(state, param) {
        state.ismjb = param;
    },
    SET_PLATFORM_FLAG(state, param) {
        state.platformFlag = param;
    },
    SET_NET_BTNCLICK(state, param) {
        state.net_btn_click = param;
    },
    SET_ISGETCJ(state, param) {
        state.isGetCJ = param;
    },
    SET_FOOTREDDOT(state, param) {
        state.footRedDot = param;
    },
    SET_INVITE_CODE(state, param) {
        state.inviteCode = param;
    },
    SET_SERVICE_URL(state, param) {
        state.serviceUrl = param;
    },
    SET_AGENT_URL(state, param) {
        state.agentUrl = param;
    },
}