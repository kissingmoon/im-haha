<template>
    <div class="agentIc">
        <div class="header-container">
			<ims-header title="代理说明">
            </ims-header> 
		</div>
        <div class="actv_h5">
            <span class="actv_reat"></span>奖励规则
        </div>
        <div class="head"></div>
        <div class="actv_table12">
            
            <div class="col2 ">
                <div class="row2 row2_0">赠送彩金</div>
                <div class="row2 row2_1">15元</div>
                <div class="row2 row2_1">35元</div>
                <div class="row2 row2_1">55元</div>
            </div>

            <div class="col2">
                <div class="row2 row2_0">流水要求</div>
                <div class="row2 row2_1">一倍流水</div>
                <div class="row2 row2_1">一倍流水</div>
                <div class="row2 row2_1">一倍流水</div>
            </div>
            <div class="col2">
                <div class="row2 row2_0">游戏限制</div>
                <div class="row2 row2_1">不限</div>
                <div class="row2 row2_1">不限</div>
                <div class="row2 row2_1">不限</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
    .agentIc{
        min-height: 100%;
        box-sizing: border-box;
        padding-top: @app_head_height;
        background-attachment: fixed;
        padding:@app_head_height 3%;
        .actv_h5 {
            padding: 24px 0 10px;
            font-size: 16px;
            font-weight: 500;
            color: @color_deep_blue;
            line-height: 22px;
            display: flex;
            align-items: center;
        }
        .actv_reat {
            display: inline-block;
            width: 8px;
            height: 8px;
            background: @color_deep_blue;
            transform: rotate(45deg);
            margin-right: 9px;
        }
        .head{
            display: flex;
            width:100%;
            height:30px;
            padding: 5px 0;
        }
        .actv_table12{
            display: flex;
            align-items: stretch;
            border-top: 1px solid @actv_table_border_color;
            border-right: 1px solid @actv_table_border_color;
            font-size: 10px;
            line-height: 30px;
            text-align: center;
            color: rgba(51, 51, 51, 1);
            
            .col2 {
                flex-basis: 33.333%;
                display: flex;
                flex-direction: column;
                .row2 {
                    border-left: 1px solid @actv_table_border_color;
                    border-bottom: 1px solid @actv_table_border_color;
                }
                .row2_0 {
                    padding: 5px 0;
                }
                .row2_1 {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }    
    }
</style>


