<template>
  <div id="app">
        <router-link to="/LandPage">Go to LangPage</router-link>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>