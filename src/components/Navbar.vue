<template>
  <header class="py-2">
    <div class="container">
        <div class="flex items-center justify-between">
            <RouterLink to="/">
                <h1 class="text-3xl font-extrabold uppercase text-black-0 hover:text-gloden-0 transition-all duration-300">MY Blog</h1>
            </RouterLink>
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
  </header>
</template>