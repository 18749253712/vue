<template>
     <div>
        <header>
	   	   <img src="../../static/image/更多 (1).png" @click="drawer = true"/>
	   	    <span>关于我们</span>
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
	   </div>
	   <div class="my">
	   	    <p>关于我们</p>
	   </div>
	   <div class="imglist">
	   	   <ul>
	   	   	  <li v-for="item in sites"><img :src="item.img"/></li>
	   	   </ul>
	   </div>
	   <div class="text">
          <p>
          	CATERING  DESIGN 甜品店是位于Ekamai新开的一家具有法国风格的甜品店，这里精美的甜品总是因其具有的独特的创造性而让来访的顾客感到意外和惊喜。同样的，
          	CATERING  DESIGN 在其店面设计上也已甜点和糖作为灵感来源为顾客打造了一个完美的甜点空间
          	。整个店面充满一种清新的法国风情，马卡龙色对整体店面原木色的点缀给空间制造出一种可爱舒适的感觉。
          	但值得注意的，还是店铺里面对糖元素的应用
          </p> 	   	
	   </div>
     </div>
</template>

<script>
	export default{
		name:"mine",
		data(){
			return{
				drawer: false,
                direction: 'ltr',
                sites:[
                   {"img":"../../static/image/yy.jpg"},
                   {"img":"../../static/image/yy.jpg"},
                   {"img":"../../static/image/yy.jpg"}
                ]
		 	}
		},
		methods:{
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
   	width: 7rem;
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
   .imglist{
   	width: 90%;
   	position: absolute;
   	top: 9rem;
   	left: 5%;
   }
   .imglist ul{
   	 width: 100%;
   	 height: 20rem;
   	 text-align: center;
   }
   .imglist ul li img{
   	width: 100%;
   	height: 10rem;
   }
   .text{
   	width: 90%;
   	height: 20rem;
   	position: absolute;
   	top: 40rem;
   	left: 5%;
   }
   .text p{
   	font-size: 1.2rem;
   	color: gray;
   }
</style>