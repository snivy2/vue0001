<template>
  <div id="app">
    <div >

<el-input
  type="textarea"
  :rows="2"
  placeholder="请向我留言吧！"
  v-model="textarea">
</el-input>

<el-input v-model="input" placeholder="留言人">

</el-input>
       <el-button type="primary" icon="el-icon-edit" @click="add">留言</el-button>
        
        <ul>
            <li v-for="(item,index) in liuyanlist" :key="index">{{item.liuyan}}-----------------{{item.name}}</li>
        </ul>
    </div>
 
  </div>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      textarea: "",
      input: "",
      msg: "Welcome to Your Vue.js App",
      liuyanlist: [
        { name: "xujianhua", liuyan: "hhhhh taishuaile" },
        { name: "zhuyy", liuyan: "hhhh niu" }
      ]
    };
  },
  methods: {
    add() {
      //这是添加留言的方法

      var newlist = { liuyan: this.textarea, name: this.input };
      this.liuyanlist.unshift(newlist);
      this.id = this.name = "";
    },
    getApi(){
      
    }
  }
};
</script>

<style>
</style>
