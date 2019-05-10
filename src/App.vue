<template>
  <div id="app">
    <div class="da">
    <div class="xiao">
<el-container>
  <el-header>
    
    <my-header></my-header>
    
  </el-header>
  <el-main>
  
   <router-view></router-view>
  </el-main>
  <el-footer style="height:180px">
  <p style="margin-top:50px;margin-bottom:50px">
      <span>版权所有：徐建华&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span>南京审计大学毕业作品</span>
  </p>
  <p>
      <span>仅供学习用途 欢迎讨论&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span>github：snivy2</span>
  </p>
  </el-footer>

</el-container>


    </div>
    </div>
  </div>
</template>

<script>
import myHeader from "./components/head";
// import myuser from "./components/user";
/* import myHomepage from './components/homepage'; */

export default {
  name: "app",

  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    myHeader: myHeader,
    /* myHomepage:myHomepage */
  },
  created(){
    if(window.localStorage.userName && window.localStorage.userName !== ''){
      this.$message('我已经登陆了');
    } else {
      this.$message.error('未登录');
    }
  }
};
</script>

<style>
/* body{
  position: relative;
  overflow-y:scroll;
} */
body{
  overflow-y: scroll;
}
.xiao{
    padding-left: 15%;
    padding-right: 15%;
}
.el-header {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  background-color: #F6FAFC;
  color: #333;
  text-align: center;
  height: 200px;

}
.el-footer>p{
color:#aaa;
padding:0;
margin:0;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  line-height: 160px;
  padding: 0;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
