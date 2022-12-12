<template>
  <div> <h1   class="text-gray-900 text-sm ml-10 font-mono font-medium" v-if="loading">loading...</h1>
    <div class="grid grid-cols-2 max-w-6xl m-auto">
    <div v-for="course in courses" :key="course.title" >
      <course-card :course="course"></course-card>
    </div>
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
