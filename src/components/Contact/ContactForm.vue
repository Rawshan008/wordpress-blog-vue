<script setup>
import { useContactForm } from '@/composables/useContactForm';

const { name, email, phone, message, responseMessage, responseClass, loading, errors, submitForm } = useContactForm();
</script>
<template>
  <div class="py-3">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label  class="block mb-2 font-poppins text-md" for="name">Your Name</label>
        <input type="text" placeholder="Enter Your Name" id="name" v-model="name" class="border border-[#ddd] py-2 px-3 w-full rounded-md font-poppins focus:outline-none">
        <span v-if="errors.name" class="error">{{ errors.name }}</span>
      </div>
      <div class="mb-3">
        <label  class="block mb-2 font-poppins text-md" for="email">Your Email</label>
        <input type="email" placeholder="Enter Your Phone" id="email" v-model="email" class="border border-[#ddd] py-2 px-3 w-full rounded-md font-poppins focus:outline-none">
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>
      <div class="mb-3">
        <label  class="block mb-2 font-poppins text-md" for="phone">Your Phone</label>
        <input type="number" placeholder="Enter Your Email" id="phone" v-model="phone" class="border border-[#ddd] py-2 px-3 w-full rounded-md font-poppins focus:outline-none">
        <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
      </div>
      <div class="mb-3">
        <label  class="block mb-2 font-poppins text-md" for="message">Message</label>
        <textarea name="message" id="message" v-model="message" class="border border-[#ddd] py-2 px-3 w-full rounded-md font-poppins focus:outline-none" placeholder="Message"></textarea>
        <span v-if="errors.message" class="error">{{ errors.message }}</span>
      </div>
      <div class="div">
        <button type="submit" class="bg-black-0 font-semibold text-xl py-3 px-8 text-white-0 rounded-md transition-all duration-300 hover:bg-gloden-0 hover:text-black-0 disabled:bg-[#ddd] disabled:cursor-none">
          <span v-if="!loading">Submit</span>
          <span v-else class="spinner">Loading...</span>  
        </button>
      </div>
    </form>
    <div v-if="responseMessage" :class="responseClass">{{ responseMessage }}</div>
  </div>
</template>

<style scoped>
.success {
  color: green;
}
.error {
  color: red;
}
</style>