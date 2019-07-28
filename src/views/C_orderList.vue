<template>
  <div class="orderlist">
    <div class="clearfix">
      <div class="D-right E-right clearfix">
        <div class="D-space">
          <div class="header">
            <span class="s1">我的订单</span>
            <div class="D-t1">
              <input
                type="text"
                placeholder="输入商品名称或编号"
                class="D-search"
                style="border-radius:none"
                v-model="msg" 
              />
            </div>
            <button class="D-btn" @click="Mfind">搜索</button>

            <select name id="date" style="margin-left:60px;" @change="Mfinddate" v-model="date">
              <option value='1'>最近三个月</option>
              <option value='2'>最近一年</option>
              <option value='3'>全部时期</option>
            </select>

            <select name id="state" style="margin-left:21px;"  @change="Mstate" v-model="statenum">
              <option value='4'>全部订单</option>     
              <option value='1'>待支付订单</option>
              <option value='2'>待发货订单</option>
              <option value='3'>已完成订单</option>            
                      
              <option value>已关闭订单</option>             
              <option value>待评价订单</option>
            </select>
          </div>
          <div class="D-con1" style="font-size:13px;">
            <!--<input type="checkbox" class="D-t3"><span class="D-t3">全选</span>-->
            <span class="D-s1" style="margin-right:260px;">宝贝</span>
            <span class="D-s2" style="margin-left:20px;">单价</span>
            <span class="D-s2">数量</span>
            <span class="D-s2">商品操作</span>
            <span class="s4" style="margin-left:56px;">实付款</span>

            <span class="" style="margin-left:66px;">交易状态</span>
              <span style="margin-left:60px;">交易操作</span>
          </div>
        </div>
        <!-- 没有订单的页面 -->
        <!-- <div class="D-orderabout clearfix">
                        <p>暂时还没有订单哦！</p>
                        <button class="D-aboutbtn">去下单</button>
        </div>-->

        <!-- 订单列表 -->

        <div class="D-con3 clear">
          <!-- --------------11 -->
          <div class="ordern" v-for="(v,i) in data" :key="i">
            <div class="D-con3-t clear">
              <!-- <input type="checkbox" name id class="lf" /> -->

              <div class="D-number lf" style="font-size:14px">
                订单编号：
                <span style="font-size:14px">{{v.order_num}}</span>
              </div>
              <span class="D-s4 lf" style="font-size:14px;color:rgb(179, 179, 179)">{{v.buy_time}}</span>
              <span style="font-size:14px;margin-right:6px;cursor: default;" class="rt" @click="Mdelet(i)">x</span>
            </div>

            <div class="clear">
              <div class="lf" style="width:550px; border-right: 1px solid #ccc;">
                <!-- iiiiiiiii------------- -->
                <div class="D-con3-c" v-for="(a,b) in v.res" :key="b">
                  <!-- <span class="D-closeOrder">×</span> -->

                  <div class="picture1">
                    <!-- <input type="checkbox" name id style="position:relative;top:-16px" /> -->
                    <img src class="D-img1" />
                    <span class="describe">{{a.main_head}}</span>
                    <span class="Dprice">{{a.price}}</span>
                    <span class="D-s">{{a.number}}</span>
                    <span style="margin-left:50px; cursor: default;">申请售后</span>
                  </div>
                </div>
                <!-- iiiiiiiii------------- -->
              </div>

              <div class="lf clear rigtbox">
                <!-- 总价格 -->
                <div class="lf" style="margin-left:10px;font-size:14px;">{{sum(i)}}</div>
                <!-- 状态 ------------------------------------->
                 <!-- 111 待付款 -->
                <span v-if="v.state==1">
                    <div class="lf" >
                    <p style="color:red">待付款</p>
                    <p >订单详情</p>
                    </div>
                    <div class="lf" style="margin-left:10px;">
                     <button class="buynow" @click="Mbuynow(i)">立即购买</button>
                    </div>
               </span>  
                <!-- 222 等待发货-->
               <span  v-if="v.state==2">
                    <div class="lf" >
                        <p style="color:#0a83d7">等待发货</p>
                        <p>订单详情</p>
                    </div>

                    <div class="lf" style="margin-left:10px;">
                      <p>再次购买</p>
                    </div>
              </span>
             
               <!-- 333 交易成功-->
               <span  v-if="v.state==3">
                    <div class="lf" >
                        <p>交易成功</p>
                        <p>订单详情</p>
                        <p>查看物流</p>
                    </div>
                    <div class="lf" style="margin-left:10px;">
                         <p>再次购买</p>
                    </div>
              </span>  
               <!-- 状态 ------------------------------------->
              </div>
            </div>
          </div>
          <!-- --------------11 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { type } from "os";
