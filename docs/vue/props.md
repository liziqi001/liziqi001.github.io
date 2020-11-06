--- 
title: props 
---
# 子组件接收参数

## 未封装请求
``` js
props: {
    // 基础类型检测, null意味着任何类型都行
    propA: Array,
    // 多种类型
    propB: [String, Number],
    // 必传且是String
    propC: {
      type: String,
      required: true
    },
    // 数字有默认值
    propD: {
      type: Number,
      default: 101
    },
    // 数组、默认值是一个工厂函数返回对象
    propE: {
      type: Object,
      default: function() {
        console.log("propE default invoked.");
        return { message: "I am from propE." };
      }
    },
    // 自定义验证函数
    propF: {
      isValid: function(value) {
        return value > 100;
      }
    }
}
```