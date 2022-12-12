<template>
  <div>
    <div
      class="w-80 h-56 rounded-lg shadow-xl m-20 my-10 relative"
      :class="color"
    >
      <div
        class="absolute h-12 w-64 right-5 -top-9 bg-amber-100 flex gap-3 items-center justify-center shadow-xl border-t-4 border-grayrose rounded-b-lg"
      >
        <h1 class="text-gray-900 text-sm font-roboto font-medium">
          {{ course.next_start_formatted }}
        </h1>
        <img
          class="h-6 w-6"
          src="src/img/job-guarantee.svg"
          alt="job-guarantee"
        />
      </div>

      <div class="px-6 py-4">
        <div class="my-4">
          <h1 class="font-roboto text-3xl text-blue-50 font-semi-bold">
            {{ course.title }}
          </h1>
        </div>
      </div>
      <div class="px-6 pt-4">
        <span
          class="flex gap-2 items-center justify-center bg-gray-100 rounded-xl py-1 text-sm font-semibold text-gray-700 mx-6"
        >
          <a
            :href="course.url"
            class="text-gray-900 text-sm font-mono font-medium"
          >
            view program
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            /></svg>
        </span>
      </div>
      <p class="text-gray-100 text-base">
      <button class="absolute h-16 w-48 right-4 -bottom-20 bg-rose">
        <router-link :to="`/courses/${course.slug}`"> Price and Dates </router-link>
      </button>
    </p>
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
