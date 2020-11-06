--- 
title: template模板
---
# 组件模板 
## 基本的.vue代码结构
``` html
<style lang="scss" scoped>

</style>
<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
      </router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive">
    </router-view>
  </div>
</template>

<script>
import {sendCodeRe} from '@/api/login'
import topNav from "../components/topNav"
export default {
  name: 'App',
    components: {topNav},
    data() {
        return {
            tel: '',
        }
    },
    computed:{

    },
    mounted() {
        console.log()
    }
    methods: {
        submitAdmin() {
            let this_ = this;
            if (this.code == '') {
                    returnthis.$message.warning('请输入验证码');
            }
            this.saveLoading = true;
            saveMasterAdmin({
                code: this.code,
                newPharmacistCode: this.newAdminId,
                oldPharmacistCode: this.oldAdminId,
                phone: this.tel
            }).then(res => {
                if (res.data.code == 0) {
                    this_.saveLoading = false;
                    this_.$message.success('保存成功');
                } else {
                    this_.$message.error(res.data.msg);
                }
            }).catch(err => {
                this_.$message.error('网络错误，请联系管理员!');
            });
        },
    },
}
</script>
```
