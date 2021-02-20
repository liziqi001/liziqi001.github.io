--- 
title: Date 
---
# 时间对象

## 快捷写法
### 当前时间字符串
``` js 
new Date(+new Date()+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'').split(' ')[0]
```
