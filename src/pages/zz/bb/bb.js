// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import bb from './bb.vue'
import Main from '../../../assets/js/main'
import * as language from '../../../assets/js/language'
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
    el: '#bb',
    i18n:language.i18n,
    components: { bb },
    template: '<bb/>'
})
