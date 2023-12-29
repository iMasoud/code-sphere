<template>
  <main>
    <article v-for="post in posts" :key="post.slug">
      <img v-if="post.cover" :src="post.cover" />
      <nuxt-content
        :document="{ body: post.excerpt ? post.excerpt : post.body }"
      />
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
