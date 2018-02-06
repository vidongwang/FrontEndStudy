import Vue from 'vue'
import App from './App.vue'

import './assets/styles/common.styl'

const root = document.createElement('div')
document.body.appendChild(root)

// const root = document.getElementById('vue')

new Vue({
    render:(h) => h(App)
}).$mount(root)