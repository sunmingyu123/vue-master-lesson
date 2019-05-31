

// const routes = [
//     { path: '/', component: Home },
//     { path: '/book', component: Book },
//     { path: '/movie', component: Movie }
// ]

// const router = new VueRouter(Vue, {
//     routes
// })

// new Vue({
//     el: '#app',
//     router
// })

class KVueRouter {
    constructor(Vue, options) {
        this.$options = options
        this.routeMap = {}
        // 借用Vuejs的响应式
        this.app = new KVue({
            data: {
                current: '#/'
            }
        })

        this.init()
        this.createRouteMap(this.$options)
        this.initComponent(Vue)
    }

    // 初始化 hashchange
    init() {
        window.addEventListener('load', this.onHashChange.bind(this), false)
        window.addEventListener('hashchange', this.onHashChange.bind(this), false)
    }
    // 初始化路由映射表
    createRouteMap(options) {
        options.routes.forEach(item => {
            this.routeMap[item.path] = item.component
        })
    }

    // 注册组件
    initComponent(Vue) {
        Vue.component('router-link', {
            props: {
                to: String
            },
            template: '<a :href="to" ><slot></slot></a>'
        })

        const _this = this
        Vue.component('router-view', {
            render(h) {
                var component = _this.routeMap[_this.app.current]
                return h(component)
            }
        })
    }
    getHash() {
        return window.location.hash.slice(1) || '/'
    }

    onHashChange() {
        this.app.current = this.getHash()
    }
}