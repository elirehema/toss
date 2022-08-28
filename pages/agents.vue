<template>
  <div class="container p-5" v-if="agents">
    <div class="p-5 border-b">
        <p class="font-bold text-primary text-3xl">Agents</p>
        <p class="text-sm font-light">List of available agents</p>
    </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="
          text-xs text-gray-700
          uppercase 
          bg-gray-50
          dark:bg-gray-700 dark:text-gray-900
        "
      >
        <tr>
          <th
            scope="col"
            class="py-3 px-6"
            v-for="(field, i) in fields"
            :key="i"
          >
            {{ field }}
          </th>
          <th scope="col" class="py-3 px-6">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="
            odd:bg-gray-50
            bg-white
            border-b
            hover:bg-gray-100
            dark:bg-gray-800 dark:border-gray-700
          "
          v-for="(c, i) in agents"
          :key="i"
        >
          <th
            scop="row"
            class="
              py-4
              px-6
              font-medium
              text-gray-900
              whitespace-nowrap
              dark:text-white
            "
          >
            {{ c.firstname }} {{ c.lastname }}
          </th>
          <td class="py-4 px-6">{{ c.email }}</td>
          <td class="py-4 px-6">{{ c.phone }}</td>
          <td class="py-4 px-6">{{ c.isActive }}</td>
          <td class="py-4 px-6 text-right">
            <a
              href="#"
              class="
                font-medium
                text-blue-600
                dark:text-blue-500
                hover:underline
              "
              >Edit</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script >
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      fields: ["Name", "Email", "Phone", "Active ?"],
      menu: false,
    };
  },
  methods: {
    openmenu() {
      this.menu = !this.menu;
    },
  },
  created() {
    this.$store.dispatch("_fetchagents");
  },
  computed: {
    ...mapGetters({
      agents: "agents",
    }),
  },
};
</script>