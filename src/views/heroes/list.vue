<template>
    <div>
         <h2 class="sub-header">英雄列表</h2>
          <!-- <a class="btn btn-success" href="add.html">添加</a> -->
          <router-link class="btn btn-success" to="/heroes/add">添加</router-link>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>姓名</th>
                  <th>性别</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for = '(item , index) in list' :key='item.id'>
                  <td>{{ index + 1}}</td>
                  <td>{{ item.name}}</td>
                  <td>{{ item.gender}}</td>
                  <td>
                    <!-- <a href="edit.html">edit</a> -->
                    <router-link :to="'/heroes/' + item.id">edit</router-link>
                    &nbsp;&nbsp;
                    <a @click.prevent='handleDelete(item.id)' href="javascript:void(0)">delete</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
</template>
<script>
// 导入axios模块
  import axios from 'axios'

    export default{
        data(){
          return{
            list:[]
          };
        },
        created(){
          this.loadData()
        },
        methods:{
          // 封装加载数据列表
          loadData(){
            axios
            .get('http://127.0.0.1:3000/heroes')
            .then((response) => {
              if(response.status === 200){
                this.list = response.data;
              }
            })
            .catch((err) => {
              console.log(err);
            })
          },
          // 删除
          handleDelete(id){
            if(!confirm('是否删除')){
              return;
            }

            axios
                .delete(`http://127.0.0.1:3000/heroes/${id}`)
                .then((response) =>{
                  if(response.status === 200){
                    this.loadData()
                  }else{
                    alert('失败')
                  }
                })
                .catch((err)=>{
                  console.log(err)
                })
          }
        }
    }
   


</script>

<style>

</style>
