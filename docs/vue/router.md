--- 
title: router 
---
# 路由

## 跳转
``` js
this.$router.go(-1)
this.$router.push({path: 'medicineExplain', query: {id: id, token: myvue.$store.state.token}})
this.$router.push(path);//path为路径 如/list 跳到http://ucourse.g1.cunjk.com/list
```