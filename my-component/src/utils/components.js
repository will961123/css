import Vue from 'vue'
import loadingComponent from '../components/will-loading.vue'
import tostComponent from '../components/will-tost.vue'
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



/**
 * tost
 */
const TostConstructor = Vue.extend(tostComponent)
const instance_Tost = new TostConstructor({
    el: document.createElement('div')
})
instance_Tost.show = false // 默认隐藏
var TostTimer = null
const tost = {
    showTost(options = {}) {
        clearTimeout(TostTimer)
        TostTimer = setTimeout(() => {
            instance_Tost.show = false
        }, options.time || 3000); 
        instance_Tost.show = true
        instance_Tost.content = options.content || ''
        instance_Tost.mask = options.mask || false
        document.body.appendChild(instance_Tost.$el)
    },
    hideTost() {
        clearTimeout(TostTimer)
        instance_Tost.show = false
    }
}

//需要向外暴露的插件对象
let will_components = {};
//插件对象必须要有 install()
will_components.install = function (Vue) {
    if (!Vue.$loading) {
        Vue.$loading = loading
    }
    if (!Vue.$tost) {
        Vue.$tost = tost
    }
    Vue.mixin({
        beforeCreate() {
            instance_Loading.show = false
            instance_Tost.show = false
        },
        created() {
            this.$loading = Vue.$loading
            this.$tost = Vue.$tost
        }
    })
};
export default will_components