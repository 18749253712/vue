<template>
    <div class="shopCar">
        <header>

            <button type="button" @click="delSelect">批量删除</button>
            <button type="button" @click="alldel">清空购物车</button>
            <button type="button" @click="xian">添加</button>
            <button type="button" @click="jiang">排序</button>
            <input type="text" placeholder="请输入要查询的商品名称" v-model="input_value" @keyup.13="search">
            <div class="xiu" v-show="dis1">
                <input type="text" placeholder="名称" v-model="name">
                <input type="text" placeholder="价格" v-model="price">
                <input type="text" placeholder="数量" v-model="count">
                <input type="text" placeholder="产地" v-model="counrty">

                <button type="button" @click="xiugai">确认修改</button>
            </div>
            <div class="add" v-show="dis">
                <input type="text" placeholder="名称" v-model="name">
                <input type="text" placeholder="价格" v-model="price">
                <input type="text" placeholder="数量" v-model="count">
                <input type="text" placeholder="产地" v-model="counrty">
                <button type="button" @click="tian">确认添加</button>
            </div>
        </header>
        <main>
            <ul>
                <li>
                    <p><input type="checkbox" v-model="allChecked">
                        全选</p>
                    <p>名称</p>
                   <!-- <p>产地</p>-->
                    <p>数量</p>
                    <p>单价</p>
                    <p>小计</p>
                    <p>操作</p>
                </li>
                <li v-for="(item,index) in shopPings" :key="index">
                    <p><input type="checkbox" v-model="item.checked">{{item.id}}</p>
                    <p>{{item.name}}</p>
                    <!--<p>{{item.counrty}}</p>-->
                    <p><button type="button" @click="add(item)">+</button>
                        <input type="text" v-model="item.count" style="width:20px;text-align: center;"/>
                        <button type="button" @click="remove(item)">-</button>
                    </p>
                    <p>{{item.price}}</p>
                    <p>{{item.price*item.count}}</p>
                    <p>
<!--                        <button type="button" @click="xiu(index)"> 修改</button>-->

                        <button @click="del(index)">删除</button>
                    </p>
                </li>
            </ul>
        </main>
        <footer>
            <p>总计{{state.sum |suffix}}</p>
        </footer>
    </div>
</template>
<style scoped>
    .shopCar {
        width: 100%;
        border: 2px solid black;
        margin: 0px auto;
        overflow: auto;

        header {
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 3rem;
            overflow: hidden;

            .add {
                width: 13rem;
                background: #e4e1e1;
                position: absolute;
                left: 39%;
                top: 40%;

                input {
                	height: 2rem;
                    display: block;
                    margin: 20px auto;

                }

                button {
                	height: 2rem;
                    display: block;
                    margin: 0 auto;
                }
            }

            .xiu {
                width: 20rem;
                height: 5rem;
                background: #e4e1e1;
                position: absolute;
                left: 39%;
                top: 40%;

                input {
                	height: 2rem;
                    display: block;
                    margin: 20px auto;

                }

                button {
                    display: block;
                    margin: 0 auto;
                }
            }
        }

        main {
            // height: 400px;
            margin-top: 10px;

            ul {

                li {
                    height: 78px;
                    border-bottom: 2px solid black;
                    display: flex;
                    justify-content: space-between;

                    p {
                        float: left;
                        width: 150px;
                        height: 40px;
                        border: 2px solid black;
                        text-align: center;
                        line-height: 40px;
                    }
                }
            }
        }

        footer {
            height: 50px;
            margin-top: 13px;
            line-height: 50px;
        }
    }
