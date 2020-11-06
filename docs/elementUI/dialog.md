--- 
title: dialog 
---
# 对话框
## 标签
``` html 
<el-dialog title="会员详情" :visible="dialogVisible" :close-on-click-modal="false" :close-on-press-escape="false" width="80%" @close="dialogVisible=false">
    <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitDialog">保存</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
    </div>
</el-dialog>
```
## dialog内容高度
``` css
/deep/.el-dialog__body{
    overflow-y: auto;
    height: 400px;
}
```
## el-popover 显示时 el-dialog不显示问题
el-dialog加属性 append-to-body 
## popover使dialog闪退问题
在popover里打开dialog弹框时会造成dialog闪退，原因：popover自动隐藏时会关闭dialog
使用【手动（manual）方式】对popover控制显示隐藏