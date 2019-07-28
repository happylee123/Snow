<template>
    <div class="main study">
        <!--logo展示-->
        <el-row>
            <el-col :span="24">
                <img src="./../assets/logo2.png" alt="">
            </el-col>
        </el-row>
        <!--查看设定与展示-->
        <el-row>
            <el-col :span="24">
                <div class="video">
                    <img src="./../assets/u35.png" alt="">
                    <h3>掌握“设定与拍摄”</h3>
                    <p>为您介绍拍摄准备以及各种各样的设定方法。让我们来捕捉珍贵的瞬间吧。</p>
                    <button title="查看视频">查看"设定与拍摄"</button>
                </div>
            </el-col>
        </el-row>
        <!--注意事项-->
        <el-row>
            <el-col :span="24">
                <div class="warning">
                <h3>注意事项</h3>
                <p>有关详细指示说明，请参考照相机的说明书。本页信息假设照相机设定都为默认值。插图中的示例仅用于解说功能。</p>
                </div>
            </el-col>
        </el-row>
        <!--设定与拍摄-->
        <el-row>
            <el-col :span="24">
                <div class="set">
                <h3>设定与拍摄</h3>
                <p>通过视频为您介绍中相机的设定方法和功能使用方法</p>
                </div>
            </el-col>
        </el-row>
        <!--指南-->
        <div class="guide">
            <h3>指南</h3>
            <div class="demo-image__placeholder">
                <div class="block">
                    <el-image :src="guide1"></el-image>
                 </div>
                 <div class="block">
                    <el-image :src="guide2"></el-image>
                 </div>
                 <div class="block">
                    <el-image :src="guide3"></el-image>
                 </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            guide1:require('./../assets/study1.png'),
            guide2:require('./../assets/study2.png'),
            guide3:require('./../assets/study3.png'),
        }
    }
}
</script>

<style lang="less" scoped>
.study{
   .main{
    width: 80%;
    margin:  0 auto;
}
.el-row img{
    width: 100px;
    height: 100px;
    float: left;
}
.video{
    width: 100%;
    height: 150px;
    background-color:#e2e2dc;
    padding: 20px 20px;
    img{
        width: 105px;
        height: 75px;
        float: left;
        margin-top: 15px;
        margin-right: 15px;
    }
    h3{
        font-size: 24px;
    }
    p{
        margin: 0 0 10px;
    }
    button{
        font-size: 1rem;
        width: 248px;
        padding: 0 20px;
        background: #333;
        line-height: 35px;
        border: none;
        color: aliceblue;
        border-radius: 4px;
    }
    button:hover{
        cursor: pointer;
    }
}
.warning{
    padding-top: 50px;
    line-height: 40px;
    h3{
        font-size: 1.4rem;
        font-weight: bold;
    }
    p{
        margin: 0 0 10px;
    }
}
.set{
    padding-top: 40px;
    line-height: 40px;
    h3{
        font-size: 18px;
        font-weight: bold;
    }
    p{
        margin: 0 0 10px;
    }
}
.guide{
    width: 100%;
    height: 60%;
    margin: 0 auto;
    h3{
        font-size: 1.4rem;
        font-weight: bold;
        margin: 0 auto;
        padding-top: 50px;
        text-align: center;
    }
    .block{
        width: 30%;
        margin-left: 3%;
        margin-top: 3%;
        padding-bottom: 30px;
        display: inline-block;
    }
}
}

</style>

