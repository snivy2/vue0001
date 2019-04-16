<template>

  <div id="app">
    <div  class="xinwen">

      
  <el-table
    max-height="600"
    :data="newsArr"
    style="width: 100%"
    :default-sort="{prop:'newsDate',order:'descending'}"
    >
    <el-table-column
      prop="newsDate"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="newsName"
      label="发布者"
      width="180">
    </el-table-column>
    <el-table-column
      prop="newsTitle"
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
      msg: "Welcome to Your Vue.js App",
      newsArr:[],
      tableData: [ ]
    };
  }
  ,


   created(){
    this.getApi();
  },
  methods:{
    //  数组倒序的方法
     getApi(){
      axios.get('/api/news/xjh').then((res)=>{
        this.newsArr = res.data.result;
      }).catch((err)=>{
        console.log(err);
      })
    },
  }
};
</script>

<style>
.xinwen{
  padding-left: 30px;
  height: 500px;
}

</style>