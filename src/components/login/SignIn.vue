<template>
	<div class="SignIn">
		<img src="../../assets/logo.png">
		<div class="sign-box">
			<input type="text" ref="userName" placeholder="请输入用户名" />
			<input type="password" ref="userPwd" placeholder="请输入密码" />
			<input type="button" @click="signMM" value="登  录" />
		</div>
	</div>
</template>
<script>
	export default{
		methods:{
			signMM(){
				const userName=this.$refs.userName.value
				const userPwd=this.$refs.userPwd.value
				if(userName == '' || userPwd == ''){
					alert("用户名或密码为空")
				}else{
					this.$router.push({'path':'/home'})
				}
			}
		}
	}
</script>
<style>
	.SignIn{
		margin: 0 auto;
		width: 350px;
	}
	.SignIn input{
		display: block;
		width: 310px;
		height: 42px;
		margin: 10px auto;
		font-size: 16px;
		padding: 0 10px;
		border: 1px solid #ddd;
	}
	.SignIn input[type="button"]{
		margin-top: 30px;
		background: #42B983;
		color: #fff;
		font-size: 18px;
	}
</style>