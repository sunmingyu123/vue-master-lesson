import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'
// 可算逮着你了 入口 从这开始看
function Vue (options) {
  // 从哪来 一定是原型链上的
  this._init(options)
}
// initGlobalAPI
// 初始化
// initLifecycle(vm)
// // 事件
// initEvents(vm)
// // 渲染
// initRender(vm)
// // 生命周期钩子
// callHook(vm, 'beforeCreate')
// // injections
// initInjections(vm) // resolve injections before data/props
// // state
// initState(vm)
// // provide
// initProvide(vm) // resolve provide after data/props
// // 生命周期
// callHook(vm, 'created')
// // new Vue({
// //   el:'#id'
// // })
// // 如果new的时候有el ，就调用$mount ， 和咱们手动调用$mount是一个意思
// if (vm.$options.el) {
//   // ￥mount负责挂载
//   vm.$mount(vm.$options.el)
// }
initMixin(Vue)
// 初始化state
// Vue.prototype.$set = set
// Vue.prototype.$delete = del

// Vue.prototype.$watch = function (
stateMixin(Vue)
// 事件
// $on,$emit,$oncr $off 和咱们自己写的class bus没有本质区别
// $$emit出发当前组件的事件
eventsMixin(Vue)
// 生命周期
// _update  ！！！！！！重点逻辑
// forceUpdate
// destroy
lifecycleMixin(Vue)


// 渲染
// nextTick
// _render ！！！！ 渲染 初始化
renderMixin(Vue)

export default Vue
