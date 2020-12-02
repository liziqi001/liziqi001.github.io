--- 
title: form 
---
# 表单
## 一般页面
``` html 
<div style="margin-top:20px">
    <el-button type="primary" @click="submit">提交</el-button>
	<el-button  @click="$router.go(-1)">取消</el-button>
</div>
```
## 表单标签
``` html 
<el-form ref="storeForm" :model="storeDialogForm" :rules="ruleValidate_store" label-width="100px" size="mini">
    <el-form-item :rules="{}"></el-form-item>
</el-form>
```
## 清空
``` js 
this.$refs['deliveryForm'].clearValidate()
```
## 表单验证
``` js 
ruleValidate(){
	if(this.organDialogEditLevel!=0){
	    return {
		name: [{required: true, message: '请输入', trigger: 'blur' ,}],
		organ:[{
		    required: true, message: '请下拉选择', trigger: 'blur,change' ,
		    validator:(rule,value,callback)=>{
			if(this.organDialogForm.organ.name){
			    callback()
			}else{
			    callback(new Error());
			}
		    } 
		}]
	    }
	}else{
	    return {
		name: [{required: true, message: '请输入', trigger: 'blur' ,}],
	    }
	}
}
this.$refs['storeForm'].validate((valid) => {
    if (valid) {
    }
})
```
外层rules和内部标签rule 验证叠加
