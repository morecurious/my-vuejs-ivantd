<template>
    <div id="vue-content">
        <div class="am-demo-page">
            <div class="am-demo-hd">
                <h1 class="am-demo-title">
                    <span>Vue Mobile</span>
                </h1>
                <h2 class="am-demo-subtitle">
                    <span>金服移动端组件库体验实例</span>
                </h2>
            </div>
            <div class="am-demo-bd">
                <div class="am-list " :class="{'category-closed':!i1.expand,'category-open':i1.expand}" v-for="(i1,i) in dataList" :key="i">
                    <div class="am-list-header" @click="clickTriggerOpen(i)">
                        <div class="am-demo-category">
                            <div class="am-demo-category-name" v-text="i1.name"></div>
                            <div class="am-demo-category-arrow">
                                <span>
                                    <v-icon type="down" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="am-list-body">
                        <div class="am-list-item am-list-item-middle" v-for="(j1,j) in i1.children" :key="j" @click="goto(j1.path)">
                            <div class="am-list-line">
                                <div class="am-list-content" v-text="j1.name">
                                </div>
                                <div class="am-list-arrow am-list-arrow-horizontal"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const dataList = [{
    name: '布局 Layout',
    children: [{
        name: 'Layout 基础布局',
        path: 'flex',
    }, {
        name: 'WhiteSpace 上下留白',
        path: 'whiteSpace',
    }, {
        name: 'WingBlank 两翼留白',
        path: 'wingBlank',
    }]
},{
    name: '导航 Navigation',
    children: [
    //     {
    //     name: 'TabBar 标签栏',
    //     path: 'tabbar',
    // },
    {
        name: 'Tabs 标签',
        path: 'tabs',
    }, {
        name: 'Popup',
        path: 'popup',
    }]
}, {
    name: '数据录入 Data Entry',
    children: [{
        name: 'Button 按钮',
        path: 'button',
    },{
        name: 'Checkbox 复选框',
        path: 'checkbox',
    },{
        name: 'Radio 单选选框',
        path: 'radio',
    },{
        name: 'Switch 单选选框',
        path: 'switch',
    }
    // ,{
    //     name: 'ImagePicker 图片选择上传',
    //     path: 'imagePicker',
    // }
    // ,{
    //     name: 'PickerView',
    //     path: 'pickerView',
    // }
    ]
}, {
    name: '数据展示 Data Display',
    children: [{
        name: 'Badge 微标数',
        path: 'badge',
    }, {
        name: 'Grid 宫格',
        path: 'grid',
    }, {
        name: 'Icon 图标',
        path: 'icon',
    }, {
        name: 'List 列表',
        path: 'list',
    }, {
        name: 'Card 卡片',
        path: 'card',
    }]
}, {
    name: '操作反馈 Feedback',
    children: [{
        name: 'Progress 进度条',
        path: 'progress',
    },{
        name: 'LoadingBar 加载进度条',
        path: 'loadingBar',
    }, {
        name: 'ActivityIndicator 活动指示器',
        path: 'activityIndicator',
    }, {
        name: 'Toast 轻提示',
        path: 'toast',
    }, {
        name: 'Modal 对话框',
        path: 'modal',
    }]
}]
export default {
    name: 'IndexDemo',
    data: function() {
        return {
            dataList: dataList
        }
    },
    methods: {
        clickTriggerOpen(i) {
            this.setOpen(i, !this.dataList[i].expand);
        },
        setOpen(index, status = true) {
            this.$set(this.dataList[index], 'expand', status);
        },
        goto(path) {
            this.$router.push({
                path
            })
        }
    }
}
</script>

<style scoped>

</style>