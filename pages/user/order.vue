<template>
	<view class="content_list">
		<uni-list v-for="(item, index) in list" border=false>
			<view slot="body" class="order_list" >
				<text class="content">{{item.content}}</text>
				<text class="date">{{item.time}}</text>
			</view>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					content: 'dsjfkajflkjsa',
					time: '2022/02/22'
				}, {
					content: 'sdfsfassdfasfas',
					time: '2022/02/22'
				}, {
					content: '这是一个完整配置的基础卡片示例',
					time: '2022/02/23'
				}, {
					content: '这是一个完整配置的基础卡片示例',
					time: '2022/02/23'
				}, {
					content: '这是一个完整配置的基础卡片示例',
					time: '2022/02/24'
				}, {
					content: '这是一个完整配置的基础卡片示例。内容样式可自定义。',
					time: '2022/02/27'
				}],
			}
		}
	}
</script>

<style lang="scss">
	.content_list {
		font-size: 17px;
		margin: 15px;
		
		.order_list {
			padding: 10px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			height: 36px;
			line-height: 36px;
			
			.content {
				margin-right: 20px;
				white-space: nowrap; 
				overflow: hidden; 
				text-overflow: ellipsis; 
			}

			.date {
				color: #CCCCCC;
			}
		}
	}
</style>
