<template>
  <div class="h-screen flex items-center justify-center bg-gray-100">
    <CrudDisplay
      :data="data"
      :headers="headers"
      @deletion="deleteRow"
      @submit="newRow"
      @modify="updateRow"
    />
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
      headers: [],
    };
  },
  created() {
    this.queryData();
  },
  methods: {
    queryData: async function () {
      const requestData = await fetch("/api/consumptions").then((res) =>
        res.json()
      );
      this.data = requestData.flat().filter((el) => !!el.date);
      this.headers = [
        "Fecha",
        "Hora",
        "Consumo (Wh)",
        "Precio (€/kWh)",
        "Coste por hora (€)",
      ];
    },
    async deleteRow(payload) {
      const result = await fetch(
        `http://localhost:3000/api/consumption/${payload.deletionId}`,
        {
          method: "DELETE",
        }
      ).then((res) => res.json());

      if (result.deleted) {
        this.data = this.data.filter((el) => el._id !== payload.deletionId);
      }
    },
    async newRow(payload) {
      const result = await fetch("http://localhost:3000/api/consumption", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then(res => res.json());

      if (result.inserted) {
        this.queryData();
      }
    },
    async updateRow(payload) {
      const result = await fetch("http://localhost:3000/api/consumption", {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then(res => res.json());

      if (result.updated) {
        this.queryData();
      }
    }
  },
};
</script>