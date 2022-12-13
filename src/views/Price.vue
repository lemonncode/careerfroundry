<template>
  <div>
    <div v-if="details != null">
      <div
        class="border-r border-b border-l border-darkblue lg:border-l-4 lg:border-t lg:borde-rdarkblue bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
      >
        <h1 class="text-gray-900 text-lg font-roboto font-bold">
          Next start dates:
        </h1>
        <div v-for="dates in details.start_dates" :key="dates.day">
          <h1 class="text-gray-900 text-lg font-roboto font-medium">
            {{ dates }}
          </h1>
        </div>
        <!--show EU price-->
        <div v-if="showEU"></div>

        <div v-for="price in details.prices" :key="price.currency">
          <div v-show="price.currency == 'eur'">
            {{ price.amount }} {{ price.currency }}
          </div>
        </div>
        <!--show else EEUU price-->
        <div v-if="showUSD">
          <div v-for="price in details.prices" :key="price.currency">
            <div v-show="price.currency == 'usd'">
              {{ price.amount }} {{ price.currency }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <location @getContinentCode="getContinent"></location>
  </div>
</template>
<script>
import axios from "axios";
import Location from "./Location.vue";
export default {
  name: "Details",
  props: ["course"],
  data() {
    return {
      slug: null,
      details: null,
      code: null,
      showEU: false,
      showUSD: false,
    };
  },
  components: {
    Location,
  },
  created() {
    this.slug = this.course.slug;
    this.getDetails();
  },

  beforeRouteUpdate(to, from, next) {
    next({ to: "/courses/:slug" });
  },

  methods: {
    async getDetails() {
      this.loading = true;
      try {
        await axios

          .get(
            `https://private-e05942-courses22.apiary-mock.com/courses/${this.slug}`
          )

          .then((result) => (this.details = result.data));
        this.details.start_dates.shift();
        return this.details;
      } catch (err) {
        console.log(err);
      }
      this.loading = false;
    },
    getContinent(code) {
      console.log(code);
      if (code == "EU") {
        this.showEU = true;
      } else {
        this.showUSD = true;
      }
    },
  },
};
</script>
