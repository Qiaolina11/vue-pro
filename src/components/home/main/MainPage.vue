<template>
	<div class="main">
		Main
		<h2>{{msg}}</h2>
		<ul>
			<li v-for="item in items">
				<a :href="item.href">{{item.content}}</a><span>{{item.time}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'MainPage',
		data(){
			return{
				msg:'this is Main.vue',
				items:[
					{
						content:'我是百度',
						href:'https://www.baidu.com',
						time:'2017-10-12'
					},
					{
						content:'京东全球购',
						href:'https://www.jd.com',
						time:'2017-10-13'
					},
					{
						content:'苏宁易购',
						href:'https://www.suning.com/',
						time:'2017-11-14'
					},
					{
						content:'我是淘宝',
						href:'https://www.taobao.com',
						time:'2017-11-25'
					},
					
				]
			}
		}
	}
</script>

<style>
	a:link,a:visited{
		color: #000;
	}
	.main ul{
		padding: 20px 15px;
	}
	.main a{
		font-size: 18px;
		float: left;
		text-align: left;
	}
	.main span{
		float: right;
		
	}
	.main li{
		overflow: hidden;
		padding: 5px 0;
	}
	li{
		list-style: none;
	}
	a{
		text-decoration: none;
	}
</style>