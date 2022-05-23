<template>
  <div id="app">
    <ul class="ul">
    	 <li>
    	 	<router-link to="/">
    	 		<img src="../static/image/首页 (2).png"/>
    	 		<span>首页</span>
    	 	</router-link>
    	 </li>
	    <li><router-link to="/one"><img src="../static/image/菜单.png"/><span>菜单</span></router-link></li>
	    <li><router-link to="/my"><img src="../static/image/电话 (1).png"/><span>个人中心</span></router-link></li>
	    <li><router-link to="/two"><img src="../static/image/我的 (2)(1).png"/><span>在线位置</span></router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
   data () {
    return {
    }
  },
  onload(){
  	
  }
}
</script>

<style>
	html, body {
  height: 100%;
  overflow: auto;
  margin: 0;
}
html{
  overflow-y: auto;
}
*{
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
}
#app>.ul{
	width: 100%;
	height: 5rem;
	display: flex;
	justify-content: space-around;
	position: fixed;
	bottom: 0;
	background-color: ghostwhite;
	z-index: 997;
	/*border: 1px solid black;*/
} 
#app>.ul>li{
	width: 4rem;
	height: 4rem;
	text-align: center;
}
.ul li img{
	width: 3rem;
	height: 3rem;
	margin-left: 0.1rem;
}
.el-message-box {
width: 350px;
}
.el-message-box__header {
    position: relative;
    padding: 15px 127px 10px;
}
.el-message-box__message{
	color: red;
}
.el-message-box__message p .inp input{
	outline: none;
	width: 15rem;
	height: 2rem;
	text-align: center;
	background-color: whitesmoke;
	margin-top: 1rem;
	margin-bottom: 0.5rem;
}
.el-message-box__message p .inp #inp{
	height: 4rem;
}
.el-message-box__message p .inp #ipn1{
	width: 8rem;
}
.el-message-box__message p .inp span{
	  margin-left: 4rem;
	  font-size: 1.8rem;
	  font-weight: bold;
}
.el-message-box__message p .inp button{
	  width: 80%;
	  height: 3rem;
	  background-color: orange;
	  text-align: center;
	  line-height: 3rem;
	  color: white;
	  margin-left: 10%;
	  font-size: 1.4rem;
}
.el-message-box__btns {
    padding: 5px 15px 0;
    text-align: right;
    display: none;
}
.el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 90%;
}
.el-form-item__label{
	color: white;
}
.el-button{
	margin-left: 5rem;
}
.el-drawer__body img{
	width: 2rem;
	height: 2rem;
	vertical-align: middle;
}
</style>
