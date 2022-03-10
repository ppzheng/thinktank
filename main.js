import Vue from 'vue'
import App from './App'
import store from './store'
import * as Api from './api/api.js'
import uView from 'uview-ui'

Vue.use(uView)
uni.$u.config.unit = 'rpx'

Vue.prototype.$api = Api;

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}
Vue.prototype.$adpid = "1111111111"

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
