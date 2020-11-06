--- 
title: upload 
---
# 上传
## 手动控制上传
手动上传时before-upload属性失效 file-list属性也不会自动更新 用on-change处理
``` html
<el-upload
    ref="upload"
    action="customize"
    :show-file-list='false'
    multiple
    :before-upload="beforeAvatarUpload"
    :http-request="uploadFile"
>
    <el-button size="small" type="primary">上传处方</el-button>
</el-upload>
```
``` js
 beforeAvatarUpload(file) {
    const isJPGorPNG = file.type === 'image/jpeg' || file.type === 'image/png';
    const isLt3M = file.size / 1024 / 1024 < 5;
    let isLimit = true;
    if(!!this.$refs.pic) {
        isLimit = this.$refs.pic.filter(function(item){return !item.hidden}).length<=15;
    }

    if (!isJPGorPNG) {
        this.$message.error('上传图片只能是 JPG或PNG 格式!');
    }
    if (!isLt3M) {
        this.$message.error('上传图片大小不能超过 5MB!');
    }

    if (!isLimit) {
        this.$message.warning(`每次最多上传15张图片`);
    }

    return isJPGorPNG && isLt3M && isLimit;
},
uploadFile(params){
    this.$refs.upload.clearFiles();

    let data = new FormData();
    let _this = this;
    data.append('file',params.file)
    this.$http.post('http://pic.cunjk.com/fileUploadServlet', data, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }).then((response) => {
        let resData = response.data;
        _this.picFile = _this.picFile.concat(resData);

        _this.showImgPath = _this.picFile[0]
        console.log(_this.showImgPath)
        //var index = _this.picFile.length;
        //_this.picFile[index] = resData;
        _this.$forceUpdate();
    }).catch(function (error) {
        $.messager.show({
            title:'提示！！！',
            msg:'网络原因，暂时无法上传，请稍后再试',
            timeout:2000,
            showType:'slide'
        })
        console.log(error)
    });
},
```