</style>
<script>
    const shopData = [{
            id: "",
            name: "鞋子",
            counrty: "山西",
            count: 1,
            price: 800,
        },
        {
            id: "",
            name: "橱柜",
            counrty: "北京",
            count: 1,
            price: 3200,
        },
        {
            id: "",
            name: "口红",
            counrty: "河北",
            count: 2,
            price: 200,
        },
        {
            id: "",
            name: "汉堡",
            counrty: "河南",
            count: 2,
            price: 200,

        },

    ]

    export default {
    	name:"dingdan",
        //过滤器
        filters: {
            suffix(value) {
                let price = Number(value)
                return `￥ ${price.toFixed(2)}`
                //在金额前面插入一个￥符号然后定义小数点后面为俩位数字
            }
        },
        computed: {

            //全选
            allChecked: {
                get() {
                    const checkeds = this.shopPings.filter((item) => item.checked)
                    return checkeds.length === this.shopPings.length
                },
                set(state) {
                    // console.log(state)
                    this.shopPings.map((item) => {
                        item.checked = state
                        return item
                    })
                }
            },
            //小计计算
            totalPrice: function () {
                var total = 0;
                for (var i = 0; i < this.checkList.length; i++) {
                    var item = this.checkList[i];
                    total += item.price * item.count;
                }
                return total.toLocaleString();
            },
            //选中的商品总价计算
            state() {
                const checkeds = this.shopPings.filter((item) => item.checked)
                const checked = checkeds.length === this.shopPings.length
                const sum = checkeds.reduce((a, b) => {
                    return a + b.count * b.price;
                }, 0)
                return {
                    count: checkeds.length,
                    sum
                }
            },
        },
        data() {
            return {
                shopPings: [],
                dis: false, //确认提交
                dis1: false, //确认修改
                id: "",
                name: "", //名称
                price: "", //单价
                count: "", //数量
                counrty: "", //产地
                input_value: "", //查询框中input的值
            }
        },
        mounted() {
            window.fetch("/").then(() => {
                this.shopPings = shopData.map((item) => {
                    item.checked = false
                    return item
                })
            })
        },
        methods: {
            //添加商品
            xian() {
                if (!this.dis == false) {
                    this.dis = false
                } else {
                    this.dis = true
                }
            },
            //确认添加
            tian() {
                if (this.name == "" || this.counrty == "" || this.price == "") {
                    alert("商品信息不允许为空！")
                    return false
                } else {

                    this.shopPings.push({
                        name: this.name,
                        counrty: this.counrty,
                        price: this.price,
                        count: this.count,
                    })
                }
                this.name = "",
                    this.counrty = "",
                    this.price = "",
                    this.count = ""
                this.dis = false
            },

            //删除商品
            del(index) {
                this.shopPings.splice(index, 1);
            },

            //删除选中的商品
            delSelect() {
                this.shopPings = this.shopPings.filter((item) => {
                    if (!item.checked) {
                        return item
                    }
                })
            },
            //全部删除
            alldel() {
                this.shopPings = []
            },
            //减少购买
            remove(data) {
                if (data.count > 0) {
                    data.count--
                }
                if (data.count === 0) {
                    data.checked = false
                }
            },
            //增加购买
            add(data) {
            	console.log(data)
                data.count++
            },
            //修改商品
            xiu(i) {
                this.int = i
                if (!this.dis1 == false) {
                    this.dis1 = false
                } else {
                    this.dis1 = true
                }
            },
            // 确认修改
            xiugai() {
                console.log(this.int)
                let index = this.int
                console.log(this.name, this.price, this.count, )
                this.shopPings[index].name = this.name
                this.shopPings[index].price = this.price
                this.shopPings[index].counrty = this.counrty
                this.shopPings[index].count = this.count

                this.dis1 = false
            },
            //降序
            jiang() {
                this.shopPings.sort((a, b) => {
                    //排序基于的数据
                    return a.price - b.price;
                })
            },
            search() {
                if (!this.input_value) {
                    return alert('请输入内容')
                }
                if (
                    this.shopPings.every((v) => {
                        v.name.indexOf(this.input_value) == -1
                    })
                ) {
                    this.input_value = ''
                    return alert('没有此商品')
                }
                this.shopPings = this.shopPings.filter((v) => {
                    v.name.replace(this.input_value, this.input_value)
                    return v.name.indexOf(this.input_value) != -1
                })
            }

        }
    }
</script>
