<script setup>
import { ref } from 'vue';
import PageTitle from '@/components/Base/PageTitle.vue';

const title = ref('Contact Us');
</script>
<template>
  <PageTitle :title="title"/>
</template>