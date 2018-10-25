<template>
    <div id="index" v-cloak>
        <a href="cell.html">{{ $t("message.hello") }}</a>
        <div @click="aaaa"> aaaa</div>
        <div @click="zt('zhCHS')">中文</div>
        <div @click="zt('en')">英文</div>
        <div @click="zt('zhCHT')">繁体</div>
        <!--<mt-swipe :auto="4000">-->
            <!--<mt-swipe-item>1</mt-swipe-item>-->
            <!--<mt-swipe-item>2</mt-swipe-item>-->
            <!--<mt-swipe-item>3</mt-swipe-item>-->
        <!--</mt-swipe>-->
        <!--<HelloWorld/>-->
    </div>
</template>

<script>
    import HelloWorld from '../../components/HelloWorld'

    export default {
        name: 'index',
        components: {
            HelloWorld
        },
        mounted() {
            if(localStorage.getItem('lan')){
                this.$i18n.locale=localStorage.getItem('lan')
            }
        },
        methods:{
            zt(name){
                localStorage.setItem('lan',name)
                this.$i18n.locale=name
            },
            aaaa(){
                //执行公用方法
               // console.log(this.$config.getElementByAttr('11'))
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
