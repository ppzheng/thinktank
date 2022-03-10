import * as db from './db.js' //引入common
export const request = (params) => {
	uni.showLoading({
		title: "加载中"
	})
	return new Promise((resolve, reject) => {
		wx.request({
			...params,
			success(res) {
				var jsondata = res.data;
				if (jsondata.success) {
					resolve(jsondata);
				} else {
					showError(jsondata)
					resolve(jsondata);
					//应该是这个但它会抛异常统一处理后就不执行then事件了
					// reject(res.data)
				}
			},
			fail(err) {
				showError(err)
				reject(res.data)
			},
			complete() {
				uni.hideLoading();
			}
		})
	})
}
//错误处理
const showError = (error) => {
	var that = this
	if (error) {
		let data = error
		const token = db.get("userToken");
		console.log("------异常响应------", token)
		console.log("------异常响应------", error.status)
		switch (error.status) {
			case 403:
				uni.showToast({
					title: '拒绝访问',
					icon:'none',
					duration: 4000
				});
				break
			case 500:
				if (data.message == "Token失效，请重新登录") {
					uni.showModal({
						title: '登录已过期',
						content: '很抱歉，登录已过期，请重新登录',
						confirmText: '重新登录',
						success: function(res) {
							if (res.confirm) {
								db.del('userToken')
								//去我的页面登录
								uni.switchTab({
									url: '/pages/views/mine'
								});
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					})
					// update-end- --- author:scott ------ date:20190225 ---- for:Token失效采用弹框模式，不直接跳转----
				}
				break
			case 404:
				uni.showToast({
					title: '很抱歉，资源未找到!',
					icon:'none',
					duration: 4000
				});
				break
			case 504:
				uni.showToast({
					title: '网络超时',
					icon:'none',
					duration: 2000
				});
				break
			case 502:
				uni.showToast({
					title: '服务器异常',
					icon:'none',
					duration: 2000
				});
				break
			case 401:
				uni.showToast({
					title: '未授权，请重新登录',
					icon:'none',
					duration: 4000
				});
				if (token=='') {
					setTimeout(() => {
						//去我的页面登录
						uni.switchTab({
							url: '/pages/views/mine'
						});
					}, 1500)
				}
				break
			default:
				uni.showToast({
					title: data.message,
					icon:'none',
					duration: 4000
				});
				break
		}
	}
	return null
};
