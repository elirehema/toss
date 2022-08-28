<!-- Please remove this file from your project -->
<template>
  <div class="text-gray-600 font-body">
    <div class="px-16 py-6">
      <div class="flex justify-center md:justify-between border-b border-gray-200">
        <div>
          <header>
            <h2 class="text-gray-700 text-3xl font-semibold ">Dashboard</h2>
            <h3 class="text-sm font-semibold">For GoGas Admin</h3>
          </header>
        </div>
        <div class="flex justify-center md:justify-end">
          <nuxt-link to="/signin" class="pt-2">
            <a
              href="#"
              class="
                text-green-500
                border-green-500
                md:border-2
                hover:bg-green-500 hover:text-white
                btn
                transition
                ease-out
                duration-500
              "
              >Login In</a
            >
          </nuxt-link>
          <nuxt-link to="/signup" class="pt-2">
            <a
              href="#"
              class="
                text-green-500
                border-green-500
                md:border-2
                hover:bg-green-500 hover:text-white
                ml-2
                btn
                transition
                ease-out
                duration-500
              "
              >Sign Up</a
            >
          </nuxt-link>
        </div>
       
      </div>
      <div>
        <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">
          Latest Customers
        </h4>
        <div class="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <!--Card goes here-->
          <div class="card hover:shadow-lg">
            <img
              class="w-full h-32 sm:h-48 object-cover"
              src="http://static.everypixel.com/ep-pixabay/1616/2887/1524/15716/16162887152415716012-wolf.jpg"
              alt="Rando Image"
            />
            <div class="m-4">
              <span class="font-bold">{{ foodname }}</span>
              <span class="block text-gray-500 text-sm">
                Recipies by Marios</span
              >
            </div>
            <div class="badge">
              <svg
                class="w-5 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span> 25 mins </span>
            </div>
          </div>

          <div
            class="card hover:shadow-lg"
            v-for="(customer, i) in customers"
            :key="i"
          >
            <img
              class="w-full h-32 sm:h-48 object-cover"
              src="https://wallpaperaccess.com/full/2882814.jpg"
              alt="Rando Image"
            />
            <div class="m-4">
              <span class="font-bold">Yummy food wallpaper</span>
              <span class="block text-gray-500 text-sm">
                Recipies by {{ customer.fullname }}</span
              >
            </div>
            <div class="badge">
              <svg
                class="w-5 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span> 25 mins </span>
            </div>
          </div>

          <div class="card hover:shadow-lg">
            <img
              class="w-full h-32 sm:h-48 object-cover"
              src="https://wallpaperaccess.com/full/767033.jpg"
              alt="Rando Image"
            />
            <div class="m-4">
              <span class="font-bold">Top Delicious Foods</span>
              <span class="block text-gray-500 text-sm">
                Recipies by Mario</span
              >
            </div>
            <div class="badge">
              <svg
                class="w-5 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span> 25 mins </span>
            </div>
          </div>
        </div>
        <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">
          Popular Recipes
        </h4>
        <div class="mt-8">
          <!--Cards fo here -->
        </div>
        <div class="flex justify-center">
          <div
            class="
              bg-teal-300
              text-secondary-200
              p-4
              btn
              hover:shadow-inner
              transform
              hover:scale-125 hover:bg-opacity-50
              transition
              ease-out
              duration-300
            "
          >
            Load more
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import { mapGetters } from "vuex";
export default {
  name: "NuxtTutorial",
  data() {
    return {
      foodname: "5 Bean Chilli Stews",
      menu: false,
    };
  },
  methods: {
    openmenu() {
      this.menu = !this.menu;
    },
  },
  created() {
    this.$store.dispatch("_fetchcustomers");
  },
  computed: {
    ...mapGetters({
      customers: "customers",
    }),
  },
};
</script>
