<template>
  <div>
    <h1
      class="text-gray-900 text-sm ml-10 font-mono font-medium"
      v-if="loading"
    >
      loading...
    </h1>
    <div class="ml-10 mt-16 bg-gray-50 h-14 w-fit shadow-xl"> <p  class="text-middleblue text-xl mx-6 font-roboto tracking-widest font-light px-6 py-4">Choose a program and transform your career!!! <span class="font-black">Our upcoming courses</span> </p></div>
   
    <div class="grid grid-cols-1 lg:grid-cols-2 max-w-5xl m-auto mt-14">
      <div v-for="course in courses" :key="course.title">
        <course-card :course="course"></course-card>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CourseCard from "./CourseCard.vue";
export default {
  name: "Courses",

  data() {
    return {
      courses: [],
      loading: false,
    };
  },
  components: { CourseCard },

  async created() {
    this.loading = true;
    try {
      await axios

        .get("https://private-e05942-courses22.apiary-mock.com/courses")

        .then((result) => (this.courses = result.data));

      console.log(this.courses);
    } catch (err) {
      console.log(err);
    }
    this.loading = false;
  },
  methods: {},
};
</script>