export default {
  name: "orderlist",
  data() {
    return {
      msg:'',
      smalldata: {},
      data: [],
      rdata:[],
      date:3,
      dataarr:[],
      statenum:4,
    };
  },
  methods:{
   //计每一单的总价
   sum(index){
       let sum=0;
       for (let i = 0; i < this.data[index].res.length; i++) {
          sum+=this.data[index].res[i].price * this.data[index].res[i].number;        
       }
   
       return   sum.toFixed(2)
      
   },
   //删除单个订单
   Mdelet(i){
       let that=this;
       //弹框
      this.$confirm('确定删除此订单?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //----axios请求后台删除订单
          this.$axios.post('/api/C_deletorder',{
              params:{
                orderid:this.data[i].res[i].order_num
              }
          }).then((res)=>{
             if(!res.data.error){
                 console.log('成功');
                 //-----------------重新加载数据axios
                 that.data.splice(i,1)
             }else{
                 console.log('失败')
             }
          })
        })
   },
   //通过名称或者订单编号查询
   Mfind(){
       
       //-----------在msg不为空的情况下搜索
       if(this.msg.trim()){
        //如果输入的是文字
        if(!Number(this.msg)){
                let text=this.msg;
                let findorders=[];
                // let a=new RegExp(`<span id="(${id})"[^>]*?>(.*?)<\/span>`, 'g');
                //输入的文字有匹配的正则方法
                let reg=new RegExp(`${this.msg}`, 'g');
                let xiabiao=[];
                let newxiabiao=[];
                for (let i = 0; i < this.rdata.length; i++) {
                    for (let k = 0; k < this.rdata[i].res.length; k++) {
                        let resinfo=this.rdata[i].res[k];
                        if(reg.test(resinfo.main_head)){
                            //当符合正则的时，保存下标到xiabiao=[]里面
                            xiabiao[i]=i;
                        }         
                    }
                    
                }
                //循环xiabiao数组 ，去除empty，赋值newxiabiao
                for (let a = 0; a < xiabiao.length; a++) {
                    if(Number(xiabiao[a]) || xiabiao[a]==0){
                        newxiabiao.push(xiabiao[a])
                    }    
                }
                console.log(newxiabiao,xiabiao)

               //当查询到有结果时，就是newxiabiao有值的时候
               if(newxiabiao.length!=0){
                     //将this.data重新赋值
                    this.data=[];
                    for (let k = 0; k < newxiabiao.length; k++) {
                     this.data.push(this.rdata[newxiabiao[k]])
                    }
               }else{
                     this.$alert('没有此产品', '提示', {
                        confirmButtonText: '确定',
                        });
               }
               console.log(this.rdata,newxiabiao)
               
            }

            //----------如果输入的是订单号
            if(Number(this.msg)){
                 let text2=this.msg;
                let findorders2=[];
                // let a=new RegExp(`<span id="(${id})"[^>]*?>(.*?)<\/span>`, 'g');
                //输入的文字有匹配的正则方法
                let regtext2=Number(this.msg);
                let xiabiao2='';
                for (let i = 0; i < this.rdata.length; i++) {
                    if(regtext2==this.rdata[i].order_num){
                        xiabiao2=i
                    }  
                }

                if(xiabiao2){
                    this.data=[];
                    this.data.push(this.rdata[xiabiao2])
                }else{
                    this.$alert('', '提示', {
                        confirmButtonText: '确定',
                      });
                }
            }
       }else{
           this.data=this.rdata
       }
      
   },
   //通过时间查找
    Mfinddate(){
        //将搜索框里的内容清空
        this.msg='';
        this.statenum=4;
        let date=this.date;
        
        let state=this.statenum;
        //条件语句，不同的时间选择不同的查找方式
         let datearr=[]; //时间筛选后存储
         let date_data=[];
         let timedata=new Date();
         let getMonthnow=timedata.getMonth()+1;

        //3个月的订单记录
        if(date==1){
    
            for (let k = 0; k < this.rdata.length; k++) {
               let day1=parseInt(this.rdata[k].buy_time.split(' ')[0].split('-')[1]);
               if(day1<=getMonthnow && day1>getMonthnow-3){
                   datearr.push(k);                 
               }    
                        
            }               
        }
       
       //1年的订单记录
        if(date==2){
             for (let k = 0; k < this.rdata.length; k++) {
               let day1=parseInt(this.rdata[k].buy_time.split(' ')[0].split('-')[1]);
               if(day1<=getMonthnow && day1>getMonthnow-12){
                   datearr.push(k);                 
               }    
                    
            }       
        }

        //全部年的订单记录
        if(date==3){
           for (let k = 0; k < this.rdata.length; k++) {
               datearr.push(k)         
            }      
        }
         
        for (let k = 0; k < datearr.length; k++) {
            date_data.push(this.rdata[datearr[k]])
            
        } 
        this.data=date_data;
        this.dataarr=datearr;
        console.log(this.dataarr)
    },
    Mstate(){
         let newstate=[];
         let arr=this.dataarr;
        //datearr自定义数组里面有数据
           //-----------------进行状态的匹配
           if(this.dataarr.length){
                //待付款
                if(this.statenum==1){           
                        for (let i = 0; i <arr.length; i++) {
                            if(this.rdata[arr[i]].state==1){
                                newstate.push(this.rdata[arr[i]]);     
                            }
                            console.log(newstate)
                        }
                }

                //等待发货
                if(this.statenum==2){           
                    for (let i = 0; i < arr.length; i++) {
                        if(this.rdata[arr[i]].state==2){
                            newstate.push(this.rdata[arr[i]]);
                            
                        }
                    }
                }   

                //已经完成
                if(this.statenum==3){           
                        for (let i = 0; i < arr.length; i++) {
                            if(this.rdata[arr[i]].state==3){
                                newstate.push(this.rdata[arr[i]]);      
                            }

                        }
                }

                //已经完成
                if(this.statenum==4){           
                        for (let i = 0; i < arr.length; i++) {
                             newstate.push(this.rdata[arr[i]]);            
                        }
                }
                
           }else{//-----------------------------------------单独只通过状态的的选择筛选内容
                //待付款
                if(this.statenum==1){           
                        for (let i = 0; i <this.rdata.length; i++) {
                            if(this.rdata[i].state==1){
                                newstate.push(this.rdata[i]);     
                            }
                            console.log(newstate)
                        }
                }

                //等待发货
                if(this.statenum==2){           
                     for (let i = 0; i <this.rdata.length; i++) {
                            if(this.rdata[i].state==2){
                                newstate.push(this.rdata[i]);     
                            }
                            console.log(newstate)
                     }
                }   

                //已经完成
                if(this.statenum==3){           
                         for (let i = 0; i <this.rdata.length; i++) {
                            if(this.rdata[i].state==3){
                                newstate.push(this.rdata[i]);     
                            }
                            console.log(newstate)
                        }
                }

                //已经完成
                if(this.statenum==4){           
                        for (let i = 0; i < this.rdata.length; i++) {
                             newstate.push(this.rdata[i]);            
                        }
                }
                
           }
           
               
            this.data=newstate;
            console.log(newstate)

              
     
           
           

        
    },
    Mbuynow(i){
     
    }
  },
  mounted() {
    this.$axios.post("/api/Dorder").then(res => {
      if (!res.data.error) {
          //给data赋值       
        this.data = res.data.data;
        this.rdata= res.data.data;
        //判断状态
        console.log(res.data.data);
      } else {
        console.log("获取数据失败");
      }
    });
  }
  
};
</script>

