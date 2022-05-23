// src/views/Cart.vue
<template>
  <div style="margin-left: 5px">
    <el-table :data="cartList" style="width: 100%">
      <el-table-column prop="name" label="名字" width="180"> </el-table-column>
      <el-table-column label="图片" width="180">
        <template v-slot="prop">
          <img class="icon" :src="prop.row.url" />
        </template>
      </el-table-column>
      <el-table-column label="数量" width="180">
        <template v-slot="prop">
          <el-input-number
            v-model="prop.row.num"
            size="small"
            :min="1"
            label="描述文字"
          >
          </el-input-number>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="单价" width="180"></el-table-column>
      <el-table-column label="总价" width="180">
        <template v-slot="prop">{{ prop.row.num * prop.row.price }} </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template v-slot="prop">
          <el-button type="danger" @click="deleteGoods(prop.row.id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <p>总价:{{ totalPrice }}</p>
    <el-button style="margin-top:10px;margin-bottom:10px;" type="success"
      >结算</el-button
    >
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	name:"Cart",
  data () {
    return {
      cartList: []
      //   totalPrice: 0
    }
  },
  computed: {
    // ...mapGetters('goodsList', ['getGoodsList']),
    totalPrice () {
      let price = 0
      this.cartList.forEach(item => {
        price += item.num * item.price
      })

      return price
    }
  },
  created () {
    this.cartList = this.$store.getters['goodsList/getGoodsList']
  },
  methods: {
    deleteGoods (id) {
      const index = this.cartList.findIndex(item => item.id === id)

      this.cartList.splice(index, 1)
    }
  }
}
</script>
<style scoped>
img {
  width: 80px;
  height: 80px;
}
</style>
