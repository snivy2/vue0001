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
    <el-button type="primary" @click="onSubmit">立即登陆</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      user:{
        userName:'',
        userPwd:''
      }
      ,
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
.denglu{
  margin-top: 150px
}
</style>