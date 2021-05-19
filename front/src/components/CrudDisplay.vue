<template>
  <div class="h-4/6 bg-white shadow-sm rounded-md px-5 pt-5 w-8/12">
    <div id="toolbar" class="p-2 lg:flex-row flex mb-6 flex-col">
      <button
        class="border py-1 px-5 rounded-md mx-1 flex items-center justify-center font-light sm:mt-1"
      >
        <i class="ri-add-line text-2xl mr-1"></i>
        Agregar
      </button>
      <button
        class="border py-1 px-5 rounded-md mx-1 flex items-center justify-center font-light sm:mt-1"
        v-on:click="deleteRows"
      >
        <i class="ri-delete-bin-line ri-add-line text-xl mr-1"></i>
        Eliminar
      </button>
      <button
        class="border py-1 px-5 rounded-md mx-1 flex items-center justify-center font-light sm:mt-1"
      >
        <i class="ri-arrow-left-right-line ri-add-line text-xl mr-1"></i>
        Modificar
      </button>
    </div>
    <div id="display-table" class="overflow-x-hidden lg:h-5/6 scrollbar-thin px-3 h-4/6">
      <table class="w-full h-full">
        <tr>
          <td class="border"></td>
          <td v-for="header in headers" :key="header[0]" class="border p-2">
            {{header}}
          </td>
        </tr>
        <tr v-for="item in data" :key="item.uuid">
          <td class="w-12 border">
            <input type="checkbox" id="" class="h-full m-auto block" v-bind:value="item.uuid"/>
          </td>
          <td class="p-2 border">
            {{ item.date }}
          </td>
          <td class="p-2 border">
            {{ item.hour }}
          </td>
          <td class="p-2 border">
            {{ item.consumption }}
          </td>
          <td class="p-2 border">
            {{ item.price }}
          </td>
          <td class="p-2 border">
            {{ item.costPerHour }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "CrudDisplay",
  props: {
    data: Array,
    headers: Array
  },
  methods: {
    deleteRows: async () => {
      const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
      const deletionUUIDs = Array.from(checkboxes).map(elem => elem.value);

      console.log(deletionUUIDs);
    },
    modifyRow: async () => {

    },
    addRow: async () => {
      
    }
  }
};
</script>