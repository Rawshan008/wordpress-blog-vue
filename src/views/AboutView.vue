<script setup>
import PageTitle from '@/components/Base/PageTitle.vue';
import EditorChoiceBlog from '@/components/EditorChoiceBlog .vue';
import { ref } from 'vue';

const title = ref('About Us');
</script>

<template>
  <PageTitle :title="title" />

  <div class="py-16">
    <div class="container">
      <div class="w-9/12 mx-auto text-center">
        <h3 class="">Welcome</h3>
        <h4>[Peotic], your go-to destination for [describe the main focus or topics of the blog. Here, we strive to [describe the mission or purpose of the blog].</h4>
        <hr>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae sequi reprehenderit quod rem magnam beatae praesentium! Ipsa, explicabo maiores? Saepe animi eveniet error delectus eum in magni, rerum mollitia quisquam officia perspiciatis! Consectetur itaque, dolor quibusdam dignissimos magnam, temporibus sapiente aperiam porro veritatis optio consequatur. Doloremque omnis, quis sit hic dolor natus molestias animi. Veniam necessitatibus voluptates esse harum facere dolores atque, laudantium quas, aperiam architecto sapiente recusandae error labore distinctio a voluptas reiciendis veritatis qui, nostrum molestiae accusantium! Quae pariatur assumenda sed libero, unde ratione, illum nihil reprehenderit nesciunt blanditiis suscipit. Fuga, explicabo nostrum excepturi voluptates animi porro?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eligendi eos voluptatum! Corporis illum sequi nesciunt odit explicabo! Quos dolorum mollitia alias, inventore nam assumenda in dignissimos est porro vel excepturi magni qui voluptatem consequatur provident, autem maiores, cupiditate sed ipsa aut? Voluptatem dolore magni quis inventore, quisquam maxime esse doloribus nobis eius quo ipsa eos tempore provident nostrum iure. Rerum, aliquam qui inventore maxime cupiditate odit veniam eveniet deserunt veritatis. Assumenda eligendi voluptate quae enim at cupiditate, commodi voluptatem est ipsam nemo quo laborum officiis, in aut esse doloremque aliquid pariatur placeat qui odit nobis deserunt dignissimos corrupti illum?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, consequuntur. Excepturi libero voluptatibus nihil dolorem ad eius dolor dolores enim, deserunt minus fuga. Accusantium omnis enim dolore maiores, quis accusamus iusto obcaecati perspiciatis cum provident amet ullam voluptatibus ut soluta earum ducimus dolor harum corrupti nam! Dolorem praesentium quae, beatae assumenda nulla mollitia enim, adipisci perspiciatis, distinctio at non eum recusandae maiores! Neque velit, earum, optio est at quia ratione praesentium repudiandae perferendis doloribus eaque autem qui laboriosam dolorum nam minima ipsum officia corporis dignissimos quos. Explicabo fugit aperiam veniam iure, earum perferendis iste molestiae doloremque consectetur, distinctio esse aspernatur.</p>
      </div>
    </div>
  </div>
  <EditorChoiceBlog/>
</template>

<style scoped>
  h3 {
    @apply font-roboto font-semibold uppercase text-2xl mb-3;
  }
  h4 {
    @apply font-semibold text-lg tracking-wider max-w-xl mx-auto;
  }
  hr {
    @apply my-8 text-[#ddd];
  }

  p {
    @apply mb-4 ;
  }
</style>