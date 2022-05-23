<template>
	<div class="body">
		<div class="stars" ref="starsRef">
			<div class="star" v-for="(item, index) in starsCount" :key="index"></div>
		</div>
		<div class="content">
			<h1>登录页面</h1>
		<el-form :model="numberValidateForm" ref="numberValidateForm" label-width="80px" class="demo-ruleForm">
            <el-form-item label="账号" prop="age":rules="[{ required: true, message: '账号不能为空'},  { type: 'number', message: '账号必须为数字值'} ]">
	            <el-input type="text" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
	        </el-form-item>
	        <el-form-item label="密码" prop="password":rules="[{ required: true, message: '密码不能为空'},  { type: 'number', message: '密码必须为数字值'} ]">
	            <el-input type="password" v-model.number="numberValidateForm.password" autocomplete="off"></el-input>
            </el-form-item>
                <el-button @click="zhu">免费注册</el-button>
			    <el-button type="primary" @click="submitForm('numberValidateForm')">登录</el-button>
			    <el-button @click="resetForm('numberValidateForm')">重置</el-button>
		    </el-form-item>
        </el-form>
		</div>
	</div>
</template>
<script>
	export default {
		name:"shouye",
		data() {	
			return {
				starsCount: 800, //星星数量
				distance: 900, //间距
				numberValidateForm: {
                       age: ''
                }
			}
		},
		methods:{
			submitForm(formName) {
				let tm=JSON.parse(localStorage.getItem("data11"))
				console.log(tm[0])
		        this.$refs[formName].validate((valid) => {
		          if (valid&&this.numberValidateForm.age==tm[0]&&this.numberValidateForm.password==tm[1]) {
		            this.$router.push({
		            	path:'/my'		            	
		            })
		            this.$Toast({message:'登录成功',duration:1000})
		          } else {
		            this.$Toast({message:'账号密码错误',duration:1000})
		          }
		          localStorage.setItem("datatou",JSON.stringify(this.tou))
		        });
		        console.log(formName)
		      },
		    resetForm(formName) {
		        this.$refs[formName].resetFields();
		    },
		    zhu(){
		    	this.$router.push({
		    		path:"/sub"
		    	})
		    }
		},
		mounted() {
			console.log(this.$refs.starsRef.children);
			
			let starNodes = Array.from(this.$refs.starsRef.children);
			starNodes.forEach((item) => {
				let speed = 0.2 + Math.random() * 1;
				let thisDistance = this.distance + Math.random() * 300;
				item.style.transformOrigin = `0 0 ${thisDistance}px`;
				item.style.transform =
					`
		        translate3d(0,0,-${thisDistance}px)
		        rotateY(${Math.random() * 360}deg)
		        rotateX(${Math.random() * -50}deg)
		        scale(${speed},${speed})`;
			});
		}
	}
</script>

<style>
	.body {
		position: absolute;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		background: radial-gradient(200% 100% at bottom center,
			#f7f7b6,
			#e96f92,
			#1b2947);
		background: radial-gradient(200% 105% at top center,
			#1b2947 10%,
			#75517d 40%,
			#e96f92 65%,
			#f7f7b6);
		background-attachment: fixed;
		overflow: hidden;
	}

	@keyframes rotate {
		0% {
			transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
		}

		100% {
			transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
		}
	}

	.stars {
		transform: perspective(500px);
		transform-style: preserve-3d;
		position: absolute;
		perspective-origin: 50% 100%;
		left: 45%;
		animation: rotate 90s infinite linear;
		bottom: 0;
	}

	.star {
		width: 2px;
		height: 2px;
		background: #f7f7b6;
		position: absolute;
		left: 0;
		top: 0;
		backface-visibility: hidden;
	}
	.content{
		width: 100%;
	}
	.content h1{
		text-align: center;
		color: white;
		margin-bottom: 10rem;
	}
</style>

