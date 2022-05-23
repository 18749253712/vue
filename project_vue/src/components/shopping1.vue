<template>
     <div class="box">
     	<div class="up">
     		<img :src="info[index].img"/>
     		<p style="font-size: 1.4rem; color: orange;">￥{{info[index].ppp}}</p>
     		<p style="font-weight: bold;">{{info[index].h1}}</p>
     	</div>
     	<div class="section">
     		  <el-tabs v-model="activeName" @tab-click="handleClick" class="tab">
			    <el-tab-pane label="产品详情" name="first" class="a">
			    	<div class="detail">{{info[index].text}}</div>
			    	<div class="detail1">
			    		<p>推荐产品</p>
						<ul class="oss">
							<li v-for="(item,index) in info">
								<img :src="item.img"/>
								<p>￥{{item.ppp}}</p>
							</li>
						</ul>
			    	</div>
			    </el-tab-pane>
			    <el-tab-pane label="产品参数" name="second" class="a">
			    	<div class="oss1">
			    		<p><span>规格</span><span class="ss">一份</span></p>
			    		<p><span>价格</span><span class="ss">￥{{info[index].ppp}}</span></p>
			    	</div>
			    </el-tab-pane>
			  </el-tabs>
     	</div>
     	<ul class="bottom">
     		<li>
     			<div @click="shou">
     				<img src="../../static/image/首页 (1)(1).png"/>
     			    <p>返回</p>
     			</div>
     			<div>
     				<img src="../../static/image/分享.png" @click.stop="ShowHidden = !ShowHidden" />
     			    <p>分享</p>
     			</div>
     		</li>
     		<li @click="join">加入购物车</li>
     		<li @click="sub">立即预约</li>
     	</ul>
		<div class="zai" v-if="ShowHidden" @click.stop="">
			<p>分享</p>
			<ul>
				<li v-for="zai in site">
					<img :src="zai.img"/>
					<span>{{zai.title}}</span>
				</li>
			</ul>
		</div>
     </div>
</template>

<script>
	export default{
		name:"shopping1",
		data(){
			return{
				info:"",
				index:0,
				arr:[],
				newarr:[],
				list:[],
				activeName: 'first',
				code:'1314',
				ShowHidden: false,
				site:[
					{"img":"../../static/image/微信.png","title":"微信"},
					{"img":"../../static/image/二维码海报.png","title":"海报"},
					{"img":"../../static/image/新浪微博.png","title":"新浪微博"},
					{"img":"../../static/image/QQ空间.png","title":"QQ空间"},
					{"img":"../../static/image/QQ分享.png","title":"QQ分享"},
					{"img":"../../static/image/豆瓣网.png","title":"豆瓣网"},
					{"img":"../../static/image/百度贴吧.png","title":"百度贴吧"},
					{"img":"../../static/image/复制链接.png","title":"复制链接"}
				]

			}
		},
		methods:{
			handleClick(tab, event) {
	        console.log(tab, event);
	        
	   },	     
	     shou(){
	     	this.$router.back()
	     	
	     },	 
	     join(){
	     	console.log(this.info[this.index])
	     	let newarr=this.info[this.index]
	     	this.newarr=newarr
	     	this.list.push(this.newarr)
	     	localStorage.setItem("data03",JSON.stringify(this.list))
			this.$Toast({message:"加入成功"})
//			localStorage.setItem('data03',JSON.stringify(this.list))
	     },
	       HiddenClick () {
			  this.ShowHidden = false
			 },
			 // 点击列表内，选中内容，并隐藏
			 ConBtn (val) {
			  alert('内容' + val)
			  this.ShowHidden = false
			 },
	     sub(){
      	  var code = '';
	      //设置长度，这里看需求，我这里设置了4
	      var codeLength = 4;
	     //设置随机字符
	      var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
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
	      	  this.$alert('<div class="inp"><p>您的姓名</p><input type="text" placeholder="请输入您的姓名" /><p>您的电话</p><input type="text" placeholder="请输入您的电话" /><p>备注</p><input type="text" placeholder="" id="inp"/><p @click="yan">验证码</p><input type="text" placeholder="请输入验证码" id="ipn1"/><span class="code">1314</span><button>提交</button></div>', '提交表单', {
	          dangerouslyUseHTMLString: true 
	        });
	     },
		},
		mounted(){
			let temp1=JSON.parse(localStorage.getItem("data04"))
			let temp=JSON.parse(localStorage.getItem('data05'))
			this.info=temp1
			this.index=temp
			console.log(temp1)
			console.log(temp)
			document.addEventListener('click', this.HiddenClick)
			
		}
	}
