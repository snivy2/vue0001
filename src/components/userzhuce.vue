<template>
  <div id="app">
    <div >
<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
   <el-form-item label="账号" prop="username">
    <el-input v-model.number="ruleForm2.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
  </el-form-item>
 
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
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
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
       ruleForm2: {
          pass: '',
          checkPass: '',
          username: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        username: [
          { validator: checkRule, trigger: 'blur' }
        ]
      }
 
    }
  },
  created(){
    if(window.localStorage.username !== ''){
      console.log('我已经登录了')
    }
  },
  methods: {
    postRegister(){

      axios.post('',this.ruleForm2).then((res)=>{
        if(res.data.status === '200'){
          this.$message('注册成功');
          let storage = window.localStorage;
          storage.username = this.ruleForm2.username;
          storage.pass = this.ruleForm2.pass;
        }
      }).catch((err)=>{
        this.$message.error('注册失败');
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
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
</style>