<template>
  <div id="app">
    <div class="biaodan" >

<el-form ref="form" :model="xinwen" label-width="80px">
      <div class="zuozhe">
  <el-form-item label="新闻作者">
    <el-input v-model="xinwen.newsName"></el-input>
  </el-form-item>
      </div>

       <div class="zuozhe">
   <el-form-item label="新闻时间">
    <el-input v-model="xinwen.newsDate"  placeholder="格式示例：4-14"></el-input>
  </el-form-item>
       </div>


<el-form-item label="新闻标题">
    <el-input v-model="xinwen.newsTitle"></el-input>
  </el-form-item>

  <el-form-item label="新闻内容">
    <el-input type="textarea" v-model="xinwen.newsText"  rows="10"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即发布</el-button>
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

      xinwenArr:[

      ],
      msg: "Welcome to Your Vue.js App",

      xinwen: {
          newsName: '',
          newsDate: '',
          newsTitle: '',
          newsText: '',
        }
    };
  },
  created(){
     
       if(window.localStorage.userName && window.localStorage.userName !== ''){
      
    } else {
       this.$router.push({name: 'guandef'});
    
  }
    // axios.get('/api/news/add1').then(res=>{
    //   console.log(res.data);
    // })
  },
    methods: {
      onSubmit() {

      axios.post('/api/news/add',this.xinwen).then((res)=>{
        if(res.data.status === '401'){
          alert('新闻已存在')
        } else {
          alert('添加成功');
          this.xinwenArr.push(this.xinwen)
        }
      }).catch((err)=>{
        alert('添加失败')
      })
    },
     

      
    }
};
</script>

<style>
.biaodan{
  margin-top: 30px;
  margin-left: 50px; 
}
.zuozhe{
  width:300px
}

</style>