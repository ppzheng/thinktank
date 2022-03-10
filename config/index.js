import http from './request'
	const apiList = {
		// 接口地址
		login: (data) => {
			return http.request({
				url: 'user/login',
				method: 'POST',
				data
			})
		}
	}

export default apiList