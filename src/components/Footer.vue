<template>
  <footer class="py-2 border-t border-[#ddd]">
    <div class="container">
        <div class="flex items-center justify-between">
          <p href="" class="inline-block font-roboto uppercase text-base font-semibold text-black-0"> © Copyright 2024 | Rawshan</p>
            <nav>
              <ul class="m-0 p-0 list-none flex space-x-2">
                    <li>
                        <RouterLink to="/" class="inline-block p-5 font-roboto uppercase text-base font-semibold text-black-0 transition-all duration-300 hover:text-gloden-0">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about" class="inline-block p-5 font-roboto uppercase text-base font-semibold text-black-0 transition-all duration-300 hover:text-gloden-0">About</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/blog" class="inline-block p-5 font-roboto uppercase text-base font-semibold text-black-0 transition-all duration-300 hover:text-gloden-0">Blog</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contact" class="inline-block p-5 font-roboto uppercase text-base font-semibold text-black-0 transition-all duration-300 hover:text-gloden-0">Contact</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  </footer>
</template>