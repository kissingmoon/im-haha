<template>
    <div class="wfjc display-flex flex-column">
        <div class="headBox">
            <div class="leftCorner display-flex align-center justify-center" @click="goBack">
                <van-icon name="arrow-left"/>
            </div>
            <p>玩法教程</p>
        </div>
        <div class="main flex-1">
            <tabs :line-width="82" v-model="active" animated @click="onClick">
                <tab title="体育问题"></tab>
                <tab title="真人问题"></tab>
                <tab title="彩票问题"></tab>
                <tab title="电子竞技"></tab>
                <tab title="其他问题"></tab>
            </tabs>
            <ty v-if="active == 0"/>
            <zr v-if="active == 1"/>
            <cp v-if="active == 2"/>
            <dj v-if="active == 3"/>
            <others  v-if="active == 4"/>
        </div>
    </div>
</template>

<script>
import { Tab, Tabs } from 'vant';
import ty from './components/ty'
import zr from './components/zr'
import cp from './components/cp'
import dj from './components/dj'
import others from './components/others'
export default {
    data() {
       return {
           active: 0,
       }
    },
    created() {

    },
    methods: {
        onClick(i){
            this.active = i
        },
        goBack(){
            this.$router.go(-1)
        }
    },
    components: {
        Tab, Tabs, ty, zr, cp, dj, others
    }
}
</script>

<style scoped lang="less">
.wfjc{
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
        padding: 20px 0;
        background-color: #fff;
        .van-tabs{
            /deep/ .van-tabs__wrap {
                margin-left: 36px;
                height: 40px;
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
            }
            /deep/ .van-tab {
                width: 82px;
                margin: 0 5px;
                transition: all 0.2s linear;
                line-height: 40px;
                color: #000000;
            }
            /deep/ .van-tab--active {
                color: #fff;
            }
            /deep/ .van-tabs__nav--line {
                padding-bottom: 0;
                background-color: #EAEAEA;
            }
            /deep/ .van-tabs__line {
                height: 40px;
                background: #e5c88b;
                z-index: 0;
                border-radius: 20px;
                top: 0;
                border: 2px solid #EAEAEA;
                box-sizing: border-box;
            }
        }
    }
}
</style>

