<template>
    <el-container>
      <el-aside width="200px">
        <app-aside></app-aside>
      </el-aside>
      <el-main>
        <app-main></app-main>
      </el-main>
    </el-container>
</template>
<script>
export default {
    components:{
        appAside: () => import("./AppAside"),
        appMain: () => import("./AppMain")
    }
}
</script>
<style lang="scss">
    .el-container{
        height: 100%;
    }
     .el-aside {
    background-color: #D3DCE6;
    color: #333;
    height: 100%;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    height: 100%;
    padding: 0 !important;
  }
</style>