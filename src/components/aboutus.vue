<!--  -->
<template>
<div id="aboutus">
  <div class="banner">
  </div>
  <h1 class="dabiaoti">成为您身边最贴心的物业管家</h1>
  <div class="zhuti">
  <div class="duanluo">
    <p>2015年，华华物业诞生于江苏南京，自成立以来，华华始终专注于服务质量的提升，持续加强基础建设，积极研发和引进具有高科技含量的信息技术与设备以提升作业自动化水平，在国内外建立了庞大的信息采集，市场开发等物业业务机构及服务网络。</p>
 
    <p>在持续强化物业业务的基础上，华华坚持以客户需求为核心，积极拓展多元化业务，针对不同类型客户开发出一站式物业管理解决方案，并提供许多相关的配套服务。与此同时，依托强大的物业优势，我们成立华华优选，为客户提供品质生活服务，打造华华优质生活体验。</p>
 
    <p>多年来，华华物业持续创新，不断铸造高品质服务体验，为客户成功提供坚实有力的支持。</p>
  </div>
  <div class="kuang">
    <h1>进一步了解我们,有合作意向,请联系我们</h1>
    <a href="" class="lianxi">合作及相关信息咨询</a>
  </div>
  </div>
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
.lianxi{
  padding:10px 0;
  display: block;
  width:190px;
  height: 44px;
  line-height: 44px;
  margin:0 auto;
  text-decoration: none;
  border: 1px solid;
  color: black;
  text-align: center;
  border-radius: 5px;
}
.lianxi:hover{
  color: white;
  background-color: red;
}
#aboutus{
  background-color: #fff
}
.duanluo>p{
  margin:0;
  padding:0;
  line-height: 30px;
  padding-bottom: 30px
}
.banner{
  width: 100%;
  height: 447px;
  background: url(../assets/about-usbanner.jpg) no-repeat -369px
}
.dabiaoti{
  text-align: center;
  margin:0
}
.zhuti{
  background-color: #fff;
  overflow: hidden;
}
.duanluo{
  float: left;
  width:60%;
  height: 300px;
  background-color:white;
  margin-right: 2%

}
.kuang{
  float:left;
  width:38%;
  height: 200px;

}
.kuang>h1{
 text-align: center;
 font-size: 20px;
 padding: 0;
 margin: 0;
 line-height: 120px
}
</style>