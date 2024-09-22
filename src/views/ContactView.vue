<script setup>
import { onMounted, ref } from 'vue';
import PageTitle from '@/components/Base/PageTitle.vue';
import ContactForm from '@/components/Contact/ContactForm.vue';
import { usePage } from '@/composables/usePage';

const { page, pageLoading, pageError, fetchPage } = usePage();

onMounted(() => {
  fetchPage('contact');
});
</script>
<template>
  <PageTitle :title="single.title" :image="single.featured_image" v-for="(single, index) in page" :key="index" />

  <div class="py-28" v-for="(single, index) in page" :key="index">
    <div class="container">
      <div class="w-full md:max-w-2xl mx-auto">
        <div class="content-wrapper mb-12" v-html="single.content"></div>
        <ContactForm/>
      </div>
    </div>
  </div>
</template>