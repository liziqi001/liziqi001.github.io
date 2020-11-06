--- 
title: tooltip  
---
# 文字提示
## 实例
### 鼠标移入提示
``` html 
<div style="border-top:1px solid #ddd;height: 50px;line-height: 50px;margin-top: 10px;">
  <span style="font-size:16px;margin-right:10px">指标说明</span>
  <el-tooltip effect="dark" placement="right" >
      <div slot="content" style="width:350px">
        患者总人数：已存档的DTP患者总人数（维护过地域信息）<br>
        总数分布占比：对应省市患者人数与患者总人数的百分比
      </div>
      <i class="el-icon-question" style="font-size:20px;color:#ddd"></i>
  </el-tooltip>
</div>
```
### 图标+文字
``` html 
<div style="padding:10px;background:#D9EDF6;color:#4B93C5;border-radius: 5px;">
    <i class="el-icon-warning" style="font-size:20px;"></i>
    温馨提示：本次操作会默认解绑“店员”的所有会员，但所属患者将不受影响，需要自行转移。
</div>
```
