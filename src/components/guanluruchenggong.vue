<!--  -->
<template>
<div class='luruchenggong'>
<div class="gou"><el-progress type="circle" :percentage="100" status="success"></el-progress></div>

  <h1>成功录入新用户信息！！！</h1>
</div>
</template>

<script>
//例：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style>
.gou{
  margin-top: 100px
}
.luruchenggong>h1{
  height: 50px;
  line-height: 50px
}
</style>