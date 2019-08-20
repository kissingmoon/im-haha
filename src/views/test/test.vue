<template>
  <div class="test-wrapper">
    <div class="iframe-box">
      <iframe src="https://www.youtube.com/watch?v=PAwFcqrLiuM" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.test-wrapper{
  .iframe-box{
    width: 100%;
    height: 500px;
    background-color: antiquewhite;
    iframe{
      width: 100%;
      height: 90%;
    }
  }
}
</style>

