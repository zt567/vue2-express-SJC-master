<template>
  <el-form ref="form" :model="form" label-width="80px">
    訪客
    <el-switch v-model="form.delivery"></el-switch>住戶
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    showSelect() {
      alert("aa");
    },
  },
};
</script>