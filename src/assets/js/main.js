import Vue from 'vue'
import Mint from 'mint-ui';
//公用样式
import '../../assets/css/normalize.css'
//自适应页面
import '../../assets/hader.js'
//公用方法
import * as common from './common.js'

Vue.use(Mint);
Vue.prototype.$config = common;

