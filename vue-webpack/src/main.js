import Vue from 'vue'
import App from './App.vue'

import './assets/styles/common.css'
import './assets/styles/common.styl'
import './assets/images/wx.png'

// const root = document.createElement('div')
// document.body.appendChild(root)

const root = document.getElementById('app')

new Vue({
    render:(h) => h(App)
}).$mount(root)