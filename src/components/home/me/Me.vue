<template>
	<div class="me">
		Me
		<h2>{{msg}}</h2>
		<ul>
			<router-link to="/home/me/balance" tag="li">余额</router-link>
			<router-link to="/home/me/bank" tag="li">银行卡</router-link>
			<router-link to="/home/me/account" tag="li">账户</router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'Me',
		data(){
			return{
				msg:'this is Me.vue'
			}
		}
	}
</script>

<style>
</style>