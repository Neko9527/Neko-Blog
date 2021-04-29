<template>
  <v-app>

  </v-app>
</template>

<script>

export default {
  data(){
    return {

    }
  },
  created() {
    this.posts = this.$site.pages.filter((item, index, arr) => item.title != undefined)
  }
}
</script>

<style>
</style>