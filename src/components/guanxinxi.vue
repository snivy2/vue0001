<template>
  <div id="app">
 <div>  
   <el-input
    placeholder="请输入内容"
    prefix-icon="el-icon-search"
    v-model="keyword">
  </el-input>
  </div>
    <div >
<el-table

    :data="search(keyword)"
    style="width: 100%"
    max-height="600">
    <el-table-column
      fixed
      prop="userName"
      label="用户名"
      width="150">
    </el-table-column>
    <el-table-column
      prop="loudong"
      label="楼栋"
      width="120">
    </el-table-column>
    <el-table-column
      prop="loucen"
      label="楼层"
      width="150">
    </el-table-column>
    <el-table-column
      prop="doorNum"
      label="门牌号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="totalNum"
      label="总编号"
      width="150">
    </el-table-column>
     <el-table-column
      prop="trueName"
      label="真实姓名"
      width="120">
    </el-table-column> <el-table-column
      prop="birth"
      label="出生年月"
      width="200">
    </el-table-column> <el-table-column
      prop="gender"
      label="性别"
      width="120">
    </el-table-column> <el-table-column
      prop="ruzhuDate"
      label="入住时间"
      width="400">
    </el-table-column> <el-table-column
      prop="minzu"
      label="民族"
      width="120">
    </el-table-column><el-table-column
      prop="idcardNum"
      label="身份证号"
      width="400">
    </el-table-column><el-table-column
      prop="job"
      label="职业"
      width="120">
    </el-table-column><el-table-column
      prop="phoneNum"
      label="电话号码"
      width="200">
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
          删除
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
created(){
 
       if(window.localStorage.userName && window.localStorage.userName !== ''){
      
    } else {
       this.$router.push({name: 'guandef'});
    }
this.getApi();
},
  data() {
    
    return {
      keyword:'',
      sousuoArr:[

      ],
      infoArr: [
      
      ],
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods:{
 search(keyword) { // 根据关键字，进行数据的搜索
           var newList = []
          this.infoArr.forEach(item => {
            if (item.trueName.indexOf(keyword) != -1) {
              newList.push(item)
            }
          })
          return newList }
          ,
    getApi(){
      axios.get('/api/info/xjh').then((res)=>{
        this.infoArr = res.data.result;
      }).catch((err)=>{
        console.log(err);
      })
    },
 handleDelete(index, row) {
       var obj = {
        userName:row.userName
      }
      axios.post('/api/info/del',obj).then((res)=>{
        if(res.data.status === '401'){
          alert('不存在')
        } else {
          alert('处理成功');
          // splice 可以添加删除数组中的元素
          this.infoArr.splice(index,1);
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