<template>
    <div class="list-box">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" @load="onLoad" :offset="30">
                <div class="list-content">
                    <div class="list-title--block display-flex flex-column flex-center">
                        <div class="list-title__txt">总支出</div>
                        <div class="list-title__num">
                            <span style="font-size:20px">￥</span>9000.00 
                        </div>
                    </div>
                    <div class="list-data--block">
                        <div class="data-item display-flex align-center">
                            <div class="item-col__left">投注</div>
                            <div class="item-col__middle">ss</div>
                            <div class="item-col__right flex-1">-250.00</div>
                        </div>
                    </div>
                </div>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isLoading: false,
            loading: false,
            finished: false
        }
    },

    methods: {
        onLoad(){
            setTimeout(()=>{
                // this.loading = false;
            },3000)
        },
        onRefresh(){

        }
    }
}
</script>

<style lang="less" scoped>
.list-box{
            height: 100%;
            -webkit-overflow-scrolling: touch;
            .list-content{
                height: 150vh;
                .list-title--block{
                    height: 125px;
                    background-color: #ffffff;
                    border-bottom: 10px solid @base_color;
                    .list-title__txt{
                    }
                    .list-title__num{
                        margin-top:5px;
                        color: #E0877F;
                        font-size: 24px;
                        font-weight: bold;
                    }
                }
                .list-data--block{
                    background-color: #ffffff;
                    padding: 0 15px;
                    .data-item{
                        padding: 0 9px;
                        height: 50px;
                        border-bottom: 1px solid @base_color;
                        .item-col{

                        }
                        .item-col__left{
                            width: 80px;
                        }
                        .item-col__middle{
                            width: 108px;
                            text-align: right;
                        }
                        .item-col__right{
                            text-align: right;
                            color: @color_txt_lightRed;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
</style>
