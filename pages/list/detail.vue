<template>
	<view>
		<view>
			<view class="example-body">
				<uni-card @click="clickCard" note="购买专题，即可下载该专题下的所有资料">
					<view class="content_box">
						<view class="content_text" @click="toDetail">
							<text class="title">{{ detail.title }}</text>
							<text class="text">
								{{detail.number}}已加入
							</text>
						</view>
						<view class="content_btn">
							<button class="used_btn">{{isFee?'免费加入': detail.fee + '元加入'}}</button>
						</view>
					</view>
				</uni-card>
			</view>
			<view v-for="(item, index) in articleList">
				<uni-list border=false>
					<uni-list-item class="content_list" :title="item.title" ellipsis=1 :note="item.content" :thumb="item.thumbnail" thumb-size="lg"
						:rightText="item.extra" />
				</uni-list>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				ifFee: true,
				detail: {
					title: '产品必备',
					number: '12',
					fee: "9.9"
				},
				articleList: [{
					title: '标题文字',
					content: 'dsjfkajflkjsa',
					note: '',
					extra: '免费',
					thumbnail: '/static/images/txt.png'
				}, {
					title: '标题文字',
					content: 'sdfsfassdfasfas',
					note: '',
					extra: '免费',
					thumbnail: '/static/images/xls.png'
				}, {
					title: '标题文字',
					content: '这是一个完整配置的基础卡片示例',
					note: 'Tips',
					extra: '免费',
					thumbnail: '/static/images/ppt.png'
				}, {
					title: '标题文字特别特别特别特别特别特别特别特别特别特别特别长',
					content: '这是一个完整配置的基础卡片示例。内容样式可自定义。',
					note: 'Tips',
					extra: '免费',
					thumbnail: '/static/images/pdf.png'
				}],
			}
		},
		onLoad: function(option) {
			uni.setNavigationBarTitle({
				title: option.column
			})
		},
		methods: {
			clickCard() {
				uni.showToast({
					title: '点击卡片',
					icon: 'none'
				})
			},
			footerClick(types) {
				uni.showToast({
					title: types,
					icon: 'none'
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
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	view {
		font-size: 14px;
		line-height: inherit;
	}

	.example-body {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		margin: 12px 0;
		padding: 0;
		font-size: 14px;
	}

	.content_box {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		justify-items: center;
	}
	
	.content_text{
		display: flex;
		flex-direction: column;
		.title{
			line-height: 24px;
			font-size: 17px;
		}
		.text{
			font-size: 14px;
			color: rgba(181, 190, 203, 1);
		}
	}
	.content_btn{
		display: flex;
		align-items: center;
		.used_btn{
			height: 30px;
			line-height: 30px;
			background-color: $uni-color-primary;
			border: none;
			color: #FFFFFF;
			border-radius: 16px;
			font-size: 14px;
		}
	}
	.content_list{
		// border-bottom: 1px solid rgba(255, 255, 255, 0.9);
	}
</style>
