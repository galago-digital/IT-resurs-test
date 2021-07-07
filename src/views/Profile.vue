<template>
      <b-container class="my-5">
        <Header />
        <Auth />
    </b-container>
</template>

<script>
import Header from "@/components/Header.vue";
import Auth from "@/components/Auth.vue";
export default {
  name: "Profile",
  components: { Header, Auth },
};
</script>
