<template>
    <div class="orderlist">
        <div class="clearfix">
            <div class="D-right E-right clearfix">
                <div class="D-space">
                    <div class="header">
                        <span class="s1">我的订单</span>
                        <div class="D-t1">
                            <input type="text" placeholder="输入商品名称或编号" class="D-search">
                        </div>
                        <button class="D-btn">搜索</button>
                        <div class="date">
                            <span class="s2 s2-2">最近三个月</span>
                            <span class="iconfont icon-xiala- s3 s3-2"></span>
                        </div>
                        <ul class="ul1">
                            <li>最近三个月</li>
                            <li>最近一年</li>
                            <li>全部</li>
                        </ul>
                        <div class="D-order">
                            <span class="s2 s2-1">全部订单</span>
                            <span class="iconfont icon-xiala- s3 s3-1"></span>
                        </div>
                        <ul class="ul2">
                            <li>全部订单</li>
                            <li>已完成订单</li>
                            <li>未支付订单</li>
                            <li>已关闭订单</li>
                            <li>待收货订单</li>
                            <li>待评价订单</li>
                        </ul>
                    </div>
                    <div class="D-orderabout clearfix">
                        <p>暂时还没有订单哦！</p>
                        <button class="D-aboutbtn">去下单</button>
                    </div>

                </div>
            </div>
       </div>
    </div>
</template>

<script>
export default {
    name:'orderlist'
}
</script>

