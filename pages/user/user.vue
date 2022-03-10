<template>
	<view class="user_page">
		<uni-card class="card_box" border=false>
			<view class="avatar_box">
				<!-- <image class="avatar" src="../../static/compass.png"></image> -->
				<view class="avatar"></view>
				<text class="text">这里是用户昵称</text>
			</view>
		</uni-card>
		<uni-list class="user_list mb-2" border=false>
			<uni-list-item class="list_border" title="VIP会员" showArrow :to="`./vip`" />
			<uni-list-item title="我的订单" showArrow :to="`./order`" />
			<uni-list-item title="在线客服" showArrow :to="`./online`" @click="onClick" />
		</uni-list>
		<uni-list class="mb-2" border=false>
			<uni-list-item title="资料分享交流群" showArrow :to="`./ii`" @click="onClick" />
		</uni-list>
		<uni-list border=false>
			<uni-list-item title="分享送会员" showArrow :to="`./invite`"/>
			<uni-list-item title="登录电脑端" showArrow :to="`./pc`" />
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			onClick() {
				uni.navigateTo({
					url: '/pages/tabBar/extUI/extUI'
				})
			}
		}
	};
</script>

<style lang="scss">
	.mb-2 {
		margin: 7px;
	}

	.user_page {
		padding: 15px;

		.uni-card {
			margin: 0 !important;
			border-radius: 10px;
		}
		
		.user_list .list_border{
			border: none !important;
		}
	}

	.avatar_box {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 110px;
		.avatar {
			display: flex;
			margin-right: 15px;
			height: 60px;
			width: 60px;
			background-color: #8389EC;
			overflow: hidden;
			border-radius: 50%;
		}

		.text {
			display: flex;
			align-items: center;
			font-size: 17px;
		}
	}
</style>
