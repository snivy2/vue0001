<template>
  <div id="app">
    <div>
        <h1>111</h1>
        <input type="text" v-model="$store.state.test">
        <ul>
          <!-- 请求到的接口列表 -->
          <li style="height:30px;" v-for="(item,index) in studentsArr" :key="index">
            {{item.studentName}}--{{item.math}}
            <el-button @click="delStudent(index,item)">删除</el-button>
          </li>
        </ul>
        <div>
          <!-- 增删改查 -->
          学生名：<input type="text" v-model="studentObj.studentName"><br>
          数学:<input type="text" v-model="studentObj.math">
          <el-button @click="addStudent()">添加</el-button>
          <el-button @click="updateStudent()">修改</el-button>
        </div>
    </div>
 
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'app',
  data () {
    return {
      studentsArr:[],
      msg: 'Welcome to Your Vue.js App',
      studentObj:{
        studentName:'',
        math:''
      }
    }
  },
  created(){
    this.getApi();
  },
  methods:{
    getApi(){
      axios.get('/api/students/xjh').then((res)=>{
        this.studentsArr = res.data.result;
      }).catch((err)=>{
        console.log(err);
      })
    },
    addStudent(){
      axios.post('/api/students/add',this.studentObj).then((res)=>{
        if(res.data.status === '401'){
          alert('学生名已存在')
        } else {
          alert('添加成功');
          this.studentsArr.push(this.studentObj)
        }
      }).catch((err)=>{
        alert('添加失败')
      })
    },
    delStudent(index,item){
      var obj = {
        studentName:item.studentName
      }
      axios.post('/api/students/del',obj).then((res)=>{
        if(res.data.status === '401'){
          alert('学生名不存在')
        } else {
          alert('删除成功');
          // splice 可以添加删除数组中的元素
          this.studentsArr.splice(index,1);
        }
      }).catch((err)=>{
        alert('删除失败')
      })
    },
    updateStudent(){
      axios.post('/api/students/update',this.studentObj).then((res)=>{
        if(res.data.status === '404'){
          alert('学生名不存在')
        } else {
          alert('修改成功');
          this.getApi();
        }
      }).catch((err)=>{
        alert('修改失败')
      })
    }
  }
}
</script>

<style>
.homeimg{
    width: 100%
}
</style>
