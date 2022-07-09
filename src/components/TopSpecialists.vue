<template>
  <template v-for="(item,index) in top_specialists">
    <div :class="`bg-white dark:bg-stone-800 shadow-md rounded-lg my-2 ${index == specialist_index ? '' : 'hidden'}`">
      <div class="container grid grid-cols-12">
        <div class="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
          <h2 class="text-xl font-semibold text-center lg:text-left">
            {{item.specialist.name}}
          </h2>
          <img class="lg:hidden bg-no-repeat bg-cover bg-center" :src="`${url}assets/${item.specialist.avatar}`">
          <p class="flex-1 pt-2">
            {{item.specialist.details[0].profile}}
          </p>
          <a :href="`/doctors/profile/${item.specialist.slug}`" class="inline-flex items-center pt-2 pb-6 space-x-2 text-sm text-sky-600 dark:text-white">
            <span>View Details</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </a>
          <div class="flex items-center justify-between pt-2">
            <div class="flex space-x-2">
              <span class="self-center text-sm">
                {{item.specialist.details[0].discipline}}
              </span>
            </div>
            <span class="text-sm">
              {{item.specialist.details[0].provider_location}}
            </span>
          </div>
        </div>
        <img class="hidden lg:flex bg-no-repeat bg-cover bg-center col-span-full lg:col-span-4" :src="`${url}assets/${item.specialist.avatar}`">
      </div>
      <div class="relative mt-12 mb-4" v-if="top_specialists[1]">
        <button class="absolute bottom-0 left-0 bg-stone-200 dark:bg-stone-800 px-3 py-1 shadow-md font-black text-xl" @click="loadPrevSpecialist">
          &lt;
        </button>
        <button class="absolute bottom-0 left-12 bg-stone-200 dark:bg-stone-800 px-3 py-1 shadow-md font-black text-xl" @click="loadNextSpecialist">
          &gt;
        </button>
      </div>
    </div>
  </template>
</template>

<script>
export default{
  props:{
    top_specialists: Array | Object,
    url:String
  },
  data(){
    return{
      specialist_index:0,
    }
  },
  methods:{
    loadNextSpecialist(){
      const max = this.top_specialists.length - 1
      const nindex = this.specialist_index + 1
      if(nindex > max){
        this.specialist_index = 0
      }else{
        this.specialist_index += 1
      }
    },
    loadPrevSpecialist(){
      const min = 0
      const nindex = this.specialist_index - 1
      if(nindex < min){
        this.specialist_index = this.top_specialists.length - 1
      }else{
        this.specialist_index -= 1
      }
    }
  }
}
</script>
