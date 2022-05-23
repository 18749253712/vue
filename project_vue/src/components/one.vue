<template>
  <div class="box">
      <header>
		   	  <img src="../../static/image/更多 (1).png" @click="drawer = true"/>
		   	  <span>甜品店菜单</span>
		   	  <img src="../../static/image/我的 (6).png" class="img" v-on:click="mi"/>
		   </header>
		  <div>
		    <el-drawer :visible.sync="drawer" :direction="direction" style="width: 40rem;">
               <img src="../../static/image/首页 (2).png" style="margin-left: 2.5rem;"/><router-link to="/" style="margin-left: 0.5rem; margin-top: 3rem;">首页</router-link><br />
               <img src="../../static/image/特色美食.png" style="margin-left: 2.5rem;"/><router-link to="/tes" style="margin-left: 0.5rem;line-height: 3rem;">本店特色</router-link><br />
               <img src="../../static/image/新闻动态.png" style="margin-left: 2.5rem;"/><router-link to="/five" style="margin-left: 0.5rem;">新闻动态</router-link><br />
               <img src="../../static/image/关于我们.png" style="margin-left: 2.5rem;"/><router-link to="/mine" style="margin-left: 0.5rem;line-height: 3rem;">关于我们</router-link><br />
               <img src="../../static/image/留言板.png" style="margin-left: 2.5rem;"/><router-link to="/liu" style="margin-left: 0.5rem;">留言板</router-link>
	   	   	 </el-drawer>
		   	<el-tabs v-model="activeName" type="card" @tab-click="handleClick" style="position: relative;top: 4rem;">
			    <el-tab-pane label="全部美食" name="first">
			    	  <ul class="all">
			    	  	<li v-for="(item,index) in info" >
			    	  		<img :src="item.img" @click="shop(item,index)"/>
			    	  	  <p style="font-weight: bolder;">{{item.h1}}</p>
			    	  	  <p>
			    	  	         ￥<span>{{item.ppp}}</span>
			    	  	  	 <span  @click="sub">{{item.pp}}</span>
			    	  	  </p>
			    	  	</li>
			    	  </ul>
			    </el-tab-pane>
			    <el-tab-pane label="蒸煮食品" name="second">
			    	 <ul class="all">
			    	  	<li v-for="(item,index) in info1">
			    	  		<img :src="item.img" @click="shop1(item,index)"/>
			    	  	  <p style="font-weight: bolder;">{{item.h1}}</p>
			    	  	  <p>
			    	  	        ￥<span>{{item.ppp}}</span>
			    	  	  	<span @click="sub">{{item.pp}}</span>
			    	  	  </p>
			    	  	</li>
			    	  </ul>
			    </el-tab-pane>
			    <el-tab-pane label="煎炸美食" name="third">
			    	  <ul class="all">
			    	  	<li v-for="(item,index) in info2">
			    	  		<img :src="item.img" @click="shop2(item,index)"/>
			    	  	  <p style="font-weight: bolder;">{{item.h1}}</p>
			    	  	  <p>
			    	  	         ￥<span>{{item.ppp}}</span>
			    	  	  	     <span @click="sub">{{item.pp}}</span>
			    	  	  </p>
			    	  	</li>
			    	  </ul>
			    </el-tab-pane>
			    <el-tab-pane label="糕点甜食" name="fourth">
			    	  <ul class="all">
			    	  	<li v-for="(item,index) in info3">
			    	  		<img :src="item.img" @click="shop3(item,index)"/>
			    	  	  <p style="font-weight: bolder;">{{item.h1}}</p>
			    	  	  <p>
			    	  	         ￥<span>{{item.ppp}}</span>
			    	  	  	<span @click="sub">{{item.pp}}</span>
			    	  	  </p>
			    	  	</li>
			    	  </ul>
			    </el-tab-pane>
			  </el-tabs>
		  </div>
		  
  </div>
</template>

