<style scoped>
    .container>>>table{
        margin: 0;
        display: '';
    }
    
</style>
<template>
    <div class="container">
        <div style="text-indent:0;">
            <el-table :data="data" style="width: 100%" border max-height="520" >
                <el-table-column type="index" label="序号" width="60" ></el-table-column>
                <el-table-column 
                    v-for="(item,index) in props" 
                    :key="index" 
                    :prop="item.label" 
                    :label="item.label" 
                    align="center"
                    :min-width="item.width>90?item.width:90"
                    :show-overflow-tooltip="item.width>200?true:false"
                >
                    <template slot-scope="scope">
                        {{scope.row[item.label]}}
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
        },
        data(){
            return{
                
            }
        },
        computed:{
            props(){
                let keys=Object.keys(this.data[0])
                let list=[]
                for(let i of keys){
                    let context=this.data[0][i]
                    let isNumOrLetter=/^[A-Za-z0-9.:/]+$/.test(context)
                    let step=isNumOrLetter?8:18
                    list.push({label:i,width:step*context.length})
                }
                return list
            }
        },
        mounted() {
            console.log('table.vue')

        },
        methods: {
           
           
        },
        
    }
</script>
