--- 
title: document 
---
# 文档
## 选择器
document.getElementsByClassName(classname) //多个类名使用空格分隔，如 "test demo"
document.querySelector("#click001")//选择器写法 类名查找：.test.demo   querySelectorAll
## 动态创建和删除
``` js 
//创建节点
document.createElement("p")
//设置节点属性

//删除节点
document.getElementById("id").parentNode.removeChild(document.getElementById("id"));
```
## 添加到末尾
``` js
let str='<span id="copy001" style="color:red">cjk0316cjk</span><button id="click001">复制</button>'
var span = document.createElement("li");
span.innerHTML = str;
let parent=document.getElementsByClassName('containerCon')[0]
parent.appendChild(span)
//parent.insertAdjacentHTML('beforeEnd', str);
```
