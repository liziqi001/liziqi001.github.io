--- 
title: popover  
---
# 弹出框
## 实例
### 弹出二维码
![An image](../.vuepress/public/popover.png)
``` html 
<el-popover
    placement="bottom"
    width="150"
    title="拣货码"
    trigger="hover"
    @after-enter="showErcode(scope.row.orderId)">
    <div :name="'qrCode_'+scope.row.orderId" :ref="'qrCodeDiv_'+scope.row.orderId" style="margin-top:10px" ></div>
    <el-button type="text" slot="reference">
        xxx
    </el-button>
</el-popover>
```

``` js
import QRCode from 'qrcodejs2';
showErcode(orderId){
    let divs=document.querySelectorAll("div[class='el-popover el-popper']")//this.$refs['qrCodeDiv_'+orderId]
    let qrCode=divs.length>1&&divs[divs.length-1].querySelector('img')
    this.$nextTick(()=>{
        qrCode&&qrCode.parentNode&&qrCode.parentNode.removeChild(qrCode)
        new QRCode(divs[divs.length-1], {
            text: uwxUrl+'/myOrderInfoForPc/'+orderId,
            width: 150,
            height: 150,
            colorDark: "#333333", //二维码颜色
            colorLight: "#ffffff", //二维码背景色
            correctLevel: QRCode.CorrectLevel.L //容错率，L/M/H
        });
    })
},
```
