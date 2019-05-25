<template>
  <div id="app">
    <div >
<el-table

    :data="baoxiuArr"
    style="width: 100%"
    max-height="600">
    <el-table-column
      fixed
      prop="baoxiuType"
      label="报修类型"
      width="150">
    </el-table-column>
    <el-table-column
      prop="baoxiuName"
      label="报修人"
      width="120">
    </el-table-column>
    <el-table-column
      prop="phoneNum"
      label="联系方式"
      width="150">
    </el-table-column>
    <el-table-column
      prop="baoxiuAdd"
      label="住址"
      width="120">
    </el-table-column>
    <el-table-column
      prop="beizhu"
      label="备注"
      width="400">
    </el-table-column>
    <el-table-column
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
    </el-table-column>
  </el-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "app",

  data() {
    return {
      baoxiuArr: [
      
      ],
      msg: "Welcome to Your Vue.js App"
    };
  }
,
created(){
      if(window.localStorage.userName && window.localStorage.userName !== ''){
      
    } else {
       this.$router.push({name: 'guandef'});
    }
this.getApi();
}
,
  methods: {
getApi(){
      axios.get('/api/baoxiu/xjh').then((res)=>{
        this.baoxiuArr = res.data.result;
      }).catch((err)=>{
        console.log(err);
      })
    },
 handleDelete(index, row) {
       var obj = {
        baoxiuName:row.baoxiuName
      }
      axios.post('/api/baoxiu/del',obj).then((res)=>{
        if(res.data.status === '401'){
          alert('不存在')
        } else {
          alert('处理成功');
          // splice 可以添加删除数组中的元素
          this.baoxiuArr.splice(index,1);
        }
      }).catch((err)=>{
        alert('处理失败')
      })
      }
    }
};
</script>

<style>
</style>