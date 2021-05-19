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
        v-on:click="showEditDialog"
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

      if (deletionId) {
        this.$emit("deletion", { deletionId });
      } else {
        alert("Tienes que seleccionar una fila para poder eliminarla.");
      }
    },
    createDialog(
      dateValue = null,
      hourValue = null,
      consumptionValue = null,
      priceValue = null,
      costPerHourValue = null,
      buttonValue = "Agregar una nueva entrada"
    ) {
      console.log(dateValue);
      const createInput = ({
        placeholder,
        name = "",
        type,
        value = "",
        classes = "",
        id = "",
        step = "",
      }) => {
        const input = document.createElement("input");
        input.classList = "border p-3 my-2 rounded-sm " + classes;
        input.placeholder = placeholder;
        input.name = name;
        input.type = type;
        input.value = value;
        input.id = id;
        input.step = step;

        return input;
      };

      const dialog = document.createElement("form");
      dialog.classList =
        "bg-white shadow-md w-3/12 rounded-md p-1 py-5 flex flex-col items-center justify-center";

      dialog.appendChild(
        createInput({
          placeholder: "Fecha",
          name: "date",
          classes: "w-5/6",
          type: "date",
          value: dateValue,
        })
      );
      dialog.appendChild(
        createInput({
          placeholder: "Hora",
          name: "hour",
          classes: "w-5/6",
          type: "number",
          step: ".01",
          value: parseFloat(hourValue),
        })
      );
      dialog.appendChild(
        createInput({
          placeholder: "Consumo",
          name: "consumption",
          classes: "w-5/6",
          type: "number",
          step: ".01",
          value: parseFloat(consumptionValue),
        })
      );
      dialog.appendChild(
        createInput({
          placeholder: "Precio (€)",
          name: "price",
          classes: "w-5/6",
          type: "number",
          step: ".00000000001",
          value: parseFloat(priceValue),
        })
      );
      dialog.appendChild(
        createInput({
          placeholder: "Coste por hora (€)",
          name: "costPerHour",
          classes: "w-5/6",
          type: "number",
          step: ".0000000000000001",
          value: parseFloat(costPerHourValue),
        })
      );
      dialog.appendChild(
        createInput({
          value: buttonValue,
          classes: "w-5/6 bg-green-200 text-center cursor-pointer",
          id: "",
          type: "submit",
        })
      );

      return dialog;
    },
    showAddDialog() {
      const dialogContainer = document.createElement("div");
      const dialog = this.createDialog({});
      const that = this;

      dialogContainer.style.backgroundColor = "#00000063";
      dialogContainer.classList =
        "dialog-container fixed h-screen w-full top-0 left-0 flex items-center justify-center";
      dialog.addEventListener("submit", function (evt) {
        evt.preventDefault();
        const form = evt.target;

        const formData = {
          date: form["date"].value,
          hour: form["hour"].value,
          consumption: form["consumption"].value,
          price: form["price"].value,
          costPerHour: form["costPerHour"].value,
        };

        that.$emit("submit", formData);
        document.body.removeChild(dialogContainer);
      });

      dialogContainer.appendChild(dialog);
      document.body.appendChild(dialogContainer);
    },
    async showEditDialog() {
      const dialogContainer = document.createElement("div");
      const that = this;

      const selectedCheckbox = document.querySelectorAll(
        "input[type='radio']:checked"
      );
      const updateId = Array.from(selectedCheckbox).map(
        (elem) => elem.value
      )[0];

      if (updateId) {
        const requestData = await fetch(
          `/api/consumption/${updateId}`
        ).then((res) => res.json());

        const dialog = this.createDialog(
          requestData.date.replace(/\s/g, ""),
          requestData.hour,
          requestData.consumption,
          requestData.price,
          requestData.costPerHour,
          "Modificar entrada"
        );

        dialogContainer.style.backgroundColor = "#00000063";
        dialogContainer.classList =
          "dialog-container fixed h-screen w-full top-0 left-0 flex items-center justify-center";

        dialog.addEventListener("submit", function (evt) {
          evt.preventDefault();
          const form = evt.target;

          console.log(form);

          const formData = {
            consumptionId: updateId,
            date: form["date"].value,
            hour: form["hour"].value,
            consumption: form["consumption"].value,
            price: form["price"].value,
            costPerHour: form["costPerHour"].value,
          };

          that.$emit("modify", formData);
          document.body.removeChild(dialogContainer);
        });

        dialogContainer.appendChild(dialog);
        document.body.appendChild(dialogContainer);
      } else {
        alert("Tienes que seleccionar una fila para poder modificarla.");
      }
    },
  },
};
</script>