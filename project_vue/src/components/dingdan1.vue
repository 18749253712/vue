<template>
     <div class="box">
     	<h1 @click="gou">
     		购物车
     	</h1>
        <ul>
        	<li v-for="(item,index) in info">
        	   <div class="left">
        	      <input type="checkbox" name="" id="" value="" />
        	      <img :src="item.img"/>
        	   </div>
        	   <div class="right">
        	   	   <p>{{item.h1}}</p>
        	   	   <p style="color: red;">￥{{item.ppp}}</p>
        	   	   <p>
        	   	   	  <span @click="add(index)">+</span>
        	   	   	  <input type="text" v-model="item.count"/>
        	   	   	  <span @click="jian(index)">-</span>
        	   	   	  <button @click="remove(index)">删除</button>
        	   	   </p>
        	   </div>
        	</li>
        </ul>
        <div class="bottom">
        	<p>总价：￥{{num}}</p>
        	<p style="color: white;" @click="ding">订单</p>
        </div>
     </div>
</template>

<script>
	export default{
		name:"dingdan1",
		data(){
			return{
				info:"",
				index1:"",
			    dis: false,
			    count:0,
			    num:0,
			    total:"",
			    list:[]
			}
		},
       mounted(){
			let temp=JSON.parse(localStorage.getItem('data03'))
			this.info=temp
            console.log(this.info)
		},
		methods:{
			//加
			gou(){
				this.$router.push({
					path:"/GoodsList"
				})
			},
			add(index){
				this.info[index].count ++
			},
			 jian(index){
		    //判断 info的数量是否 <= 1 ,弹出提示框，不能再减了
		      if ( this.info[index].count <= 1){
		        alert("不能在减了")
		    //否则 (大于1的时候) --
		      }else {
		        this.info[index].count --
		      }
		    },
		    remove(index){
		    	console.log(index)
		    	this.info.splice(index, 1)
		    },
		    ding(){
		    	this.$router.push({
		    		path:"/my"
		    	})
		    },
		    search(){
		    	this.$router.push({
		    		path:"/search"
		    	})
		    }
		}
	}
</script>

<style scoped>
	h1{
		text-align: center;
	}
   .box{
   	width:100%;
   	height: 100%;
   }
   .box ul{
   	width: 90%;
   	margin: 0 auto;
   }
   .box ul li{
   	 width: 100%;
   	 height: 8rem;
   	 border-bottom: 1px solid black;
   	 display: flex;
   }
   .box ul li .left{
   	width: 40%;
   }
   .box ul li .left img{
   	  widows: 6rem;
   	  height: 6rem;
   	  border-radius: 1rem;
   	  margin-top: 1rem;
   	  vertical-align: middle;
   }
    .box ul li .left input{
    	width: 1.5rem;
    	height: 1.5rem;
    }
   .box ul li .right{
   	width: 60%;
   }
   .box ul li .right p{
   	margin-top: 1rem;
   }
    .box ul li .right p input{
    	width: 2rem;
    	height: 1.5rem;
    	margin-left: 1rem;
    	margin-right: 1rem;
    	text-align: center;
    	line-height: 1.5rem;
    }
    .bottom{
    	width: 100%;
    	height: 5rem;
    	text-align: center;
    	position: fixed;
    	bottom: 0;
    	z-index: 999;
    	background: pink;
    }
</style>