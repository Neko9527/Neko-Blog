<template>
  <div class="container">
    <div class="post_item" v-for="item in posts" :key="item.key">
      <div class="post_title"><router-link :to="item.regularPath">{{ item.title }}</router-link></div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      posts: undefined,
    }
  },
  created() {
    this.posts = this.$site.pages.filter((item, index, arr) => item.title != undefined)
  }
}
</script>

<style scoped>
.post_item {
  height: 80px;
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid #f1f1f1;

}
.post_title {
  /* font-family: PT Serif,Serif; */
  font-size: 28px;
  border-bottom: 0;
}
</style>>

</style>