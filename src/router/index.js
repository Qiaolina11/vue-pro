import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignIn from '@/components/login/SignIn'
import Home from '@/components/home/Home'

import MainPage from '@/components/home/main/MainPage'
import Find from '@/components/home/find/Find'
import Me from '@/components/home/me/Me'
import Order from '@/components/home/order/Order'

import Account from '@/components/home/me/account/Account'
import Bank from '@/components/home/me/bank/Bank'
import Balance from '@/components/home/me/balance/Balance'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/home',
    	name:'Home',
    	component:Home,
    	redirect:'/home/main',
    	children:[
    		{
    			path:'me',
    			name:'Me',
    			component:Me,
    			children:[
    				{
    					path:'account',
    					name:'Account',
    					component:Account
    				},
    				{
    					path:'bank',
    					name:'Bank',
    					component:Bank
    				},
    				{
    					path:'balance',
    					name:'Balance',
    					component:Balance
    				}
    			]
    		},
    		{
    			path:'main',
    			name:'MainPage',
    			component:MainPage
    		},
    		{
    			path:'find',
    			name:'Find',
    			component:Find
    		},
    		{
    			path:'order',
    			name:'Order',
    			component:Order
    		}
    		
    	]
    }
  ]
})
