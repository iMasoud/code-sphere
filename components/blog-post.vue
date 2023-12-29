<template>
  <a-card :title="article.title" :bordered="false" class="card">
    <img
      v-if="article.cover"
      slot="cover"
      :alt="article.title"
      :src="article.cover"
      class="card-cover"
    />
    <a-card-meta :title="article.author" class="card-meta">
      <a-avatar slot="avatar" :src="getAvatarURL(article.email)" />
    </a-card-meta>
    <nuxt-content :document="{ body }" />
    <template v-if="preview" slot="actions">
      <NuxtLink :to="getArticleLink(article.slug)">
        <a-icon key="ellipsis" type="ellipsis" />
      </NuxtLink>
    </template>
  </a-card>
</template>

<script>
import Vue from 'vue'
import { generateGravatarUrl } from '../helpers'

export default Vue.extend({
  props: {
    article: {
      required: true,
    },
    preview: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  computed: {
    body() {
      return this.preview && this.article.excerpt
        ? this.article.excerpt
        : this.article.body
    },
  },

  methods: {
    getAvatarURL(email) {
      return generateGravatarUrl(email, 32)
    },
    getArticleLink(slug) {
      return `/blog/${slug}`
    },
  },
})
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03),
    0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02);
  border-radius: 8px;

  .card-cover {
    border-radius: 8px 8px 0 0;
  }

  .card-meta {
    min-height: 48px;
  }

  ::v-deep {
    .ant-card-actions {
      border-radius: 0 0 8px 8px;

      > :first-child {
        border-radius: 0 0 0 8px;
      }

      > :last-child {
        border-radius: 0 0 8px 0;
      }
    }

    img {
      max-width: 100%;
    }
  }
}
</style>
