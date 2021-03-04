<style scoped>
    .container{
        position: fixed;
        width: 100%;
        filter: opacity(0.2);
        z-index: 10;
        pointer-events: none;
    }
    .switch{
        position: fixed;
        right:5px;
        top:80%;
        z-index: 11;
    }
    
</style>
<template>
    <span>
        <div class="container" v-show="showImg" :style="{height:height+'px',background:'url('+$page.url+')'}">
        </div>
        <el-switch
            class="switch"
            v-model="showImg"
            active-text="背景"
            inactive-text="纯净">
        </el-switch>
    </span>
</template>

<script>
import { url } from '@dynamic/constants'

    export default {
        props: {
            data: {
                type: String,
                default: '',
            },
        },
        mounted() {
            console.log('BackgroundImg',url)
        },
        beforeRouteUpdate (to,from,next){
            console.log('beforeRouteEnter',this)
            next()
        },
        data(){
            return{
                showImg:true,
                list:[
                    'https://imglf5.nosdn.127.net/img/MmU4dzhkalUyS3ZaWXY3YzJxejdZNjF5c2t4UFRXTkwxRXNXbUNwdzFSYWpoM3NuSEZxbTF3PT0.jpg?imageView&thumbnail=2664y2000&type=jpg&quality=96&stripmeta=0&type=jpg',
                    'https://imglf6.nosdn.127.net/img/d0lIKy8yVTQvWlZta1ZLaUIzRFJUMmFQVUI3K1pIamFyOUtya2RHR0Q2eHpSKzZ6bnQySWdBPT0.jpg?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg',
                    'https://lofter.lf127.net/1611802734076/tata.gif?imageView&stripmeta=0&thumbnail=2000x2000&tostatic=0',
                    'https://lofter.lf127.net/1611802494106/JimmyhE.jpg?imageView&type=jpg&quality=80&stripmeta=0&thumbnail=4000x4000'
                ],
                index:0,
                height:1000
            }
        },
        computed:{

        },
        methods: {
           changeImg(){
               this.index=Math.floor(Math.random() * this.list.length)
           },
        },
        
    }
</script>
