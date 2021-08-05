# 网页字体
<style lang="stylus" scoped>
    .textarea{
        >>>textarea{
            font-size:2em!important;
            font-family:inherit;
            font-style:inherit;
            font-weight:inherit;
        }
    } 
</style>
<script>
const fonts=['拟手写：Comic Sans MS','华文黑体：STHeiti','华文楷体：STKaiti','华文宋体：STSong','黑体：SimHei','宋体：SimSun','新宋体：NSimSun','仿宋：FangSong','楷体：KaiTi','仿宋_GB2312：FangSong_GB2312','楷体_GB2312：KaiTi_GB2312','微软正黑体：Microsoft JhengHei','微软雅黑体：Microsoft YaHei','隶书：LiSu','幼圆：YouYuan','华文细黑：STXihei','华文中宋：STZhongsong','华文仿宋：STFangsong','方正舒体：FZShuTi','方正姚体：FZYaoti','华文彩云：STCaiyun','华文琥珀：STHupo','华文隶书：STLiti','华文行楷：STXingkai','华文新魏：STXinwei']
let list=[]
for (let i of fonts){
    let name=i.split('：')[0]
    let val=i.split('：')[1]
    let html=`<span style="font-family:${val};">012qweABC'",.!-_+-()[]{}/ 中文符（）‘“”’、，；【】。！</span>`
    list.push({'字体':name,'效果':html,'font-family':val})
}
export default {
    data(){
        return{
            fonts,
            list,
            customizeText:'我怎么这么可爱，2333Qaq！',
            myStyle:{
                fontFamily:'',
                fontStyle:'',
                fontWeight:''
            }
        }
    },
    computed:{},
    methods:{
    },
}
</script>

## css样式
### font-family总览
<MyTable :data="list" :html="true"/>

### 自定义预览
<div class="textarea">
    <div style="padding:5px">
        <el-select v-model="myStyle.fontFamily" filterable placeholder="请选择">
            <el-option
                v-for="item in fonts"
                :key="item"
                :label="item.split('：')[0]"
                :value="item.split('：')[1]">
            </el-option>
        </el-select>
        <el-button v-if="myStyle.fontStyle=='oblique'" type="primary" @click="myStyle.fontStyle=''">斜体</el-button>
        <el-button v-else plain @click="myStyle.fontStyle='oblique'" >斜体</el-button>
        <el-button v-if="myStyle.fontWeight=='bold'" type="primary" @click="myStyle.fontWeight=''">加粗</el-button>
        <el-button v-else plain @click="myStyle.fontWeight='bold'" >加粗</el-button>
    </div>
    <el-input
        :style="myStyle"
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="customizeText">
    </el-input>
</div>


## 简繁体转化
### 在线工具
[https://justyy.com/tools/chinese-converter/](https://justyy.com/tools/chinese-converter/)
