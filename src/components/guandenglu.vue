<template>
  <div id="app">
    <div class="denglu">
<el-form ref="user" :model="user" label-width="80px">
  <el-form-item label="账户">
    <el-input v-model="user.userName"></el-input>
  </el-form-item>
   <el-form-item label="密码">
    <el-input type="password" v-model="user.userPwd"></el-input>
  </el-form-item>
   <el-form-item>
    <el-button type="primary" @click="submitForm('user')">立即登陆</el-button>
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
  created(){

   if(window.localStorage.userName && window.localStorage.userName !== ''){
       this.$router.push({name: 'mydengchu'});
    } else {
       this.$router.push({name: 'guandenglu'});
    }
},
  data() {
    return {
      user:{
        userName:'',
        userPwd:''
      },
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods:{
postRegister(){

      axios.post('/api/guanlogin/xjh',this.user).then((res)=>{
         if(res.data.status === '406'){
          alert('用户不存在')
        }else{
          this.$message('登陆成功');
          let storage = window.localStorage;
          storage.userName = this.user.userName;
          storage.userPwd = this.user.userPwd;
          this.$router.push({name: 'guantousu'});
        }
      }).catch((err)=>{
        this.$message.error('登陆失败');
      })
    },
    submitForm(user) {
      this.$refs[user].validate((valid) => {
        if (valid) {
          this.postRegister();
        } else {
          return
        }
      });
    },
  }
};
</script>

<style>
</style>