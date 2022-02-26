import Vue from 'vue'
import Router from 'vue-router'

import LandPage from '@/components/LandPage'

import AddObj from '@/components/AddObj'
import AddMoney from '@/components/AddMoney'

import WebCam from '@/components/WebCam'

import SendSelect from '@/components/SendObj/SendSelect'
import SendPage from '@/components/SendObj/SendPage'
import SendCascader from '@/components/SendObj/SendCascader'

import SendMoneyCascader from '@/components/SendMoney/SendMoneyCascader'
import SendMoneyPage from '@/components/SendMoney/SendMoneyPage'

import test from '@/components/test'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/SendMoneyCascader',
      name: 'SendMoneyCascader',
      component: SendMoneyCascader
    },
    {
      path: '/SendMoneyPage',
      name: 'SendMoneyPage',
      component: SendMoneyPage
    },
    {
      path: '/AddObj',
      name: 'AddObj',
      component: AddObj
    },
    {
      path: '/LandPage',
      name: 'LandPage',
      component: LandPage
    },
    {
      path: '/SendPage',
      name: 'SendPage',
      component: SendPage
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/SendCascader',
      name: 'SendCascader',
      component: SendCascader
    },
    {
      path: '/SendSelect',
      name: 'SendSelect',
      component: SendSelect
    },
    {
      path: '/AddMoney',
      name: 'AddMoney',
      component: AddMoney
    },
    {
      path: '/WebCam',
      name: 'WebCam',
      component: WebCam
    },
  ]
})
