<style scoped>
    .container{
       position: static;
       width: 100%;
       height: 100%;
       margin: 0;

    }
    
</style>
<template>
    <div class="container" :style="{background:'url('+list[index]+')'}">
        
    </div>
</template>

<script>
    export default {
        props: {
            data: {
                type: String,
                default: ''
            },
        },
        mounted() {
            this.index=Math.floor(Math.random() * this.list.length)
            console.log('ViewImg.vue')
        },
        data(){
            return{
                list:[
                    'https://imglf5.nosdn.127.net/img/MmU4dzhkalUyS3ZaWXY3YzJxejdZNjF5c2t4UFRXTkwxRXNXbUNwdzFSYWpoM3NuSEZxbTF3PT0.jpg?imageView&thumbnail=2664y2000&type=jpg&quality=96&stripmeta=0&type=jpg',
                    'https://imglf6.nosdn.127.net/img/d0lIKy8yVTQvWlZta1ZLaUIzRFJUMmFQVUI3K1pIamFyOUtya2RHR0Q2eHpSKzZ6bnQySWdBPT0.jpg?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg',
                    'https://lofter.lf127.net/1611802734076/tata.gif?imageView&stripmeta=0&thumbnail=2000x2000&tostatic=0',
                    'https://lofter.lf127.net/1611802494106/JimmyhE.jpg?imageView&type=jpg&quality=80&stripmeta=0&thumbnail=4000x4000'
                ],
                index:0,
            }
        },
        computed:{

        },
        methods: {
           
        },
        
    }
</script>
