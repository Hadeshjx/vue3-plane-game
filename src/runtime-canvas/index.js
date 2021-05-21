import { createRenderer } from '@vue/runtime-core'

const renderer = createRenderer({
    createElement(type){

    },
    insert(el,parent){
        
    }
})

export function createApp (rootComponent) {
    return renderer.createApp(rootComponent)
}