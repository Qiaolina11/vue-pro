<template>
	<div class="home">
		<div>
			<router-view></router-view>
		</div>
		<ul class="bottom-fix">
			<router-link to="/home/main" tag="li">首页</router-link>
			<router-link to="/home/find" tag="li">发现</router-link>
			<router-link to="/home/order" tag="li">订单</router-link>
			<router-link to="/home/me" tag="li">我的</router-link>
		</ul>
	</div>
</template>

<script>
</script>

<style scoped>
.home .bottom-fix{
	position: fixed;
	bottom: 0px;
	display: flex;
	width: 100%;
	height: 50px;
	align-items: center;
}
.home .bottom-fix li{
	flex: 1;
	list-style: none;
}
.router-link-active{
	color:cornflowerblue;
}
</style>