<template>
  <div id="app">
    <div  class="info">
      <ul>
      <li>
      <span class="label">姓名</span><span class="zhi">{{info.trueName}}</span>
      </li>
      <li>
      <span class="label">生日</span><span class="zhi">{{info.birth}}</span>
      </li>
      <li>
        <span class="label"> 入驻时间</span><span class="zhi">{{info.ruzhuDate}}</span>
      </li>
      <li>
        <span class="label">民族</span><span class="zhi">{{info.minzu}}</span>
      </li>
      <li>
        <span class="label">性别</span><span class="zhi">{{info.gender}}</span>
      </li>
      <li>
        <span class="label">楼栋</span><span class="zhi">{{info.loudong}}</span>
      </li>
      <li>
        <span class="label">楼层</span><span class="zhi">{{info.loucen}}</span>
      </li>
      <li>
        <span class="label">门牌号</span><span class="zhi">{{info.doorNum}}</span>
      </li>
      <li>
        <span class="label">职业</span><span class="zhi">{{info.job}}</span>
      </li>
      <li>
        <span class="label">联系方式</span><span class="zhi">{{info.phoneNum}}</span>
      </li>
      <li>
        <span class="label">身份证号</span><span class="zhi">{{info.idcardNum}}</span>
      </li>
      </ul>
<!-- <el-form ref="form" :model="info" label-width="80px">
  <el-form-item label="真实姓名">
    <el-input v-model="info.trueName" value="window.localStorage.trueName"></el-input>
  </el-form-item>
  <el-form-item label="性别">
    <el-select v-model="info.gender" placeholder="请选择性别">
      <el-option label="男" value="male"></el-option>
      <el-option label="女" value="female"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="楼栋">
    <el-select v-model="info.loudong" placeholder="请选择楼栋">
      <el-option label="1栋" value="1"></el-option>
      <el-option label="2栋" value="2"></el-option>
      <el-option label="3栋" value="3"></el-option>
      <el-option label="4栋" value="4"></el-option>
      <el-option label="5栋" value="5"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="楼层">
    <el-select v-model="info.loucen" placeholder="请选择楼层">
      <el-option label="1层" value="1"></el-option>
      <el-option label="2层" value="2"></el-option>
      <el-option label="3层" value="3"></el-option>
      <el-option label="4层" value="4"></el-option>
      <el-option label="5层" value="5"></el-option>
      <el-option label="6层" value="6"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="门牌号">
    <el-input v-model="info.doorNum"></el-input>
  </el-form-item>
  <el-form-item label="总号码" >
    <el-input v-model="info.totalNum" placeholder="格式：211020308"></el-input>
  </el-form-item>
  <el-form-item label="生日" >
    <el-input v-model="info.birth" placeholder="格式：19971004"></el-input>
  </el-form-item>
  <el-form-item label="入住时间" >
    <el-input v-model="info.ruzhuDate" placeholder="格式：20190404"></el-input>
  </el-form-item>
  <el-form-item label="民族" >
    <el-input v-model="info.minzu"></el-input>
  </el-form-item>
    <el-form-item label="身份证号" >
    <el-input v-model="info.idcardNum"></el-input>
  </el-form-item>
   <el-form-item label="职业" >
    <el-input v-model="info.job"></el-input>
  </el-form-item>
     <el-form-item label="联系方式" >
    <el-input v-model="info.phoneNum"></el-input>
  </el-form-item>


  <el-form-item>
    <el-button type="primary" @click="onSubmit">修改</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "app",
 created(){
       if(window.localStorage.userName && window.localStorage.userName !== ''){
      
    } else {
       this.$router.push({name: 'userdef'});
    }
    this.getuserName();
  },
  data() {
    return {
      infoArr:[],
       info: {
          userName:'',
          trueName: '',
          loudong: '',
          loucen: '',
          doorNum: '',
          totalNum:  '',
          birth:'',
          gender:'',
          ruzhuDate:'',
          minzu:'',
          idcardNum:'',
          job:'',
          phoneNum:'',
        },
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods:{ 
   getuserName(){
       this.info.userName=window.localStorage.userName;
       this.info.trueName=window.localStorage.trueName;
       this.info.loudong=window.localStorage.loudong;
       this.info.loucen=window.localStorage.loucen;
       this.info.doorNum=window.localStorage.doorNum;
       this.info.birth=window.localStorage.birth;
       this.info.gender=window.localStorage.gender;
       this.info.ruzhuDate=window.localStorage.ruzhuDate;
       this.info.minzu=window.localStorage.minzu;
       this.info.idcardNum=window.localStorage.idcardNum;
       this.info.job=window.localStorage.job;
       this.info.phoneNum=window.localStorage.phoneNum;
   },
    onSubmit() {
 axios.post('/api/info/update',this.info).then((res)=>{
        if(res.data.status === '404'){
          alert('用户名不存在')
        } else {
          alert('修改成功');
        }
      }).catch((err)=>{
        alert('修改失败')
      })
  }
}
};
</script>

<style scoped>
li {
    line-height: 50px;
    overflow: hidden;
    padding: 0 150px;
    border-bottom: 1px solid #ccc
}
.label{
  font-weight: 700;
  float: left;
  
}
.zhi{
  color: #888;
  float: right
}
</style>