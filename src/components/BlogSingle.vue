<script setup>

const props = defineProps({
  post: {
    type: Array,
    require: true
  },
  error: {
    type: Boolean,
  },
  loading: {
    type: Boolean
  }
})

</script>
<template>
  <div class="mx-auto max-w-screen-xl">
    <div class="w-full">
      <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>
      <div v-if="post">
        <h1 class="text-3xl font-sans font-bold mb-3">{{ post.title }}</h1>
        <div v-html="post.content"></div>
      </div>
      <div v-else>
        <p>Post not found.</p>
      </div>
    </div>
    </div>
  </div>
</template>