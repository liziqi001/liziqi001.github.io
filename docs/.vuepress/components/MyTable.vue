<style lang="less" scoped>
   
    
</style>
<template>
    <div class="container">
        <div style="text-indent:0;">
            <el-table :data="data" style="width: 100%" border stripe  max-height="520" >
                <el-table-column type="index" label="序号" width="50" ></el-table-column>
                <el-table-column v-for="(item,index) in props" :key="index" :prop="item.value" :label="item.label" align="center">
                    <template slot-scope="scope">
                        {{scope.row[item.value]}}
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
         props: {
            data: {
                type: Array,
                default: []
            },
            props: {
                type: Array,
                default: []
            },
        },
        data(){
            return{
                
            }
        },
        computed:{
        },
        mounted() {
            console.log('table.vue')

        },
        methods: {
           
           
        },
        
    }
</script>
