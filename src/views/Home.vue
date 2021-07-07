<template>
  <b-container class="my-5">
    <Header />
    <Registration />
  </b-container>
</template>

<script>
import Header from "@/components/Header.vue";
import Registration from "@/components/Registration.vue";
export default {
  name: "Home",
  components: { Registration, Header },
};
</script>
