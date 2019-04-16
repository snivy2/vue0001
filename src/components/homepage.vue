<template>
  <div id="app">
    <div class="imgbox">
        <img src="./imgs/Hippopx.png"  class="homeimg">
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
  }
};
</script>

<style>
.homeimg {
  width: 100%;
  height: 100%;
}
.imgbox {
  height: 650px;
  overflow: hidden;
}
</style>
