<template>
  <footer class="bg-doktarie-blue dark:bg-stone-800 text-white">
    <div class="container grid md:grid-cols-3 gap-x-2 mx-auto">
      <div class="mx-4">
        <h2 class="font-black mt-4 text-xl">
          About Us
        </h2>
        <div class="">
          {{name}} is your go to platform for all your home based care needs. We provide advanced solutions to ensure your health remains at its best.
        </div>
      </div>
      <div class="flex flex-col mx-4 space-y-2">
        <h2 class="font-black mt-4 text-xl">
          Useful Links
        </h2>
          <a href="/about-us" class="">
            Who we are
          </a>
          <a href="/blog" class="">
            Blog
          </a>
          <a href="https://facilities.doktarie.com" class="">
            Find a medical facility
          </a>
          <a href="/doctors" class="">
            Medical Specialists
          </a>
          <a href="/equipment/for-sale" class="">
            Medical Equipment
          </a>
          <a href="/faqs">
            FAQs
          </a>
          <a href="/privacy-policy">
            Privacy Policy
          </a>
      </div>
      <div class="bg-transparent mx-4">
        <h2 class="font-black mt-4 text-xl">
          Get in touch
        </h2>
        <div class="flex flex-row my-6 space-x-2">
          <a href="https://www.facebook.com/Doktarie-110396344975061" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="white" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/><path fill="#00409A" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/></svg>
          </a>
          <a href="https://twitter.com/doktarie" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="_osn9zIN2f6RhTsY8WhY4a" x1="10.341" x2="40.798" y1="8.312" y2="38.769" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="white"/><stop offset="1" stop-color="white"/></linearGradient><path fill="url(#_osn9zIN2f6RhTsY8WhY4a)" d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758  c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582  c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322 c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419 c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963  c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41  c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"/></svg>
          </a>
          <!--<a href="https://youtube.com/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="white" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"/><path fill="#00409A" d="M20 31L20 17 32 24z"/></svg>
          </a>-->
          <a href="https://instagram.com/doktarie" target="_blank">
            <svg fill="white" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"/></svg>
          </a>
        </div>
        <p class="my-2">
          Call us on 0722 503 853
        </p>
      </div>
    </div>
    <div class="mt-12 text-center py-4 ">
        &copy; {{ `${year} ${name}` }} - All Rights Reserved
      </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()

const name = 'Doktarie'

</script>