<style lang="less" scope>
.orderlist {
  //-------------------------------------------yanse
  .weicolor {
    color: #0a83d7;
  }
  .lf {
    float: left;
  }
  .rt {
    float: right;
  }
.rigtbox div{
    width: 60px;
    text-align: center;
    padding: 20px; 
}
.rigtbox div p:hover{
    color: #1b8cce;
}
.buynow{
    width: 80px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 13px;
    color: #fff;
    background-color: #0a83d7;
    border: none;
    outline: none;
    border-radius: 4px;
    &:hover{
        background-color: #2f95dd;
    }
}
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
    border: 1px solid #0aa0f6;
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
  .E-scroll {
    position: absolute;
    top: 0;
    left: 0;
  }
  /*# sourceMappingURL=E-AfterSale.js.map */
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .clearfix:after {
    content: "";
    clear: both;
    display: block;
  }
  .head {
    height: 55px;
    border: 1px solid black;
  }
  .content {
    width: 1200px;
    height: 500px;
    position: absolute;
    top: 150px;
    left: 50%;
    margin-left: -600px;
  }
  .D-space {
    /*background: white;*/
  }
  .header {
    width: 100%;
    height: 60px;
    background-color: #f9f9f9;
  }
  .s1 {
    font-size: 17px;
    line-height: 60px;
    margin-left: 28px;
    margin-right: 24px;
  }
  .D-t1 {
    display: inline-block;
    width: 141px;
    height: 27px;
    margin-left: 33%;
    border: 1px solid gray;
    border-radius: 3px;
    background: white;
    line-height: 27px;
    padding-left: 9px;
  }
  .D-t1 input {
    outline: none;
    display: inline-block;
    width: 139px;
    height: 27px;
    border: none;
  }
  .D-btn {
    width: 70px;
    height: 28px;
    border: none;
    color: white;
    background: #0a83d7;
    border-radius: 3px;
    cursor: pointer;
  }
  #date {
  }
  .ul1 {
    width: 120px;
    border: 1px solid gray;
    position: absolute;
    left: 634px;
    top: 44px;
    border-radius: 3px;
    background: white;
    // display: none;
    z-index: 5;
  }
  .ul1 li {
    width: 92%;
    height: 25px;
    line-height: 25px;
    text-align: left;
    border-bottom: 1px solid gray;
    padding-left: 8px;
  }
  .ul2 {
    width: 120px;
    border: 1px solid gray;
    position: absolute;
    left: 810px;
    top: 44px;
    border-radius: 3px;
    background: white;
    // display: none;
    z-index: 5;
  }
  .ul2 li {
    width: 92%;
    height: 25px;
    line-height: 25px;
    text-align: left;
    border-bottom: 1px solid gray;
    padding-left: 8px;
  }
  .s2 {
    line-height: 25px;
    font-size: 14px;
    padding-left: 7px;
    color: gray;
  }
  .s3 {
    font-size: 30px;
    margin-left: 10px;
    line-height: 26px;
    position: absolute;
    right: 0;
  }
  .D-order {
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
  .D-con1 {
    border-bottom: 1px solid rgb(202, 202, 202);
    width: 920px;
    margin-left: 22px;
    //background: #fff;
    font-size: 16px;
    /*margin-top: 13px;*/
    line-height: 36px;
    margin-bottom: 7px;
    border-radius: 4px;
  }
  .D-con1 span,
  .D-con1 div {
    display: inline-block;
    line-height: 44px;
  }
  .D-s1 {
    margin-left: 6px;

  }
  .D-s2 {
    margin-right: 40px;
  }
  .D-static {
    display: inline-block;
    width: 99px;
    /*height: 35px;*/
    position: absolute;
    top: 64px;
    overflow: hidden;
    border-radius: 3px;
  }
  .s4 {
    padding-left: 7px;
  }
  .s5 {
    font-size: 30px;
    position: absolute;
    right: 0;
    top: 2px;
  }
  .ul3 {
    width: 99px;
    /*border: 1px solid gray;*/
    position: absolute;
    left: 740px;
    top: 114px;
    border-radius: 3px;
    background: white;
    display: none;
  }
  .ul3 li {
    width: 92%;
    height: 25px;
    line-height: 25px;
    text-align: left;
    border-bottom: 1px solid #ccc;
    padding-left: 10px;
  }
  .D-s3 {
    margin-left: 13%;
  }
  .D-con2 {
    width: 100%;
    height: 30px;
    line-height: 45px;
    margin-bottom: 13px;
  }
  .D-t3 {
    margin-left: 20px;
  }
  .D-t2 {
    margin-left: 44px;
  }
  .D-all {
    font-size: 14px;
    margin-left: 5px;
  }
  /*展示部分*/
  .D-con3-t {
    width: 100%;
    height: 32px;
    border-bottom: 1px solid gainsboro;
    padding-top: 7px;
    background: white;
    border-radius: 8px 8px 0 0;
  }
  .D-con3 span:not(.D-closeOrder),
  .D-con3 div {
    font-size: 12px;
  }
  .D-s4 {
    margin-left: 2%;
  }
  .D-number {
    margin-left: 1%;
  }
  .D-con3-b {
    width: 100%;
    height: 147px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
    background: white;
    padding-top: 20px;
    border-radius: 0 0 8px 8px;
  }

  .D-con3 {
    border-radius: 4px;
    .ordern {
      width: 905px;
      margin-left: 10px;
      padding: 16px 7px 0 12px;
      background-color: #fff;
      margin-bottom: 10px;
      border-radius: 6px;
      margin-left: 20px;
    }
    input {
      width: 14px;
      height: 14px;
    }
  }
  .D-con3-c {
    border-right: 1px solid rgb(228, 227, 227);
    padding: 16px 10px 16px 0;
    width: 100%;
    background: white;

    /*padding-top: 5px;*/
  }
  .picture1 {
    // width: 480px;
    display: inline-block;
    vertical-align: middle;
  }
  .D-img1 {
    width: 52px;
    height: 52px;
    vertical-align: middle;
    padding-left: 8px;
  }
  .describe {
      display: inline-block;
    width: 200px;
    margin-left: 12px;
    font-size: 14px;
  }
  .Dprice {
    width: 67px;
    display: inline-block;
    margin-left: 16px;
  }
  .D-operate {
    height: 100%;
    margin-top: 2%;
    width: 100px;
    display: inline-block;
    width: 120px;
    text-align: center;
    cursor: default;
    span:hover {
      color: #0a83d7;
    }
    span.no:hover {
      color: #da2b25f6;
    }
    p:hover {
      color: #0a83d7;
    }
  }
  .tuihuo {
    cursor: pointer;
  }
  .complain {
    cursor: pointer;
  }
  .D-s {
    display: inline-block;
    width: 16px;
    height: 25px;
    margin-left: 5px;
    margin-right: 3px;
  }
  .D-s5 {
    width: 80px;
    height: 30px;
    background: #0a83d7;
    color: white;
    border: none;
    margin-left: 73px;

    border-radius: 5px;
  }
  .D-closeOrder {
    /*display: inline-block;*/
    /*width: 80px;*/
    margin-left: 888px;
    font-size: 15px;
    cursor: pointer;
  }
  .D-s6 {
    width: 75px;
    margin-left: 40px;
  }

  /*//分页*/
  .D-paging {
    margin-left: 45%;
    margin-top: 30px;
    margin-bottom: 50px;
  }
  .D-paging a {
    display: inline-block;
    width: 30px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    background: #0a83d7;
    color: white;
  }

  /*//确认收货弹框部分*/
  .D-delMask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    /*display: none;*/
  }
  .D-mask {
    width: 430px;
    height: 230px;
    border: 1px solid darkgrey;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -115px;
    margin-left: -215px;
    background: white;
  }
  .D-top {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid gainsboro;
    line-height: 40px;
    background: #f8f8f8;
  }
  .D-prompt {
    margin-left: 20px;
    font-size: 14px;
  }
  .D-no {
    margin-left: 76%;
    text-decoration: none;
    color: black;
  }
  .D-closepay {
    margin-left: 69%;
    text-decoration: none;
    color: black;
  }
  .D-buttom {
    padding-top: 8%;
  }
  .D-p1 {
    font-size: 16px;
    margin-left: 10%;
    padding-bottom: 12%;
    color: red;
  }
  .D-p2 {
    font-size: 20px;
    margin-left: 19%;
    padding-bottom: 12%;
    color: red;
  }
  .D-sure,
  .D-yes,
  .D-sure-1,
  .D-yes-1 {
    display: inline-block;
    width: 20%;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    margin-top: -10px;
  }
  .D-sure,
  .D-sure-1 {
    height: 29px;
    line-height: 29px;
    border: 1px solid darkgray;
    margin-left: 28%;
    margin-right: 2%;
  }
  .D-yes,
  .D-yes-1 {
    height: 30px;
    line-height: 30px;
    background: #31b0d5;
    color: white;
  }
  /*//确认收货弹框部分*/

  /*追加评论*/
  .d-addmask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    /*display: none;*/
  }
  .D-additional {
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
  .D-addleft {
    width: 250px;
    height: 200px;
    float: left;
    margin-top: 50px;
    margin-left: 50px;
  }
  .D-addright {
    margin-top: 50px;
    margin-left: 50px;
    float: left;
  }
  .D-pre {
    margin-bottom: 20px;
  }
  .D-preval {
    display: inline-block;
    width: 390px;
    /*height: 34px;*/
    font-size: 13px;
    margin-right: 15px;
    overflow: hidden;
  }
  textarea {
    width: 587px;
    font-size: 15px;
  }
  .D-subbtn {
    width: 80px;
    height: 30px;
    border: none;
    color: white;
    background: #0a83d7;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 35px;
    margin-left: 500px;
  }
  .D-addclose {
    font-size: 20px;
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
  }

  /*关闭订单遮罩层*/
  .D-closeMask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    /*display: none;*/
  }

  /*空白订单展示*/
  .D-orderabout {
    width: 100%;
    background: white;
    border: 1px solid gainsboro;
    border-radius: 10px;
    min-height: 472px;
  }
  .D-orderabout p {
    font-size: 25px;
    text-align: center;
    margin-top: 20%;
  }
  .D-orderabout button {
    width: 200px;
    height: 60px;
    font-size: 20px;
    border: none;
    border-radius: 8px;
    background: #0a83d7;
    color: white;
    margin-top: 50px;
    margin-left: 356px;
  }
  .Dmodel {
    display: none;
  }
  .areadyclose {
    background: #ccc;
    color: black;
    font-size: 13px;
  }
}
</style>