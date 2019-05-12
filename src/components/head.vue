<template>
  <div id="app">
<div>
    

  <div class="headmeau">
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
  <el-menu-item index="0" ><img src="../assets/mylogo.png" class="sclogo"/></el-menu-item>
  <el-menu-item index="5" disabled>   </el-menu-item>
   <el-menu-item index="6" disabled>   </el-menu-item>
    <el-menu-item index="7" disabled>   </el-menu-item>
  <el-menu-item index="/homepage"  >首页</el-menu-item>
  <!-- <el-submenu index="2">
    <template slot="title">管理</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu> -->
   <el-menu-item index="/aboutus" >关于我们</el-menu-item>
  <!-- <el-menu-item index="/myTest" >接口测试</el-menu-item>测试接口用 -->
  <el-menu-item index="/user/userdenglu"><!-- <a href="https://www.ele.me" target="_blank"> -->住户入口<!-- </a> --></el-menu-item>
  <!-- <el-menu-item index="/liuyan" >向我留言</el-menu-item>  测试用 -->
  <el-menu-item index="/guan/guandenglu" >物业入口</el-menu-item>
  <!-- <el-menu-item index="/ceshi" >ceshi</el-menu-item> 测试用的 需要时解除注释-->
</el-menu>


  </div>

</div>
 
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.sclogo {
  height: 100%;
}
</style>
