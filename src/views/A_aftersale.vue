<template>
    <div class="aftersale">
            <!--标题栏-->
            <div id="E-title">
                <div>
                    <span>售后服务</span>
                </div>
                <!--搜索框-->
                <div id="E-seo">
                    <input type="text">
                    <button>搜索</button>
                </div>
                <!--下拉框-->
                <div class="E-two-menu" id="E-menu-time">
                    <p class="E-menu-top" id="E-menu-time-name">最近三个月</p>
                    <span class="iconfont icon-xia" id="E-menu-time-xia"></span>
                    <ul class="E-menu-menu" id="E-menu-time-con">
                        <li>最近三个月</li>
                        <li>今年</li>
                        <li>全部</li>
                    </ul>
                </div>
                <!--下拉框-->
                <div class="E-two-menu" id="E-menu-all">
                    <p class="E-menu-top" id="E-menu-all-name">正常</p>
                    <span class="iconfont icon-xia" id="E-menu-all-xia"></span>
                    <ul class="E-menu-menu" id="E-menu-all-con">
                        <li>正常</li>
                        <li>发起售后</li>
                        <li>申请驳回</li>
                        <li>进行中</li>
                        <li>完成</li>
                    </ul>
                </div>
            </div>
            <!--菜单栏-->
            <div id="E-menu">
                <p class="E-menu-name1">商品</p>
                <p class="E-menu-time1">购买时间</p>
                <p class="E-menu-state">状态</p>
                <p class="E-menu-change">操作</p>
            </div>

            <!--信息展示-->
            <div id="E-content">
                <!-- --------------------------------$$$$$信息展示------- -->
                <div class="E-content-boss clearfix">
                    <hr>
                    <img src="../assets/logo2.png" alt="">
                    <p class="E-content-con">描述信息</p>
                    <p class="E-content-time">2019-06-15</p>
                    <p class="E-content-state">完成</p>
                    <p class="E-content-btn">
                        <button>查看详情</button>
                    </p>
                </div>
           

            <!--分页-->
            <div id="E-pages-boss" class="clearfix">
                <div class="E-pages-body clearfix" id="E-pages-fen">
                    <button class="E-pages-btn" id="E-pages-back">上一页</button>
                    <ul class="E-pages-num clearfix">
                        <li class="E-pages-new">1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>……</li>
                        <li>9</li>
                        <li>10</li>
                    </ul>
                    <button class="E-pages-btn" id="E-pages-next">下一页</button>
                </div>

            </div>
            </div>

           
    </div>
</template>

<script>
export default {
    name:"aftersale"
}
</script>

<style lang="less" scope>
  @border:1px solid red;

