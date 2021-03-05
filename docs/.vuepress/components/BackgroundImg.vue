<style scoped>
    .container{
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 10;
        pointer-events: none;
    }
    .switch{
        position: fixed;
        right:5px;
        top:calc(30% - 20px);
        z-index: 11;
    }
    .slider{
        position: fixed;
        right:5px;

        top:calc(30% + 450px);
        z-index: 11;
    }
    iframe{
        position: fixed;
        right:5px;
        top:30%;
        z-index: 11;
    }
    
</style>
<template>
    <span>
        <div class="container"  :style="{filter:'opacity('+opacity/100+')',background:'url('+$page.url+')'}">
        </div>
        <el-slider
            class="slider"
            v-model="opacity"
            vertical
            :step="5"
            height="180px"
            :show-tooltip="false"
        >
        </el-slider>

        <el-switch
            class="switch"
            v-model="showMusic"
            active-text="歌单"
            inactive-text="隐藏">
        </el-switch>
        <iframe v-show="showMusic" frameborder="no" border="0" marginwidth="0" marginheight="0" width=294 height=440 src="//music.163.com/outchain/player?type=0&id=377079922&auto=1&height=430"></iframe>
    </span>
</template>

<script>
import { url } from '@dynamic/constants'

    export default {
        // props: {
        //     data: {
        //         type: String,
        //         default:''
        //     },
        // },
        mounted() {
            console.log('BackgroundImg',url)
        },
        beforeRouteUpdate (to,from,next){
            console.log('beforeRouteEnter',this)
            next()
        },
        data(){
            return{
                showMusic:true,
                opacity: 15,
                // list:[
                //     'https://imglf5.nosdn.127.net/img/MmU4dzhkalUyS3ZaWXY3YzJxejdZNjF5c2t4UFRXTkwxRXNXbUNwdzFSYWpoM3NuSEZxbTF3PT0.jpg?imageView&thumbnail=2664y2000&type=jpg&quality=96&stripmeta=0&type=jpg',
                //     'https://imglf6.nosdn.127.net/img/d0lIKy8yVTQvWlZta1ZLaUIzRFJUMmFQVUI3K1pIamFyOUtya2RHR0Q2eHpSKzZ6bnQySWdBPT0.jpg?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg',
                //     'https://lofter.lf127.net/1611802734076/tata.gif?imageView&stripmeta=0&thumbnail=2000x2000&tostatic=0',
                //     'https://lofter.lf127.net/1611802494106/JimmyhE.jpg?imageView&type=jpg&quality=80&stripmeta=0&thumbnail=4000x4000'
                // ],
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
