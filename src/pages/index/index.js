// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import index from './index.vue'
import Main from '../../assets/js/main'
import * as language from '../../assets/js/language'
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
    el: '#index',
    i18n:language.i18n,
    components: { index },
    template: '<index/>'
})
