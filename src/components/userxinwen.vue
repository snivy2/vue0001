<template>

  <div id="app">
    <div  class="xinwen">

      
 <!--  <el-table
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
  </el-table> -->

  <el-table
    :data="newsArr"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="标题">
            <span class="biaoti">{{ props.row.newsTitle }}</span>
          </el-form-item> 
          <el-form-item label="新闻作者">
            <span class="neirong">{{ props.row.newsName }}</span>
          </el-form-item>
          <el-form-item label="发布时间">
            <span class="neirong">{{ props.row.newsDate }}</span>
          </el-form-item>
   
         <!--  <el-form-item label="联系方式">
            <span class="neirong">{{ props.row.phoneNum }}</span>
          </el-form-item> -->
          <el-form-item label="新闻内容">
            <span class="shangyi">{{ props.row.newsText }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="发布者"
      prop="newsName">
    </el-table-column>
    <el-table-column
      label="日期"
      prop="newsDate">
    </el-table-column>
    <el-table-column
      label="标题"
      prop="newsTitle">
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "app",

  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      newsArr: [],
      tableData: []
    };
  },
  created() {
        if(window.localStorage.userName && window.localStorage.userName !== ''){
      
    } else {
       this.$router.push({name: 'userdef'});
    }
    this.getApi();
  },
  methods: {
    //  数组倒序的方法
    getApi() {
      axios
        .get("/api/news/xjh")
        .then(res => {
          this.newsArr = res.data.result;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
.xinwen {
  padding-left: 30px;
  height: 500px;
}

.el-main[data-v-76ca982b] {
  background-color: #ffffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.neirong {
  display: block;
  padding-top: 60px;
}
.shangyi {
  display: block;
  padding-bottom: 70px;
 
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.el-form--inline .el-form-item {
    display: block;
    margin-right: 10px;
    margin-bottom: -100px;
   position: relative;
   width:100%
}
.shangyi{
  width: 600px;
  display: inline-block;
  margin-top: -30px;
  margin-bottom: 20px;
  text-indent: 2em
}
.biaoti{
  display:inline-block;
  margin-top: -50px;
  margin-bottom: -50px;
 /*  transform: translateY(-50px) */
 width: 625px;
 position: absolute;
 top:108px
}
</style>