--- 
title: input 
---
# 输入框
## 输入框弹框
``` js 
<el-input v-model="dp_name" @focus="mdDialogVisible=true" :title="dp_name" clearable @clear="dp_id=''" placeholder="请输入"></el-input>
```
## 强制输入数字,限制长度
``` html 
1、 <el-input v-model="item.userScore" onkeyup="if(/^\+?(0|[1-9][0-9]*)$/.test(this.value)==false)this.value=''"
maxlength="4" ></el-input>
2、 0-999 onkeypress="return event.keyCode>=48&&event.keyCode<=57" maxlength="3"

```
