--- 
title: table 
---
# 表格
## 列
``` html
<el-table-column type="index" label="序号" width="50" ></el-table-column>
<el-table-column width="40" align="center" type="selection"></el-table-column>
<el-table-column v-for="(item,index) in goodProps" :key="index" :prop="item.value" :label="item.label" align="center" min-width="100"></el-table-column>
<el-table-column prop="num" label="操作" align="left">
	<template slot-scope="scope">
	   <el-button type="text" @click="showDialog('edit')">修改</el-button>
	   <el-button type="text" @click="delete">删除</el-button>
	</template>
</el-table-column>
```
## 排序
### 表格数据排序
``` js
//https://www.cnblogs.com/steamed-twisted-roll/p/11069821.html
//<el-table-column :sortable="true"  :sort-method="(a,b) => sort(a ,b , 'money')">
sort(obj1, obj2, column){
    var at = Number(obj1[column])
　　var bt = Number(obj2[column])
　　// console.log(at, bt)

　　if (at > bt) {
    　　return 1
　　} else {
    　　return -1
　　}
},
```
### 监听排序方式
``` js
// <el-table @sort-change="sortChange"> 
//     <el-table-column prop="prescCount" label="处方数量" sortable="custom" >
sortChange(val){
	console.log(val)
	let {prop,order}=val
	let myOrder=order=='ascending'?1:0
	if(prop=='prescCount'){
	    this.prescCountSort=myOrder
	    this.medicineCountSort=''
	    this.moneySort=''
	}else if(prop=='medicineCount'){
	    this.medicineCountSort=myOrder
	    this.prescCountSort=''
	    this.moneySort=''
	}else{
	    this.moneySort=myOrder
	    this.prescCountSort=''
	    this.medicineCountSort=''
	}
	this.search(1)
},
```
##  内容过多显示tip
show-overflow-tooltip 

## 列显示前90字
``` html
<template slot-scope="scope" >
    <el-tooltip placement="top" v-if="scope.row.replyReason.length>90">
		<div slot="content" style="max-width:500px">{{scope.row.replyReason}}</div>
		<div>{{scope.row.replyReason.slice(0,90)}}...</div>
    </el-tooltip>
    <span v-else >{{scope.row.replyReason}}</span>
</template>
```

## 表头样式设置
``` html
:header-cell-style="{background:'#eef1f6',color:'#606266'}"
```
## 先显示暂无数据 之后再加载数据 问题
``` html
<el-table 
  v-loading="loading" 
<!--   element-loading-text="拼命加载中"
  element-loading-spinner="el-icon-loading" 
  element-loading-background="rgba(255, 255, 255, 0.4)" -->
>
	<template slot="empty"> 
		<div v-if="loading"> </div> 
		<div v-else> 暂无数据 </div>
	</template>
</el-table>
```

## table列错位问题
原因：使用了fixed属性
``` js
//方法一：可以解决element table的列错位问题
/deep/.el-table--border th.gutter:last-of-type {
    display: table-cell !important;
}
 //或者 app.vue中添加以下样式
<style>
body .el-table th.gutter {
  display: table-cell !important;
}
body .el-table colgroup.gutter {
  display: table-cell !important;
}
</style>

//方法二：拿到数据请求结果后，使用element table doLayout方法进行强制重新渲染
setTimeout(() => {
    this.$nextTick(() => {
        this.$refs.table.doLayout()
    })
}, 300)
```
## 全选效果
``` html
<el-checkbox v-model="checkAll" @change="doCheckAll">全选</el-checkbox>
<el-table ref="table" id="myTable" :data="tableData" height="400" border stripe 				@selection-change="selectChange" :header-cell-style="{ background: '#F5F5F5' }">
	<el-table-column type="selection" width="55"></el-table-column>
	<el-table-column prop="organName" label="片区名称"></el-table-column>
</el-table>
```
``` js
doCheckAll(val){
	let elSelectAll=document.querySelectorAll('#myTable .el-table-column--selection')
	// let list=document.querySelectorAll('#myTable input[type="checkbox"]')
	if(this.$refs.table&&elSelectAll){
		this.$refs.table.clearSelection()
		if(val){
			this.$refs.table.toggleAllSelection()
			for(let i of elSelectAll){
				// i.setAttribute('disabled', 'disabled');
				i.style.pointerEvents='none'
			}
		}else{
			for(let i of elSelectAll){
				i.style.pointerEvents=''
			}
		}
	}
},
//翻页后全选表格
getTableData(){
	this.$api.drugService_queryPost(p).then(res =>{
		this.tableData = res.rows
		this.total = res.total || 0
		this.$nextTick(()=>{
			this.doCheckAll(this.checkAll)
		})
	})
},
```
