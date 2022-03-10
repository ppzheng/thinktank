<template>
    <cover-view class="tabbar" :style="{'padding-bottom': paddingBottomHeight + 'rpx'}">
        <cover-view class="tabbar-item"
            v-for="(item, index) in list" 
            :key="index" 
            @click="tabbarChange(item.path)"
        >
            <cover-image class="item-img" :src="item.icon_a" v-if="current == index"></cover-image>
            <cover-image class="item-img" :src="item.icon" v-else></cover-image>
            <cover-view class="item-name" :class="{'tabbarActive': current == index}" v-if="item.text">{{item.text}}</cover-view>
        </cover-view>
    </cover-view>
</template>

<script>
export default {
    props: {
        current: String
    },
    data() {
        return {
            paddingBottomHeight: 0,  //苹果X以上手机底部适配高度
            list: [{
                    text: 'home',  
                    icon: '/static/images/home.png',  //未选中图标
                    icon_a: '/static/images/homeSelected.png',  //选中图片
                    path: "pages/index/index",  //页面路径
                },{
                    text: 'tools',
                    icon: '/static/images/tools.png',
                    icon_a: '/static/images/toolsSelected.png',
                    path: "pages/index/index",
                }
                ,{
                    text: 'mine',
                    icon: '/static/images/mine.png',
                    icon_a: '/static/images/mineSelected.png',
                    path: 'pages/index/index',
                }
            ]
        };
    },
    created() {
        let that = this;
        uni.getSystemInfo({
            success: function (res) {
                let model = ['X', 'XR', 'XS', '11', '12', '13', '14', '15'];
                model.forEach(item => {
                    //适配iphoneX以上的底部，给tabbar一定高度的padding-bottom
                    if(res.model.indexOf(item) != -1 && res.model.indexOf('iPhone') != -1) {
                        that.paddingBottomHeight = 40;
                    }
                })
            }
        });
    },
    methods: {
        tabbarChange(path) {
            uni.switchTab({
                url: path
            })
        }
    }
};