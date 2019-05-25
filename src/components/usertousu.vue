<template>
  <div id="app" class="wai">
    <div class="tousu" >
<el-form ref="form" :model="tousu" label-width="80px">
<!--   <el-form-item label="您的姓名">
    <div class="baoxiuren">
    <el-input v-model="tousu.tousuName"></el-input>
    </div>
  </el-form-item> -->
   <!--  <el-form-item label="联系方式">
    <div class="baoxiuren">
    <el-input v-model="tousu.phoneNum"></el-input>
    </div>
  </el-form-item> -->
    <!-- <el-form-item label="联系地址">
    <div class="baoxiuren">
    <el-input v-model="tousu.tousuAdd" placeholder="示例：5栋508"></el-input>
    </div>
  </el-form-item> -->
  <el-form-item label="投诉/留言">
    <div class="baoxiuleixin">
    <el-select v-model="tousu.tousuType" placeholder="投诉/留言">
      <el-option label="投诉" value="投诉"></el-option>
      <el-option label="留言" value="留言"></el-option>
    </el-select>
    </div>
  </el-form-item>

  <el-form-item label="投诉内容">
    <el-input type="textarea" v-model="tousu.neirong"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">提交</el-button>
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
       tousuArr:[],
       tousu: {
          tousuName: '',
          tousuType: '',
          phoneNum: '',
          tousuAdd: '',
          neirong:  ''
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
this.fuzhi()
},
  methods:{
    fuzhi(){
      this.tousu.tousuName = window.localStorage.trueName;
      this.tousu.phoneNum = window.localStorage.phoneNum;
      this.tousu.tousuAdd = window.localStorage.loudong.toString()+"栋"+window.localStorage.doorNum.toString()
    },
    onSubmit() {
       axios.post('/api/tousu/add',this.tousu).then((res)=>{
        if(res.data.status === '401'){
          alert('投诉或留言已存在')
        } else {
          alert('添加成功');
          this.tousuArr.push(this.tousu)
        }
      }).catch((err)=>{
        alert('添加失败')
      })
    },
  }
};
</script>

<style >

.tousu{
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