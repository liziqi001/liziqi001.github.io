--- 
title: tree 
---
# 树形控件
## 默认选中展开的第一个子项
``` js 
this.$nextTick(()=>{
    document.getElementsByClassName('el-tree-node is-expanded is-focusable')[1].click()
})
```
## 展开子项所属的父节点
``` html
<el-tree class="filter-tree" accordion :data="menuTreeData"
    node-key="id" :default-expanded-keys="[defaultId]"
    :props="{children: 'articles',label: 'title'}"
    @node-click="setLeftNode"
    ref="tree">
</el-tree>
```
## 改变hover样式 
https://blog.csdn.net/wxfdpp/article/details/83624460
## 加载树形数据loading效果
``` html
<el-tree
    v-loading="loading" 
<!--     :empty-text="loading?'':'暂无数据'"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(255, 255, 255, 0.4)" -->
>
</el-tree>
```
