--- 
title: axios 
---
# axios请求

## 未封装请求
``` js
import AppConfig from '@/configs'
const { sysUrl,token } = AppConfig
this.$http.post(`${sysUrl}/memberAdvQuery/advQuery?token=${token}`,p).then(res => {
    let {code,rows,msg}=res.data
    if (code == 0) {
        this.tableData=rows
        this.total=total
    }else{
        this.$message.error(msg)
    }
}).catch((err)=>{
    console.log(err)
})
```
## 封装请求
``` js
//src/api/api.js
import AppConfig from '@/configs'
const { sysUrl,token } = AppConfig
export const deleteStaff = (data) => {
    return axios.request({
        url: gateUrl + "/apipc/pharmacist/delete",
        data,
        method: 'get'
    })
}

//xxx.vue
import {deleteStaff} from '@/api/api.js'
deleteStaff({a:1}).then()
```
## 请求二进制格式文档
``` js
export const exportTable = (data) => {
    return axios.request({
        url: gateUrl + "/apipc/pharmacist/export",
        data,
        method: 'get',
        responseType: "blob",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
}
```

``` js
exportTable(params).then((res)=>{
    if(res.data){
        let blob = res.data;
        const reader = new FileReader();
        reader.readAsDataURL(blob); // 转换为base64，可以直接放入a标签href
        reader.onload = e => {
            let a = document.createElement("a");
            a.style.display = "none";
            a.download = "员工.xls";

            a.href = e.target.result;
            const body = document.body;
            document.body.appendChild(a); // 修复firefox中无法触发click
            a.click();
            document.body.removeChild(a);
        };
    }else{
        this.$message.error(res.data.msg);
    }
}).catch((err)=>{
    console.log(err)
})
```
## 上传文件
``` js
export const importFile = (data) => {
    return axios.request({
        url: gateUrl + "/apipc/user/import",
        data,
        method: 'post',
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
}

let data = new FormData();
data.append('file',this.fileList[0].raw)
importFile(data).then((res) => {
    let {code,rows,msg}=res.data
    if(code==0){
        this.uploaded=true
        this.uploadSuccess=true
        let {success,fail}=rows
        this.uploadSuccessCount=success
        if(fail>0){
            this.uploadSuccess=false
            this.uploadFailCount=fail
        }
        this.fileList = [];
    }else{
        this.$message.warning(msg)
    }
}).catch((error)=> {
    this.$message.error(error)
    console.log(error)
});
```