<template>
  <v-app>
    <Header/>
    <Content />
  </v-app>
</template>

<script>
import Header from "@theme/components/Header"
export default {
  data() {
    return {};
  },
  components:{
    Header
  },
  created() {
    this.posts = this.$site.pages.filter(
      (item, index, arr) => item.title != undefined
    );
  },
};
</script>

<style>
</style>