
<template>
    <div :class="wrapCls" @touchstart="handleTouch" @touchend="handleTouch">
        <div v-if="$slots.thumb || thumb" :class="prefixCls+'-thumb'">
            <slot name="thumb">{{thumb}}</slot>
        </div>
        <div :class="lineCls">
            <div :class="prefixCls+'-content'">
                <slot></slot>
            </div>
            <div v-if="$slots.extra || extra" :class="prefixCls+'-extra'">
                <slot name="extra">{{extra}}</slot>
            </div>
            <div v-if="arrow" :class="arrowCls" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListItem',
    data: function() {
        return {
            prefixCls: 'am-list',
            clicked: false,
        }
    },
    props: {
        align: {
            type: String,
            default: 'middle'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        line: String,//-line,-line-multiple,-line-wrap
        arrow: String,//horizontal,down,up,

        thumb: Object,//可是是缩略图，文字
        extra: Object,
        active: { //是否有点击效果
            type: Boolean,
            default: false
        },
    },
    computed: {
        wrapCls() {
            let {
                prefixCls,
                align,
                disabled,
                clicked
            } = this;
            let classObj = {};
            classObj[prefixCls + '-item'] = true;
            classObj[prefixCls + '-item-disabled'] = disabled;
            classObj[prefixCls + '-item-' + align] = align;//top,middle,bottom

            classObj[prefixCls + '-item-active'] = clicked;
            return classObj;
        },
        lineCls() {
            let {
                prefixCls,
                line
            } = this;
            let classObj = {};
            classObj[prefixCls + '-line'] = true;
            classObj[prefixCls + '-line-' + line] = line;//multiple,wrap
            return classObj;
        },
        arrowCls() {
            let {
                prefixCls,
                arrow
            } = this;
            let classObj = {};
            classObj[prefixCls + '-arrow'] = true;
            classObj[prefixCls + '-arrow-' + arrow] = arrow;//horizontal,vertical,vertical-up
            return classObj;
        },
    },
    methods: {
        handleTouch() {
            if (!this.disabled && this.active) {
                this.clicked = !this.clicked;
            }
        }
    }
}
</script>