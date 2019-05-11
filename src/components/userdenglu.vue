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
       this.$router.push({name: 'myuserdenglu'});
    }
}
,
  data() {
    return {
      user:{
        userName:'',
        userPwd:''
      },
      userinfo:{}
      ,
      msg: "Welcome to Your Vue.js App"
    };
  }
  ,
  methods:{
     postRegister(){

      axios.post('/api/login/xjh',this.user).then((res)=>{
         if(res.data.status === '406'){
          alert('用户不存在')
        }else{
          this.$message('登陆成功');
          let storage = window.localStorage;
          storage.userName = this.user.userName;
          storage.userPwd = this.user.userPwd;
          axios.post("/api/info/xjh10", this.user).then(res => {
          this.userinfo = res.data.result;
          storage.mianji = this.userinfo.mianji;
          storage.month = this.userinfo.month;
          storage.panduan = this.userinfo.panduan;
          storage.zhuangtai = this.userinfo.zhuangtai;
          storage.trueName = this.userinfo.trueName;
          storage.phoneNum = this.userinfo.phoneNum;
          storage.loudong = this.userinfo.loudong;
          storage.loucen = this.userinfo.loucen;
          storage.doorNum = this.userinfo.doorNum;
          storage.totalNum = this.userinfo.totalNum;
          storage.gender = this.userinfo.gender;
          storage.birth = this.userinfo.birth;
          storage.ruzhuDate = this.userinfo.ruzhuDate;
          storage.idcardNum = this.userinfo.idcardNum;
          storage.job = this.userinfo.job;
          storage.minzu = this.userinfo.minzu;
          storage.cheweishu = this.userinfo.cheweishu;
        })
        .catch(err => {
          console.log(err);
        });
          this.$router.push({name: 'myusertousu'});
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
.denglu{
  margin-top: 150px
}
</style>