<script>
	export default{
		name:"one",
		data(){
			return{
				drawer: false,
        direction: 'ltr',
        activeName: 'first',
        indexs:'0',
        info:null,
        info1:null,
        info2:null,
        info3:null,
        code:""
			}
		},
		onLoad: function(options) {
    //刚进入页面随机先获取一个
        this.createCode()
    },
		methods:{
			 handleClick(tab, event) {
      },
      shop(item,index){
        console.log(index)
        this.indexs=index;
        localStorage.setItem('data1',JSON.stringify(this.indexs))
        this.$router.push({
        	path:"/shopping"
        })
      },
      shop1(item,index){
      	this.indexs=index
      	localStorage.setItem('data1',JSON.stringify(this.indexs))
      	localStorage.setItem('data2',JSON.stringify(this.info1))
      	this.$router.push({
      		path:"/shopping"
      	})
      },
      shop2(item,index){
      	this.indexs=index
      	localStorage.setItem('data1',JSON.stringify(this.indexs))
      	localStorage.setItem('data2',JSON.stringify(this.info2))
      	this.$router.push({
      		path:"/shopping"
      	})
      },
      shop3(item,index){
      	this.indexs=index
      	localStorage.setItem('data1',JSON.stringify(this.indexs))
      	localStorage.setItem('data2',JSON.stringify(this.info3))
      	this.$router.push({
      		path:"/shopping"
      	})
      },
      mi(){
      	this.$router.push({
      		path:"/shouye"
      	})
      },
      sub(){
      	
      	  this.$alert('<div class="inp"><p>您的姓名</p><input type="text" placeholder="请输入您的姓名" id="ip"/><p>您的电话</p><input type="text" placeholder="请输入您的电话" id="in"/><p>备注</p><input type="text" placeholder="" id="inp"/><p>验证码</p><input type="text" placeholder="请输入验证码" id="ipn1"/><span id="span"></span><button id="tijiao">提交</button></div>', '提交表单', {
          dangerouslyUseHTMLString: true
        });
        this.$nextTick(function () {
        	 var code = '';
	      //设置长度，这里看需求，我这里设置了4
	      var codeLength = 4;
	     //设置随机字符
	      var random = new Array(0, "S", 2, 3, 4, 5, "X", 7, 8, 9);
	      //循环codeLength 我设置的4就是循环4次
	      for (var i = 0; i < codeLength; i++) {
	          //设置随机数范围,这设置为0 ~ 36
	          var index = Math.floor(Math.random() * 9);
	          //字符串拼接 将每次随机的字符 进行拼接
	          code += random[index];
	      }
	       console.log(code)
	      //将拼接好的字符串赋值给展示的code
	      this.code = code;
         var myChart = document.getElementById("span");
         myChart.innerHTML=code
         $("#tijiao").click(function(){
         	console.log($("#ipn1").val())
         	console.log(myChart.innerHTML)
//       	   if ($("#ip").val().length==0) {
//       	   	  console.log("请输入姓名")
//       	   } else{
//       	   	  console.log(12)
//       	   }
         	   if ($("#in").val().length==0||$("#in").val().length<8||$("#in").val().length>11||$("#ip").val().length==0||$("#ipn1").val()!=myChart.innerHTML) {
         	   	  alert("提交失败")
         	   } else{
         	   	 alert("提交成功")
         	   }
//		   	     if($("#ipn1").val()==myChart.innerHTML){
//		   	     	  alert("提交成功")
//		   	     }else{
//		   	     	 alert("验证码错误")
//		   	     }
		     })
       })
         
      }
     
    },
   
		mounted(){
    	this.$axios({
    		url:"../../static/home.json",
    		method:'get'
    	}).then(response=>(
    		this.info=response.data.title,
    	  this.info1=response.data.title1,
    	  this.info2=response.data.title2,
    	  this.info3=response.data.title3,
//  	  console.log(this.info),
    	  localStorage.setItem('data2',JSON.stringify(this.info))
    	   
    	))
    }
	}
</script>

<style scoped>
	header{
   	width: 100%;
   	height: 4rem;
   	background: red;
   	position: fixed;
   	top: 0;
   	z-index: 99;
   }
   header img{
   	width: 3rem;
   	height: 3rem;
   	margin-top: 0.5rem;
   	padding-left: 1rem;
   	vertical-align: middle;
   }
   header .img{
   	margin-left: 2rem;
   }
   header span{
   	display: inline-block;
   	width: 7rem;
   	height: 2rem;
   	line-height: 2rem;
   	text-align: center;
   	color: white;
   	font-size: 1.4rem;
   	margin-top: 0rem;
   	margin-left: 5rem;
   }
   .all{
   	width: 90%;
   	height: 115rem;
   	margin: 0 auto;
   	position: relative;
   	top: 0rem;
   }
   .all li{
   	width: 100%;
   	height:18rem;
   }
   .all li img{
   	 width: 100%;
   	 height: 14rem;
   	 border-radius: 1rem;
   }
   .all li p span:first-child{
   	 color: orange;
   	 font-size: 1.2rem;
   	 font-weight: bold;
   }
   .all li p span:last-child{
   	display: inline-block;
   	width: 8rem;
   	height: 2rem;
   	line-height: 2rem;
   	text-align: center;
   	 background-color: orange;
   	 font-size: 1rem;
   	 /*font-weight: bold;*/
   	color: white;
   	border-radius: 1rem;
   	margin-left: 7rem;
   	z-index: 9999;
   }
   .inp{
   	 color: red;
   }
</style>