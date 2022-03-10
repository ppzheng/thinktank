
import * as db from './db.js'
//后台路径
const apiBaseUrl = ''
import {request} from '@/config/request.js'
const post = (url, data) => {
	uni.showLoading({
		title: '加载中'
	});
	var header={
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded', //自定义请求头信息
		}
	header=setHeader(header);
	return request({
		url: apiBaseUrl + url,
		data: data,
		header:header,
		method: 'POST'
	});
}

const get = (url, data) => {
	uni.showLoading({
		title: '加载中'
	});
	var header={
			'Accept': 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded', //自定义请求头信息
		}
	header=setHeader(header)
	return request({
		url: apiBaseUrl + url,
		data:data,
		header:header,
		method: 'GET'
	});
}
const setHeader = header => {
	let userToken = db.get("userToken");
	if (userToken) {
	  header[ 'X-Access-Token' ] = userToken // 让每个请求携带自定义 token 请根据实际情况自行修改
	}
	return header
}

//put
const put = (url, data) => {
	uni.showLoading({
		title: '加载中'
	});
	var header={
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
	header=setHeader(header);
	
	return request({
		url: apiBaseUrl + url,
		data: data,
		header:header,
		method: 'PUT'
	});

}
// 普通上传图片
export const uploadImage = (num, callback) => {
	var header={
			'Accept': 'application/json',
			'Content-Type': 'multipart/form-data',
			// 'Content-Type': 'application/x-www-form-urlencoded', //自定义请求头信息
		}
	header=setHeader(header);
	uni.chooseImage({
		count: num,
		success: (res) => {
			uni.showLoading({
				title: '上传中...'
			});
			let tempFilePaths = res.tempFilePaths
			for (var i = 0; i < tempFilePaths.length; i++) {
				uni.uploadFile({
					url: apiBaseUrl + '/web-api' +'/sys/common/upload',
					filePath: tempFilePaths[i],
					fileType: 'image',
					name: 'file',
					header: header,
					formData: {
						'method': 'images.upload',
						'upfile': tempFilePaths[i]
					},
					success: (uploadFileRes) => {
						console.log(uploadFileRes)
						callback();
					},
					fail: (error) => {
						if (error && error.response) {
							showError(error.response);
						}
					},
					complete: () => {
						setTimeout(function() {
							uni.hideLoading();
						}, 250);
					},
				});
			}
		}
	});
}


export {post,get}
