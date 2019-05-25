<template>
  <div id="app">
    <div  class="zhuce">
<el-form :model="user" status-icon :rules="rules2" ref="user" label-width="100px" class="demo-ruleForm">
   <el-form-item label="账号" prop="userName">
   <div> <el-input v-model="user.userName"></el-input></div>
  </el-form-item>
  <el-form-item label="密码" prop="userPwd">
    <el-input type="password" v-model="user.userPwd" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="user.checkPass" autocomplete="off"></el-input>
  </el-form-item>
 
  <el-form-item>
    <el-button type="primary" @click="submitForm('user')">提交</el-button>
    <el-button @click="resetForm('user')">重置</el-button>
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
    // 验证密码
   var checkRule = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.user.checkPass !== '') {
            this.$refs.user.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.user.userPwd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
       user: {
          userName:'',
          userPwd: '',
          checkPass: '',
       
      },
      rules2: {
        userPwd: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        userName: [
          { validator: checkRule, trigger: 'blur' }
        ]
      }
 
    }
  },
  created(){
 /*    this.fuzhi2();
    if(window.localStorage.username !== ''){
      console.log('我已经登录了')
    } */
   
       if(window.localStorage.userName && window.localStorage.userName !== ''){
      
    } else {
       this.$router.push({name: 'guandef'});
    }
  },
  methods: {
    postRegister(){
  /*     axios.post('/api/login/update',this.user).then((res)=>{
        if(res.data.status === '404'){
          alert('用户名不存在')
        } else {
          alert('修改成功');
        }
      }).catch((err)=>{
        alert('修改失败')
      }) */
    
      axios.post('/api/login/add',this.user).then((res)=>{
         if(res.data.status === '401'){
          alert('用户已存在')
        }else{
          this.$message('新住户注册成功');
          this.$router.push({name: 'guanluru'});
        }
      }).catch((err)=>{
        this.$message.error('注册失败');
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
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
   }
}
</script>

<style> 
.zhuce{
  margin-top: 150px
}
</style>