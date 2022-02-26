<template>
  <div>
    <el-row>
      <el-col :span="12"
        ><div class="grid-content bg-purple">
          <router-link to="/SendMoneyCascader">現金委託</router-link>
        </div>
      </el-col>
      <el-col :span="12"
        ><div class="grid-content bg-purple-light">
          <router-link to="/LandPage">回首頁</router-link>
        </div></el-col
      >
    </el-row>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "SendMoneyPage",
};
</script>
<style lang="postcss" scoped>
a {
  display: block;
  color: white;
  font-weight: 800;
  font-size: 5rem;
  line-height: 8rem;
  text-align: center;
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
  color: #ff0080;
  font-weight: 800;
  font-size: 5rem;
  line-height: 8rem;
  text-align: center;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 20vh;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
