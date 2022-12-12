<template>
  <div>
     <!-- Header -->
     <div class="mx-auto h-screen">
      <Header></Header>

      
        <div class="max-w-6xl m-auto">
          <RouterView />
        </div>
      </div>
    <!-- <router-link :to="`/courses`">
         Career Foundry
        </router-link>
    <RouterView /> -->
    
  </div>
</template>

<script>
import Header from "./views/Header.vue";
export default {
  name: "App",
  components: { Header },
};
</script>
