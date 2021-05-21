// 根组件

import {defineComponent,h} from '@vue/runtime-core'


export default defineComponent({
    render(){
        // 创建 vnode
        const vnode = h('div')
        console.log(vnode)
        return vnode
    }
})