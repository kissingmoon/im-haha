<template>
    <div class="others">
        <div class="title"><span></span>娱乐场包含哪些游戏类型?</div>
        <p>
            1.娱乐场内容丰富齐全，包括有经典老虎机、3D老虎机、桌面游戏、视频扑克和其它游戏。    <br>
            2.3D老虎机以无限的创意和完整的故事情节为依据，将玩家的游戏过程以故事的形式将其完美呈现，在十足逼真的3D动画效果的配合下，每一个游戏都显得动感华丽。   <br>
            3.经典老虎机是依据真实赌场里的老虎机而设计，游戏图案经典、极具代表性，尤其是3轴老虎机绝对是每个赌场里最受欢迎的老虎机。   <br>
            4.桌面游戏更贴近真实赌场中的真人游戏，其中包括花样繁多的二十一点、百家乐、德州扑克等各式扑克游戏。
        </p>
        <div class="title"><span></span>游戏出错或有纠纷的情况下我该怎么办?</div>
        <p>
            请您通过在线客服或者发送邮件到 xxxxxx@163.com , 联系我们的客服人员，并提供以下信息：    <br>
            1.您的中博账号    <br>
            2.游戏详情，包括：游戏名称、投注编号、金额、时间。
        </p>
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

    },
    components: {

    }
}
</script>

<style scoped lang="less">
.others{
    width: 345px;
    margin: 0 auto;
    .title{
        display: flex;
        align-items: center;
        font-size: 14px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        margin-top: 10px;
        margin-bottom: 2px;
        line-height: 20px;
        color:rgba(221,186,112,1);
        span{
            flex:8px 8px;
            width: 8px;
            height: 8px;
            margin-right: 4px;
            background-color: #DFC388;
            transform: rotate(45deg)
        }
    }
    p{
        line-height: 16px;
    }
}
</style>
