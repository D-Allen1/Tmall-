import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Classify from '@/view/classify'
import GoodList from '@/view/goodList'
import GoodsDetail from '@/view/goodsDetail'
import Cart from '@/view/cart'
import Test from '@/view/test'
import AddressEdit from '@/view/addressEdit'
import Address from '@/view/address'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: '/',
    component: Home
  },
  {
    path: '/classify',
    name: 'Classify',
    component: Classify
  },
  {
    path: '/goodList',
    name: 'GoodList',
    component: GoodList
  },
  {
    path: '/goodsDetail',
    name: 'GoodsDetail',
    component: GoodsDetail
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/addressEdit',
    name: 'AddressEdit',
    component: AddressEdit
  },
  {
    path: '/address',
    name: 'Address',
    component: Address
  }]
})
