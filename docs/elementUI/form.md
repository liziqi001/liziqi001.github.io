--- 
title: form 
---
# 表单
## 表单标签
``` html 
<el-form ref="storeForm" :model="storeDialogForm" :rules="ruleValidate_store" label-width="100px" size="mini">
    <el-form-item label="活动名称" :rules="{}">
	 <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
</el-form>
```
## 页面提交
``` html 
<div style="margin-top:20px">
    <el-button type="primary" @click="submit">提交</el-button>
	<el-button  @click="$router.go(-1)">取消</el-button>
</div>
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
//校验整个表单
this.$refs['storeForm'].validate((valid) => {
    if (valid) {
    }
})
//校验部分字段 以防止blur,change事件没有自动校验
this.$refs['storeForm'].validateField('cover')//string|array
```
外层rules和内部标签rule 验证叠加
### 解决多选下拉 首次进页面就会触发校验问题
设置初始值为空数组即可
``` js
{
    xxx : [
	{required: true, message: '请下拉选择', trigger: 'change'}
    ]
}
```
