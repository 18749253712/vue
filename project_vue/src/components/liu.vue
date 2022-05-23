<template>
   <div>
      <header>
	   	   <img src="../../static/image/更多 (1).png" @click="drawer = true"/>
	   	   <span>留言板</span>
	   	   <img src="../../static/image/我的 (6).png" class="img" v-on:click="mi"/>
	   </header>
	   <div>
	   	   	 <el-drawer :visible.sync="drawer" :direction="direction" style="width: 40rem;">
               <img src="../../static/image/首页 (2).png" style="margin-left: 2.5rem;"/><router-link to="/search" style="margin-left: 0.5rem; margin-top: 3rem;">菜单搜索</router-link><br />
               <img src="../../static/image/特色美食.png" style="margin-left: 2.5rem;"/><router-link to="/tes" style="margin-left: 0.5rem;line-height: 3rem;">本店特色</router-link><br />
               <img src="../../static/image/新闻动态.png" style="margin-left: 2.5rem;"/><router-link to="/five" style="margin-left: 0.5rem;">新闻动态</router-link><br />
               <img src="../../static/image/关于我们.png" style="margin-left: 2.5rem;"/><router-link to="/mine" style="margin-left: 0.5rem;line-height: 3rem;">关于我们</router-link><br />
               <img src="../../static/image/留言板.png" style="margin-left: 2.5rem;"/><router-link to="/liu" style="margin-left: 0.5rem;">留言板</router-link>
	   	   	 </el-drawer>
	   </div>
	    <div class="my">
	   	    <p v-on:click="show">联系我们</p>
	   </div>
	   <ul class="about">
	   	   <li>联系QQ：258506508</li>
	   	   <li>手机号码：130000000</li> 
	   	   <li>联系邮箱：xxx@.co.m</li> 
	   	   <li>联系电话：020-000000   000-000-0000</li> 
	   	   <li>联系地址：XXX省XXX市XXX县XXX路XXX号</li> 
	   </ul>
	   <div class="form">
	   	  <p>留言板</p>
	   </div>
	   <div class="form1">
	   	   <input type="text" name="" id="" placeholder="*姓名" />
	   	   <input type="text" name="" id="" placeholder="邮箱" />
	   	   <input type="text" name="" id="" placeholder="电话" />
	   	   <input type="text" name="" id="" placeholder="*内容" />
	   </div>
	   <div class="btn">
	   	   <button>提交</button>
	   </div>
   </div>
</template>

<script>
	export default{
		name:"liu",
		data(){
			return{
				drawer: false,
                direction: 'ltr'
			}
		},
		methods:{
			show(){
//				console.log(1)
               this.$axios({
               	url:"../../static/home.json",
               	method:"get",
               }).then(response=>{
               	  console.log("请求成功");
               	  console.log(response.data);
               }).catch(error=>{
               	 console.log("请求失败");
				 console.log(error);
               })
			},
			mi(){
	      	this.$router.push({
	      		path:"/shouye"
	      	})
	      }
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.box{
		width: 100%;
		height: 100%;
		position: relative;
		top: 0;
		left: 0;
	}
   header{
   	width: 100%;
   	height: 4rem;
   	background: red;
   	position: fixed;
   	top: 0;
   	left: 0;
   	z-index: 999;
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
   	width: 5rem;
   	height: 2rem;
   	line-height: 2rem;
   	text-align: center;
   	color: white;
   	font-size: 1.4rem;
   	margin-top: 0rem;
   	margin-left: 5rem;
   }
   .my{
   	width: 100%;
   	height: 4rem;
   	border-bottom: 1px solid grey;
   	position: absolute;
   	top: 4rem;
   	line-height: 4rem;
   }
   .my p{
   	padding-left: 2rem;
   	color: red;
   }
   .about{
   	width: 95%;
   	height: 15rem;
   	margin: 0 auto;
   	position: absolute;
   	top: 8rem;
   	left: 2.5%;
   }
   .about li{
   	  line-height: 3rem;
   }
   .form{
   	 width: 100%;
   	 height: 3rem;
   	 line-height: 3rem;
   	 position: absolute;
   	 top: 23rem;
   	 background-color: papayawhip;
   }
   .form p{
   	width: 90%;
   	padding-left: 2rem;
   	color: red;
   }
   .form1{
   	width: 90%;
   	height: 24rem;
   	position: absolute;
   	left: 5%;
   	top: 26rem;
   }
   .form1 input{
   	width: 90%;
   	height: 3rem;
   	line-height: 3rem;
   	font-size: 1.2rem;
   	margin-top: 0.8rem;
    margin-left: 1rem;
   }
   .form1 input:last-child{
   	width: 90%;
	height: 4rem;
	line-height: 4rem;
	font-size: 1.2rem;
	margin-top: 2rem;
   }
</style>