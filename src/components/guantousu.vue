<template>
  <div id="app">
    <div  >

 <el-table
    :data="tousuArr"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="留言人">
            <span class="neirong">{{ props.row.tousuName }}</span>
          </el-form-item>
          <el-form-item label="留言类型">
            <span class="neirong">{{ props.row.tousuType }}</span>
          </el-form-item>
          <el-form-item label="联系地址">
            <span class="neirong">{{ props.row.tousuAdd }}</span>
          </el-form-item>
          <el-form-item label="联系方式">
            <span class="neirong">{{ props.row.phoneNum }}</span>
          </el-form-item>
          <el-form-item label="留言内容">
            <span class="shangyi">{{ props.row.neirong }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="留言人"
      prop="tousuName">
    </el-table-column>
    <el-table-column
      label="类型"
      prop="tousuType">
    </el-table-column>
    <el-table-column
      label="联系方式"
      prop="phoneNum">
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
import axios from 'axios'
export default {
  name: "app",

  data() {
    return {
      tousuArr: []
        ,
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
methods:{
  getApi(){
      axios.get('/api/tousu/xjh').then((res)=>{
        this.tousuArr = res.data.result;
      }).catch((err)=>{
        console.log(err);
      })
    },
     handleDelete(index, row) {
       var obj = {
        tousuName:row.tousuName
      }
      axios.post('/api/tousu/del',obj).then((res)=>{
        if(res.data.status === '401'){
          alert('不存在')
        } else {
          alert('处理成功');
          // splice 可以添加删除数组中的元素
          this.tousuArr.splice(index,1);
        }
      }).catch((err)=>{
        alert('处理失败')
      })
      }
}
};
</script>

<style>
.el-main[data-v-76ca982b] {
    background-color: #ffffffff;
    color: #333;
    text-align: center;
    line-height: 60px;
}
.neirong{
display:block;
padding-top:11px
}
.shangyi{
  display: block;
  padding-bottom: 70px
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

</style>