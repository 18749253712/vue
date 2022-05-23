<template>
  <div class="index-container">
    <ul>
      <li v-for="item in fruitList" :key="item.id">
        <img :src="item.url" alt />
        <p>商品名:{{ item.name }}</p>
        <p>¥:{{ item.price }}</p>
        <el-button
          @click="addGoods(item)"
          style="margin-top:10px;"
          type="success"
          >加入购物车</el-button
        >
      </li>
    </ul>
    <p @click="gou">购物车</p>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
	name:"GoodsList",
  data () {
    return {
      fruitList: [
        {
          id: 10001,
          num: 1,
          url:
            'https://img.tusij.com/ips_templ_preview/2020-09-23/74/746b8ce7-c7f3-45a9-aebd-b0bdfc36d6c1.jpg!w700_w?auth_key=2261378986-0-0-e659890cafb37b590d4b244d27b61612',
          name: '苹果',
          price: 5
        },
        {
          id: 10002,
          num: 1,
          url:
            'https://img.tusij.com/ips_templ_preview/2020-09-23/1a/1adb5960-1d64-4889-9891-e7c5d599e60e.jpg!w700_w?auth_key=2261379020-0-0-60a20aed7130826dda0d665d5ebfea69',
          name: '香蕉',
          price: 2.5
        },
        {
          id: 10003,
          num: 1,
          url:
            'https://img.alicdn.com/bao/i1/1736995052/TB2fkOsxamWBuNjy1XaXXXCbXXa_!!1736995052.jpg',
          name: '哈密瓜',
          price: 20
        },
        {
          id: 10004,
          num: 1,
          url:
            'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/167240/13/9147/344097/604191d8Ed060e184/1995b151b555c4d3.jpg!q80.dpg',
          name: '榴莲',
          price: 35
        }
      ]
    }
  },
  methods: {
  	 gou(){
    	this.$router.push({
    		path:'/Cart'
    	})
    },
    ...mapMutations('goodsList', ['addGoods'])
   
  }
}
</script>
<style scoped="scoped">
/*@import '~@/assets/style/base.css';*/
.index-container ul {
  display: flex;
}
.index-container ul li {
  width: 200px;
  height: 300px;
  border: 1px solid #000;
  margin: 10px;
  text-align: center;
}
.index-container ul li a {
  display: block;
}
.index-container ul li a p {
  background-color: #0094ff;
  color: white;
  padding-left: 20px;
}

.index-container ul li img {
  width: 180px;
  height: 180px;
  display: block;
  margin: 10px auto 0;
}
</style>