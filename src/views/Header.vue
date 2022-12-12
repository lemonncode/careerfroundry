<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-darkblue p-6 ">
      <div class="flex items-center flex-shrink-0 text-white mr-6 lg:mr-20">
        <router-link to="/">
          <img
            class="w-10 h-10 lg:hidden"
            alt="CareerFoundry"
            src="src/img/cf_logo_min_small.svg"
          />
          <img
            class="h-6 hidden lg:inline-block"
            alt="CareerFoundry"
            src="src/img/cf_logo_min_full.svg"
          />
        </router-link>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-100 hover:text-white hover:border-white"
          @click="showMenu()"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#eff6ff"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        class="w-full block lg:flex  flex-grow lg:justify-end  lg:w-auto text-center"
      >
        <div v-show="menu">
          <div class="text-md lg:flex-grow">
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-blue-100 hover:text-white mr-4 lg:mr-20"
            >
              <router-link to="/courses"> Courses</router-link>
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-blue-100 hover:text-white mr-4 lg:mr-20"
            >
              <router-link to="/learn"> Learn with us</router-link>
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-blue-100 hover:text-white mr-4 lg:mr-60 xl:mr-96"
            >
              <router-link to="/blog"> Blog</router-link>
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-blue-100 hover:text-white mr-4 lg:mr-2 font-bold"
            >
              <router-link to="/login"> Login</router-link>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <div
      class="flex items-center flex-wrap bg-darkblue p-6 h-32 lg:h-80"
    >
      <h1 class="font-roboto lg:text-5xl text-blue-50 ml-10 font-light">Build a career you <span class="font-bold">love</span></h1>
      
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: true,
    };
  },

  methods: {
    showMenu() {
      this.menu = !this.menu;
    },
  },
};
</script>

<style></style>
