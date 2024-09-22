<template>
  <div class="py-3">
    <form>
      <div class="mb-3">
        <label  class="block mb-2 font-poppins text-md" for="name">Your Name</label>
        <input type="text" placeholder="Enter Your Name" id="name" class="border border-[#ddd] py-2 px-3 w-full rounded-md font-poppins focus:outline-none">
      </div>
      <div class="mb-3">
        <label  class="block mb-2 font-poppins text-md" for="email">Your Email</label>
        <input type="email" placeholder="Enter Your Phone" id="email" class="border border-[#ddd] py-2 px-3 w-full rounded-md font-poppins focus:outline-none">
      </div>
      <div class="mb-3">
        <label  class="block mb-2 font-poppins text-md" for="email">Your Phone</label>
        <input type="number" placeholder="Enter Your Email" id="phone" class="border border-[#ddd] py-2 px-3 w-full rounded-md font-poppins focus:outline-none">
      </div>
      <div class="mb-3">
        <label  class="block mb-2 font-poppins text-md" for="email">Message</label>
        <textarea name="message" id="message" class="border border-[#ddd] py-2 px-3 w-full rounded-md font-poppins focus:outline-none" placeholder="Message"></textarea>
      </div>
      <div class="div">
        <button type="submit" class="bg-black-0 font-semibold text-xl py-3 px-8 text-white-0 rounded-md transition-all duration-300 hover:bg-gloden-0 hover:text-black-0">Submit</button>
      </div>
    </form>
  </div>
</template>