<!-- Please remove this file from your project -->
<template>
  <div class="text-gray-600 font-body">
    <div class="grid md:grid-cols-3">
      <!--content-wrapper-->
      <div class="md:col-span-1 md:flex md:justify-end">
        <nav class="text-right">
          <div class="flex justify-between items-center">
            <h1 class="font-bold uppercase p-4 border-b border-gray-100">
              <a href="/" class="hover:text-gray-700">Food Ninja</a>
            </h1>
            <div
              class="px-4 cursor-pointer"
              id="bugger"
              @click="openmenu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
          <ul :class="menu ? `text-sm mt-6 `:`text-sm mt-6 hidden md:block`" id="menu">
            <li class="text-gray-700 font-bold py-1">
              <a
                href="#"
                class="px-4 flex justify-end border-r-4 border-red-500"
              >
                <span>Home</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </a>
            </li>
            <li class="py-1">
              <a href="#" class="px-4 flex justify-end border-r-4 border-white">
                <span>About</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                  />
                </svg>
              </a>
            </li>
            <li class="py-1">
              <a href="#" class="px-4 flex justify-end border-r-4 border-white">
                <span>Contact</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <!--End nav-->
      <main class="px-16 py-6 bg-gray-100 md:col-span-2">
        <div class="flex justify-center md:justify-end">
          <a
            href="#"
            class="
              text-green-500
              border-green-500
              md:border-2
              hover:bg-green-500 hover:text-white
              btn  transition ease-out duration-500
            "
            >Login In</a
          >
          <a
            href="#"
            class="
              text-green-500
              border-green-500
              md:border-2
              hover:bg-green-500 hover:text-white
              ml-2
              btn transition ease-out duration-500
            "
            >Sign Up</a
          >
        </div>
        <header>
          <h2 class="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 class="text-2xl font-semibold">For Ninjas</h3>
        </header>
        <div>
          <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">
            Latest Recipes
          </h4>
          <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10">
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

            <div class="card hover:shadow-lg">
              <img
                class="w-full h-32 sm:h-48 object-cover"
                src="https://wallpaperaccess.com/full/2882814.jpg"
                alt="Rando Image"
              />
              <div class="m-4">
                <span class="font-bold">Yummy food wallpaper</span>
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
              class="bg-teal-300 text-secondary-200 p-4 btn hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300"
            >
              Load more
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script >
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
      this.menu = !this.menu
    },
  },
};
</script>
