import { createRenderer } from '@vue/runtime-core'

const renderer = createRenderer({
    createElement(type){
        // 绘制一个矩形
        let element
        if(type== 'rect'){
            element = new Graphics()
            element.beginFill('0xff0000')
            element.drawRect(0,0,500,500)
            element.endFill()
        }else if(type== 'circle'){
            element = new Graphics()
            element.beginFill('0x00ff00')
            element.drawCircle(0,0,50)
            element.endFill()
        }
        return element
    },
    setElementText(node,text){
        const cText = new Text(text)
        node.addChild(cText)
    },
    createText(text){
        return new Text(text)
    },
    patchProp(el,key,preValue,nextValue){
        el[key] = nextValue
    },
    insert(el,parent){
        parent.addChild(el)
    }
})

export function createApp (rootComponent) {
    return renderer.createApp(rootComponent)
}