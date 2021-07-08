<template>
  <div>
    <h3 class="text-center mb-3">Cписок участников</h3>
    <b-table
      id="users-table"
      table-variant="light"
      striped
      bordered
      hover
      :items="users"
      :fields="fields"
      primary-key="id"
      sort-by="created_at"
      :per-page="perPage"
      :current-page="currentPage"
      stacked="lg"
      :busy="loading"
    >
      <template #table-busy>
        <div class="text-center my-3">
          <b-spinner label="Загрузка..."></b-spinner>
        </div>
      </template>
    </b-table>
    <b-pagination
      v-if="rows > perPage"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="users-table"
      align="center"
    ></b-pagination>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Table",
  data: () => ({
    fields: [
      { key: "name", label: "ФИО" },
      {
        key: "date",
        label: "Дата рождения",
        sortable: true,
        formatter: "formatDate",
      },
      { key: "email", label: "Email" },
      // по условиям задания телефон не показывается в списке
      { key: "phone", label: "Телефон" },
      {
        key: "distance",
        label: "Дистанция",
        sortable: true,
        formatter: (value) => `${value} км`,
      },
      {
        key: "payment",
        label: "Сумма взноса, руб",
        sortable: true,
        formatter: (value) => `${value} руб`,
      },
      {
        key: "created_at",
        label: "Дата регистрации",
        sortable: true,
        formatter: "formatDate",
      },
    ],
    loading: true,
    perPage: 4,
    currentPage: 1,
  }),
  computed: {
    ...mapGetters(["users"]),
    rows() {
      return this.users.length;
    },
  },
  mounted() {
    this.loading = false;
  },
  methods: {
    formatDate(date) {
      let options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      };
      return new Intl.DateTimeFormat("ru-RU", options).format(new Date(date));
    },
  },
};
</script>
