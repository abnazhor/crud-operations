<template>
  <div class="h-4/6 bg-white shadow-sm rounded-md px-5 pt-5 w-8/12">
    <div id="toolbar" class="p-2 lg:flex-row flex mb-6 flex-col">
      <button
        class="border py-1 px-5 rounded-md mx-1 flex items-center justify-center font-light sm:mt-1"
        v-on:click="showAddDialog"
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
    <div
      id="display-table"
      class="overflow-x-hidden lg:h-5/6 scrollbar-thin px-3 h-4/6"
    >
      <table class="w-full h-full">
        <tr class="sticky top-0">
          <th class="w-12 bg-blue-100 border"></th>
          <th
            v-for="header in headers"
            :key="header[0]"
            class="p-2 bg-blue-100 border"
          >
            {{ header }}
          </th>
        </tr>
        <tr v-for="item in data" :key="item.uuid">
          <td class="w-12 border">
            <input
              type="radio"
              name="row"
              class="h-full m-auto block w-full"
              v-bind:value="item._id"
            />
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
    headers: Array,
  },
  methods: {
    deleteRows() {
      const checkboxes = document.querySelectorAll(
        "input[type='radio']:checked"
      );
      const deletionId = Array.from(checkboxes).map((elem) => elem.value)[0];

      this.$emit("deletion", { deletionId });
    },
    showAddDialog() {
      const createInput = ({
        placeholder,
        name,
        type,
        value = "",
        classes = "",
        id = ""
      }) => {
        const input = document.createElement("input");
        input.classList = "border p-3 my-2 rounded-sm " + classes;
        input.placeholder = placeholder;
        input.name = name;
        input.type = type;
        input.value = value;
        input.id = id;

        return input;
      };

      const that = this;

      const dialogContainer = document.createElement("div");
      const dialog = document.createElement("form");
      dialogContainer.style.backgroundColor = "#00000063";
      dialogContainer.classList =
        "dialog-container fixed h-screen w-full top-0 left-0 flex items-center justify-center";
      dialog.classList =
        "bg-white shadow-md w-3/12 rounded-md p-1 py-5 flex flex-col items-center justify-center";

      dialog.appendChild(
        createInput({ placeholder: "Fecha", classes: "w-5/6", type: "date" })
      );
      dialog.appendChild(
        createInput({ placeholder: "Hora", classes: "w-5/6" })
      );
      dialog.appendChild(
        createInput({ placeholder: "Consumo", classes: "w-5/6" })
      );
      dialog.appendChild(
        createInput({ placeholder: "Precio (€)", classes: "w-5/6" })
      );
      dialog.appendChild(
        createInput({ placeholder: "Coste por hora (€)", classes: "w-5/6" })
      );
      dialog.appendChild(
        createInput({
          value: "Agregar nueva entrada",
          classes: "w-4/6 bg-green-200 text-center cursor-pointer",
          id: "",
          type: "submit"
        })
      );

      dialog.addEventListener("submit", function(evt) {
        evt.preventDefault();
        console.log(evt.target);
        console.log(that.deleteRows);
      })

      dialogContainer.appendChild(dialog);
      document.body.appendChild(dialogContainer);
    },
    modifyRow: async () => {},
    addRow: async () => {},
  },
};
</script>