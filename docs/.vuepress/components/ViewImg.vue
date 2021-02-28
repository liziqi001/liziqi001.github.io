<style scoped>
    .container>>>table{
        margin: 0;
        display: '';
    }
    
</style>
<template>
    <div class="container">
        <div class="demo-image__preview">
            <el-image 
                style="width: 500px; height: 300px"
                :src="data" 
                :preview-src-list="[data]">
            </el-image>
        </div>
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
            console.log('ViewImg.vue')

        },
        data(){
            return{
                
            }
        },
        computed:{

        },
        methods: {
           
           
        },
        
    }
</script>
