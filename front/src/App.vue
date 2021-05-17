<template>
  <div class="h-screen flex items-center justify-center bg-gray-100">
    <CrudDisplay :rowData="rowData" />
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
    rowData = await fetch("/api/consumption").then(res => res.json());
    rowData = rowData.map(el => el.rows).flat();
  }
};
</script>