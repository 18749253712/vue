// store/modules/goodsList.js
const state = {
  goodsList: JSON.parse(localStorage.getItem('cartList')) || [] // 商品列表，刚开始为空
}
const getters = {
  getTotalCount (state) {
    let totalCount = 0
    state.goodsList.forEach(item => {
      totalCount += item.num
    })

    return totalCount
  },
  getGoodsList (state) {
    return state.goodsList
  }
}
const mutations = {
  addGoods (state, goods) {
    // oldGoods，就是第一次添加进去的那个对象
    const oldGoods = state.goodsList.find(item => item.id === goods.id)

    if (oldGoods) {
      // 找到了，之前存在过
      oldGoods.num += 1
    } else {
      // 没找到，直接新增
      state.goodsList.push(goods)
    }
    // ES6 如何从对象中，找到某个元素
    // console.log(state.goodsList)
  }
}
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}