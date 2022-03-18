<style lang="stylus" scoped>
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
    .iframe{
        position: fixed;
        right:5px;
        top:30%;
        z-index: 11;
        .control{
            display: flex;
            justify-content: space-around;
        }
    }
    
</style>
<template>
    <span>
        <div class="container" v-show="false" :style="{filter:'opacity('+opacity/100+')',background:'url('+$page.url+')', backgroundSize: 'cover'}">
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
            active-text="Music"
        >
        </el-switch>
        <!-- <iframe v-show="showMusic" frameborder="no" border="0" marginwidth="0" marginheight="0" width=294 height=440 src="//music.163.com/outchain/player?type=0&id=377079922&auto=1&height=430"></iframe> -->
        <div v-show="showMusic" class="iframe">
            <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 :src="musics[playIndex].url"></iframe>
            <div class="control">
                <el-link :disabled="playIndex==0" @click="changeMusic('before')">上一首</el-link>
                <el-link :disabled="playIndex==musics.length-1" @click="changeMusic('after')">下一首</el-link>
            </div>
        </div>

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
                showMusic:false,
                musics:[
                    {name:'爱的可能',url:'//music.163.com/outchain/player?type=2&id=309615&auto=1&height=66'},
                    {name:'明天你好',url:'//music.163.com/outchain/player?type=2&id=1814698486&auto=1&height=66'},
                    {name:'恋人心',url:'//music.163.com/outchain/player?type=2&id=421110129&auto=1&height=66'},//备用 //music.163.com/outchain/player?type=2&id=1386977095&auto=1&height=66
                    {name:'化身孤岛的鲸',url:'//music.163.com/outchain/player?type=2&id=1409607433&auto=1&height=66'},
                ],
                playIndex:0,
                opacity: 10,
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
            changeMusic(type){
                if(type=='after'){
                    if(this.playIndex<this.musics.length-1){
                        this.playIndex+=1
                    }
                }else{
                    if(this.playIndex>0){
                        this.playIndex-=1
                    }
                }
            },
            changeImg(){
                this.index=Math.floor(Math.random() * this.list.length)
            },
        },
        
    }
</script>
