<!--  -->
<template>
<div class=''>

   <el-table

    :data="cheweiArr"
    style="width: 100%"
    max-height="600">
    <el-table-column
      fixed
      prop="bianhao"
      label="编号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="trueName"
      label="业主"
      width="120">
    </el-table-column>
    <el-table-column
      prop="jiage"
      label="价格"
      width="150">
    </el-table-column>
    <el-table-column
      prop="yishou"
      label="售出状态"
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
cheweiArr:[

]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
 getApi(){
      axios.get('/api/chewei/xjh').then((res)=>{
        this.cheweiArr = res.data.result;
      }).catch((err)=>{
        console.log(err);
      })
    },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
this.getApi()
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style>

</style>