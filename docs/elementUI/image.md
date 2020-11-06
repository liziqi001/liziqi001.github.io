--- 
title: image 
---
# 图片
## 大图预览 放大缩小旋转上一张下一张控制
（iview没有）
``` html 
<el-image 
  class="img"
  v-if="getImgUrlArr[0]"  //!!!!!!!    v-if避开出现渲染不成功的问题
  :src="getImgUrlArr[0]" 
  :preview-src-list="getImgUrlArr">
</el-image>
```
