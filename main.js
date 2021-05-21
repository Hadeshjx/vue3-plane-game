import {createApp} from './src/runtime-canvas/index'
import App from "./src/App"

import {getRootContainer} from './src/Game'

createApp(App).mount(getRootContainer())