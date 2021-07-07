<template>
  <div>
    <b-container class="my-5">
      <Header />
      <Table />
    </b-container>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Table from "@/components/Table.vue";
export default {
  name: "Home",
  components: { Header, Table },
};
</script>
