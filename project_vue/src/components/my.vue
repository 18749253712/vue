<template>
     <div class="box">
        <div class="head">
            <p><img src="../../static/image/my.jpg"/></p>
            <p>陌上初安</p>
        </div>
        <div class="section">
        	<p class="p"><span>所有订单</span><span>></span></p>
        	<ul>
        		<li @click="wait">
        			<p><img src="../../static/image/待支付.png"/></p>
        			<p>待支付</p>
        		</li>
				<li>
        			<p><img src="../../static/image/进行中.png"/></p>
        			<p>进行中</p>
        	    </li>
        		<li @click="finsh">
        			<el-badge :value="1" class="item">
					  <p><img src="../../static/image/已完成-已办-03.png"/></p>
					</el-badge>
					 <p>已完成</p>
        		</li>
        		<li>
        			<p><img src="../../static/image/已取消.png"/></p>
        			<p>已取消</p>
        		</li>
        		<li>
        			<p><img src="../../static/image/售后中心icon.png"/></p>
        			<p>售后中</p>
        		</li>
        	</ul>
        </div>
        <div class="third">
        	<p><span>最新消息</span><span>></span></p>
        	<p><span>我的订阅</span><span>></span></p>
        	<p><span>我的表单</span><span>></span></p>
        </div>
        <div class="fourth">
        	<p @click="accept"><img src="../../static/image/位置 (1).png"/><span>收货地址</span><span></span><span>></span></p>
        	<p><img src="../../static/image/电话 (1).png"/><span>13800000000</span><span>></span></p>
        	<p><img src="../../static/image/预约 (2).png"/><span>周一至周五 09:00-18:00</span></p>
        	<p><img src="../../static/image/首页 (1)(1).png"/><span>这是餐饮行业的预约类模板</span></p>
        </div>
     </div>
</template>

<script>
	export default{
		name:"my",
		data(){
			return{
				
			}
		},
		methods:{
			finsh(){
				this.$router.push({
					path:"/dingdan1"
				})
			},
			accept(){
				this.$router.push({
					path:"/shop"
				})
			},
			wait(){
				this.$router.push({
					path:"/car"
				})
			}
		},
		mounted(){
			
		}
	}
</script>

<style scoped="scoped">
  .box{
  	width: 100%;
  	height: 100%;
  	background: whitesmoke;
  }
  .box .head{
  	width: 100%;
  	height: 10rem;
  	background-color: black;
  	color: white;
  	text-align: center;
  }
  .box .head p:first-child{
  	width: 6rem;
  	height: 6rem;
  	margin: 0 auto;
  	background: gainsboro;
  	border-radius: 3rem;
  	text-align: center;
  	line-height: 6rem;
  	margin-bottom: 0.5rem;
  }
  .box .head p img{
  	width: 6rem;
  	height: 6rem;
    /*margin-top: 1rem;*/
    border-radius: 50%;
  }
  .section{
  	width: 90%;
  	height: 10rem;
  	margin: 0 auto;
  	background-color: white;
  	margin-top: -1.5rem;
  }
  .section .p{
  	width: 95%;
  	height: 3rem;
  	line-height: 3rem;
  	margin: 0 auto;
  	border-bottom: 1px solid gainsboro;
  	display: flex;
  	justify-content: space-between;
  	font-weight: bold;
  }
  .section ul{
  	width: 100%;
  	height: 7rem;
  	display: flex;
  	justify-content: space-around;
  }
  .section ul li{
  	width: 20%;
  	height: 6rem;
  	text-align: center;
  	margin-top: 1rem;
  }
  .section ul li p{
  	width: 100%;
  	height: 50%;
  }
  .section ul li p img{
  	width: 2.5rem;
  	height: 2.5rem;
  }
  .third{
  	width: 90%;
  	height: 10rem;
  	margin: 0 auto;
  	background-color: white;
  	margin-top: 1rem;
  }
  .third p{
  	width: 95%;
  	height: 3rem;
  	line-height: 3rem;
  	margin: 0 auto;
  	border-bottom: 1px solid gainsboro;
  	display: flex;
  	justify-content: space-between;
  	font-weight: bold;
  }
  .fourth{
  	width: 90%;
  	height: 18rem;
  	margin: 0 auto;
  	background-color: white;
  	margin-top: 1rem;
  	
  }
  .fourth p{
  	width: 95%;
  	height: 3rem;
  	line-height: 3rem;
  	margin: 0 auto;
  	border-bottom: 1px solid gainsboro;
  	display: flex;
  	justify-content: flex-start;
  	font-weight: bold;
  }
  .fourth p img{
  	width: 2rem;
  	height: 2rem;
  	vertical-align: middle;
  	margin-top: 0.5rem;
  	margin-left: -0.5rem;
  }
  .fourth p span{
  	margin-left: 0.1rem;
    margin-right: 0.1rem;
  }
</style>