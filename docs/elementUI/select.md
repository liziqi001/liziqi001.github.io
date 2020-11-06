--- 
title: select 
---
# 选择器
## option遍历
``` js 
<el-select v-model="value" placeholder="请选择">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
    <el-option label="是" value="1"></el-option>
</el-select>
```