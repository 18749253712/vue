<template>
    <div>
       <ul>
          <li v-for="item in arr">
          	<img :src="item.img"/>
            <p>{{item.h1}}</p>
          </li>
       </ul>
    </div>
</template>

<script>
	export default{
		name:'xinxi',
		data(){
			return{
				arr:"",
				shoplist:[]
			}
		},
		mounted(){
			let temp=JSON.parse(localStorage.getItem('shopdata'))
			
			console.log(temp)
			this.arr=temp
			console.log(this.arr)
			localStorage.setItem('shopdata',JSON.stringify(this.shoplist))
		}
	}
</script>

<style scoped="scoped">
	div{
		text-align: center;
	}
	img{
		width: 5rem;
		height: 5rem;
	}
</style>