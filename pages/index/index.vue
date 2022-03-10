<template>
	<view>
		<view class="banner">
			<image class="image" src="../../static/images/vip_banner.png" mode="widthFix"></image>
		</view>
		<view class="contentBox">
			<view class="navbox">
				<view class="navbar">
					<view v-for="(item, index) in navList" :key="index" class="nav-item"
						:class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">
						{{ item.text }}
					</view>
				</view>
				<image class="navImg" src="/static/images/tools.png"></image>
			</view>
			<view class="list">
				<view v-for="(item, index) in articleList">
					<div class="articleBox">
						<div class="listImg">
							<image class="articleIcon" :src="item.format"></image>
						</div>
						<div class="listText">
							<p class="title">{{item.title}}</p>
							<p>{{item.time}}</p>
						</div>
						<div class="listFee">
							{{item.fee?item.fee+'元':'免费'}}
						</div>
					</div>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {

		data() {
			return {
				tabCurrentIndex: 0,
				navList: [{
						state: 0,
						text: '免费',
						orderList: []
					},
					{
						state: 1,
						text: '产品',
						orderList: []
					},
					{
						state: 2,
						text: '区块链',
						orderList: []
					},
					{
						state: 3,
						text: 'NFT',
						orderList: []
					},
					{
						state: 4,
						text: 'DAO',
						orderList: []
					}
				],
				articleList: [{
					title: '这个是文件名称一共就这么多字,还有很多字，字很多',
					text: '',
					fee: 0,
					time: '2022-02-22',
					format: '/static/images/pdf.png'
				}, {
					title: '2这个是文件名称一共就这么多字,还有很多字，字很多',
					text: '',
					fee: 0.5,
					time: '2022-02-12',
					format: '/static/images/doc.png'
				}, {
					title: '3这个是文件名称',
					text: '',
					fee: 1,
					time: '2022-02-11',
					format: '/static/images/ppt.png'
				}, {
					title: '44444很多',
					text: '',
					fee: 2,
					time: '2022-02-22',
					format: '/static/images/txt.png'
				}, {
					title: '5这个是文件名称一共就这么多字,还有很多字，字很多',
					text: '',
					fee: 2.5,
					time: '-',
					format: '/static/images/xls.png'
				}, {
					title: '6这个是文件名称一共就这么多字,还有很多字，字很多',
					text: '',
					fee: 1,
					time: '-',
					format: '/static/images/png.png'
				}, {
					title: '7这个是文件名称一共就这么多字,还有很多字，字很多',
					text: '',
					fee: 0.111,
					time: '',
					format: '/static/images/jpg.png'
				}, {
					title: '8这个是文件名称一共就这么多字,还有很多字，字很多',
					text: '',
					fee: 0.66,
					time: '',
					format: '/static/images/txt.png'
				}, {
					title: '9这个是文件名称一共就这么多字,还有很多字，字很多',
					text: '',
					fee: 2,
					time: '',
					format: '/static/images/txt.png'
				}, {
					title: '10这个是文件名称一共就这么多字,还有很多字，字很多',
					text: '',
					fee: 1,
					time: '',
					format: 'txt'
				}]

			};
		},
		onLoad(options) {
			this.tabCurrentIndex = 0;
		},
		methods: {
			changeTab(e) {
				this.tabCurrentIndex = e.target.current;
			},
			//顶部tab点击
			tabClick(index) {
				this.tabCurrentIndex = index;
			}
		}
	}
</script>

<style lang="scss">
	.banner {
		height: 110px;
		line-height: 110px;
		width: calc(100vw - 30px);
		margin: 15px;
		border-radius: 10px;
		text-align: center;
		
		.image {
			width: 100%;
		}
	}

	.contentBox {
		background-color: #FFFFFF;
		height: calc(100vh - 110px);
		position: relative;
	}

	.navbox {
		position: absolute;
		top: 0;
		display: flex;
		width: 100%;
		line-height: 40px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.06);
		background-color: #FFFFFF;
		z-index: 100;
	}

	.navImg {
		width: 25px;
		height: 25px;
		margin-top: 13px;
	}

	.navbar {
		display: flex;
		height: 50px;
		padding: 0 8px;
		position: relative;
		z-index: 10;
		width: calc(100% - 55px);

		.nav-item {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 17px;
			color: #8F969F;
			position: relative;

			&.current {
				color: #606877;

				&:after {
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 44px;
					height: 0;
					border-bottom: 2px solid #CCCCCC;
				}
			}
		}
	}

	.list {
		position: relative;
		top: 50px;
		height: calc(100% - 40px);
		overflow-y: scroll;

		.articleBox {
			height: 75px;
			border-bottom: 1px solid rgba(0, 0, 0, 0.06);
			display: flex;

			.listImg {
				display: flex;
				width: 50px;

				.articleIcon {
					padding: 16px 0 0 12px;
					height: 35px;
					width: 25px;
				}
			}

			.listText {
				padding: 14px 0;
				width: 70%;

				.title {
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					font-size: 17px;
				}

			}

			.listFee {
				display: flex;
				color: rgba(143, 150, 159, 1);
				width: 50px;
				padding: 38px 0;
				justify-content: flex-end;

			}

		}

	}
</style>
