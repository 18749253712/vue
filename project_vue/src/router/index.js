import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import one from '@/components/one'
import two from '@/components/two'
import shouye from '@/components/shouye'
import tes from '@/components/tes'
import five from '@/components/five'
import mine from '@/components/mine'
import liu from '@/components/liu'
import shopping from '@/components/shopping'
import shopping1 from '@/components/shopping1'
import sub from '@/components/sub'
import my from '@/components/my'
import dingdan1 from '@/components/dingdan1'
import dingdan from '@/components/dingdan'
import search from '@/components/search'
import shop from '@/components/shop'
import car from '@/components/car'
import shang from '@/components/shang'
import xinxi from '@/components/xinxi'
import Cart from '@/views/Cart'
import GoodsList from '@/views/GoodsList'
//import shop from '@/views/shop'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    
    {
      path: '/one',
      name: 'one',
      component: one
   },
   
   {
     path: '/two',
      name: 'two',
      component: two
    },
    {
      path: '/shouye',
      name: 'shouye',
      component: shouye
    },
     {
      path: '/tes',
      name: 'tes',
      component: tes
    },
     {
      path: '/five',
      name: 'five',
      component: five
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/liu',
      name: 'liu',
      component: liu
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: shopping
    },
    {
      path: '/sub',
      name: 'sub',
      component: sub
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/dingdan1',
      name: 'dingdan1',
      component: dingdan1
    },
    {
      path: '/dingdan',
      name: 'dingdan',
      component: dingdan
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/shopping1',
      name: 'shopping1',
      component: shopping1
    },
    {
      path: '/car',
      name: 'car',
      component: car
    },
    {
      path: '/shang',
      name: 'shang',
      component: shang
    },
    {
      path: '/xinxi',
      name: 'xinxi',
      component: xinxi
    },
     {
      path: '/GoodsList',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
