<style lang="stylus" scoped>

    
</style>
<template>
    <div class="container">
        <div style="text-indent:0;">
            <el-table ref="table" :data="data" border max-height="520" >
                <el-table-column type="index" label="序号" width="60"></el-table-column>
                <el-table-column 
                    v-for="(item,index) in myProps" 
                    :key="index" 
                    :prop="item.label" 
                    :label="item.label" 
                    align="center"
                    :width="item.width>450?450:item.width<80?80:item.width"
                    :show-overflow-tooltip="item.width>200?true:false"
                >
                    <template slot="header" slot-scope="scope">
                        <span :title="scope.column.label">{{scope.column.label.length>4?scope.column.label.substr(0,4)+'...':scope.column.label}}</span> 
                    </template>
                    <template slot-scope="scope" >
                        <span v-if="html" v-html="scope.row[item.label]"></span> 
                        <span v-else>{{scope.row[item.label]}}</span> 
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
            html: {
                type: Boolean,
                default: false
            },
        },
        data(){
            return{
                
            }
        },
        computed:{
            myProps(){
                let keys=Object.keys(this.data[0])
                let list=[]
                for(let i of keys){
                    let context=this.data[0][i]
                    // let isNumOrLetter=/^[A-Za-z0-9.:/]+$/.test(context) 判断有符号
                    // let step=isNumOrLetter?8:18
                    let zwLen=context.replace(/[^\u4e00-\u9fa5]/gi,"").length//提取中文
                    let ywLen=context.length-zwLen
                    list.push({label:i,width:zwLen*24+ywLen*16})
                }
                return list
            }
        },
        mounted() {
            console.log('MyTable.vue')

        },
        methods: {
           
        },
        watch:{
            myProps:{
                handler:function(){
                    this.$nextTick(()=>{
                        console.log('更新表格',this)
                        this.$refs.table.doLayout();
                    })
                },
                immediate:true
            }
        },
        
    }
</script>
