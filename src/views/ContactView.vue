<script setup>
import { ref } from 'vue';
import PageTitle from '@/components/Base/PageTitle.vue';
import ContactForm from '@/components/Contact/ContactForm.vue';

const title = ref('Contact Us');
</script>
<template>
  <PageTitle :title="title"/>

  <div class="py-28">
    <div class="container">
      <div class="w-full md:max-w-2xl mx-auto">
        <div class="contact-content">
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem dolorem que laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et. Nemo ut perspiciatis unde omnis istem natus error sit voluptatem loremque, totam rem aperiam, eaque ipsa illo et quasi vitae dicta sunt explicabo.</p>
          <h3>We’d love to hear from you</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nostrum dicta eius quae. Dolore, molestias est assumenda harum enim nisi sint quibusdam, commodi fuga quam facilis, explicabo vitae impedit optio animi consectetur? Quasi magni perspiciatis nulla totam adipisci temporibus excepturi. Voluptatem, error? Nihil reprehenderit </p>
        </div>
        <ContactForm/>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h3 {
    @apply font-semibold text-2xl mb-4 font-roboto;
  }
  p {
    @apply mb-4 font-medium;
  }
</style>