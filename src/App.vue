<template>
  <div>
    <router-link :to="`/courses`">
         Career Foundry
        </router-link>
    <RouterView />
    
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
