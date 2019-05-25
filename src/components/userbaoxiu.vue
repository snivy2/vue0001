<template>
  <div id="app" class="wai">
    <div  class="baoxiu">
 <el-form ref="form" :model="baoxiu" label-width="80px">
  <!-- <el-form-item label="报修人">
    <div class="baoxiuren">
    <el-input v-model="baoxiu.baoxiuName"></el-input>
    </div>
  </el-form-item> -->
    <!-- <el-form-item label="联系方式">
    <div class="baoxiuren">
    <el-input v-model="baoxiu.phoneNum"></el-input>
    </div>
  </el-form-item> -->
   <!--  <el-form-item label="上门地址">
    <div class="baoxiuren">
    <el-input v-model="baoxiu.baoxiuAdd" placeholder="示例：5栋508"></el-input>
    </div>
  </el-form-item> -->
  <el-form-item label="报修类型">
    <div class="baoxiuleixin">
    <el-select v-model="baoxiu.baoxiuType" placeholder="请选择报修类型">
      <el-option label="水路问题" value="水路问题"></el-option>
      <el-option label="电路问题" value="电路问题"></el-option>
      <el-option label="天然气问题" value="天然气问题"></el-option>
      <el-option label="家具/家装" value="家具/家装"></el-option>
      <el-option label="疏通管道" value="疏通管道"></el-option>
      <el-option label="其他报修" value="其他报修"></el-option>
    </el-select>
    </div>
  </el-form-item>

  <el-form-item label="备注">
    <el-input type="textarea" v-model="baoxiu.beizhu"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即报修</el-button>
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

  data() {
    return {
       baoxiuArr:[],
       baoxiu: {
          baoxiuName: '',
          baoxiuType: '',
          phoneNum: '',
          baoxiuAdd: '',
          beizhu:  ''
        },
      msg: "Welcome to Your Vue.js App"
    };
  }
  ,
  created(){
     
       if(window.localStorage.userName && window.localStorage.userName !== ''){
      
    } else {
       this.$router.push({name: 'userdef'});
    }
  
this.fuzhi2()
  },
  methods:{
    fuzhi2(){
      this.baoxiu.baoxiuName = window.localStorage.trueName;
      this.baoxiu.phoneNum = window.localStorage.phoneNum;
      this.baoxiu.baoxiuAdd = window.localStorage.loudong.toString()+"栋"+window.localStorage.doorNum.toString()
    },
    onSubmit() {
       axios.post('/api/baoxiu/add',this.baoxiu).then((res)=>{
        if(res.data.status === '401'){
          alert('报修信息已存在已存在')
        } else {
          alert('添加成功');
          this.baoxiuArr.push(this.baoxiu)
        }
      }).catch((err)=>{
        alert('添加失败')
      })
    },
      
  }
};
</script>

<style>
.wai{
  margin-left: 50px
}
.baoxiu{
  padding-top: 40px;
  padding-right: 60px
}
.baoxiuren{
  width:200px
}
.baoxiuleixin{
  padding-left: -100px;
  width:200px
}
</style>