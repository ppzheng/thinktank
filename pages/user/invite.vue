<template>
	<view class="invite_content">
		<image class="invite_bg" src="../../static/images/invite_banner.png" mode="widthFix"></image>
		<button class="invite_btn" @click="onclick">邀请好友获得免费机会</button>
	</view>
</template>

<script>
	export default {
		methods:{
			onclick(){
				console.log('invite ---- ')
			}
		}
	}
</script>

<style lang="scss">
	.invite_content {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		position: relative;
		.invite_bg {
			position: absolute;
			top: 0;
			width: 100%;
		}
		.invite_btn{
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			top: 80vh;
			left: 10vw;
			width: 80vw;
			z-index: 100;
			border-radius: 30px;
			height: 50px;
		}
	}
</style>
