<template>
  <div class="h-screen flex items-center justify-center bg-gray-100">
    <CrudDisplay :data="test" />
  </div>
</template>

<script>
import CrudDisplay from "./components/CrudDisplay.vue";

let rowData = [];

export default {
  name: "App",
  components: {
    CrudDisplay,
  },
  data() {
    return {
      rowData,
    };
  },
  mounted: async () => {
    rowData = await fetch("http://locahost:3000/api/consumption").then(res => res.json());
  }
};
</script>