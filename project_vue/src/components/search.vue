<template>
   <!-- 模糊查询 + 节流 + 高亮 -->
  <div>
    <input type="text" placeholder="请输入id进行查询" v-model="inputValue" ref="input" @keyup="goSearch" />
    <!-- 这里v-show比v-if省性能 -->
    <div class="conten" v-show="isShow">
      <div class="contenlist" v-for="(item,index) in list" :key="index">
      	<img :src="item.time" @click="ss(item,index)"></img>
        <p v-html="item.id"></p>
         <p style="color: red;">￥{{item.price}}</p>
        <p v-html="item.name"></p>
      </div>
    </div>
   </div>
</template>

<style scoped>
div{
	width: 90%;
	margin: 0 auto;
}
div input{
	width: 100%;
	height: 2rem;
	line-height: 2rem;
	text-align: center;
  border: 1px solid black;
  color: black;
}
.conten{
	width: 100%;
	height: 12rem;
	display: flex;
	flex-wrap: wrap;
}
.contenlist{
	width: 48%;
	height:12rem;
	border: 1px solid darkgray;
	text-align: center;
	margin-top: 2rem;
}
.contenlist img{
	width: 8rem;
	height: 8rem;
	/*margin-left: 1.5rem;*/
	vertical-align: middle;
	border-radius: 0.5rem;
}
.contenlist p{
	margin-top: 0.5rem;
}
</style>

<script>
export default {
	name:"search",
  data () {
    return {
      inputValue: "",
      isShow: false,
      statu: true,
      dataList: [
        { id: "9527", name: "广东经典燕麦米糕", time: "../../static/image/food.jpg",price:"88.00" },
        { id: "9528", name: "广式经典虾饺", time: "../../static/image/food1.jpg",price:"88.00" },
        { id: "9259", name: "广式经典玉米饺", time: "../../static/image/food2.jpg",price:"88.00" },
        { id: "9277", name: "广式经典小笼包", time: "../../static/image/food3.jpg",price:"88.00" },
        { id: "1205", name: "广式经典灌汤包", time: "../../static/image/food4.jpg",price:"88.00" },
        { id: "1206", name: "广式经典月饼点心", time: "../../static/image/food5.jpg" ,price:"88.00"},
        { id: "1307", name: "广式经典干蒸", time: "../../static/image/food6.jpg",price:"88.00" },
        { id: "1308", name: "广式经典蒸饺", time: "../../static/image/food7.jpg",price:"88.00" }
        
      ],
      list: []
    }
  },
  methods: {
  	ss(){
  		this.$router.push({
  			path:'/shopping'
  		})
  	},
    search () {
      this.list = [];
      this.inputValue = this.$refs.input.value;
      // 判断展示列表，如果输入了就展示没输入就不展示
      if (this.inputValue.length > 0) {
        this.isShow = true;
        this.$Toast({message:'搜索成功',duration:1000})
      } else {
        this.isShow = false;
      }

      this.dataList.map((item) => {
        // id、name、time去分别跟输入的值进行比较
        if (item.id.indexOf(this.inputValue) !== -1 || item.name.indexOf(this.inputValue) > -1 || item.time.indexOf(this.inputValue) > -1) {
          // 将当前匹配到的值添加到list数组中
          // this.list.push(item); // 这里需要深拷贝 下面两种方法都可以
          this.list.push(JSON.parse(JSON.stringify(item)));
          // this.list.push(_.cloneDeep(item)); // _.cloneDeep 需要下载lodash
        }
      })

      this.list.map((item) => {
        item.id = this.brightKeyword(item.id)
        item.name = this.brightKeyword(item.name)
        item.time = this.brightKeyword(item.time)
      })
    },
    brightKeyword (val) {
      const keyword = this.inputValue
      if (val.indexOf(keyword) > -1) {
        // replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
        // font标签 规定文本的尺寸、字体和颜色
        return val.replace(keyword, `<font color='tomato'">${keyword}</font>`)
      } else {
        return val
      }
    },
    // 节流函数
    goSearch () {
      // 保持this的指向始终指向vue实例
      const that = this;
      if (!that.statu) {
        return;
      }
      that.statu = false;
      setTimeout(function () {
        console.log(new Date());
        that.search(); // 调用写好的方法
        that.statu = true;
      }, 1000)
    }
  }
}
</script>
