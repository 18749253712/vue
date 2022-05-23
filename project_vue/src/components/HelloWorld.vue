<template>
    <div id="box">
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
	   <div class="block">
		    <el-carousel height="12rem">
		      <el-carousel-item v-for="item in 2" :key="item"></el-carousel-item>
		    </el-carousel>
       </div>
       <ul class="list">
       	   <li v-for="(site,index) in imglist" @click="list(site,index)">
       	   	  <img :src="site.imgurl"/>
       	   	  <p>{{site.title}}</p>
       	   </li>
       </ul>
       <div class="food">
       	  <p>我们的甜品</p>
       	  <div class="my">
       	  	<img src="../../static/image/c.jpg" class="img_one"/>
       	  	<img src="../../static/image/a.jpg"/>
       	  	<img src="../../static/image/b.jpg"/>
       	  </div>
       	  <div id="my">
       	  	<img src="../../static/image/three.jpg"/>
       	  	<img src="../../static/image/th.jpg"/>
       	  </div>
       	  <div id="mine">
       	  	<img src="../../static/image/two.jpg"/>
       	  	<img src="../../static/image/teo.jpg"/>
       	  	<img src="../../static/image/one.jpg"/>
       	  </div>
       </div>
    </div>
    
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    	drawer: false,
        direction: 'ltr',
        imglist:[
           {"imgurl":"../../static/image/e.png","title":"DIY蛋糕"},
           {"imgurl":"../../static/image/h.png","title":"自定义菜单"},
           {"imgurl":"../../static/image/f.png","title":"送餐上门"},
           {"imgurl":"../../static/image/g.png","title":"即时制作"},
           {"imgurl":"../../static/image/k.png","title":"为数不多制作"},
           {"imgurl":"../../static/image/d.png","title":"季节菜单"}
       ]
    }
  },
   methods: {
			list(site,index){
				console.log(index)
				this.$router.push({
					path:'/one'
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
   .block{
    margin-top: 4rem;
   }
   .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     /*background-color: #99a9bf;*/
    background-image: url(../../static/image/s.jpg);
    background-size: 100% 100%;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     /*background-color: #d3dce6;*/
    background-image: url(../../static/image/y.jpg);
    background-size: 100% 100%;
  }
  .list{
  	width: 100%;
  	height: 10rem;
  	/*background: black;*/
  	display: flex;
  	justify-content: space-around;
  	flex-wrap: wrap;
  }
  .list li{
  	width: 33.33%;
  	height: 5rem;
  	text-align: center;
  	
  }
  .list li img{
  	width: 3.5rem;
  	height: 3.5rem;
  	margin-top: 0.5rem;
  }
  .food{
  	width: 100%;
  	margin-top: 2rem;
  	margin-bottom: 7rem;
  }
  .food p{
  	color: red;
  	height: 1.5rem;
  	line-height: 1.5rem;
  	padding-left: 2rem;
  	border-bottom:0.1rem solid gainsboro;
  }
  .my{
  	width: 100%;
  	display: flex;
  	justify-content: space-around;
  }
  .my img{
  	width: 30%;
  	height: 8rem;
  }
  .my .img_one{
  	width: 40%;
  }
  #my{
  	width: 100%;
  	display: flex;
  	justify-content: space-around;
  	margin-top: 1rem;
  }
  #my img{
  	width: 48%;
  	height: 7rem;
  }
  #mine{
  	width: 100%;
  	display: flex;
  	justify-content: space-around;
  	margin-top: 1rem;
  }
  #mine img{
  	width: 33%;
  	height: 7rem;
  }
  .mine{
  	width: 100%;
  }
</style>
