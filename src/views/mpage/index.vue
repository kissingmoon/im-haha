<template>
  <div class="mpage"></div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['ismjb'])
  },
  created() {
    const gameJumpUrl = this.$route.query.jumpLink
    const goto = this.$route.query.goto
    const gameType = this.$route.query.gameType
    const ismjb = this.ismjb || localStorage.getItem('ismjb')
    if (!gameJumpUrl) return
    if (goto == 'pay') {
      let loading = this.$loading({ text: '正在跳转…' })
      this.$http
        .post(gameJumpUrl, this.$route.query)
        .then(res => {
          if (res.code == 200) {
            if (ismjb == 'ios') {
              if (window.context) {
                setTimeout(() => {
                  this.$router.push('/')
                }, 1000)
                //注意：跳转之前app先拿url进行判断，如果url不符合网址的规则，就不能跳转
                context(res.data.url)
              } else {
								location.href = res.data.url
              }
            } else {
              location.href = res.data.url
            }
          }
          loading.close()
        })
        .catch(() => {
          loading.close()
        })
    } else if (goto == 'getThird') {
      let param = {}
      if (gameType) {
        param.gameType = gameType
      }
      let loading = this.$loading({ text: '正在跳转…' })
      this.$http
        .post(gameJumpUrl, param)
        .then(res => {
          if (res.code == 200) {
            location.href = res.data
          }

          loading.close()
        })
        .catch(() => {
          loading.close()
        })
    } else {
      location.href = gameJumpUrl
    }
  }
}
</script>

<style scoped lang="less">
.mpage {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  .gameProxy {
    overflow: hidden;
  }
}
</style>
