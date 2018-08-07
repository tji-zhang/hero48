<template>
  <div id="app">
    <!-- 头部 -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- 侧边栏 -->
        <app-sidebar></app-sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
         <!-- 站位 -->
         <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入
import AppHeader from './components/AppHeader.vue'
import AppSidebar from './components/AppSidebar.vue'

export default {
  components: {
    AppHeader,
    AppSidebar
  }
}
</script>

<style>
</style>
