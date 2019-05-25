<!--  -->
<template>
<div class=''>
  <el-table

    :data="jiaofeiArr"
    style="width: 100%"
    max-height="600">
    <el-table-column
      fixed
      prop="trueName"
      label="业主"
      width="150">
    </el-table-column>
    <el-table-column
      prop="phoneNum"
      label="联系方式"
      width="120">
    </el-table-column>
    <el-table-column
      prop="loudong"
      label="所在楼栋"
      width="150">
    </el-table-column>
    <el-table-column
      prop="doorNum"
      label="所在门牌"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zhuangtai"
      label="是否已缴费"
      width="400">
    </el-table-column>
  <!--   <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
         @click="handleDelete(scope.$index, scope.row)"
          type="text"
          size="small">
          已处理
        </el-button>
      </template>
    </el-table-column> -->
  </el-table>
</div>
</template>

<script>
//例：import 《组件名称》 from '《组件路径》';
import axios from 'axios'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
 jiaofeiArr: [
      
      ],
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
   getApi(){
      axios.get('/api/info/xjh').then((res)=>{
        this.jiaofeiArr = res.data.result;
      }).catch((err)=>{
        console.log(err);
      })
    },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
     if(window.localStorage.userName && window.localStorage.userName !== ''){
      
    } else {
       this.$router.push({name: 'guandef'});
    }
 this.getApi()
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style>

</style>