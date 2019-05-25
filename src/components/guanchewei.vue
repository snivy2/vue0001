<!--  -->
<template>
<div class=''>

   <el-table

    :data="cheweiArr"
    style="width: 100%"
    max-height="600">
    <el-table-column
      fixed
      prop="bianhao"
      label="编号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="trueName"
      label="业主"
      width="120">
    </el-table-column>
    <el-table-column
      prop="jiage"
      label="价格"
      width="150">
    </el-table-column>
    <el-table-column
      prop="yishou"
      label="售出状态"
      width="400">
    </el-table-column>
  <!--   <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
         @click="handleDelete(scope.$index, scope.row)"
          type="text"
          size="small">
          已处理
        </el-button>
      </template>
    </el-table-column> -->
  </el-table>
<div class="biaodan">
<el-input v-model="chewei.bianhao" placeholder="车位编号"></el-input>
<el-input v-model="chewei.trueName" placeholder="业主名称"></el-input>
</div>
 <el-button type="primary" @click="sub()">售出</el-button>
</div>
</template>

<script>
//例：import 《组件名称》 from '《组件路径》';
import axios from 'axios'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
 chewei:{
   bianhao:'1',
   trueName:""
 },
cheweiArr:[

]
};
},
//监听属性 类似于data概念
computed: {},

watch: {},
//方法集合
methods: {
 getApi(){
      axios.get('/api/chewei/xjh').then((res)=>{
        this.cheweiArr = res.data.result;
      }).catch((err)=>{
        console.log(err);
      })
    },
  sub(){
    for(let i=0;i<=this.cheweiArr.length;i++){
      if(this.cheweiArr[i].bianhao==this.chewei.bianhao){
        this.cheweiArr[i].bianhao=this.chewei.bianhao;
        this.cheweiArr[i].trueName=this.chewei.trueName;
        this.cheweiArr[i].yishou='true';
         this.$message('购买成功');
      }
    }
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
     if(window.localStorage.userName && window.localStorage.userName !== ''){
      
    } else {
       this.$router.push({name: 'guandef'});
    }
this.getApi()
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style scoped>
.el-input {
    float: left;
    font-size: 14px;
    width: 30%;
    margin-right: 30px
}
</style>