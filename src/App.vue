<template>
  <div>
    <Header></Header>

    <div>
      <RouterView />
    </div>
  </div>
</template>

<script>
import Header from "./views/Header.vue";
export default {
  name: "App",
  components: { Header },
  data() {
    return {};
  },
};
</script>
