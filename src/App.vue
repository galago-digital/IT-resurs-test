<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view :key="$route.fullPath"></router-view>
    </transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { users } from "@/users.json";

export default {
  name: "App",
  methods: {
    ...mapActions(["setUsers"]),
  },
  mounted() {
    this.setUsers(users);
    this.loading = false;
  },
};
</script>
