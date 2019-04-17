<template>
  <div id="app">
    <div >
<el-form ref="form" :model="info" label-width="80px">
  <el-form-item label="真实姓名">
    <el-input v-model="info.trueName"></el-input>
  </el-form-item>
  <el-form-item label="性别">
    <el-select v-model="info.gender" placeholder="请选择性别">
      <el-option label="男" value="male"></el-option>
      <el-option label="女" value="female"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="楼栋">
    <el-select v-model="info.loudong" placeholder="请选择楼栋">
      <el-option label="1栋" value="1"></el-option>
      <el-option label="2栋" value="2"></el-option>
      <el-option label="3栋" value="3"></el-option>
      <el-option label="4栋" value="4"></el-option>
      <el-option label="5栋" value="5"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="楼层">
    <el-select v-model="info.loucen" placeholder="请选择楼层">
      <el-option label="1层" value="1"></el-option>
      <el-option label="2层" value="2"></el-option>
      <el-option label="3层" value="3"></el-option>
      <el-option label="4层" value="4"></el-option>
      <el-option label="5层" value="5"></el-option>
      <el-option label="6层" value="6"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="门牌号">
    <el-input v-model="info.doorNum"></el-input>
  </el-form-item>
  <el-form-item label="总号码" >
    <el-input v-model="info.totalNum" placeholder="格式：211020308"></el-input>
  </el-form-item>
  <el-form-item label="生日" >
    <el-input v-model="info.birth" placeholder="格式：19971004"></el-input>
  </el-form-item>
  <el-form-item label="入住时间" >
    <el-input v-model="info.ruzhuDate" placeholder="格式：20190404"></el-input>
  </el-form-item>
  <el-form-item label="民族" >
    <el-input v-model="info.minzu"></el-input>
  </el-form-item>
    <el-form-item label="身份证号" >
    <el-input v-model="info.idcardNum"></el-input>
  </el-form-item>
   <el-form-item label="职业" >
    <el-input v-model="info.job"></el-input>
  </el-form-item>
     <el-form-item label="联系方式" >
    <el-input v-model="info.phoneNum"></el-input>
  </el-form-item>


  <el-form-item>
    <el-button type="primary" @click="onSubmit">录入</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "app",

  data() {
    return {
       infoArr:[],
       info: {
          userName:'',
          trueName: '',
          loudong: '',
          loucen: '',
          doorNum: '',
          totalNum:  '',
          birth:'',
          gender:'',
          ruzhuDate:'',
          minzu:'',
          idcardNum:'',
          job:'',
          phoneNum:'',
        },
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods:{
     onSubmit() {
       this.info.userName=window.localStorage.userName
       axios.post('/api/info/add',this.info).then((res)=>{
        if(res.data.status === '401'){
          alert('信息已存在已存在')
        } else {
          alert('添加成功');
          this.infoArr.push(this.info)
        }
      }).catch((err)=>{
        alert('添加失败')
      })
    },
      
  }
};
</script>

<style>
</style>