<style lang="less" scope>
.orderlist{
    #E-left {
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 4px 4px 8px 2px #ccc;
  overflow: hidden;
  float: left;
  background: white;
    }
    #E-user {
    width: 200px;
    height: 120px;
    padding-top: 10px;
    text-align: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    }
    #E-user div {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-left: 60px;
    margin-top: 5px;
    border: 1px solid #0aa0f6 ;
    overflow: hidden;
    }
    #E-user img {
    width: 80px;
    height: 80px;
    }
    #E-user p {
    margin-top: 10px;
    font-size: 20px;
    text-align: center;
    }
    #E-list {
    margin-top: 10px;
    }
    li {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 14px;
    }
    li:hover {
    background: #70a8ee;
    color: white;
    cursor: pointer;
    }
    .down-li {
    background: #70a8ee;
    color: white;
    }
    .E-scroll{
        position: absolute;
        top: 0;
        left: 0;
    }
    /*# sourceMappingURL=E-AfterSale.js.map */
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .clearfix:after{
        content:'' ;
        clear: both;
        display:block ;
    }
    .head{
        height:55px;
        border: 1px solid black;
    }
    .content{
        width: 1200px;
        height: 500px;
        position: absolute;
        top: 150px;
        left: 50%;
        margin-left: -600px;
    }
    .D-space{
        width: 930px;
        margin-left: 22px;
        /*background: white;*/
    }
    .header{
        width: 100%;
        height: 60px;
    }
    .s1{
        font-size: 17px;
        line-height: 60px;
        margin-left: 5%;
    }
    .D-t1{
        display: inline-block;
        width: 141px;
        height: 27px;
        margin-left: 15%;
        border: 1px solid gray;
        border-radius: 3px;
        background: white;
        line-height: 27px;
        padding-left:9px;
    }
    .D-t1 input{
        outline: none;
        display: inline-block;
        width: 139px;
        height: 27px;
        border: none;
    }
    .D-btn{
        width: 70px;
        height: 28px;
        border: none;
        color: white;
        background:#0a83d7 ;
        border-radius: 3px;
        cursor: pointer;
    }
    .date{
        display: inline-block;
        width: 120px;
        height: 25px;
        border: 1px solid gray;
        margin-left: 120px;
        position: absolute;
        top: 18px;
        overflow: hidden;
        border-radius: 3px;
        background: white;
    }
    .ul1{
        width: 120px;
        border: 1px solid gray;
        position: absolute;
        left: 634px;
        top: 44px;
        border-radius: 3px;
        background: white;
        display: none;
        z-index: 5;
    }
    .ul1 li{
        width: 92%;
        height: 25px;
        line-height: 25px;
        text-align: left;
        border-bottom: 1px solid gray;
        padding-left: 8px;
    }
    .ul2{
        width: 120px;
        border: 1px solid gray;
        position: absolute;
        left: 810px;
        top: 44px;
        border-radius: 3px;
        background: white;
        display: none;
        z-index: 5;
    }
    .ul2 li{
        width: 92%;
        height: 25px;
        line-height: 25px;
        text-align: left;
        border-bottom: 1px solid gray;
        padding-left: 8px;
    }
    .s2{
        line-height: 25px;
        font-size: 14px;
        padding-left: 7px;
        color: gray;
    }
    .s3{
        font-size: 30px;
        margin-left: 10px;
        line-height: 26px;
        position: absolute;
        right: 0;
    }
    .D-order{
        display: inline-block;
        width: 120px;
        height: 25px;
        border: 1px solid gray;
        margin-left: 300px;
        position: absolute;
        top: 18px;
        overflow: hidden;
        border-radius: 3px;
        background: white;
    }

    /*中间*/
    .D-con1{
        width: 100%;
        height: 50px;
        /*background: gainsboro;*/
        font-size: 16px;
        /*margin-top: 13px;*/
        line-height: 50px;
    }
    .D-con1 span, .D-con1 div{
        display: inline-block;
        line-height: 44px;
    }
    .D-s1{
        margin-left: 24%;
        margin-right: 21%;
    }
    .D-s2{
        margin-right:40px;
    }
    .D-static{
        display: inline-block;
        width: 99px;
        /*height: 35px;*/
        position: absolute;
        top:64px;
        overflow: hidden;
        border-radius: 3px;
    }
    .s4{
        padding-left: 7px;
    }
    .s5{
        font-size: 30px;
        position: absolute;
        right: 0;
        top: 2px;
    }
    .ul3{
        width: 99px;
        /*border: 1px solid gray;*/
        position: absolute;
        left: 740px;
        top: 114px;
        border-radius: 3px;
        background: white;
        display: none;
    }
    .ul3 li{
        width: 92%;
        height: 25px;
        line-height: 25px;
        text-align: left;
        border-bottom: 1px solid #ccc;
        padding-left: 10px;
    }
    .D-s3{
        margin-left: 13%;
    }
    .D-con2{
        width: 100%;
        height: 30px;
        line-height: 45px;
        margin-bottom: 13px;
    }
    .D-t3{
        margin-left: 20px;
    }
    .D-t2{
        margin-left: 44px;
    }
    .D-all{
        font-size: 14px;
    margin-left: 5px;
    }
    /*展示部分*/
    .D-con3-t{
        width: 100%;
        height: 27px;
        border-bottom: 1px solid gainsboro;
        padding-top: 7px;
        background: white;
        border-radius: 8px 8px 0 0;
    }
    .D-con3 span:not(.D-closeOrder), .D-con3 div{
        display: inline-block;
        font-size: 15px;
        line-height: 22px;
    }
    .D-s4{
        margin-left: 5%;
    }
    .D-number{
        margin-left: 9%;
    }
    .D-con3-b{
        width: 100%;
        height: 147px;
        border-bottom: 1px solid #ccc;
        margin-bottom:10px;
        background: white;
        padding-top: 20px;
        border-radius: 0 0 8px 8px;
    }
    .D-con3-c{
        width:100%;
        height: 167px;
        border-bottom: 1px solid #ccc;
        margin-bottom:10px;
        background: white;
        border-radius: 0 0 8px 8px;
        /*padding-top: 5px;*/
    }
    .picture1{
        width: 446px;
        display: inline-block;
        vertical-align: middle;
    }
    .D-img1{
        width:112px;
        height: 112px;
        vertical-align: middle;
        padding-left: 38px;
    }
    .describe{
        width: 260px;
        margin-left: 14px;
        /*font-size: 12px;*/
        vertical-align: middle;
    }
    .Dprice{
        width: 82px;
    }
    .D-operate{
        display: inline-block;
        width: 69px;
        margin-left: 40px;
    }
    .tuihuo{
        cursor:pointer;
    }
    .complain{
        cursor:pointer;
    }
    .D-s{
        display: inline-block;
        width: 25px;
        height: 25px;
        margin-left:5px;
        margin-right: 3px;
    }
    .D-s5{
        width: 80px;
        height: 30px;
        background:#0a83d7 ;
        color: white;
        border: none;
        margin-left:25px;
        margin-right: 3px;
        border-radius: 5px;
    }
    .D-closeOrder{
        /*display: inline-block;*/
        /*width: 80px;*/
        margin-left: 912px;
        font-size: 13px;
        cursor: pointer;
    }
    .D-s6{
        width: 75px;
        margin-left:40px;
    }
    /*//分页*/
    .D-paging{
        margin-left: 45%;
        margin-top: 30px;
        margin-bottom: 50px;
    }
    .D-paging a{
        display: inline-block;
        width: 30px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        background:#0a83d7 ;
        color: white;
    }

    /*//确认收货弹框部分*/
    .D-delMask{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.3);
        /*display: none;*/
    }
    .D-mask{
        width:430px;
        height: 230px;
        border: 1px solid darkgrey;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -115px;
        margin-left: -215px;
        background: white;
    }
    .D-top{
        width: 100%;
        height: 40px;
        border-bottom: 1px solid gainsboro;
        line-height: 40px;
        background: #f8f8f8;
    }
    .D-prompt{
        margin-left: 20px;
        font-size: 14px;
    }
    .D-no{
        margin-left: 76%;
        text-decoration: none;
        color: black;
    }
    .D-closepay{
        margin-left: 69%;
        text-decoration: none;
        color: black;
    }
    .D-buttom{
        padding-top: 8%;
    }
    .D-p1{
        font-size: 16px;
        margin-left: 10%;
        padding-bottom: 12%;
        color: red;
    }
    .D-p2{
        font-size: 20px;
        margin-left: 19%;
        padding-bottom: 12%;
        color: red;
    }
    .D-sure,.D-yes,.D-sure-1,.D-yes-1{
        display: inline-block;
        width: 20%;
        text-align: center;
        font-size: 14px;
        cursor: pointer;
        margin-top: -10px;
    }
    .D-sure,.D-sure-1{
        height: 29px;
        line-height: 29px;
        border: 1px solid darkgray;
        margin-left: 28%;
        margin-right: 2%;
    }
    .D-yes,.D-yes-1{
        height: 30px;
        line-height: 30px;
        background: #31b0d5;
        color: white;
    }
    /*//确认收货弹框部分*/

    /*追加评论*/
    .d-addmask{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.3);
        /*display: none;*/
    }
    .D-additional{
        width: 1000px;
        height: 400px;
        border: 1px solid darkgray;
        background: white;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -500px;
        margin-top: -200px;
    }
    .D-addleft{
        width: 250px;
        height: 200px;
        float: left;
        margin-top: 50px;
        margin-left: 50px;
    }
    .D-addright{
        margin-top: 50px;
        margin-left: 50px;
        float: left;
    }
    .D-pre{
        margin-bottom: 20px;
    }
    .D-preval{
        display: inline-block;
        width: 390px;
        /*height: 34px;*/
        font-size: 13px;
        margin-right: 15px;
        overflow: hidden;
    }
    textarea{
        width: 587px;
        font-size: 15px;
    }
    .D-subbtn{
        width: 80px;
        height: 30px;
        border: none;
        color: white;
        background:#0a83d7 ;
        border-radius: 3px;
        cursor: pointer;
        margin-top: 35px;
        margin-left: 500px;
    }
    .D-addclose{
        font-size: 20px;
        position: absolute;
        top: 5px;
        right: 5px;
        cursor: pointer;
    }

    /*关闭订单遮罩层*/
    .D-closeMask{
        width: 100%;
        height: 100%;
        position: fixed;
        top:0;
        left: 0;
        background: rgba(0,0,0,0.3);
        /*display: none;*/
    }

    /*空白订单展示*/
    .D-orderabout{
        width: 100%;
        background: white;
        border: 1px solid gainsboro;
        border-radius: 10px;
        min-height: 472px;
    }
    .D-orderabout p{
        font-size: 25px;
        text-align: center;
        margin-top: 20%;
    }
    .D-orderabout button{
        width: 200px;
        height: 60px;
        font-size: 20px;
        border: none;
        border-radius: 8px;
        background:#0a83d7 ;
        color: white;
        margin-top: 50px;
        margin-left: 356px;
    }
    .Dmodel{
        display: none;

    }
    .areadyclose{
        background: #ccc;
        color: black;
        font-size: 13px;
    }
}
    
</style>