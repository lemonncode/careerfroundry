<template>
  <div>
    <div
    
      class="max-w-sm rounded overflow-hidden shadow-lg m-20 my-10"
      :class="color"
    >
      <img class="w-md" src="src/img/job-guarantee.svg" alt="job-guarantee" />
      {{ course.next_start_formatted }}
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ course.title }}</div>
        <p class="text-gray-700 text-base">
          <button>
            <router-link :to="`/courses/${course.slug}`">
              get details
            </router-link>
          </button>
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          <a :href="course.url"> mas info</a></span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["course"],
  data() {
    return {
      color: ["bg-lightgreen", "bg-purple"],
    };
  },
};
</script>
