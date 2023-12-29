<template>
  <main>
    <article v-for="post in posts" :key="post.slug">
      {{ post.slug }}
    </article>
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
