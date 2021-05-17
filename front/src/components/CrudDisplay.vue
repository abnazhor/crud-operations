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
        <tr v-for="item in data" :key="item.key">
          <td class="w-12 border">
            <input type="checkbox" name="" id="" class="h-full m-auto block" />
          </td>
          <td class="p-2 border">
            {{ item.value }}
          </td>
          <td class="p-2 border">
            {{ item.value2 }}
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
  },
};
</script>