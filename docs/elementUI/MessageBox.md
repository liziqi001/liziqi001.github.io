--- 
title: MessageBox 
---
# 弹框
## 确认删除
``` js 
deleteSingle(code){
    this.$confirm('确认删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
        this.$http.get(`${orderUrl}/order/unorder/delete?token=${this.token}&code=${code}`).then((res)=> {
            let {code,rows,msg}=res.data
            if (code == 0) {
                this.$message.success("删除成功");
                this.search(1)
            }else {
                this.$message.warning(msg)
            }
        }).catch((err) => {
            console.log(err)      
        });
    }).catch((err) => {console.log(err)});
},
```