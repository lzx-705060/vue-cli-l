import Vue from 'vue'
import Mint '../../static/assets/mint.js'
import MintCss from '../../static/assets/mint.css';
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
