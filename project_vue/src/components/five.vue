<template>
  <div class="box">
  	   <header>
	   	   <img src="../../static/image/更多 (1).png" @click="drawer = true"/>
	   	   <span>甜品店</span>
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
	   <div class="ul">
	   	   <ul>
	   	      <li class="a">新闻动态</li>
	   	      <li>优惠套餐，送妈妈一个甜到心的食物</li>
	   	      <li>我们有你们没有尝过的新口味</li>
	   	      <li>应季甜品新鲜出炉啦</li>
	   	      <li>新店装修开业，前三天8折优惠</li>
	   	      <li class="last"><span><</span><span>1/1</span><span>></span></li>
	   	   </ul>
	   </div>
  </div>
</template>

<script>
	export default{
		name:"five",
		data(){
			return{
				drawer: false,
        direction: 'ltr'
		 	}
		},
		methods:{
			 mi(){
      	this.$router.push({
      		path:"/shouye"
      	})
      }
		},
		mounted(){
			
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
   .ul{
   	width: 100%;
   	height: 15rem;
   	position: absolute;
   	top: 4rem;
   	 /*border-bottom: 1px solid black;*/
   }
   .ul>ul{
   	width: 100%;
   	height: 18rem;
   }
   .ul>ul>li{
   	 width: 90%;
   	 height: 3rem;
   	 /*padding-left: 2rem;*/
   	 line-height: 3rem;
   	 border-bottom: 1px solid gainsboro;
   	 margin-left: 2rem;
   }
   .ul>ul>.a{
   	color: red;
   }
   .ul>ul>.last{
   	 text-align: center;
   }
   .ul>ul>.last>span{
   	 margin-right: 2rem;
   }
</style>