<template>
  <main>
    <blog-post
      v-for="post in posts"
      :key="post.slug"
      :article="post"
      class="blog-post"
      preview
    />
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('articles').fetch()
    return {
      posts,
    }
  },
}
</script>

<style scoped>
.blog-post {
  margin-bottom: 20px;
}
</style>
