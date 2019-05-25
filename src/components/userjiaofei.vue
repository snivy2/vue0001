<!--  -->
<template>
<div class=''>
  
  <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="业主"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="条目"
        width="180">
      </el-table-column>
           <el-table-column
        prop="address"
        label="单价"
        width="180">
      </el-table-column>
      <el-table-column
        prop="cont"
        label="数量">
      </el-table-column>
      <el-table-column
        prop="total"
        label="总价"
        width="180">
      </el-table-column>
      
      
    </el-table>

    <p id="jisuan">
    <span>总计：</span>
    <span>{{zongji}}</span>
    </p>

    <el-button type="danger" @click="yijianjiaofei()">一键缴费</el-button>
  
  </div>
</template>

<script>
//例：import 《组件名称》 from '《组件路径》';
  import axios from 'axios';
  export default {

//import引入的组件需要注入到对象中才能使用

components: {},
data() {
//这里存放数据
return {
  zongji:0,
  panduan:'',
  houtai:{},
    tableData: [{
            date: '我',
            name: '基础物业费',
            address: '1.5元/平方米',
            cont: 0,
            total:0
          }, {
            date: '我',
            name: '公共设备运维',
            address: '50元',
            cont: 1,
            total:50,
          }, {
            date: '我',
            name: '公共清洁费',
            address: '50元',
            cont: 1,
            total:50,
          }, {
            date: '我',
            name: '车位费',
            address: '200元',
            cont: 0,
            total:0
          }]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  shifou(){
    console.log(this.panduan,'sdasdadad')
    if(this.panduan === '1'){
      console.log(this.panduan)
       this.$router.push({name: 'myyijiaofei'});
    }
    else{
      this.$router.push({name: 'myjiaofei'});
      console.log(this.panduan)
    }
  },
  getmianji(){
    this.tableData[0].date=window.localStorage.trueName
    this.tableData[1].date=window.localStorage.trueName
    this.tableData[2].date=window.localStorage.trueName
    this.tableData[3].date=window.localStorage.trueName
    this.tableData[0].cont=window.localStorage.mianji
    if(window.localStorage.zhuangtai == '是'){
      this.panduan = '1'
    } else{
      this.panduan = '0'
    }
    this.tableData[3].cont=window.localStorage.cheweishu
    this.houtai.userName=window.localStorage.userName
  },
  jisuan(){
    this.tableData[0].total=parseFloat(this.tableData[0].address)*parseInt(this.tableData[0].cont)
  
    this.tableData[3].total=parseFloat(this.tableData[3].address)*parseInt(this.tableData[3].cont)
  },
  zong(){
    this.zongji+=this.tableData[0].total;
    this.zongji+=this.tableData[1].total;
    this.zongji+=this.tableData[2].total;
    this.zongji+=this.tableData[3].total;
  },
  yijianjiaofei(){
    this.houtai.zhuangtai="是"
       axios.post('/api/info/jiaofei',this.houtai).then((res)=>{
        if(res.data.status === '404'){
          alert('用户名不存在')
        } else {
          alert('缴费成功');
          window.localStorage.zhuangtai = '是'
           this.$router.push({name: 'myyijiaofei'});
        }
      }).catch((err)=>{
        alert('修改失败')
      })
  }
    
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
 
  this.getmianji();
  this.jisuan();
  this.zong();
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
  
  this.shifou();  
       if(window.localStorage.userName && window.localStorage.userName !== ''){
      
    } else {
       this.$router.push({name: 'userdef'});
    }
},
}
</script>
<style scoped>
p{
  height: 30px;
  line-height: 30px
}

</style>