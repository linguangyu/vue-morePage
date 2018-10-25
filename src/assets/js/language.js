import Vue from 'vue'
import VueI18n from 'vue-i18n'
import LangEn from '../../assets/lang/en'
import LangZhCHS from '../../assets/lang/zhCHS'
import LangZhCHT from '../../assets/lang/zhCHT'
Vue.use(VueI18n) // 通过插件的形式挂载

export  const i18n = new VueI18n({
    locale: 'zhCHT', // 语言标识
    messages:{
        'en': LangEn,
        'zhCHS': LangZhCHS,
        'zhCHT': LangZhCHT
    }
})