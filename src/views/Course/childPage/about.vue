<template>
   <div class="about display-flex flex-column">
       <div class="headBox">
            <div class="leftCorner display-flex align-center justify-center" @click="goBack">
                <van-icon name="arrow-left"/>
            </div>
            <p>关于我们</p>
        </div>
        <div class="main flex-1">

        </div>       
   </div>
</template>

<script>
export default {
    data() {
       return {

       }
    },
    created() {

    },
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    },
    components: {

    }
}
</script>

<style scoped lang="less">
.about{
    height: 100%;
    .headBox{
        position: relative;
        .leftCorner{
            position: absolute;
            left: 15px;
            top: 0;
            bottom: 0;
            padding-right: 50px;
            .van-icon{
                font-size: 20px;
            }
        }
        p{
            color: #000;
            font-size: 18px;
            line-height: 50px;
            text-align: center;
        }
    }
    .main{
        background-color: #fff;
    }
}
</style>
