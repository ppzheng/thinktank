<template>
	<view class="warp">
		<view class="example-body">
			<uni-grid :column="2" :highlight="true" :square="false" :showBorder="f" @change="change">
				<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
					<view class="grid-item-box" @click="toDetail">
						<text class="title">{{ item.title }}</text>
						<text class="text">{{ item.text }}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				dynamicList: [],
				list: [{
						url: '/static/c1.png',
						text: '2人已加入',
						title: '产品必备',
					},
					{
						url: '/static/c2.png',
						text: '12人已加入',
						title: '运营必备',
					},
					{
						url: '/static/c3.png',
						text: '1人已加入',
						title: '直播相关',
					},
					{
						url: '/static/c4.png',
						text: 'Grid 4',
						title: '4',
					},
					{
						url: '/static/c5.png',
						text: 'Grid 5',
						title: '5',
					},
					{
						url: '/static/c6.png',
						text: 'Grid 6',
						title: '6',
					},
					{
						url: '/static/c7.png',
						text: 'Grid 7',
						title: '7',
					}
				]
			}
		},
		methods: {
			toDetail() {
				uni.navigateTo({
					// url: 'test?id=1&name=uniapp'  c传递参数
					url: "/pages/list/detail?column=产品专题"
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		/* background-color: #efeff4; */
		min-height: 100%;
		height: auto;
	}

	view {
		font-size: 14px;
		line-height: inherit;
	}


	.example-body {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
	}

	.example-body {
		flex-direction: column;
		padding: 15px;
	}

	.text {
		font-size: 26rpx;
	}

	.example-body {
		display: block;
	}

	.grid-item-box {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		box-shadow: 0 0 6px 1px rgba(0, 68, 253, 0.16);
		border-radius: 10px;
		margin: 10px;
		background-color: #FFFFFF;

		.title {
			padding: 9px 0 0;
			line-height: 24px;
			font-size: 17px;
		}

		.text {
			font-size: 14px;
			color: rgba(181, 190, 203, 1);
		}
	}
</style>
