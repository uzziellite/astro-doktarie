<template>
  <nav
    class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-doktarie-blue dark:bg-stone-800 shadow text-white">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between space-x-12 lg:w-auto lg:static lg:block lg:justify-start">
        <a
          class="text-xl lg:text-4xl font-black leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase flex"
          href="/">
          <svg class="w-12 h-12" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 256) scale(.1 -.1)" fill="currentColor"><path d="m911 2322c-113-48-190-87-202-101-25-30-25-96 0-141 10-20 36-44 62-58 38-20 54-23 114-19 86 6 213 44 226 68 10 20 3 45-15 52-7 3-50-6-95-19-148-43-231-26-231 45 0 27 7 31 171 100l171 71h237c170 0 251-4 289-14 29-8 137-55 241-105 225-109 277-123 458-119 107 3 128 6 137 21 8 12 8 22 0 35-10 15-34 18-170 23-182 7-176 5-401 114-258 125-226 118-538 121l-270 3-184-77z"/><path d="m1222 2198c-19-24-34-102-27-143 9-60 50-121 106-159 27-18 104-55 171-82 113-46 123-52 159-100 42-57 116-109 185-130 57-17 186-18 234-2 19 6 120 14 224 17 165 5 190 8 200 24 8 12 8 22 0 35-17 26-322 31-409 6-33-9-93-17-134-17-63 1-82 5-140 34-52 27-73 45-102 88-35 52-39 55-173 111-164 70-207 97-229 143-19 39-22 87-6 87 5 0 103-38 216-85s212-85 219-85c17 0 35 35 28 54-3 8-40 29-82 47-298 124-408 169-418 169-6 0-16-6-22-12z"/><path d="m736 1904c-19-19-20-36-4-52 18-18 45-14 62 10 30 42-21 79-58 42z"/><path d="m618 1788c-27-21-87-124-118-202-55-136-73-332-44-469 9-38 36-52 63-29 18 16 19 22 9 72-13 69-4 236 17 315 19 73 63 169 104 229 35 51 37 59 15 80-19 19-25 20-46 4z"/><path d="m1132 1668c-8-8-12-49-12-120v-108h-108c-71 0-112-4-120-12-17-17-17-279 0-296 8-8 49-12 120-12h108v-108c0-71 4-112 12-120 17-17 279-17 296 0 8 8 12 49 12 120v108h108c71 0 112 4 120 12 17 17 17 279 0 296-8 8-49 12-120 12h-108v108c0 71-4 112-12 120s-56 12-148 12-140-4-148-12zm228-176c0-71 4-112 12-120s49-12 120-12h108v-80-80h-108c-71 0-112-4-120-12s-12-49-12-120v-108h-80-80v108c0 71-4 112-12 120s-49 12-120 12h-108v80 80h108c71 0 112 4 120 12s12 49 12 120v108h80 80v-108z"/><path d="m2033 1465c-6-9-6-37-2-63 12-75 10-184-5-264-22-116-50-181-136-316-18-27-4-55 28-60 40-6 143 182 179 324 19 76 23 305 6 359-11 35-55 47-70 20z"/><path d="m505 977c-16-6-115-13-219-16-165-5-190-8-200-23-8-13-8-23 0-35 17-27 322-32 409-7 33 9 93 17 134 17 63-1 82-5 140-34 52-27 73-45 102-88 35-52 40-56 162-106 150-63 208-95 232-131 22-34 33-104 16-104-7 0-105 38-218 85-115 48-214 83-224 80-20-7-31-29-23-49 3-8 54-35 112-59 441-185 406-177 430-96 27 89-10 189-89 248-23 16-100 54-172 83-122 50-132 56-168 104-42 57-116 109-185 130-55 16-195 17-239 1z"/><path d="m1775 704c-19-20-16-43 8-58 34-22 73 27 47 59-16 19-35 19-55-1z"/><path d="m1555 535c-44-13-83-24-87-25-13 0-28-38-22-54 10-25 27-25 113 0 148 43 231 26 231-45 0-27-6-32-72-59-40-17-117-49-172-71l-98-41h-237c-166 0-251 4-287 14-28 7-136 55-241 105-228 109-280 123-460 119-107-3-128-6-137-20-8-13-8-23 0-35 10-16 33-19 170-24 182-7 184-7 414-120 239-117 215-112 520-116l265-4 185 76c117 48 193 85 208 101 47 53 16 167-58 204-53 27-134 25-235-5z"/></g></svg>

          <p class="ml-2 mt-3 sm:hidden xl:flex text-lg">
            {{name}}
          </p>
        </a>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          @click="setNavbarOpen">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
      <div class="lg:flex flex-grow items-center"
        :class="[navbarOpen ? 'block' : 'hidden']"
        id="example-navbar-warning">
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center text-lg" @click="navbarOpen = false">
            <a
              class="px-3 py-2 flex items-center uppercase font-normal"
              exact-active-class="border-b-2 border-amber-600"
              href="/">
              Home
            </a>
          </li>
          <li class="flex items-center text-lg" @click="navbarOpen = false">
            <a
              class="px-3 py-2 flex items-center uppercase font-normal"
              exact-active-class="border-b-2 border-amber-600"
              href="/about-us">
              About
            </a>
          </li>
          <li class="flex items-center text-lg" @click="navbarOpen = false">
            <a
              class="px-3 py-2 flex items-center uppercase font-normal"
              exact-active-class="border-b-2 border-amber-600"
              href="/home-based-care">
              Home based care
            </a>
          </li>
          <li class="flex items-center text-lg">
            <div class="px-3 py-2 flex items-center"
              exact-active-class="border-b-2 border-yellow-400">
              <div class="relative" @mouseover="equipmentActive = true" @mouseleave="equipmentActive = false">
                <button type="button" class="group rounded-md inline-flex items-center flex items-center uppercase font-normal" :aria-expanded="equipmentActive ? 'true' : 'false'">
                  <span>Equipment</span>
                  <svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
                <div :class="`w-56 sm:w-48 absolute z-10 -ml-6 mt-0 transform px-2 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 ${equipmentActive ? '' : 'hidden'} shadow-lg`" @mouseover="equipmentActive = true" @mouseleave="equipmentActive = false">
                  <div class="shadow-lg overflow-hidden">
                    <div class="relative grid gap-2 bg-white dark:bg-stone-800 p-1 lg:p-2">
                      <a :href="`/equipment/${item.id}`" v-for="item in equipments" :key="item.id" class="text-stone-800 dark:text-white font-semibold px-3 py-2 flex items-center capitalize bg-stone-200 dark:bg-stone-600"
                      @click="equipmentActive = ! equipmentActive, navbarOpen = false">
                        {{item.name}}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="flex items-center text-lg" @click="navbarOpen = false">
            <a
              class="px-3 py-2 flex items-center uppercase font-normal"
              exact-active-class="border-b-2 border-amber-600"
              href="/blog">
              Blog
            </a>
          </li>
          <li class="flex items-center text-lg" @click="navbarOpen = false">
            <a
              class="px-3 py-2 flex items-center uppercase font-normal"
              exact-active-class="border-b-2 border-amber-600"
              href="/contact-us">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import logo from '/images/logo.svg'

const name = 'Doktarie'

const equipments = [
  {
    "name":"For Sale",
    "id": "for-sale"
  },
  {
    "name":"For Hire",
    "id": "for-hire"
  }
]

</script>

<script>
export default{
  data(){
    return{
      equipmentActive: false,
      navbarOpen: false
    }
  },
  methods:{
    setNavbarOpen(){
      this.navbarOpen = ! this.navbarOpen     
    }
  }
}
</script>