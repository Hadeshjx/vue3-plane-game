// 根组件

import {defineComponent,h} from '@vue/runtime-core'


export default defineComponent({
    render(){
        // 创建 vnode
        // const vnode = h('rect',{x:100,y:100},"我的头发是真的！") 等价于下面
        // <rect x=100 y=100>我的头发是真的！<rect>
        const vnode = h('rect',{x:100,y:100},[
            "我的头发是真的！",
            h("circle",{x:150,y:150})
        ])
        return vnode
    }
})