<template>
  <div>
    <v-app-bar app>
      <v-toolbar-title class="ml-0 pl-4 text--white">{{
        $title
      }}</v-toolbar-title>
      <SearchBox/>
    </v-app-bar>
  </div>
</template>

<script>
import SearchBox from "./SearchBox"
export default {
  data() {
    return {

    };
  },
  components:{SearchBox}
};
</script>

<style>
</style>