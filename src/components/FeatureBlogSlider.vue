<script setup>
import { register } from 'swiper/element/bundle';
import Button from './Base/Button.vue';
register();
</script>

<template>
  <swiper-container
    :slides-per-view="1"
    :space-between="spaceBetween"
    :centered-slides="true"
    :navigation="true"
    :loop="true"
  >
  <swiper-slide>
    <div class="py-60 bg-cover bg-center bg-no-repeat bg-black-0 relative z-10 before:w-full before:bg-black-0 before:h-full before:top-0 before:left-0 before:absolute before:opacity-40 before:-z-10" style="background-image: url('https://images.pexels.com/photos/413885/pexels-photo-413885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');">
      <div class="container">
        <div class="w-full xl:w-7/12 lg:w-9/12 mx-auto text-center">
          <p class="text-base text-black-0 text-center mb-3 py-1 px-3 bg-gloden-0 inline-block rounded-md">Lorem ipsum</p>
          <h1 class="text-5xl text-center text-white-0 font-roboto font-bold transition-all duration-300 mb-4 hover:text-gloden-0"><a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sint.</a></h1>
          <p class="text-base text-white-0 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis quo voluptatibus quisquam mollitia nostrum itaque, tempore facere excepturi quas ipsa ea, eum ipsam enim dolorum! Accusantium vel odit rem.</p>
          <Button/>
        </div>
      </div>
    </div>
  </swiper-slide>
  <swiper-slide>
    <div class="py-60 bg-cover bg-center bg-no-repeat bg-black-0 relative z-10 before:w-full before:bg-black-0 before:h-full before:top-0 before:left-0 before:absolute before:opacity-40 before:-z-10" style="background-image: url('https://images.pexels.com/photos/413885/pexels-photo-413885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');">
      <div class="container">
        <div class="w-full xl:w-7/12 lg:w-9/12 mx-auto text-center">
          <p class="text-base text-black-0 text-center mb-3 py-1 px-3 bg-gloden-0 inline-block rounded-md">Lorem ipsum</p>
          <h1 class="text-5xl text-center text-white-0 font-roboto font-bold transition-all duration-300 mb-4 hover:text-gloden-0"><a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sint.</a></h1>
          <p class="text-base text-white-0 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis quo voluptatibus quisquam mollitia nostrum itaque, tempore facere excepturi quas ipsa ea, eum ipsam enim dolorum! Accusantium vel odit rem.</p>
          <Button/>
        </div>
      </div>
    </div>
  </swiper-slide>
  <swiper-slide>
    <div class="py-60 bg-cover bg-center bg-no-repeat bg-black-0 relative z-10 before:w-full before:bg-black-0 before:h-full before:top-0 before:left-0 before:absolute before:opacity-40 before:-z-10" style="background-image: url('https://images.pexels.com/photos/413885/pexels-photo-413885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');">
      <div class="container">
        <div class="w-full xl:w-7/12 lg:w-9/12 mx-auto text-center">
          <p class="text-base text-black-0 text-center mb-3 py-1 px-3 bg-gloden-0 inline-block rounded-md">Lorem ipsum</p>
          <h1 class="text-5xl text-center text-white-0 font-roboto font-bold transition-all duration-300 mb-4 hover:text-gloden-0"><a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sint.</a></h1>
          <p class="text-base text-white-0 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis quo voluptatibus quisquam mollitia nostrum itaque, tempore facere excepturi quas ipsa ea, eum ipsam enim dolorum! Accusantium vel odit rem.</p>
          <Button/>
        </div>
      </div>
    </div>
  </swiper-slide>
</swiper-container>
</template>