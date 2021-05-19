<template>
  <div class="h-screen flex items-center justify-center bg-gray-100">
    <CrudDisplay :data="data" :headers="headers" />
  </div>
</template>

<script>
import CrudDisplay from "./components/CrudDisplay.vue";

export default {
  name: "App",
  components: {
    CrudDisplay,
  },
  data() {
    return {
      data: [],
      headers: []
    };
  },
  created() {
    this.queryData();
  },
  methods: {
    queryData: async function () {
      const requestData = await fetch("/api/consumption").then((res) =>
        res.json()
      );
      this.headers = requestData[0].headers;
      this.data = requestData.map((el) => el.rows).flat().filter(el => !!el.date);
    },
  },
};
</script>