</script>

<style scoped>
	.box{
		width: 100%;
		height: 100%;
		position: relative;
		background: whitesmoke;
	}
	.box .up{
		width: 100%;
		height: 24rem;
		background: white;
	}
	.box .up img{
		width: 100%;
		height: 18rem;
	}
	.box .up p{
		margin-left: 2rem;
		font-size: 1.2rem;
		margin-top: 0.5rem;
	}
	.section{
		width: 100%;
		height: 15rem;
		margin-top: 0.5rem;
		background: white;
	}
	/*.bottom{
		width: 100%;
		height: 5rem;
		background: pink;
		position: fixed;
		bottom: 0;
		z-index: 999;
	}*/
	/deep/.el-tabs--top .el-tabs__item.is-top:nth-child(2) {
        padding-left: 106px;
      }
      .a .detail{
      	width: 95%;
      	height: 9rem;
      	background-color: white;
      	margin: 0 auto;
      }
      .a .detail1{
      	width: 95%;
      	height: 18rem;
      	background-color: white;
      	margin-top: 0.5rem;
      	margin: 0 auto;
      }
      .detail1 p{
      	width: 100%;
      	height: 3rem;
      	line-height: 3rem;
      	border-bottom: 1px solid gainsboro;
      }
	  .oss{
	 /* 	width: 100%;*/
	  	overflow-x: scroll;
	  	overflow-y: hidden;
	  	display: -webkit-box;
	  	white-space: nowrap;
	  }
	  .oss li img{
	  	width: 6rem;
	  	height: 6rem;
	  	margin-right: 1rem;
	  }
	  .oss li  p{
	  	color: orange;
	  }
	  .oss1{
	  	width: 100%;
	  }
	  .oss1 p{
	  	width: 100%;
	  	height: 3rem;
	  	line-height: 3rem;
	  	border-bottom: 1px solid gray;
	  }
	  .oss1 span{
	  	padding-left: 2rem;
	  }
	  .oss1 p .ss{
	  	margin-left: 6rem;
	  }
	   .bottom{
	   	width: 100%;
	   	height: 5rem;
	   	position: fixed;
	   	bottom: 0;
	   	z-index: 998;
	   	background: white;
	   	display: flex;
	   	justify-content: space-around;
	   }
	   .bottom li{
	   	width: 33%;
	   	height: 3rem;
	   	line-height: 3rem;
	   	text-align: center;
	   	margin-top: 0.5rem;
	   }
	    .bottom li div{
	    	width: 50%;
	    	height: 3rem;
	    	float: left;
	    }
	   .bottom li div img{
	    	width: 1.5rem;
	   	    height: 1.5rem;
	   }
	    .bottom li div p{
	    	margin-top: -1.5rem;
	    }
	    .bottom li:nth-child(1){
	      margin-top: 0;
	   }
	   .bottom li:nth-child(2){
	   	background: orange;
	   	color: white;
	   }
	   .bottom li:nth-child(3){
	   	background: orangered;
	   	color: white;
	   }
	   .zai{
	width: 100%;
	height: 15rem;
	background-color: white;
	position: fixed;
	bottom: 0;
	z-index: 999;
}
.zai p{
	width: 100%;
	height: 3rem;
	text-align: center;
	font-size: 1.2rem;
	opacity: 0.6;
	margin-top: 1rem;
	z-index: 1;
}
.zai ul li{
	width: 4rem;
	height: 5rem;
	/*border: 1px solid black;*/
	text-align: center;
	float: left;
	margin-left: 1.3rem;
	z-index: 1;
}
.zai ul li img{
	width: 3rem;
	height: 3rem;
}

</style>