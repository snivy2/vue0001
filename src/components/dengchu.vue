<template>
  <div id="app">
    <div >
<el-button type="danger" @click="dengchu">登出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods:{
dengchu(){
 if(window.localStorage.userName && window.localStorage.userName !== ''){
       window.localStorage.clear();
        this.$router.push({name: 'myuserdenglu'});
    } else {
       this.$router.push({name: 'myuserdenglu'});
    }
}
  }
};
</script>

<style>
</style>