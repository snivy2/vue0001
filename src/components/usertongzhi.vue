<template>
  <div id="app">
 <div  class="tongzhi">

      
  <el-table
    max-height="600"
    :data="tongzhiArr"
    style="width: 100%"
    :default-sort="{prop:'tongzhiDate',order:'descending'}"
    >
    <el-table-column
      prop="tongzhiDate"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="tongzhiName"
      label="发布者"
      width="180">
    </el-table-column>
    <el-table-column
      prop="tongzhiTitle"
      label="标题">
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
      tongzhiArr:[],
      msg: "Welcome to Your Vue.js App"
    };
  }
,
   created(){
         if(window.localStorage.userName && window.localStorage.userName !== ''){
      
    } else {
       this.$router.push({name: 'userdef'});
    }
    this.getApi();
  },
  methods:{
     getApi(){
      axios.get('/api/tongzhi/xjh').then((res)=>{
        this.tongzhiArr = res.data.result;
      }).catch((err)=>{
        console.log(err);
      })
    },
  }
};
</script>

<style>
</style>