<template>
    <div id="aa" v-cloak>
        <a href="cell.html">{{ $t("message.hello") }}</a>
        <div @click="aaaa"> cccccccccccc</div>
        <div @click="zt('zhCHS')">中文</div>
        <div @click="zt('en')">英文</div>
        <div @click="zt('zhCHT')">繁体</div>

    </div>
</template>

<script>

    export default {
        name: 'index',
        components: {
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
