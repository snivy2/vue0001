<template>
  <div id="app">
 <div class="biaodan" >

<el-form ref="form" :model="tongzhi" label-width="80px">
      <div class="zuozhe">
  <el-form-item label="通知作者">
    <el-input v-model="tongzhi.tongzhiName"></el-input>
  </el-form-item>
      </div>

       <div class="zuozhe">
   <el-form-item label="通知时间">
    <el-input v-model="tongzhi.tongzhiDate"  placeholder="格式示例：4-14"></el-input>
  </el-form-item>
       </div>


<el-form-item label="通知标题">
    <el-input v-model="tongzhi.tongzhiTitle"></el-input>
  </el-form-item>

  <el-form-item label="通知内容">
    <el-input type="textarea" v-model="tongzhi.tongzhiText"  rows="10"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="fabutongzhi">立即发布</el-button>
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
      tongzhiArr:[

      ],
      msg: "Welcome to Your Vue.js App",
      tongzhi: {
          tongzhiName: '',
          tongzhiDate: '',
          tongzhiTitle: '',
          tongzhiText: '',
        }
    };
  },
  methods:{
      fabutongzhi() {

      axios.post('/api/tongzhi/add',this.tongzhi).then((res)=>{
        if(res.data.status === '401'){
          alert('通知已存在')
        } else {
          alert('添加成功');
          this.tongzhiArr.push(this.tongzhi)
        }
      }).catch((err)=>{
        alert('添加失败')
      })
    },
  },
  created(){
       if(window.localStorage.userName && window.localStorage.userName !== ''){
      
    } else {
       this.$router.push({name: 'guandef'});
    }
  }

};
</script>

<style>
</style>