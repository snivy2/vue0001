<template>
  <div id="app">
    
    <div class="rongqi">
    <div class="tupian">
  <img src="./imgs/city.jpg" class="city">
  </div>
  <div>
  <el-container>
    <el-aside width="400px"><el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :router="true">
  <!--     <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>投诉/留言</span>
        </template>
        <el-menu-item-group>
      
          <el-menu-item index="/user/usertousu">投诉</el-menu-item>
          <el-menu-item index="/user/userliuyan">留言</el-menu-item>
        </el-menu-item-group>
       
      </el-submenu> -->
      
      <el-menu-item index="/user/jiaofei" >
        <i class="el-icon-document"></i>
        <span slot="title">一键缴费</span>
      </el-menu-item>
<el-menu-item index="/user/usertousu" >
        <i class="el-icon-document"></i>
        <span slot="title">投诉留言</span>
      </el-menu-item>


        <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>新闻/通知</span>
        </template>
        <el-menu-item-group>
     
          <el-menu-item index="/user/userxinwen">新闻</el-menu-item>
          <el-menu-item index="/user/usertongzhi">通知</el-menu-item>
        </el-menu-item-group>

      </el-submenu>

        <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>个人信息</span>
        </template>
        <el-menu-item-group>
     
        <!--   <el-menu-item index="/user/userluru">录入</el-menu-item> -->
          <el-menu-item index="/user/userxiugai">查看</el-menu-item>
        </el-menu-item-group>

      </el-submenu>
  
      <el-menu-item index="/user/userbaoxiu" >
        <i class="el-icon-document"></i>
        <span slot="title">我要报修</span>
      </el-menu-item>

      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>注册/登陆</span>
        </template>
        <el-menu-item-group>
     
          <el-menu-item index="/user/userzhuce">密码修改</el-menu-item>
          <el-menu-item index="/user/userdenglu">登陆/登出</el-menu-item>
        </el-menu-item-group>

      </el-submenu>
    <!--   <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">注册/登陆</span>
      </el-menu-item> -->
    </el-menu></el-aside>

    <!-- 显示组件的地方 -->
    <el-main>

  <router-view ></router-view>
    </el-main>

</el-container>
  </div>
    </div>

  </div>

</template>


<script>
import axios from "axios";
// import myuser from "./user";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },

  components: {
    // myuser: myuser,
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.tupian {
  height: 340px;
}
.city {
  height: 100%;
  width: 100%;
}

.el-aside {
  background-color: #ffffffff;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #ffffffff;
  color: #333;
  text-align: center;
  line-height: 160px;
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

/*  .rongqi{
    position: fixed;
    left:  15%;
    right: 15%;
  } */
</style>