.aftersale{
   #E-right{
        width: 976px;
        border: #e6e6e6 solid 1px;
        border-radius: 10px;
        float: left;
        box-shadow: 4px 4px 8px 2px #ccc;
        overflow: hidden;
        position: absolute;
        top: 0 ;
        right: 0;
        }
        #E-title{
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        background: #f9f9f9;
        border-bottom: #cccccc solid 1px;
        >div{
            float: left;
            margin-left: 20px;
        }
        }
        //搜索框
        #E-seo{
        padding-left: 200px;
        height: 50px;
        line-height: 45px;

        >input{
            height: 22px;
        }
        >button{
            width: 80px;
            border: 1px solid skyblue;
            border-radius: 5px;
            background: #0aa0f6;
            height: 29px;
            color: white;
            cursor: pointer;
        }
        }
        //下拉框
        .E-two-menu{
        position: relative;
        cursor: pointer;

        >span{
            position: absolute;
            top: 2px;
            right: 10px;
            color: #cccccc;
        }
        }
        .E-menu-top{
        width: 120px;
        height: 25px ;
        line-height: 25px;
        border: #cccccc solid 1px;
        border-radius: 5px;
        font-size: 14px;
        margin-top: 12px;
        margin-left: 30px;
        padding-left: 10px;
        background: white;
        }
        .E-menu-menu{
        width: 130px;
        margin-left: 30px;
        margin-top: 3px;
        border: #cccccc solid 1px;
        border-radius: 5px;
        overflow: hidden;
        background: white;

        position: absolute;
        top: 36px;
        left: 0;

        >li{
            height:30px ;
            line-height: 30px;
        }
        }

        //菜单栏
        #E-menu{
        height: 30px;
        line-height: 30px;
        border-bottom: #ccc solid 1px;

        p{
            float: left;
            text-align: center;
            width: 150px;
        }

        .E-menu-name1{
            width: 370px;
        }

        .E-menu-change{
            width: 280px;
        }
        }

        //展示列表
        #E-content{
        height: 412px;
        overflow: hidden;

        .E-content-boss{
            padding: 10px 10px;
            background: white;
            width: 936px;
            margin-left: 10px;
            margin-top: 10px;
            border-radius: 10px;

            @content-height:50px;

            >img{
            float:left;
            height: @content-height;
            padding-left: 20px;
            }

            >p{
            float:left;
            text-align: center;
            height: @content-height;
            width: 150px;
            line-height: 40px;
            padding-top: 10px;
            }

            .E-content-con{
            margin-left: 20px;
            font-weight: bold;
            height: @content-height;
            width: 260px;
            overflow: hidden;
            line-height: 20px;
            }

            .E-content-btn{
            width: 280px;
            text-align: center;

            >button{
                width: 100px;
                height: 25px;
                border: 1px solid #ccc;
                border-radius: 3px;
                margin-top: 5px;
            }

            }
        }
        }

        //分页
        #E-pages-boss{
        @pages-height:30px;

        height: @pages-height;
        margin-top: 20px;
        margin-bottom: 20px;

        .E-pages-body{
            height: @pages-height;
            line-height: @pages-height;
            width: 300px;
            margin-left: 320px;

            >button{
            float: left;
            margin-top: 3px;
            width: 60px;
            height: 25px;
            border: 1px solid #ccc;
            border-radius: 3px;
            }

            >ul{
            float: left;

            >li{
                float: left;
                width: 30px;
                height: @pages-height;
                line-height: @pages-height;
            }
            }
        }
        }

        //遮罩层
        #E-AS-mask{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        background: rgba(0,0,0,0.3);

        }

        #E-AS-body{
        position: absolute;
        top: 20%;
        left: 35%;
        width: 400px;
        height: 300px;
        border-radius: 10px;
        background: white;
        padding: 20px 20px;

        >a{
            position: absolute;
            top: 10px;
            right: 15px;
        }
        }

        #E-AS-head{
        font-size: 20px;
        text-align: center;
        }

        #E-AS-con{
        height: 210px;
        position: relative;

        >p{
            color: #8d8d8d;
        }
        }

        .E-AS-menu{
        margin-top: 10px;
        position: relative;


        }

        .E-AS-help{

        >p{
            float:left;
            font-size: 16px;
            height: 25px;
            line-height: 25px;
            color: black;

            >b{
            font-weight: normal;
            }
        }
        }

        .E-AS-menu-top{
        width: 302px;
        height: 25px;
        border: #cccccc solid 1px;
        border-radius: 5px;
        padding-left: 8px;
        position: relative;

        >span{
            position: absolute;
            top: 0;
            right: 8px;
        }
        }

        .E-AS-menu-menu{
        position: absolute;
        top: 26px;
        left: 81px;
        border: #cccccc 1px solid;
        border-radius: 5px;
        width: 309px;
        background: white;
        z-index: 5;
        display: none;

        >li{
            height: 30px;
            line-height: 30px;
        }
        }

        .E-AS-con{
        margin-top: 5px;
        >p{
            font-size: 16px;
            color: black;
        }

        >textarea{
            width: 380px;
            height: 105px;
            padding: 5px 5px ;
        }
        }












        #E-AS-btn{
        width: 100%;
        text-align: center;
        position: absolute;
        left: 0;
        bottom: 20px;
        }

        #E-AS-btn-no{
        background: white;
        }

        #E-AS-btn-yes{
        background:#0aa0f6 ;
        color: white;
        margin-left: 40px;
        }

        /*各类修改成功/失败后的弹框---开始*/
        #E-UP-mask-YN{
        background: white;
        position: absolute;
        width: 200px;
        height: 50px;
        border-radius: 5px;
        text-align: center;
        line-height: 50px;
        font-size: 20px;
        display: none;
        z-index: 1000;
        }
        .E-UP-mask-YN-N{
        border: 1px solid red;
        }
        .E-UP-mask-YN-Y{
        border: 1px solid green;
        }
        /*各类修改成功/失败后的弹框---结束*/

        //如果没有订单显示的页面
        #E-no-content{
        width: 100%;
        text-align: center;
        margin-top: 50px;

        >img{
            width: 300px;
            margin-bottom: 10px;
        }
        >p{
            font-size:16px ;
            margin-bottom: 10px;
        }
        }

        //弹框p标签的样式
        .ESHZTP{
        width: 100%;
        height: 30px;
        line-height: 30px;
        margin-top: 10px;

        }

}











</style>
