<template>
	<div class="box">
		<header><span @click="back"><</span><span>收货地址</span></header>
		<div class="henan">
			<p v-for="item in arr">
                {{item}}
			</p>
		</div>
		<section>
				<div class="address_edit">
					<form class="mui-input-group">
						<div class="mui-input-row">
							<label>收件人</label>
							<input v-model="form.name" type="text" class="mui-input-clear" placeholder="请输入收件人姓名" />
						</div>
						<div class="mui-input-row">
							<label>联系方式</label>
							<input v-model="form.tel" type="text" class="mui-input-clear" placeholder="请输入手机号" />
						</div>
						<div class="mui-input-row">
							<label>所在地区</label>
							<input type="text" v-model="form.area" class="mui-input-clear" placeholder="所在地区" @click="choose" />
							<div class="divwrap">
								<div class="mask" @click="choose" v-show="show"></div>
								<v-distpicker v-show="show" type="mobile" @province="onChangeProvince" @city="onChangeCity" @area="onChangeArea" :province="newInfo.province" :city="newInfo.city" :area="newInfo.district">
								</v-distpicker>
							</div>
						</div>
						<div class="mui-input-row">
							<label>详细地址</label>
							<input v-model="form.detail" type="text" class="mui-input-clear" placeholder="请输入详细地址" />
						</div>
						<div class="mui-button-row">
							<button size="small" @click="save" type="button" class="mui-btn mui-btn-primary mui-btn-block">确认</button>
						</div>
						<!--<div class="mui-button-row">
							<button size="small" type="button" class="mui-btn mui-btn-danger mui-btn-block">删除</button>
						</div>-->
					</form>
				</div>
		</section>
		<footer>
			<p @click="save1">添加收货地址</p>
		</footer>
	</div>
</template>

<script>
	import VDistpicker from 'v-distpicker'
	export default {
		name: "shop",
		data() {
			return {
				form: {
					name: '',
					tel: '',
					area: '',
					detail: ''
				},
				show: false,
				list:"",
				phone:"",
				address:"",
				dtl:"",
				li:'',
				arr:[],
				newInfo: {
					province: '',
					city: '',
					area: ''
				}
			}
		},
		methods: {
			choose () {
			    this.show = !this.show
			  },
			  onChangeProvince (data) {
			    this.newInfo.province = data.value
			  },
			  onChangeCity (data) {
			    this.newInfo.city = data.value
			  },
			  onChangeArea (data) {
			    this.newInfo.area = data.value
			    this.form.area = this.newInfo.province + '-' + this.newInfo.city + '-' + this.newInfo.area
			    this.show = false
			  },
			  save(){
//             this.$Indicator.open('加载中...')
                $("section").hide()
                this.list=this.form.name;
                this.phone=this.form.tel;
                this.address=this.form.area;
                this.dtl=this.form.detail;
                this.arr.push(this.list)
                this.arr.push(this.phone)
                this.arr.push(this.address)
                this.arr.push(this.dtl)
                console.log(this.arr)
			  },
			   save1(){
//			  	console.log("加载成功")
                this.$Indicator.close()
                $("section").show()
			  },
			  back(){
			  	this.$router.back()
			  	
			  }
		},
		components: {
		    'v-distpicker': VDistpicker
		 } 
	}
</script>

<style scoped="scoped">
	.box{
		width: 100%;
		height: 100%;
		position: absolute;
	}
	header {
		width: 100%;
		height: 3rem;
		background-color: red;
		color: white;
		line-height: 3rem;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 998;
	}
    header span:first-child{
    	font-size: 2.2rem;
    }
    header span:last-child{
    	position: absolute;
    	left: 40%;
    }
	.henan{
		width: 90%;
		height: 4rem;
		position: absolute;
		top: 4rem;
		left: 5%;
	}
	.henan p{
		width: 50%;
		height: 2rem;
		line-height: 2rem;
		float: left;
		/*text-align: center;*/
		
	}
	section{
		width: 100%;
		position: absolute;
		top: 3rem;
		display: none;
		background-color: wheat;
		z-index: 99;
	}
	.mui-input-row{
		margin-top: 1rem;
		margin-left: 1rem;
	}
	.mui-input-row label{
		text-align: right;
		display: inline-block;
		/*border: 1px solid black;*/
		width: 4rem;
	}
	footer {
		width: 100%;
		height: 5rem;
		position: fixed;
		bottom: 0;
		background: white;
		z-index: 999;
	}
	
	footer p {
		width: 20rem;
		height: 3rem;
		background: red;
		margin: 0 auto;
		line-height: 3rem;
		text-align: center;
		color: white;
		font-size: 1.4rem;
		margin-top: 1rem;
	}
    input{
    	width: 13rem;
    	height: 2rem;
    	margin-left: 1rem;
    	border: 1px solid black;
    	text-align: center;
    	line-height: 2rem;
    }
    .mui-button-row button{
    	width: 8rem;
    	height: 2rem;
    	margin-top: 2rem;
    	margin-left: 8rem;
    	background: green;
    	color: white;
    }
    .divwrap > .mask {
	  background: #000;
	  opacity: 0.3;
	  position: fixed;
	  top: 0;
	  bottom: 0;
	  left: 0;
	  right: 0;
	}
	.divwrap > .distpicker-address-wrapper {
	  color: #999;
	  background: #fff;
	  border-top: 1px solid #ccc;
	  z-index: 1;
	  height: 300px;
	  overflow-y: auto;
	  position: fixed;
	  left: 0;
	  bottom: 0;
	  width: 100%;
	}
</style>