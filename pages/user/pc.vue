<template>
	<view class="vip_content">
		<text class="text">在电脑浏览器里输入以下链接，</text>
		<text class="text">进入PC版查看</text>
		<text class="site">{{site}}</text>
		<button class="vip_btn" size="large" @click="copy(site)">复制链接</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				site: 'www.xxx.com'
			}
		},
		methods: {
			copy(val) {
				uni.setClipboardData({
					data: val
				});
			}
		}
	}
</script>

<style lang="scss">
	.vip_content {
		height: 90vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.text {
			font-size: 17px;
			text-align: center;
		}

		.site {
			color: rgba(209, 94, 94, 1);
			text-align: center;
			font-size: 17px;
			font-weight: 500;
		}
	}

	button {
		border-radius: 30px;
		width: 80%;
		height: 50px;
		line-height: 50px;
	}
</style>
