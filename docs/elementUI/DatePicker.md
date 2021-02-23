--- 
title: datePicker 
---
# 日期选择器
## 标签
``` html
<el-date-picker v-model="value2"  align="right"
    type="date" placeholder="选择日期"
    :picker-options="pickerOptions">
</el-date-picker>
```

## 属性
### value格式化
``` js 
value-format="yyyy-MM-dd"
```
### pickerOptions
``` js 
pickerOptions: {
    disabledDate(time) {//不可选未来时间
        return time.getTime() > Date.now();
    },
    shortcuts: [{
    text: '今天',
    onClick(picker) {
        picker.$emit('pick', new Date());
    }
    }, {
    text: '昨天',
    onClick(picker) {
        const date = new Date();
        date.setTime(date.getTime() - 3600 * 1000 * 24);
        picker.$emit('pick', date);
    }
    }, {
    text: '一周前',
    onClick(picker) {
        const date = new Date();
        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
        picker.$emit('pick', date);
    }
    }]
}
```