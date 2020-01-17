import Vue from 'vue'
import loadingComponent from '../components/will-loading.vue'

/**
 * loading
 */
const LoadingConstructor = Vue.extend(loadingComponent)
const instance_Loading = new LoadingConstructor({
    el: document.createElement('div')
})
instance_Loading.show = false // 默认隐藏
const loading = {
    showLoading(options = {}) {
        instance_Loading.show = true
        instance_Loading.content = options.content || ''
        instance_Loading.mask = options.mask || false

        document.body.appendChild(instance_Loading.$el)
    },
    hideLoading() {
        instance_Loading.show = false
    }
}

//需要向外暴露的插件对象
let will_components = {};
//插件对象必须要有 install()
will_components.install = function (Vue) {
    if (!Vue.$loading) {
        Vue.$loading = loading
    }
    Vue.mixin({
        created() {
            this.$loading = Vue.$loading
        }
    })
};
export default will_components