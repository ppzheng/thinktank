<template>
	<view class="vip_content">
		<view v-if="isVip">
			<view style="font-size: 17px;">您已开通会员</view>
			<view>{{vipTime}}到期</view>
		</view>
		<view v-else>
			<view style="font-size: 17px;">开通会员</view>
			<view>您暂未开通会员</view>
		</view>
		<view>
			<radio-group @change="radioChange">
				<view class="fee_box" v-for="(item, index) in items" :key="item.value">
					<radio style="transform: scale(0.85);margin-right: 5px;" color="#8389EC" :value="item.value" :checked="index === current" />
					<view class="text_box">
						<text>
							<text class="fee">¥{{item.fee}}</text>
							<text class="time">/{{item.time}}</text>
						</text>

						<text class="text">全站资源 免费下载</text>
					</view>
				</view>
			</radio-group>
		</view>
		<button class="vip_btn">{{isVip?'立即续费':'立即开通'}}</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isVip: false,
				vipTime: '2022年02月22日',
				items: [{
						value: 0,
						checked: 'true',
						fee: '19.9',
						time: '月'
					},
					{
						value: 1,
						fee: '49.9',
						time: '季'
					},
					{
						value: 2,
						fee: '99.9',
						time: '年'
					}
				],
				current: 0
			}
		},
		methods: {
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.detail.value) {
						this.current = i;
						break;
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	.vip_content {
		padding: 15px;
		height: 100vh;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.fee_box {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 40px;
		margin: 7px 0;
		padding: 20px;
		border: 1px solid rgba(216, 216, 216, 1);
		border-radius: 10px;

		.fee_radio {
			font-size: 17px;
		}

		.text_box {
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: baseline;
			justify-content: space-between;

			.fee {
				color: rgba(209, 94, 94, 1);
				font-size: 24px;
			}

			.time {
				font-size: 17px;
			}

			.text {
				font-size: 17px;
				font-weight: 500;
				color: rgba(132, 138, 236, 1);
			}
		}

	}

	.vip_btn {
		position: absolute;
		width: 80vw;
		left: 10vw;
		border-radius: 30px;
		height: 50px;
		line-height: 50px;
		bottom: 20vh;
	}
</style>
