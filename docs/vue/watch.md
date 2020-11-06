---
title: watch
---
# 监听

## 监听对象
``` js
watch:{
    'organDialog_organ.name':{
        handler(newName, oldName) {
            this.$refs.setOrganTreeRef.filter(newName);
        },
        immediate: true,
    }
}
```