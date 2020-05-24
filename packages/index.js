// 1.整个包的入口
// 2.导入需要发布的组件
import picLayout from './picLayout.vue'
import panel from './panel.vue'

// 3.导入所需要的样式文件,一般是导入字体文件的样式,除非还有组件中没有引用的样式

// 注册一个组件列表(需要注册多个组件时使用),方便后面循环注册组件
const components = [picLayout, panel]

// 4.定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
//    这里就是要暴露一个install出去,在总的入口文件中用vue.ues(名字,因为是xport default名字是可以自己随便取的)注册全局组件
const install = function(Vue) {
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
// !!!这下面是单个组件注册的方法,和多个不一样的地方就是  插件是一个对象,提供install方法..上面插件是多个组件,就是一个方法
//                                    方法就必须将Vue作为一个参数传入(参考官网vue.ues对比)
// import HmSwitch from './src/switch'
// HmSwitch.install = function (Vue) {
//   Vue.component(HmSwitch.name, HmSwitch)
// }
// export default HmSwitch

// 5.  判断是否是直接引入文件(不是很清除,复制好了)
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 6.
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install
  // // 以下是具体的组件列表,,估计是需要按需引入才这样
  // ColorPicker,
  // Button,
  // Dialog,
  // Input,
  // Checkbox,
  // Radio,
  // Switch
}
